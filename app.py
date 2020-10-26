from flask import Flask,render_template,url_for,request
from keras.preprocessing.text import tokenizer_from_json
from keras.preprocessing.sequence import pad_sequences
from keras.models import load_model
from sklearn import preprocessing
import numpy as np
import json

app = Flask(__name__)

max_len = 75
labels = np.array(['Business News', 'Science-Technology News', 'Sports News',
       'World News'])

model = load_model('model/model.h5')

with open('model/tokeniser.json') as f:
    tokeniser_json = json.load(f)
    tokeniser = tokenizer_from_json(tokeniser_json)

def encode(text):
  text = tokeniser.texts_to_sequences(text)
  return pad_sequences(text, maxlen=max_len)

@app.route('/')
def home():
	return render_template('home.html')

@app.route('/predict',methods=['POST'])
def predict():

    if request.method == 'POST':
        text = request.form['text']
        data = [text]
        my_prediction = labels[np.argmax(model.predict(encode(data)))]
    return render_template('result.html', prediction = my_prediction, text = text)

if __name__ == '__main__':
	app.run(debug=True)
