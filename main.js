function readImage() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.getElementById("preview").src = e.target.result;
        };       
        file.readAsDataURL(this.files[0]);
    }
}
document.getElementById("img-input").addEventListener("change", readImage, false);

console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jpkbcvxIc/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    img = document.getElementById('preview');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("resultObjectName").innerHTML = results[0].label;
    document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}