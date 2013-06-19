window.WorkoutApp || (window.WorkoutApp = {});
(function(window, $, _, WorkoutApp, undefined) {
    var Workouts = {
        1: {
            name: 'Cucnjevi',
            bgImg: 'cucnjevi',
            time: 30
        },
        2: {
            name: "Sklekovi",
            bgImg: 'sklekovi',
            time: 5
        }
    };
    
    WorkoutApp.init = function () {
        self = this;
        self.i = 0;
        self.wokrouts_no = _.size(Workouts);
        
        $(".start").on('click', function() {
            self.callWorkout();
        });
    };

    WorkoutApp.countdown = function (timer, caller) {
        var counter = setInterval(function() {
            
            if (timer < 0) {
                clearInterval(counter);

                if (caller === "pause"){
                    self.callWorkout();
                } else {
                    self.callPause();
                }
                return;
            }
            $(".WorkoutApp").html(caller+ " " +timer+ " secs");
            timer--;
        }, 1000),
        self = this;

        $('.pause').show();

        $('.pause').on('click', function() {
            clearInterval(counter);
            $(this).hide();
            $('.resume').show()    
        });
        $('.resume').on('click', function() {
            //$(this).addClass('pause').removeClass('resume');
            self.countdown(timer, caller);
            $(this).hide();
            $('.pause').show()
        });
    };

    WorkoutApp.callPause = function () {
        $('body').css("background", "blue");

        if (this.i === this.wokrouts_no) {
            $(".WorkoutApp").html("DONE");
        } else {
            this.countdown(3, "pause");
        }
    };

    WorkoutApp.callWorkout = function () {
        this.i++;
        $("body").css("background", "url('img/" +Workouts[this.i].bgImg+ ".jpg') no-repeat center center #f4f4f4");
        this.countdown(Workouts[this.i].time, Workouts[this.i].name);
    };

    $(window.document).ready($.proxy(WorkoutApp.init, WorkoutApp));
}(window, jQuery, _, WorkoutApp));