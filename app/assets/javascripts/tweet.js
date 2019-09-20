$(function(){
  function reloadTweets(){
    last_tweet_id = $('.message').data('tweet-id');
    $.ajax({
      url: 'api/tweets',
      type: 'get',
      dataType: 'json',
      data: {id: last_tweet_id}
    })
    .done(function(tweets) {
      if (!$.isEmptyObject(tweets)){
        if (!$('div').hasClass('toast-info')) {
          toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-left",
            "preventDuplicates": true,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "-3000",
            "extendedTimeOut": "0"
          }
          toastr.info(`新しい投稿があります<br /><br /><a href="/tweets" class="btn waves-effect waves-light toastr-reset">表示</a>`);
        }
      }
    })
    .fail(function() {
    });
  };

  

  var controller = $('body').data('controller');
  var action = $('body').data('action');
  if (controller == "tweets" && action == "index") {
    setInterval(reloadTweets, 5000);
  };
});
