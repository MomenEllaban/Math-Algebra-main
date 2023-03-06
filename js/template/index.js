(function($) {
    $.fn.emc = function(options) {

        var defaults = {
                key: [],
                scoring: "normal",
                progress: true
            },
            settings = $.extend(defaults, options),
            $quizItems = $('[data-quiz-item]'),
            $choices = $('[data-choices]'),
            itemCount = $quizItems.length,
            chosen = [],
            $option = null,
            $label = null;

        emcInit();

        if (settings.progress) {
            var $bar = $('#emc-progress'),
                $inner = $('<div id="emc-progress_inner"></div>'),
                $perc = $('<span id="emc-progress_ind">0/' + itemCount + '</span>');
            $bar.append($inner).prepend($perc);
        }

        function emcInit() {
            $quizItems.each(function(index, value) {
                var $this = $(this),
                    $choiceEl = $this.find('.choices'),
                    choices = $choiceEl.data('choices');
                for (var i = 0; i < choices.length; i++) {
                    $option = $('<input name="' + index + '" id="' + index + '_' + i + '" type="radio">');
                    $label = $('<label id="' + i + '" for="' + index + '_' + i + '">' + choices[i] + '</label>');
                    $choiceEl.append($option).append($label);
                    $option.on('change', function() {
                        return getChosen();
                    });
                }
            });
        }


        function getChosen() {
            chosen = [];
            $choices.each(function() {
                var $inputs = $(this).find('input[type="radio"]');

                $inputs.each(function(index, value) {
                    $($(this)).removeClass('checking');

                    if ($(this).is(':checked')) {

                        $($(this)).removeAttr(':checked');
                        $($(this)).addClass('checking');
                        chosen.push(index + 1);

                    }
                });
            });
            getProgress();
        }

        function getProgress() {
            var prog = (chosen.length / itemCount) * 100 + "%",
                $submit = $('#emc-submit');

            if (settings.progress) {
                $perc.text(chosen.length + '/' + itemCount);
                $inner.css({
                    height: prog
                });
            }
            if (chosen.length === itemCount) {
                $submit.addClass('ready-show');
                $submit.removeClass('ready-active');

                $submit.click(function() {

                    $(".choices").addClass("pointerEvents");
                    $(this).addClass("pointerEvents");

                    $(".overlay2.x").show();
                    return scoreNormal();
                });
            }
        }

        function scoreNormal(value) {


            var wrong = [],
                correct = [],
                // score = null,
                $scoreEl = $('#emc-score');
            for (var i = 0; i < itemCount; i++) {
                if (chosen[i] != settings.key[i]) {
                    wrong.push(i);
                    var v = settings.key[i];

                    correct.push(v);
                }

            }

            $quizItems.each(function(index, value) {
                var $this = $(this);

                if ($.inArray(index, wrong) !== -1) {
                    $this.removeClass('item-correct').addClass('item-incorrect');

                } else {
                    $this.removeClass('item-incorrect').addClass('item-correct');
                }





            });

            score = ((itemCount - wrong.length) / itemCount).toFixed(2) * 100 + "%";
            $scoreEl.text(`${userName.value} : ` + "Your scored is " + score).addClass('new-score');
            $('html,body').animate({
                scrollTop: 0
            }, 50);
        }

    }
}(jQuery));




$(document).emc({
    key: ["2", "1", "2", "4", "2",

        "3", "4", "1", "3", "3",

        "2", "4", "3", "1", "2",

        "1", "1", "3", "1", "1",

        "3", "3", "2", "3", "4",

        "1", "2", "2", "2", "4",

        "4", "3", "4", "2", "4",

        "3", "1", "4", "1", "2",

        "4", "2", "3", "1", "4",

        "2", "3", "2", "3", "4",

        "2"
    ]
});

$(document).ready(function() {
    $(".overlay2.x").hide()
});



// start  timer  



// startTimer();



