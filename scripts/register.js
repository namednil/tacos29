function register() {
    console.log("register");
    var success = function (res) {
        console.log(res)
        if (res.status == "OK") {
            $('#confirm-text').css("color", "green")
        } else if (res.status == "ERROR") {
            $('#confirm-text').css("color", "red")
        }
        $("#confirm-text").html(res.message);
    }
    $.ajax({
        type: "POST",
        url: "https://tacos2019.coli.uni-saarland.de:8080/register",
        data: $("#register-form").serialize(),
        success: success,
        dataType: 'json',
        error: function (xhr) {
            console.error(xhr)
        }
    });
    return true;
}
function register_talk() {
    var success = function (res) {
        console.log(res)
        if (res.status == "OK") {
            $('#call-text').css("color", "green")
        } else if (res.status == "ERROR") {
            $('#call-text').css("color", "red")
        }
        $("#call-text").html(res.message);
    }
        
    var form = $('#paper-form')[0];
    console.log(form)
    console.log($('#paper-form'))
    console.log($('#paper-form')[0])
    var data = new FormData(form);
    data.append("talk_file", document.getElementById("docpicker").files[0]);
    console.log(data)
    
    $.ajax({
        type: "POST",
        enctype: "multipart/form-data",
        processData: false,  // Important!
        contentType: "multipart/form-data",
        cache: false,
        url: "https://tacos2019.coli.uni-saarland.de:8080/talk",
        data: data,//$("#paper-form").serialize(),
        success: success,
        dataType: 'json',
        error: function (xhr) {
            console.error(xhr)
        }
    });
}

function checkCode() {
    var success = function (res) {
        console.log(res);
        if (res == "Please insert a code." || res == "You are not registered yet. Please register above." ) {
            $('#code-text').css("color", "red")
        } else {
            $('#code-text').css("color", "green")
        }
        $("#code-text").html(res);
    }
    var uid = $("#code").val()
    $.ajax({
        type: "GET",
        url: "https://tacos2019.coli.uni-saarland.de:8080/fee",
        data: { uid: uid },
        success: success,
        error: function (xhr) {
            console.error(xhr)
        }
    });
}
