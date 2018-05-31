$( document ).ready(function() {
  function explode(){
      window.location.href = "app.html";
}
 var filenm = document.location.pathname.match(/[^\/]+$/)[0];
console.log(filenm);
 if(filenm == "index.html"){
  setTimeout(explode, 3000);
 }


  $('.ui.accordion').accordion();
  $('.tag.example .ui.dropdown').dropdown({allowAdditions: true});

  $('#search').click(function(){
    //$( "#acc" ).toggle( display );
    $('#acc').transition('scale');

});

$('#clear').click(function(){
  //$( "#acc" ).toggle( display );
  $('#acc').transition('scale');
  $('#txt').val("");

});




$('.info.circle.link.icon').click(function(){
  $('#showinfo').modal('show');
});

  $('.menu .item').tab();

  $('#example').DataTable( {
       columnDefs: [
           {
               targets: [ 0, 1, 2 ],
               className: 'mdl-data-table__cell--non-numeric'
           }
       ] });

   $('#info').popup();

});
