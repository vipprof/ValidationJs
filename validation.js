$(function() {
    // Implemtion  Function Validation 
    function InputError(eventPublisher, errormessagecontainer, errormessage) {
        eventPublisher.css('border', '1px solid #f00');
        eventPublisher.siblings('span').css({
            background: '#f00',
            border: '2px solid #f00'
        });
        errormessagecontainer.show();
        errormessagecontainer.text(errormessage);
    }; // end Of Error Function;
    function InputSuccess(eventPublisher, errormessagecontainer) {
        eventPublisher.css('border', 'none');
        eventPublisher.siblings('span').css({
            background: '#35c6eb',
            border: 'none'
        });
        errormessagecontainer.hide();

    } // End of Success Function
    // Focus Event on input fields;
    var placehold;
    $('.input-group input').on('focus', function() {
        placehold = $(this).attr('placeholder');
        $(this).attr('placeholder', '');
    });
    // blur keypress event on input fields;
    $('.input-group input').on('blur keypress', function() {
        $(this).attr('placeholder', placehold);
    });
    // Validation;
    $('#username').on('blur keypress', function() {
            var usernameValue = $(this).val();
            if (usernameValue.length == 0) {
                InputError($(this), $('.alert-error-username'), 'Please Enter Username !'); // Calling Function;
            } else {
                InputSuccess($(this), $('.alert-error-username'));
            }
            if (usernameValue.length <= 4 && usernameValue.length > 0) {
                InputError($(this), $('.alert-error-username'), 'Username Must be more than 4 characters'); // Calling Function;
            }

            // End if username val;
            // Regular Expression;
            var reg = new RegExp('^[0-9]+$');
            if (reg.test(usernameValue)) {
                InputError($(this), $('.alert-error-username'), 'Username Must Not be Number Only'); // Calling Function;
            }
        }) // End Event of blur keypress on username
        // Start => password blur keypress Event
    var passwordValue;
    var repasswordValue;
    $('#password').on('blur keypress', function() {
            passwordValue = $(this).val();

            if (passwordValue.length <= 5) {
                InputError($(this), $('.alert-error-password'), 'Password Must be More than 5 Characters'); // Calling Function;
            } else {
                InputSuccess($(this), $('.alert-error-password'));
            }
        }) // End => Password blur keypress Event;
    $('#repassword').on('blur keypress', function() {
            repasswordValue = $(this).val();
            if (repasswordValue.length <= 5) {
                InputError($(this), $('.alert-error-repassword'), 'Password Must be More than 5 Characters'); // Calling Function;
            } else {
                InputSuccess($(this), $('.alert-error-repassword'));
            }
            if (repasswordValue != passwordValue) {
                InputError($(this), $('.alert-error-repassword'), 'Repeating Password Must be Match with Password'); // Calling Function;
            }
        }) // End => Repeat Password blur keypress Event;
        // Email Validation and begin event blur keypress;
    $('#email').on('blur keypress', function() {
            var emailValue = $(this).val();
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (emailValue.length == 0) {
                InputError($(this), $('.alert-error-email'), 'Please Enter Your Email');
            } else {
                InputSuccess($(this), $('.alert-error-email'));
            }
            console.log();
            if (!(regex.test(emailValue))) {
                InputError($(this), $('.alert-error-email'), 'Please Enter Correct Email');
            }
        }) // End => Email blur keypress Event;

    // When Submit On form;
    $('#regsubmit').on('click', function(e) {
        $('#username').trigger('blur');
        $('#email').trigger('blur');
        $('#password').trigger('blur');
        $('#repassword').trigger('blur');
        for (let i = 0; i < document.querySelectorAll('.alert-error').length; i++) {
            console.log(document.querySelectorAll('.alert-error')[i].style.display);
            if (document.querySelectorAll('.alert-error')[i].style.display == 'inline') {
                e.preventDefault();

            }
        }

    })
});