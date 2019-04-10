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

    var form = new FormData();
    form.append("uid", $("#call_code").val());
    form.append("title", $("#title").val());
    form.append("subtitle", $("#subtitle").val());
    form.append("presentation", $("input[name=presentation]:checked").val());
    form.append("abstract", $("#abstract").val());
    form.append("notes", $("#notes").val());
    
    for (let index = 0; index <  $("#talk_files")[0].files.length; index++) {
        form.append("file"+index,  $("#talk_files")[0].files[index], ".pdf");
    }
    
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://tacos2019.coli.uni-saarland.de:8080/talk",
      "method": "POST",
      "headers": {
      },
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
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
