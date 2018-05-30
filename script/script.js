$( document ).ready(function() {
  $('.ui.accordion')
    .accordion()
  ;
  $('.tag.example .ui.dropdown').dropdown({allowAdditions: true});

  $('#search').click(function(){
    //$('.ui.modal').modal('show');
    $('.coupled.modal').modal({allowMultiple: false});
 // open second modal on first modal buttons
 $('.second.modal').modal('attach events', '.first.modal .icon');
 // show first immediately
  $('.first.modal').modal('show');
  });

  $('.menu .item').tab();

  $('#example').DataTable( {
       columnDefs: [
           {
               targets: [ 0, 1, 2 ],
               className: 'mdl-data-table__cell--non-numeric'
           }
       ]
   } );

   $('#info').popup();



});
