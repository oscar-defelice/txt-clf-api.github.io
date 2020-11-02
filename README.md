# Api for text classifier model

## Introduction
This repository contains the code useful to publish a web Api to input and predict the class of a text.
The input text will be fed to a pretrained model, deployed in [tensorflowjs](https://www.tensorflow.org/js).

## Components
- Backend: 
    * v1. Flask (I know that TFJS supports node now but for the sake of suitable preprocessing it's in python).
    * v2. Python
- Preprocessing: conversion of text in sequences.
- Frontend: tensorflowjs (I have a script in head from cdn, made for python developers in order not to download a module).

## Model
Model deployed in a tensorflowjs format.

#### Usage
Simply open the [webpage](https://oscar-defelice.github.io/txt-clf-api.github.io).
Input a text and press predict.

### Enjoy!

#### p.s. this repository served as the base for [this Medium post](https://oscar-defelice.medium.com/the-full-stack-story-of-a-text-classifier-842abad9ff16?source=friends_link&sk=8141357dfb695b42594584642b42950a&fbclid=IwAR2__F9MQqq22s_DkdFvhFKwFFXH5DZpThZATGR5Kee8UhN343uVcLeiCsY)
