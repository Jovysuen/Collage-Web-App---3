var speechdata=""
var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition()
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
})
camera=document.getElementById("camera")
function start(){
    var synth=window.speechSynthesis
    img_id="selfie1"
    speechdata="Taking your first selfie in 5 seconds"
    var utterthis=new SpeechSynthesisUtterance(speechdata)
    synth.speak(utterthis)
    Webcam.attach(camera)
    setTimeout(() => {
        takephoto1()
        savephoto()
    }, 5000);

    img_id="selfie2"
    speechdata="Taking your second selfie in 5 seconds"
    var utterthis=new SpeechSynthesisUtterance(speechdata)
    synth.speak(utterthis)
    setTimeout(() => {
        takephoto2()
        savephoto()
    }, 10000);

    img_id="selfie3"
    speechdata="Taking your third selfie in 5 seconds"
    var utterthis=new SpeechSynthesisUtterance(speechdata)
    synth.speak(utterthis)
    setTimeout(() => {
        takephoto3()
        savephoto()
    }, 15000);
}

function takephoto1(){
    Webcam.snap(function(data_uri){
        document.getElementById("result1").innerHTML="<img src='"+data_uri+"' id='selfie1'>"
    })
}
    
function takephoto2(){
    Webcam.snap(function(data_uri){
        document.getElementById("result2").innerHTML="<img src='"+data_uri+"' id='selfie2'>"
    })
}
    
function takephoto3(){
    Webcam.snap(function(data_uri){
        document.getElementById("result3").innerHTML="<img src='"+data_uri+"' id='selfie3'>"
    })
}
    