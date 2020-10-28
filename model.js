let model;
let modelPath = 'model/model.json';
let vocabPath = 'model/vocab.json';
let numClasses;

// loadModel function to get model from json.
async function loadModel() {
  const model = await tf.loadLayersModel(modelPath);
  return model;
}

// loadVocab function to get the vocabulary from json.
async function loadVocab() {
  const vocab = JSON.parse(vocabPath);
}


function handleButton(elem){
	switch(elem.id){
		case "0":
			zeroSamples++;
			document.getElementById("zeroSamples").innerText = "Zero samples:" + zeroSamples;
			break;
		case "1":
			oneSamples++;
			document.getElementById("oneSamples").innerText = "One samples:" + oneSamples;
			break;
		case "2":
			twoSamples++;
			document.getElementById("twoSamples").innerText = "Two samples:" + twoSamples;
			break;
		case "3":
			threeSamples++;
			document.getElementById("threeSamples").innerText = "Three samples:" + threeSamples;
			break;
        case "4":
            fourSamples++;
            document.getElementById("fourSamples").innerText = "Four samples" + fourSamples;
            break;
        case "5":
            fiveSamples++;
            document.getElementById("fiveSamples").innerText = "Five samples" + fiveSamples;
            break;
	}
	label = parseInt(elem.id);
	const img = webcam.capture();
	dataset.addExample(mobilenet.predict(img), label);

}

async function predict() {
    
    const predictedClass = tf.tidy(() => {
      const text = document.getElementById("myText").value;
      const tokenisation = tokenise(text);
      const predictions = model.predict(tokenisation);
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
    await tf.nextFrame();
}

function doPredict(){
	predict();
}

async function init(){
	model = await loadModel();
	tf.tidy(() => model.predict(webcam.capture()));

}

init();
