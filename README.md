# Api for text classifier model

## Introduction
This repository contains the code useful to publish a web Api to input and predict the class of a text.
The input text will be fed to a pretrained model, deployed in [tensorflowjs](https://www.tensorflow.org/js).

## Components
- Backend: Flask (I know that TFJS supports node now but for the sake of suitable preprocessing it's in python)
- Preprocessing: cv2, numpy, any python library you want
- Frontend: tensorflowjs (I have a script in head from cdn, made for python developers in order not to download a module)

## Model
Model deployed in a tensorflowjs format.

#### Usage
Simply open the [webpage](oscar-defelice.github.io/txt-clf-api.github.io).
Input a text and press predict.

### Enjoy!
