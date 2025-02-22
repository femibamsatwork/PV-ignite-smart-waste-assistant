"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to the Smart Waste Sorting Assistant
      </h1>
      <p className="mb-4">Use AI to classify waste items from images or webcam feed.</p>
      <Link href="/classify">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </Link>
    </div>
  );
}
