$( document ).ready(function() {
  function explode(){
      window.location.href = "app.html";
}
 var filenm = document.location.pathname.match(/[^\/]+$/)[0];
console.log(filenm);
 if(filenm == "index.html"){
  setTimeout(explode, 3000);
 }


  $('.ui.accordion')

    .accordion()
  ;
  $('.tag.example .ui.dropdown').dropdown({allowAdditions: true});

  $('#search').click(function(){
<<<<<<< HEAD
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
=======
    //$('.ui.modal').modal('show');
    $('.coupled.modal').modal({allowMultiple: false});
 // open second modal on first modal buttons
 $('.second.modal').modal('attach events', '.first.modal .icon');
 // show first immediately
  $('.first.modal').modal('show');
  });
>>>>>>> origin/master

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
