// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('category')
  this.field('tags')
  this.ref('id')
});



  index.add({
    title: "Introduction",
    category: "features",
    content: "The Strange Case of Dr. Jekyll and Mr. Hyde tells the story of a lawyer investigating the connection of two persons, Dr. Henry Jekyll and Mr. Edward Hyde. Chief among the novel’s supporting cast is a man by the name of Mr. Poole, Dr. Jekyll’s loyal butler.\n\n\n\nPoole is the butler for Jekyll, the static site generator. It’s designed and developed by @mdo to provide a clear and concise foundational setup for any Jekyll site. It does so by furnishing a full vanilla Jekyll install with example layouts, pages, posts, and styles.\n\nThere are currently three themes built on Poole:\n\n\n  Hyde\n  Lanyon\n  Enfield\n\n\nLearn more and contribute on GitHub.\n\nWhat’s included\n\nPoole is a streamlined Jekyll site designed and built as a foundation for building more meaningful themes. Poole, and every theme built on it like this one, includes the following:\n\n\n  Complete Jekyll setup included (layouts, config, 404, RSS feed, posts, and example page)\n  Mobile friendly design and development\n  Easily scalable text and component sizing with rem units in the CSS\n  Support for a wide gamut of HTML elements\n  Related posts (time-based, because Jekyll) below each post\n  Syntax highlighting, courtesy Jekyll’s built-in support for Rouge\n\n\nAdditional features are available in individual themes.\n\nBrowser support\n\nPoole and its themes are by preference a forward-thinking project. In addition to the latest versions of Chrome, Safari (mobile and desktop), and Firefox, it is only compatible with Internet Explorer 9 and above.\n\nDownload\n\nThese themes are developed on and hosted with GitHub. Head to the GitHub repository for downloads, bug reports, and features requests.\n\nThanks!\n",
    tags: [],
    id: 0
  });
  

  index.add({
    title: "Example content",
    category: "lab",
    content: "\n  Howdy! This is an example blog post that shows several types of HTML content supported in this theme.\n\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.\n\n\n  Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.\n\n\nEtiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.\n\nInline HTML elements\n\nHTML defines a long list of available inline tags, a complete list of which can be found on the Mozilla Developer Network.\n\n\n  To bold text, use &lt;strong&gt;.\n  To italicize text, use &lt;em&gt;.\n  Abbreviations, like HTML should use &lt;abbr&gt;, with an optional title attribute for the full phrase.\n  Citations, like — Mark otto, should use &lt;cite&gt;.\n  Deleted text should use &lt;del&gt; and inserted text should use &lt;ins&gt;.\n  Superscript text uses &lt;sup&gt; and subscript text uses &lt;sub&gt;.\n\n\nMost of these elements are styled by browsers with few modifications on our part.\n\nFootnotes\n\nFootnotes are supported as part of the Markdown syntax. Here’s one in action. Clicking this number1 will lead you to a footnote. The syntax looks like:\n\nClicking this number[^fn-sample_footnote]\n\nEach footnote needs the ^fn- prefix and a unique ID to be referenced for the footnoted content. The syntax for that list looks something like this:\n\n[^fn-sample_footnote]: Handy! Now click the return link to go back.\n\nYou can place the footnoted content wherever you like. Markdown parsers should properly place it at the bottom of the post.\n\nHeading\n\nVivamus sagittis lacus vel augue rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n\nCode\n\nInline code is available with the &lt;code&gt; element. Snippets of multiple lines of code are supported through Pygments. Longer lines will automatically scroll horizontally when needed.\n\n// Example can be run directly in your JavaScript console\n\n\n// Create a function that takes two arguments and returns the sum of those arguments\n\nvar adder = new Function(\"a\", \"b\", \"return a + b\");\n\n// Call the function\n\nadder(2, 6);\n// &gt; 8\n\nYou may also optionally show code snippets with line numbers. Add linenos to the Pygments tags.\n\n1\n2\n3\n4\n5\n6\n7\n8\n// Example can be run directly in your JavaScript console\n\n\n// Create a function that takes two arguments and returns the sum of those arguments\n\nvar adder = new Function(\"a\", \"b\", \"return a + b\");\n\n// Call the function\n\nadder(2, 6);\n// &gt; 8\n\nAenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.\n\nGists via GitHub Pages\n\nVestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.\n\n400: Invalid request\n\n\n\nAenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper.\n\nLists\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\n\n\n  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n  Donec id elit non mi porta gravida at eget metus.\n  Nulla vitae elit libero, a pharetra augue.\n\n\nDonec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.\n\n\n  Vestibulum id ligula porta felis euismod semper.\n  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n  Maecenas sed diam eget risus varius blandit sit amet non magna.\n\n\nCras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.\n\n\n  HyperText Markup Language (HTML)\n  The language used to describe and define the content of a Web page\n\n  Cascading Style Sheets (CSS)\n  Used to describe the appearance of Web content\n\n  JavaScript (JS)\n  The programming language used to build advanced Web sites and applications\n\n\nInteger posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.\n\nImages\n\nQuisque consequat sapien eget quam rhoncus, sit amet laoreet diam tempus. Aliquam aliquam metus erat, a pulvinar turpis suscipit at.\n\n\n\n\n\nTables\n\nAenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n\n  \n    \n      Name\n      Upvotes\n      Downvotes\n    \n  \n  \n    \n      Totals\n      21\n      23\n    \n  \n  \n    \n      Alice\n      10\n      11\n    \n    \n      Bob\n      4\n      3\n    \n    \n      Charlie\n      7\n      9\n    \n  \n\n\nNullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo.\n\n\n\nWant to see something else added? Open an issue.\n\n\n  \n    \n      Handy! Now click the return link to go back. &#8617;\n    \n  \n\n",
    tags: [],
    id: 1
  });
  

  index.add({
    title: "What's Jekyll?",
    category: "found",
    content: "Jekyll is a static site generator, an open-source tool for creating simple yet powerful websites of all shapes and sizes. From the project’s readme:\n\n\n  Jekyll is a simple, blog aware, static site generator. It takes a template directory […] and spits out a complete, static website suitable for serving with Apache or your favorite web server. This is also the engine behind GitHub Pages, which you can use to host your project’s page or blog right here from GitHub.\n\n\nIt’s an immensely useful tool. Find out more by visiting the project on GitHub.\n",
    tags: [],
    id: 2
  });
  


// builds reference data
var store = [{
  "title": "Introduction",
  "link": "/features/introduction/",
  "date": "January 3, 2016",
  "category": "features",
  "excerpt": "The Strange Case of Dr. Jekyll and Mr. Hyde tells the story of a lawyer investigating the connection of two..."
},{
  "title": "Example content",
  "link": "/lab/example-content/",
  "date": "January 2, 2016",
  "category": "lab",
  "excerpt": "Howdy! This is an example blog post that shows several types of HTML content supported in this theme. Cum sociis..."
},{
  "title": "What's Jekyll?",
  "link": "/found/whats-jekyll/",
  "date": "January 1, 2016",
  "category": "found",
  "excerpt": "Jekyll is a static site generator, an open-source tool for creating simple yet powerful websites of all shapes and sizes...."
}]

// builds search
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdiv.empty();
    // Add status
    resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class="result"><div class="result-body"><a href="'+store[ref].link+'" class="post-title">'+store[ref].title+'</a><div class="post-date small">'+store[ref].category+' &times; '+store[ref].date+'</div><p>'+store[ref].excerpt+'</p></div>';
      resultdiv.append(searchitem);
    }
  }).focus(function () {
    $('body').addClass('searching');
  }).blur(function () {
    $('body').removeClass('searching');
  });;
});