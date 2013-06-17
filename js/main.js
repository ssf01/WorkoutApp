window.WorkoutApp || (window.WorkoutApp = {});
(function(window, $, _, WorkoutApp, undefined) {
    var Workouts = {
        1: {
            name: 'some name',
            time: 30,
        }

    };
    
    //var timer = 10;
    WorkoutApp.init = function () {
        self = this;
        self.counter = "";
        
        
        $(".start").on('click', function() {
            self.callWorkout();
        });
    };

    WorkoutApp.contDown = function (timer, caller) {
        var self = this,
            counter = setInterval(function() {
            
            if (timer < 0) {
                clearInterval(counter);
                if (caller === "pause"){
                    self.callWorkout();    
                } else {
                    self.callPause();
                }
                return;
            }
            $(".WorkoutApp").html(caller + " " + timer + " secs");    
            timer--;
        }, 1000);

    };

    WorkoutApp.callPause = function () {
        this.contDown(11, "pause");
    };

    WorkoutApp.callWorkout = function () {
        this.contDown(15, "workout");
    };

    $(window.document).ready($.proxy(WorkoutApp.init, WorkoutApp));
}(window, jQuery, _, WorkoutApp));