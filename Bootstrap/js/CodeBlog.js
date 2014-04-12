$('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

$('.nav-tabs').click(function (e) {
    $('.modal-footer').show();
});

$('#txtPassword').keyup(function () {
    var pswd = $(this).val();
    if (pswd.length < 8) {
        $('#length').removeClass('valid').addClass('invalid');
    } else {
        $('#length').removeClass('invalid').addClass('valid');
    }
    //validate letter
    if ( pswd.match(/[A-z]/) ) {
        $('#letter').removeClass('invalid').addClass('valid');
    } else {
        $('#letter').removeClass('valid').addClass('invalid');
    }

    //validate capital letter
    if ( pswd.match(/[A-Z]/) ) {
        $('#capital').removeClass('invalid').addClass('valid');
    } else {
        $('#capital').removeClass('valid').addClass('invalid');
    }

    //validate number
    if ( pswd.match(/\d/) ) {
        $('#number').removeClass('invalid').addClass('valid');
    } else {
        $('#number').removeClass('valid').addClass('invalid');
    }
}).focus(function () {
    $('#pswd_info').show();
}).blur(function () {
    $('#pswd_info').hide();
});

function confirmPass() {
    var pass = document.getElementById("txtPassword").value
    var confPass = document.getElementById("txtConfirmPassword").value
    if (pass != confPass) {
        alert('Wrong confirm password !');
    }
}


function CustomAlert() {
    this.render = function (dialog) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";
        dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "Acknowledge This Message";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
    }
    this.ok = function () {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
}
var Alert = new CustomAlert();


//****************** ToolTips*********************
$('#deletePost').tooltip();
$('#editPost').tooltip();
$('#commentOnPost').tooltip();
$('#homeButton').tooltip();
$('#contactMe').tooltip();




