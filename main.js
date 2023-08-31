Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("camera")

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4STZFb_eX/model.json", model);

function model()
{
    console.log("loaded");
}

function recognize(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_img' src='"+ data_uri +"'>"
    });

    img = document.getElementById("captured_img");
    classifier.classify(img, getResult);
}

function getResult(error, results)
{
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}