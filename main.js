function readImage() {
    if (this.files && this.files[0]) { //verifica se um arquivo existe
        var file = new FileReader(); //cria um novo objeto FileReader
        file.onload = function(e) { //adiciona uma função de callback para quando o arquivo for carregado
            document.getElementById("preview").src = e.target.result; //define o src da tag de imagem para a imagem carregada
    }
        };       
        file.readAsDataURL(this.files[0]); //lê o arquivo como uma URL de dados
    }
}
document.getElementById("img-input").addEventListener("change", readImage, false);

//em resumo, a função readImage le um arquivo de imagem selecionado pelo usuário e exibe uma visualização da imagem em uma tag html de img usando uma URL

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
