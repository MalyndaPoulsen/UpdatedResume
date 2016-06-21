(function(){
    angular.module("UpdatedResume")
    .component('experienceComponents', {
        templateUrl: 'components/experience-components.html',

            controller: ExperienceController,
        })



    function ExperienceController() {
        var ac = this;
        var num = -8;
        var numb = 0;


        var paramsArray = [{
            id: 1,
            num: 81,
            numb: 93,
            start: 0,
            starter: 0,
        },
            {
                id: 2,
                num: 66,
                numb: 77,
                start: 0,
                starter: 0,
            },
            {
                id: 3,
                num: 37,
                numb: 46,
                start: 0,
                starter: 0,
            },
            {
                id: 4,
                num: 50,
                numb: 60,
                start: 0,
                starter: 0,
            },
            {
                id: 5,
                num: 70,
                numb: 81,
                start: 0,
                starter: 0,
            },
            {
                id: 6,
                num: 36,
                numb: 45,
                start: 0,
                starter: 0,
            },
            {
                id: 7,
                num: 88,
                numb: 100,
                start: 0,
                starter: 0,
            },

        ];



        ac.moveBar = function (id, numb) {
            $("#horse-" + id + "-progress").animate({ 'width': numb + '%' }, 2700, 'linear');
        }

        ac.moveHorse = function (id, num) {
            $("#horse-" + id).animate({ left: num + '%' }, 3000, 'linear');
        };

        ac.reset = function (id, start) {
            $("#horse-" + id).animate({ left: start + '%' }, 1, 'linear');
        };

        ac.resetBar = function (id, starter) {
            $("#horse-" + id + "-progress").animate({ 'width': starter + '%' }, 1, 'linear');
        }

        var reset = function () {
            for (var i = 0; i < paramsArray.length; i++) {
                var x = paramsArray[i].id;
                var f = paramsArray[i].start;
                var g = paramsArray[i].starter;
                ac.reset(x, f);
                ac.resetBar(x, g);
            }
        }

        var getParams = function () {
            for (var i = 0; i < paramsArray.length; i++) {
                var x = paramsArray[i].id;
                var y = paramsArray[i].num;
                var d = paramsArray[i].numb;

                ac.moveBar(x, d);
                ac.moveHorse(x, y);

            }

        }



        // reset horses
        var waypoint5 = new Waypoint({
            element: document.getElementById('big-deal'),
            handler: function (direction) {
                if (direction === 'down') {
                    reset();
                    // getParams();
                }
            }
        })

        var waypoint = new Waypoint({
            element: document.getElementById('about'),
            handler: function (direction) {
                if (direction === 'down') {
                    getParams();
                } if(direction === 'up'){
                    reset();
                }
            }
        })

        var waypoint4 = new Waypoint({
            element: document.getElementById('horse-4'),
            handler: function (direction) {
                if (direction === 'up') {
                    reset();
                } 
          
            }
        })

    }

}
    ());
