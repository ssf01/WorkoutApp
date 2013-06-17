window.WorkoutApp || (window.WorkoutApp = {});
(function(window, $, _, WorkoutApp, undefined) {
    var workouts = {
        1: {
            name: 'some name',
            time: 30,
        }

    };
    
    
    WorkoutApp.init = function () {
        //this.contDown()
        this.counter=setInterval(this.contDown, 1000);
    };

    WorkoutApp.contDown = function () {
        timer--;
        if (timer <= 0) {
         clearInterval(this.counter);
         this.callPause()
         return;
        }

        $(".WorkoutApp").html(timer + " secs");
        
    };

    WorkoutApp.callPause = function () {
        //this.contDown()
        this.counter=setInterval(this.contDown, 1000);
    };

    $(window.document).ready($.proxy(WorkoutApp.init, WorkoutApp));
}(window, jQuery, _, WorkoutApp));