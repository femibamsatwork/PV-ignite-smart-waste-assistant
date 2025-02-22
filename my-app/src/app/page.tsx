"use client";
import { useEffect, useState, useRef } from "react";
import * as tmImage from "@teachablemachine/image";

const MODEL_URL = "https://teachablemachine.withgoogle.com/models/TfYbgxNmf/"; // Update with your model path

export default function WasteClassifier() {
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null);
  const [predictions, setPredictions] = useState<{ className: string; probability: number }[]>([]);
  const [image, setImage] = useState<string | null>(null);
  const webcamRef = useRef<tmImage.Webcam | null>(null);
  const [isWebcamActive, setIsWebcamActive] = useState<boolean>(false);

  // Load Teachable Machine model
  useEffect(() => {
    async function loadModel() {
      const modelURL = `${MODEL_URL}model.json`;
      const metadataURL = `${MODEL_URL}metadata.json`;
      const loadedModel = await tmImage.load(modelURL, metadataURL);
      setModel(loadedModel);
    }
    loadModel();
  }, []);

  // Handle Image Upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Predict from Image
  const predictFromImage = async () => {
    if (model && image) {
      const imgElement = document.createElement("img");
      imgElement.src = image;
      imgElement.onload = async () => {
        const prediction = await model.predict(imgElement);
        setPredictions(prediction);
      };
    }
  };

  // Initialize Webcam
  const startWebcam = async () => {
    if (!isWebcamActive && model) {
      const webcam = new tmImage.Webcam(200, 200, true);
      await webcam.setup();
      await webcam.play();
      webcamRef.current = webcam;
      document.getElementById("webcam-container")?.appendChild(webcam.canvas);
      setIsWebcamActive(true);
      requestAnimationFrame(loop);
    }
  };

  const loop = async () => {
    if (webcamRef.current) {
      webcamRef.current.update();
      await predictFromWebcam();
      requestAnimationFrame(loop);
    }
  };

  const predictFromWebcam = async () => {
    if (model && webcamRef.current) {
      const prediction = await model.predict(webcamRef.current.canvas);
      setPredictions(prediction);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Smart Waste Sorting Assistant</h1>

      {/* Image Upload */}
      <div className="mb-4">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && <img src={image} alt="Uploaded Waste" className="mt-2 w-48" />}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
        onClick={predictFromImage}
      >
        Predict from Image
      </button>

      {/* Webcam */}
      <div className="mt-6">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={startWebcam}
        >
          Start Webcam
        </button>
        <div id="webcam-container" className="mt-4"></div>
      </div>

      {/* Predictions */}
      {predictions.length > 0 && (
        <div className="mt-6 p-4 bg-white shadow-md rounded-md w-64">
          <h2 className="text-lg font-semibold mb-2">Predictions:</h2>
          {predictions.map((p, i) => (
            <p key={i}>
              {p.className}: <strong>{(p.probability * 100).toFixed(2)}%</strong>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
