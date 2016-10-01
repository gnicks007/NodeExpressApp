/**
 * Created by gnicksDev on 02/21/14.
 */

console.log(document);
console.log('In requestjs');

 $(document).ready(function(){
    $('button').on('click', function(event){
         event.preventDefault();
            $.ajax('/ticket', {
                success: function(response) {
                    $('.databasename').html(response).slideDown('slow');
                }
            });
        });

    });

