(function(){
    angular.module("UpdatedResume")
    .component('experienceComponents', {
        templateUrl: 'components/experience-components.html',
            controller: ExperienceController,
        })



    function ExperienceController() {
        var ac = this;
        var numb = 0;
        var starter = 0;

        var paramsArray = [{
            id: 1,  
            numb: 93,  
            starter: 0,
        },
            {
                id: 2,  
                numb: 77,
                starter: 0,
            },
            {
                id: 3,
                numb: 46,   
                starter: 0,
            },
            {
                id: 4,
                numb: 60, 
                starter: 0,
            },
            {
                id: 5,
                numb: 81,
                starter: 0,
            },
            {
                id: 6,
                numb: 45,
                starter: 0,
            },
            {
                id: 7,  
                numb: 100,   
                starter: 0,
            },

        ];

 ac.moveBar = function (id, numb) {
            $("#horse-" + id + "-progress").animate({ 'width': numb + '%' }, 2000, 'linear');
        }

        // ac.moveBar = function (id, numb) {
        //     $("#horse-" + id + "-progress").animate({ 'width': numb + '%' }, 2700, 'linear');
        // }


        ac.resetBar = function (id, starter) {
            $("#horse-" + id + "-progress").animate({ 'width': starter + '%' }, 1, 'linear');
        }

        var reset = function () {
            for (var i = 0; i < paramsArray.length; i++) {
                var x = paramsArray[i].id;
                var g = paramsArray[i].starter; 
                ac.resetBar(x, g);
            }
        }

        var getParams = function () {
            for (var i = 0; i < paramsArray.length; i++) {
                var x = paramsArray[i].id;
                var d = paramsArray[i].numb;
                ac.moveBar(x, d);
            }
        }



        // reset horses
        var waypoint5 = new Waypoint({
            element: document.getElementById('jump'),
            handler: function (direction) {
                if (direction === 'down') {
                    // reset();
                    getParams();
                }
            }
        })

        var waypoint = new Waypoint({
            element: document.getElementById('about'),
            handler: function (direction) {
                if (direction === 'up') {
                    reset();
                }
            }
        })

        // var waypoint4 = new Waypoint({
        //     element: document.getElementById('about'),
        //     handler: function (direction) {
        //         if (direction === 'up') {
        //             reset();
        //             getParams();
        //         } 
          
        //     }
        // })

    }

}
    ());
