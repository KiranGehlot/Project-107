function startclassification() {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier= ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/xDuY3YfwB/model.json' , modelready)

}

function modelready() {
    classifier.classify(gotresults)
}

function gotresults(error, results) {
    console.log(results);

}