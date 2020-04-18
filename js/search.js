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
  "date": {{ post.date | date: '%B %-d, %Y' | jsonify }},
  "category": {{ post.category | jsonify }},
  "excerpt": {{ post.content | strip_html | truncatewords: 27 | jsonify }}
}{% unless forloop.last %},{% endunless %}{% endfor %}]

// builds search
$(document).ready(function() {
  $('.search-input').on('keyup', function () {
    var resultdiv = $('#results');
    // Get query
    var query = $(this).val();
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
      var searchitem = '<div class="result"><a href="'+store[ref].link+'" class="result-title">'+store[ref].title+'</a><div class="result-meta">'+store[ref].category+' <span>&bull;</span> '+store[ref].date+'</div><p>'+store[ref].excerpt+'</p></div>';
      resultdiv.append(searchitem);
    }
    $('#results').fadeIn(100);
  }).focus(function () {
    if($(this).val() == "") {
      $('body').addClass('searching');
      var scrollAmount = $('.search').offset().top - 40;
      console.log(scrollAmount);
      $('html, body').animate({scrollTop: scrollAmount}, 250);
    }
  }).blur(function () {
    if($(this).val() == "") {
      $('body').removeClass('searching');
      $('#results').fadeOut(100).empty();
    }
  });
});