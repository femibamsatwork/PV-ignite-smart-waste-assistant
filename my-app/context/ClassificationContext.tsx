"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
// import { Prediction } from "@teachablemachine/image";

interface Prediction {
    className: string;
    probability: number;
  }

interface ClassificationContextValue {
  predictions: Prediction[];
  setPredictions: (predictions: Prediction[]) => void;
}

const ClassificationContext = createContext<ClassificationContextValue>({
  predictions: [],
  setPredictions: () => {}
});

export function useClassification() {
  return useContext(ClassificationContext);
}

interface ClassificationProviderProps {
  children: ReactNode;
}

export default function ClassificationProvider({ children }: ClassificationProviderProps) {
  const [predictions, setPredictions] = useState<Prediction[]>([]);

  return (
    <ClassificationContext.Provider value={{ predictions, setPredictions }}>
      {children}
    </ClassificationContext.Provider>
  );
}
