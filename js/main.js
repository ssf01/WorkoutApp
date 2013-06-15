window.WorkoutApp || (window.WorkoutApp = {});
(function(window, $, _, WorkoutApp, undefined) {
    var timer = 30;
    
    WorkoutApp.init = function () {
        this.counter=setInterval(this.contDown, 1000);
    };

    WorkoutApp.contDown = function () {

        timer--;
        if (timer <= 0)
        {
         clearInterval(this.counter);
         return;
        }

        $(".WorkoutApp").html(timer + " secs");
        
    };

    $(window.document).ready($.proxy(WorkoutApp.init, WorkoutApp));
}(window, jQuery, _, WorkoutApp));