function reviewAns() {
    $(".overlay2.x").remove();
    console.log("pdf");
    $("#download").css("display", "block !important")


}





function startTimer() {

    $(".overlay").css("display", "none");
    $('body').addClass("noover");

}


$(document).ready(function() {

    $(".modal").addClass("in");
    $("body").css("overflow", "hidden");

})



// onclick enter and click button 

$(function() {
    $('button[name="login"]').click(function() {


        if (

            input2.value == 1 ||
            input2.value == 2 ||
            input2.value == 3 ||
            input2.value == 4 ||
            input2.value == 5 ||

            input2.value == 6 ||
            input2.value == 7 ||
            input2.value == 8 ||
            input2.value == 9 ||
            input2.value == 10 ||

            input2.value == 11 ||
            input2.value == 12 ||
            input2.value == 13 ||
            input2.value == 14 ||
            input2.value == 15 ||

            input2.value == 16 ||
            input2.value == 17 ||
            input2.value == 18 ||
            input2.value == 19 ||
            input2.value == 20 ||

            input2.value == 21 ||
            input2.value == 22 ||
            input2.value == 23 ||
            input2.value == 24 ||
            input2.value == 25 ||

            input2.value == 26 ||
            input2.value == 27 ||
            input2.value == 28 ||
            input2.value == 29 ||
            input2.value == 30 ||

            input2.value == 31 ||
            input2.value == 32 ||
            input2.value == 33 ||
            input2.value == 34 ||
            input2.value == 35
        ) {
            $(".modal").removeClass("in");
            $(".modal").css("display", "none");
        } else {
            alert('You Should write right Informations')
        }

        student.innerHTML = `${userName.value}: GoodLuck`;
        console.log(student.innerHTML);
    });


    //press enter on text area..
    $('#input2').keypress(function(e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            $('button[name = login]').click();
            return false;
        }
    });

    $('#userName').keypress(function(e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            $('button[name = login]').click();
            return false;
        }
    });

});








// show password 

$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if ($('#show_hide_password input').attr("type") == "text") {
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass("fa-eye-slash");
            $('#show_hide_password i').removeClass("fa-eye");
        } else if ($('#show_hide_password input').attr("type") == "password") {
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass("fa-eye-slash");
            $('#show_hide_password i').addClass("fa-eye");
        }
    });
});




// timer

let mints = 59;
let seconds = 60;
let download = document.querySelector(".download");

startBtn.addEventListener('click', function() {

    $("body").css("overflow", "auto!important");
    timer.textContent = `Left Time: 60:00`;
    let Time = setInterval(function() {
        seconds -= 1;
        if (seconds == 0) {
            mints = mints - 1;
            seconds = 60;
            stop()
        }
        timer.textContent = ` Left Time:  ${mints}:${seconds}`
        if (mints == 0) {
            clearInterval(Time);
            seconds = 0;
            timer.textContent = `The Exam Is Finished`
        }
        if (mints == 9) {
            timer.style.color = "red"
        }
    }, 1000)

    download.onclick = function() {
        clearInterval(Time)
    }

})


// reload_exam

window.addEventListener("beforeunload", function(e) {
    var confirmationMessage = "\o/";

    e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
    return confirmationMessage; // Gecko, WebKit, Chrome <34
});



// send email js 

let score = null;

let to_name = `Mr: Mohammed El-Sayed`;

function sendmail() {

    setTimeout(() => {
        var tempparams = {
            from_name: document.getElementById("userName").value,
            to_name: to_name,
            message: score,
        };
        emailjs.send('service_4n27f6q', 'template_t2m9pz7', tempparams)
            .then(function(res) {
                console.log("success", res.status);
            })

    }, 2000);

}


function reviewAns() {
    $(".overlay2.x").remove();
    console.log("pdf");
    $("#download").removeClass("hidden_btn");
    $("#emc-submit").addClass("hidden_btn");

}
