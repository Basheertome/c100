---

---

// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('description', {boost: 10})
  this.field('tags')
  this.field('issue')
  this.ref('id')
});

{% assign year = post.date | date: "%Y" %}
{% assign count = 0 %}
{% for post in site.posts %}
  {% assign post-issue = site.issues | where:"slug", post.category | first %}
  index.add({
    title: {{ post.title | jsonify }},
    content: {{post.content | strip_html | jsonify}},
    description: {{post.description | strip_html | jsonify}},
    tags: {{post.tags | jsonify}},
    issue: {{post-issue.slug | replace: "-", " " | jsonify}},
    id: {{count}}
  });
  {% assign count = count | plus: 1 %}
{% endfor %}
{% for recipe in site.recipes %}
  index.add({
    title: {{recipe.title | jsonify}},
    content: {{recipe.content | split: "<hr />" | slice: 0,2 | join | strip_html | jsonify}},
    description: {{recipe.description | strip_html | jsonify}},
    tags: {{recipe.tags | jsonify}},
    id: {{count}}
  });
  {% assign count = count | plus: 1 %}
{% endfor %}

// builds reference data
var store = [{% for post in site.posts %}{% assign post-issue = site.issues | where:"slug", post.category | first %}{
  "title": {{ post.title | jsonify }},
  "link": {{ post.url | jsonify }},
  "issue": {{post-issue.volume | jsonify}},
  "date" : {{ post-issue.slug | replace: "-", " " | jsonify }},
  "tags": {{ post.tags | jsonify }},
  "thumbnail": {% if post.tags contains "found" %}{{ site.baseurl | append: "/thumbnails/default-found.png" | jsonify }}{% else %}{{ site.baseurl | append: post.image | jsonify }}{% endif %},
  "excerpt": {% if post.description %}{{ post.description | truncatewords: 27 | jsonify }}{% else %}{{ post.content | strip_html | truncatewords: 27 | jsonify }}{% endif %}
}{% unless forloop.last %},{% endunless %}{% endfor %}{% if site.recipes.size > 0 %},{% for recipe in site.recipes %}{
  "title": {{recipe.title | jsonify}},
  "link": {{ recipe.url | jsonify }},
  "servings": {{recipe.servings | jsonify}},
  "time": {{recipe.time | jsonify}},
  "tags": {{ recipe.tags | jsonify }},
  "thumbnail": {{ site.baseurl | append: recipe.image | jsonify }},
  "excerpt": {{ recipe.description | truncatewords: 27 | jsonify }}
}{% unless forloop.last %},{% endunless %}{% endfor %}{% endif %}]

// builds search
$(document).ready(function() {
  var timeout;
  var delay = 250;
  var queryCache;

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
    // Get query
    var query = $('.search-input').val();
    if (query != "" && query != queryCache) {
      // Get results div
      var resultdiv = $('#results');
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
        var searchitem = '<a class="result-wrapper" href="'+store[ref].link+'"><li class="result"><span class="left"><div class="result-thumbnail" style="background-image: url(\''+store[ref].thumbnail+'\')"></div></span><span class="right"><div class="result-title">'+store[ref].title+'</div><div class="result-meta">'+store[ref].tags.join(' &middot; ')+' &middot; '+((store[ref].issue) ? 'issue '+store[ref].issue+' &middot; '+store[ref].date : store[ref].servings+' &middot; '+store[ref].time)+'</div><p>'+store[ref].excerpt+'</p></span></li></a>';
        resultdiv.append(searchitem);
      }
      $('#results').fadeIn(100);
      queryCache = query;
    }
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
