// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      // DONE: We need to take every author name from the page, and make it an option in the Author filter.
      //       To do so, we build an `option` DOM element that we can append to the author select box.
      //       Start by grabbing the author's name from `this` article element, and then use that bit of
      //       text to create the option tag (in a variable named `optionTag`),
      //       that we can append to the #author-filter select element.
      //       YAY, DOM manipulation!
      var val = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#author-filter').append(optionTag);

      // DONE: Similar to the above, but...
      //       Avoid duplicates! We don't want to append the category name if the select
      //       already has this category as an option!
      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      // TODO: If the select box was changed to an option that has a value, we need to:
      //       1. Hide all the articles,
      //       2. Fade in only the articles that match based on the author that was selected.
      //          Use an "attribute selector" to find those articles that match the value,
      //          and fade them in for the reader.

    } else {
      // TODO: Otherwise, we should:
      //       1. Show all the articles,
      //       2. Except the one article we are using as a template.

    }
    // Reset the category-filter:
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  // TODO: Just like we do for #author-filter above, we should handle change
  //       events on the #category-filter element. When an option with a value
  //       is selected, hide all the articles, then reveal the matches.
  //       When the blank (default) option is selected, show all the articles,
  //       except for the template. Be sure to reset the #author-filter while you are at it!

};

articleView.handleMainNav = function() {
  // TODO: Add a delegated event handler to .main-nav element below that will
  //        power the Tabs feature.
  //       Clicking any .tab element should:
  //        1. hide all the .tab-content sections.
  //        2. fade in the single .tab-content section that is associated with
  //            the clicked .tab element.
  //         You may need to dynamically build a selector string (concatenation???)
  //          with the correct ID, based on the data available to you on the .tab
  //          element that was clicked.
  $('.main-nav').on(/* CODE GOES HERE */);

  // Let's now trigger a click on the first .tab element, to set up the page:
  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  // Hide any elements after the first 2 (<p> tags in this case)
  // in any artcile body:
  $('.article-body *:nth-of-type(n+2)').hide();

  // TODO: Add a delegated event handler to reveal the remaining paragraph.
  //       When a .read-on link is clicked, we can:
  //        1. Prevent the default action of a link (to navigate away from the page).
  //        2. Reveal everything in that particular article now.
  //        3. Hide that read-on link!
  //       Ideally, we should attach this as just 1 event handler
  //       on the #articles section, and let it process any .read-on clicks that
  //       happen.
};

// TODO: Call all of the above functions, once we are sure the DOM is ready.
$(document).ready(/* complete this callback! */);
