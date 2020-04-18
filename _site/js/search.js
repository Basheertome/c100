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
    content: "The Strange Case of Dr. Jekyll and Mr. Hyde tells the story of a lawyer investigating the connection of two persons, Dr. Henry Jekyll and Mr. Edward Hyde. Chief among the novel’s supporting cast is a man by the name of Mr. Poole, Dr. Jekyll’s loyal butler.\n\n\n\nPoole is the butler for Jekyll, the static site generator. It’s designed and developed by @mdo to provide a clear and concise foundational setup for any Jekyll site. It does so by furnishing a full vanilla Jekyll install with example layouts, pages, posts, and styles.\n\nThis demo site was last updated April 18, 2020.\n\nThere are currently two themes built on Poole:\n\n\n  Hyde\n  Lanyon\n\n\nLearn more and contribute on GitHub.\n\nWhat’s included\n\nPoole is a streamlined Jekyll site designed and built as a foundation for building more meaningful themes. Poole, and every theme built on it like this one, includes the following:\n\n\n  Complete Jekyll setup included (layouts, config, 404, RSS feed, posts, archive page, and example page)\n  Mobile friendly design and development\n  Easily scalable text and component sizing with rem units in the CSS\n  Support for a wide gamut of HTML elements\n  Related posts (time-based, because Jekyll) below each post\n  Syntax highlighting, courtesy Jekyll’s built-in support for Rouge\n\n\nAdditional features are available in individual themes.\n\nBrowser support\n\nPoole and its themes are by preference a forward-thinking project. In addition to the latest versions of Chrome, Safari (mobile and desktop), Firefox, and Edge.\n\nDownload\n\nThese themes are developed on and hosted with GitHub. Head to the GitHub repository for downloads, bug reports, and features requests.\n\nThanks!\n",
    tags: [],
    id: 0
  });
  

  index.add({
    title: "Options",
    category: "features",
    content: "With Poole as a baseline theme for Jekyll, there aren’t many options available out of the box. Basic light and dark mode support is included. Colors are also provided for your own customization, while other Poole themes build on this to create more unique looks.\n\n\n  Dark mode\n  Creating themes\n  Colors\n  Gray colors\n  Google Analytics\n\n\nDark mode\n\nDark mode is enabled automatically via CSS media query—you’ll find the source code for this in the _sass/_variables.scss stylesheet. If you’re familiar with CSS custom properties, you can also use this method to build your own color schemes.\n\nRead more about using CSS dark mode via media queries like this:\n\n// Example media query to detect dark mode\n@media (prefers-color-scheme: dark) {\n  // ...\n}\n\n\nCreating themes\n\nIf you want to make your own color schemes, modify the CSS variables in the _sass/_variables.scss stylesheet with a scoped data attribute or class name.\n\nFor example, below we’ve created the beginnings of a blue theme:\n\n// Example blue theme\n[data-theme=\"blue\"] {\n  --body-bg: var(--blue);\n  --body-color: #fff;\n}\n\n\nThen, apply the theme by adding data-theme=\"blue\" to the &lt;html&gt; element.\n\nColors\n\nChange your site styles by modifying the source code with these CSS custom properties. Poole’s colors come from the Open Color project.\n\n\n  \n  \n    var(--red)\n    #fa5252\n  \n  \n  \n    var(--pink)\n    #e64980\n  \n  \n  \n    var(--grape)\n    #be4bdb\n  \n  \n  \n    var(--purple)\n    #7950f2\n  \n  \n  \n    var(--indigo)\n    #4c6ef5\n  \n  \n  \n    var(--blue)\n    #228be6\n  \n  \n  \n    var(--cyan)\n    #15aabf\n  \n  \n  \n    var(--teal)\n    #12b886\n  \n  \n  \n    var(--green)\n    #40c057\n  \n  \n  \n    var(--yellow)\n    #fab005\n  \n  \n  \n    var(--orange)\n    #fd7e14\n  \n\n\nGray colors\n\nThere are also ten grayscale colors to choose from.\n\n\n  \n  \n    var(--gray-000)\n    #f8f9fa\n  \n  \n  \n    var(--gray-100)\n    #f1f3f5\n  \n  \n  \n    var(--gray-200)\n    #e9ecef\n  \n  \n  \n    var(--gray-300)\n    #dee2e6\n  \n  \n  \n    var(--gray-400)\n    #ced4da\n  \n  \n  \n    var(--gray-500)\n    #adb5bd\n  \n  \n  \n    var(--gray-600)\n    #868e96\n  \n  \n  \n    var(--gray-700)\n    #495057\n  \n  \n  \n    var(--gray-800)\n    #343a40\n  \n  \n  \n    var(--gray-900)\n    #212529\n  \n\n\nGoogle Analytics\n\nSpecify ga_analytics in your _config.yml and restart the server to add Google Analytics tracking code.\n\n# Google Analytics example\nga_analytics: UA-000000-0\n\n",
    tags: [],
    id: 1
  });
  

  index.add({
    title: "Example content",
    category: "lab",
    content: "Howdy! This is an example blog post that shows several types of HTML content supported in this theme.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.\n\n\n  Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.\n\n\nEtiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.\n\nInline HTML elements\n\nHTML defines a long list of available inline tags, a complete list of which can be found on the Mozilla Developer Network.\n\n\n  To bold text, use &lt;strong&gt;.\n  To italicize text, use &lt;em&gt;.\n  To highlight, use &lt;mark&gt;.\n  Abbreviations, like HTML should use &lt;abbr&gt;, with an optional title attribute for the full phrase.\n  Citations, like — Mark Otto, should use &lt;cite&gt;.\n  Deleted text should use &lt;del&gt; and inserted text should use &lt;ins&gt;.\n  Superscript text uses &lt;sup&gt; and subscript text uses &lt;sub&gt;.\n\n\nMost of these elements are styled by browsers with few modifications on our part.\n\nFootnotes\n\nFootnotes are supported as part of the Markdown syntax. Here’s one in action. Clicking this number1 will lead you to a footnote. The syntax looks like:\n\nClicking this number[^fn-sample_footnote]\n\nEach footnote needs the ^fn- prefix and a unique ID to be referenced for the footnoted content. The syntax for that list looks something like this:\n\n[^fn-sample_footnote]: Handy! Now click the return link to go back.\n\nYou can place the footnoted content wherever you like. Markdown parsers should properly place it at the bottom of the post.\n\nHeading\n\nVivamus sagittis lacus vel augue rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n\nCode\n\nInline code is available with the &lt;code&gt; element. Snippets of multiple lines of code are supported through Rouge. Longer lines will automatically scroll horizontally when needed. You may also use code fencing (triple backticks) for rendering code.\n\n// Example can be run directly in your JavaScript console\n\n// Create a function that takes two arguments and returns the sum of those arguments\nvar adder = new Function(\"a\", \"b\", \"return a + b\");\n\n// Call the function\nadder(2, 6);\n// &gt; 8\n\nYou may also optionally show code snippets with line numbers. Add linenos to the Rouge tags.\n\n1\n2\n3\n4\n5\n6\n7\n8\n// Example can be run directly in your JavaScript console\n\n// Create a function that takes two arguments and returns the sum of those arguments\nvar adder = new Function(\"a\", \"b\", \"return a + b\");\n\n// Call the function\nadder(2, 6);\n// &gt; 8\n\n\nAenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.\n\nGists via GitHub Pages\n\nVestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.\n\n400: Invalid request\n\n\nAenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper.\n\nLists\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\n\n\n  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n  Donec id elit non mi porta gravida at eget metus.\n  Nulla vitae elit libero, a pharetra augue.\n\n\nDonec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.\n\n\n  Vestibulum id ligula porta felis euismod semper.\n  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n  Maecenas sed diam eget risus varius blandit sit amet non magna.\n\n\nCras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.\n\n\n  HyperText Markup Language (HTML)\n  The language used to describe and define the content of a Web page\n\n  Cascading Style Sheets (CSS)\n  Used to describe the appearance of Web content\n\n  JavaScript (JS)\n  The programming language used to build advanced Web sites and applications\n\n\nInteger posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.\n\nImages\n\nQuisque consequat sapien eget quam rhoncus, sit amet laoreet diam tempus. Aliquam aliquam metus erat, a pulvinar turpis suscipit at.\n\n\n\n\n\nTables\n\nAenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n\n  \n    \n      Name\n      Upvotes\n      Downvotes\n    \n  \n  \n    \n      Totals\n      21\n      23\n    \n  \n  \n    \n      Alice\n      10\n      11\n    \n    \n      Bob\n      4\n      3\n    \n    \n      Charlie\n      7\n      9\n    \n  \n\n\nNullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo.\n\n\n\nWant to see something else added? Open an issue.\n\n\n  \n    \n      Handy! Now click the return link to go back. &#8617;\n    \n  \n\n",
    tags: [],
    id: 2
  });
  

  index.add({
    title: "What's Jekyll?",
    category: "found",
    content: "Jekyll is a static site generator, an open-source tool for creating simple yet powerful websites of all shapes and sizes. From the project’s readme:\n\n\n  Jekyll is a simple, blog aware, static site generator. It takes a template directory […] and spits out a complete, static website suitable for serving with Apache or your favorite web server. This is also the engine behind GitHub Pages, which you can use to host your project’s page or blog right here from GitHub.\n\n\nIt’s an immensely useful tool. Find out more by visiting the project on GitHub.\n",
    tags: [],
    id: 3
  });
  


// builds reference data
var store = [{
  "title": "Introduction",
  "link": "/features/introduction/",
  "date": "April 4, 2020",
  "category": "features",
  "excerpt": "The Strange Case of Dr. Jekyll and Mr. Hyde tells the story of a lawyer investigating the connection of two persons, Dr. Henry Jekyll and Mr. Edward..."
},{
  "title": "Options",
  "link": "/features/options/",
  "date": "April 3, 2020",
  "category": "features",
  "excerpt": "With Poole as a baseline theme for Jekyll, there aren’t many options available out of the box. Basic light and dark mode support is included. Colors are..."
},{
  "title": "Example content",
  "link": "/lab/example-content/",
  "date": "April 2, 2020",
  "category": "lab",
  "excerpt": "Howdy! This is an example blog post that shows several types of HTML content supported in this theme. Cum sociis natoque penatibus et magnis dis parturient montes,..."
},{
  "title": "What's Jekyll?",
  "link": "/found/whats-jekyll/",
  "date": "March 1, 2020",
  "category": "found",
  "excerpt": "Jekyll is a static site generator, an open-source tool for creating simple yet powerful websites of all shapes and sizes. From the project’s readme: Jekyll is a..."
}]

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