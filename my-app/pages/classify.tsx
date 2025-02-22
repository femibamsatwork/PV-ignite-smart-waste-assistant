"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import * as tmImage from "@teachablemachine/image";
import { useClassification } from "../context/ClassificationContext";

const MODEL_URL = "/model/";

export default function Classify() {
  const router = useRouter();
  const { setPredictions } = useClassification();
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const webcamRef = useRef<tmImage.Webcam | null>(null);
  const [isWebcamActive, setIsWebcamActive] = useState<boolean>(false);

  // Load the Teachable Machine model on component mount
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

  // Predict from Uploaded Image
  const predictFromImage = async () => {
    if (model && image) {
      const imgElement = document.createElement("img");
      imgElement.src = image;
      imgElement.onload = async () => {
        const prediction = await model.predict(imgElement);
        setPredictions(prediction);
        // Navigate to the result page
        router.push("/result");
      };
    }
  };

  // Start Webcam
  const startWebcam = async () => {
    if (!isWebcamActive && model) {
      const webcam = new tmImage.Webcam(200, 200, true); // width, height, flip
      await webcam.setup(); // request access to webcam
      await webcam.play();

      

      webcamRef.current = webcam;
      document.getElementById("webcam-container")?.appendChild(webcam.canvas);
      setIsWebcamActive(true);
      requestAnimationFrame(loop); // start prediction loop
    }
  };

  // Continuously predict from Webcam
  const loop = async () => {
    if (webcamRef.current) {
      webcamRef.current.update();
      await predictFromWebcam();
      requestAnimationFrame(loop);
    }
  };

  // Predict from Webcam Frame
  const predictFromWebcam = async () => {
    if (model && webcamRef.current) {
      const prediction = await model.predict(webcamRef.current.canvas);
      // Store predictions in context so user can see real-time changes
      setPredictions(prediction);
    }
  };

  // Stop Webcam
  const stopWebcam = () => {
    if (webcamRef.current) {
      webcamRef.current.stop();
      setIsWebcamActive(false);
    }
  };

  // Once user is happy, go to /result to see final predictions
  const confirmWebcamPrediction = () => {
    router.push("/result");
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Classification Page</h1>

      {/* Image Upload Section */}
      <div>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && (
          <img src={image} alt="Uploaded Waste" className="mt-2 w-48" />
        )}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
        onClick={predictFromImage}
      >
        Predict from Image
      </button>

      {/* Webcam Section */}
      <div className="mt-6">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-md"
          onClick={startWebcam}
        >
          Start Webcam
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md ml-4"
          onClick={stopWebcam}
        >
          Stop Webcam
        </button>

        {/* Webcam Canvas will appear here */}
        <div id="webcam-container" className="mt-4" />

        {isWebcamActive && (
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-2"
            onClick={confirmWebcamPrediction}
          >
            Confirm Webcam Prediction
          </button>
        )}
      </div>
    </div>
  );
}
