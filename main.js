// here is the link:
//https://teachablemachine.withgoogle.com/models/Y3g8EPXY5/

Webcam.set({
    width:360,
    height:310,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("webcam");

Webcam.attach('#webcam');

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("picture").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    })
}



classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Y3g8EPXY5/model.json',modelLoaded);

function modelLoaded() {
    //will do after next class project
}

function btn_warning_func() {
    window.location = "index2.html";
}