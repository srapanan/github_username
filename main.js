// Goal: use a form, jquery, and ajax to dynamically add github info (add it below your form-- no page refreshing!)
$(document).ready(function(){
  $('form').submit(function(){
    var username = $('#username').val()
    console.log(username)
    $.ajax({
      method:'get',
      url:"https://api.github.com/users/"+ username,
      success:function(data){
        console.log(data);
        $('#main').append(data.login);
        // internal ajax call
        $('#main').append(`<img src="${data.avatar_url}" alt="Philatar"/>`);
      }
    })
    return false
  })
})
  // let's make an ajax request.

    // object as argument

        // $.ajax(
        //   {
        //     method:'get',
        //     url: data.avatar_url,
        //     success: function(img){
        //       console.log(img);
        //     }
        //   }
        // )
// if you use form submit for the assignment - forms automatically refresh the page;
      //$('form').submit(
        //function(e){
          //console.log(e);
          //e.preventDefault();
          //return false;
          //
