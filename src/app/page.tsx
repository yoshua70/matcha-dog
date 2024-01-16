"use client";

import { useState } from "react";

export default function Home() {
  const [routineTitle, setRoutineTitle] = useState("");
  const [routines, setRoutines] = useState<string[]>([]);

  const handleAddRoutine = () => {
    if (routineTitle.trim() !== "") {
      setRoutines([...routines, routineTitle]);
      setRoutineTitle("");
    }
  };

  const renderRoutines = () => {
    return (
      <>
        {routines.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-green-300 rounded-xl w-full px-8 py-4"
          >
            <h2>{item}</h2>
          </div>
        ))}
      </>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col gap-8 bg-gray-50 px-4 py-8 rounded-xl text-black">
        <div className="flex flex-col w-full items-start">
          <h1 className="text-4xl mb-4">Routines</h1>
          <div className="flex flex-col gap-2 w-full">{renderRoutines()}</div>
        </div>
        <input
          placeholder="My awesome routine..."
          type="text"
          className="bg-gray-200 w-full rounded-xl px-12 py-8"
          value={routineTitle}
          onChange={(e) => setRoutineTitle(e.target.value)}
        />
        <button
          className="bg-blue-300 rounded-xl px-12 py-8"
          onClick={handleAddRoutine}
        >
          Create New Routine
        </button>
      </div>
    </main>
  );
}
