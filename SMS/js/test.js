function print() {
    var tel = document.getElementById("tel").value;
    var mess = document.getElementById("msg").value;
    var msgtxt = mess.split(' ').join('+');
    var http = new XMLHttpRequest();
    var url = "https://rest.nexmo.com/sms/json?api_key=d4207718&api_secret=906b3071c00d5795&from=NEXMO&to=57" + tel + "&text=" + msgtxt;

    console.log("Tel= " + tel);
    console.log("Message= " + mess);
    console.log("URL= " + url);
    $.post(url, function (data) {
        $(".result").html(data);
    });
    alert("Message sent");
}