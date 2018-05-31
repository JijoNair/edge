$( document ).ready(function() {
  function explode(){
      window.location.href = "app.html";
}
 var filenm = document.location.pathname.match(/[^\/]+$/)[0];
console.log(filenm);
 if(filenm == "index.html"){
  setTimeout(explode, 2000);
 }


  $('.ui.accordion').accordion();
  $('.tag.example .ui.dropdown').dropdown({allowAdditions: true});
function showdata(){
  $('#loader').removeClass("active")


}
  $('#search').click(function(){
    $('#gettdata').show();

        $('#acc').transition('scale');
        setTimeout(showdata, 1000);

    //$( "#acc" ).toggle( display );


});

$('#clear').click(function(){
  //$( "#acc" ).toggle( display );
  $('#acc').transition('scale');
  $('#txt').val("");
    $('#gettdata').show();
    $('#loader').addClass("active");


});




$('.info.circle.link.icon').click(function(){
  $('#showinfo').modal('show');
});
$('.pencil.icon').click(function(){
  $('#comingsoon').modal('show');
});
$('.file.icon').click(function(){
  $('#comingsoon').modal('show');
});
$('.copy.icon').click(function(){
  $('#comingsoon').modal('show');
});


  $('.menu .item').tab();

  $('#exampletb1').DataTable();
  $('#exampletb2').DataTable();


   $('.info.circle.link.icon').popup();
   $('.pencil.icon').popup();
   $('.file.icon').popup();
   $('.copy.icon').popup();

});
