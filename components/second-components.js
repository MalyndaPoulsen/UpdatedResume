

(function () {
    angular.module("UpdatedResume")
        .component('secondComponents', {
            templateUrl: 'components/second-components.html',
            controller: PortfolioController,
        })

    function PortfolioController() {
        var pc = this;


       $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
        var waypoint6 = new Waypoint({
            element: document.getElementById('horse-5-progress'),
            handler: function (direction) {
                if (direction === 'down') {
                    $('#bookStore').animateCss('bounceInLeft');
                     $('#slap').animateCss('bounceInRight');
                      $('#todo').animateCss('zoomInDown');
                       $('#CSS').animateCss('bounceInDown');
                        $('#musicStore').animateCss('zoomIn');
                         $('#Pop-Up').animateCss('slideInleft');
                          $('#zooKeeper').animateCss('rollIn');
                          $('#Pop-UpDevil').animateCss('zoomInUp');
                }
            }
        })
    }


}());
