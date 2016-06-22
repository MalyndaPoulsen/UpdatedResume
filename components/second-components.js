

(function () {
    angular.module("UpdatedResume")
        .component('secondComponents', {
            templateUrl: 'components/second-components.html'
        })

$(function(){
   // See if this is a touch device
   if ('ontouchstart' in window)
   {
      // Set the correct [touchscreen] body class
      $('portfolio').removeClass('no-touch').addClass('touch');
     
      // Add the touch toggle to show text when tapped
      $('div.boxInner img').click(function(){
         $(this).closest('.boxInner').toggleClass('touchFocus');
      });
   }
});
// </script>

}());
