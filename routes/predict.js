// const express = require('express');
 //import * as tf from '@tensorflow/tfjs-node'
// const fs = require('fs').promises;
// const router=express.Router();
// let model;
// async function loadModel() {
//   const modelJsonPath = '../assets/model.json'; // Update with the path to your model.json file
//   const modelWeightPath = '../assets/group1-shard1of1.bin'; // Update with the path to your group1-shard1of1.bin file
//   model = await tf.loadLayersModel('http://192.168.1.32:8080/model/model.json');
//   console.log('Model loaded');
// }
// router.get('/predict', async (req, res) => {
//   const inputData = req.query.inputData.split(',').map(Number); // Assuming input data is provided as a comma-separated string of numbers
//   const inputTensor = tf.tensor2d([inputData]);
//   const prediction = model.predict(inputTensor);
//   res.send(prediction.dataSync());
// });

// export default router;