window.WorkoutApp || (window.WorkoutApp = {});
(function(window, $, _, WorkoutApp, undefined) {
    var Workouts = {
        1: {
            name: 'Jumping Jack',
            bgImg: 'jumping-jack.png',
            time: 5
        },
        2: {
            name: "Push-up",
            bgImg: 'push-up.png',
            time: 5
        }
        3: {
            name: "Wall Sit",
            bgImg: "wall-sit.png",
            time: 5
        }
    };
    
    WorkoutApp.init = function () {
        self = this;
        self.i = 0;
        self.wokrouts_no = _.size(Workouts);

        $('.holder').append('<div class="WorkoutApp">\
                <a class="btn start" href="#">start timer</a>\
                <p class="time-left" />\
                <p class="workout-name" />\
                <a class="btn pause" href="#">pause</a>\
                <a class="btn resume" href="#">resume</a>\
            </div>');
        
        $(".start").on('click', function() {
            this.remove();
            self.callWorkout();
        });
    };

    WorkoutApp.countdown = function (timer, caller) {
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
            $(".workout-name").html(caller);
            $(".time-left").html(timer+ " secs");
            timer--;
        }, 1000);

        if (!(caller === "pause")) {
            $('.pause').show();

            $('.pause').on('click', function() {
                clearInterval(counter);
                $(this).hide();
                $('.resume').show()    
            });
            $('.resume').on('click', function() {
                self.countdown(timer, caller);
                $(this).hide();
                $('.pause').show()
            });
        } else {
            $('.pause').hide();
        }
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
        $("body").css("background", "url('img/" +Workouts[this.i].bgImg+ "') no-repeat center center #f4f4f4");
        this.countdown(Workouts[this.i].time, Workouts[this.i].name);
    };

    $(window.document).ready($.proxy(WorkoutApp.init, WorkoutApp));
}(window, jQuery, _, WorkoutApp));