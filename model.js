let model;
let vocab;
let word2index;
let modelPath = 'model/model.json';
let vocabPath = 'https://raw.githubusercontent.com/oscar-defelice/txt-clf-api.github.io/main/model/vocab.json';
let maxLen = 75;
let numClasses;

// loadModel function to get model from json.
async function loadModel() {
  const model = await tf.loadLayersModel(modelPath);
  return model;
}

async function loadVocab() {
    let vocab = await (await fetch(vocabPath)).json();
    return vocab;
}

function tokenise(text) {
    text = text.toLowerCase();
    var splitted_text = text.split(' ');
    var tokens = [];
    splitted_text.forEach(element => {
        if (word2index[element] != undefined) {
            tokens.push(word2index[element]);
        }
    });
    while (tokens.length < maxLen) {
        tokens.push(0);
    }

return tokens.slice(0,maxLen);
}

async function predict() {
    const predictedClass = tf.tidy(() => {
      const text = document.getElementById("myText").value;
      const tokenisation = tokenise(text, word2index);
      const predictions = model.predict(tf.tensor2d(tokenisation, [1, maxLen]));
      return predictions.as1D().argMax();
    });

    const classId = (await predictedClass.data())[0];
    var predictionText = "";
    switch(classId){
		case 0:
			predictionText = "Text is classified as Business News";
			break;
		case 1:
			predictionText = "Text is classified as Science-Technology News";
			break;
		case 2:
			predictionText = "Text is classified as Sport News";
			break;
		case 3:
			predictionText = "Text is classified as World News";
			break;
	}
	document.getElementById("prediction").innerText = predictionText;


    predictedClass.dispose();
}

function doPredict(){
	predict();
}

async function init(){
	model = await loadModel();
    word2index = await loadVocab();
}

init();
