---

---

// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('category')
  this.field('tags')
  this.ref('id')
});

{% assign count = 0 %}
{% for post in site.posts %}
  index.add({
    title: {{post.title | jsonify}},
    category: {{post.category | jsonify}},
    content: {{post.content | strip_html | jsonify}},
    tags: {{post.tags | jsonify}},
    id: {{count}}
  });
  {% assign count = count | plus: 1 %}
{% endfor %}

// builds reference data
var store = [{% for post in site.posts %}{
  "title": {{post.title | jsonify}},
  "link": {{ post.url | jsonify }},
  "issue": {{ post.issue | jsonify }}+" "+{{ post.date | date: "%Y" }},
  "category": {{ post.category | jsonify }},
  "thumbnail": {{ site.baseurl | jsonify }}+"/thumbnails/"+{{ post.thumbnail | jsonify }},
  "excerpt": {% if post.description %}{{ post.description | truncatewords: 27 | jsonify }}{% else %}{{ post.content | strip_html | truncatewords: 27 | jsonify }}{% endif %}
}{% unless forloop.last %},{% endunless %}{% endfor %}]

// builds search
$(document).ready(function() {
  var timeout;
  var delay = 250;

  $('.search-input').on('keyup', function (event) {
    if (timeout) {
      clearTimeout(timeout); }
    timeout = setTimeout(function() {
      searchKeyup(event); }, delay);
  }).focus(function () {
    if (timeout) {
      clearTimeout(timeout); }
    timeout = setTimeout(function() {
      searchFocus(event); }, delay);
  }).blur(function () {
    if (timeout) {
      clearTimeout(timeout); }
    timeout = setTimeout(function() {
      searchBlur(event); }, delay);
  });

  function searchKeyup(event) {
    var resultdiv = $('#results');
    // Get query
    var query = $('.search-input').val();
    // Search for it
    var result = index.search(query);
    // Figure out plural
    if (result.length == 1) {
      var plural = '';
    } else {
      var plural = 's';
    }
    // Show results
    resultdiv.empty();
    // Add status
    resultdiv.prepend('<p class="status">found '+result.length+' result'+plural+'</p>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<a class="result-wrapper" href="'+store[ref].link+'"><li class="result"><span class="left"><div class="result-thumbnail" style="background-image: url(\''+store[ref].thumbnail+'\')"></div></span><span class="right"><div class="result-title">'+store[ref].title+'</div><div class="result-meta">'+store[ref].category+' &middot; '+store[ref].issue+'</div><p>'+store[ref].excerpt+'</p></span></li></a>';
      resultdiv.append(searchitem);
    }
    $('#results').fadeIn(100);
  }

  function searchFocus(event) {
    $('body').addClass('searching');
    var scrollAmount = $('.search').offset().top - 40;
    $('html, body').animate({scrollTop: scrollAmount}, 250);
  }

  function searchBlur(event) {
    if($('.search-input').val() == "") {
      $('body').removeClass('searching');
      $('#results').fadeOut(100).empty();
    }
  }
});
