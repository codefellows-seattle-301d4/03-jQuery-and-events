var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('address').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#author-filter').append(optionTag);
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
      $('article').hide();
      var $filterValue = $(this).val();
      $('article').each(function() {
        var $currentArticle = $(this);
        if($currentArticle.attr('data-author') === $filterValue) {
          $currentArticle.fadeIn();
        }
      });
    } else {
      $('article').not('.template').fadeIn();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if($(this).val()) {
      $('article').hide();
      var $filterValue = $(this).val();
      $('article').each(function() {
        var $currentArticle = $(this);
        if($filterValue === $currentArticle.attr('data-category')) {
          $currentArticle.fadeIn();
        }
      });
    } else {
      $('article').not('.template').fadeIn();
    }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    e.preventDefault();
    $('.tab-content').hide();
    var $tabName = $(this).data('content');
    $('.tab-content').each( function () {
      if ($(this).is('#' + $tabName)) {
        $(this).fadeIn();
      }
    });
    $('#category-filter').val('');
    $('#author-filter').val('');
    $('article').not('.template').fadeIn();
  });
  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('article').on('click', '.read-on', function(e) {
    console.log($(this).text().indexOf('Read on'));
    e.preventDefault();
    if ($(this).hasClass('show-less')) {
      $('.article-body *:nth-of-type(n+2)').hide();
      $(this).toggleClass('show-less');
      $(this).html('Read On &rarr;');
    } else {
      $(this).toggleClass('show-less');
      $('.article-body *:nth-of-type(n+2)').fadeIn();
      $(this).html('Show Less &larr;');
    }
  });

};
$(document).ready(function () {
  articleView.populateFilters();
  articleView.handleAuthorFilter();
  articleView.handleCategoryFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
});
