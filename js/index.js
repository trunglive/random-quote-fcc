const main = () => {
  const quoteContent = $('.quote__content');
  const quoteAuthor = $('.quote__author');
  const quoteButton = $('.quote__button');
  
  $(quoteButton).on('click', () => {
    quoteContent.empty();
    quoteAuthor.empty();
    const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
        
    $.getJSON(url)
      .done(result => {
        quoteContent.append(result.quoteText);
        quoteAuthor.hide().append('- ' + result.quoteAuthor).show('slow');
      })
      .fail(() => {
        quoteContent.append(`ERROR! Please check your internet connection again :(`);
    })
  });
  
  $('.fa-twitter').on('click', () => {
    $('.twitter-share').attr('href', `https://twitter.com/intent/tweet?text= ${quoteContent.text()} ${quoteAuthor.text()}`);
  })
};

$(document).ready(main);
