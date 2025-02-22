"use client";
import { useClassification } from "../context/ClassificationContext";
import { useState } from "react";

interface Prediction {
  className: string;
  probability: number;
}

export default function Result() {
  const { predictions } = useClassification();

  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Result Page</h1>
      {predictions.length > 0 ? (
        <div className="p-4 bg-white shadow-md rounded-md w-64">
          <h2 className="text-lg font-semibold mb-2">Predictions:</h2>
          {predictions.map((p, i) => (
            <p key={i}>
              {p.className}: <strong>{(p.probability * 100).toFixed(2)}%</strong>
            </p>
          ))}
        </div>
      ) : (
        <p>No predictions yet. Please go back and classify an image or use the webcam.</p>
      )}
    </div>
  );
}
