"use client";

import { useState } from "react";

type Routine = {
  title: string;
  id: number;
  todos: RoutineTodo[];
};

type RoutineTodo = {
  title: string;
  state: boolean;
  id: number;
  step: number;
};

export default function Home() {
  const [routineTitle, setRoutineTitle] = useState("");
  const [currentRoutineIndex, setCurrentRoutineIndex] = useState(0);
  const [routinesStore, setRoutinesStore] = useState<Routine[]>([]);

  const handleAddRoutine = () => {
    // Limit the number of routines to 5.
    if (currentRoutineIndex === 5) {
      return;
    }

    if (routineTitle.trim() !== "") {
      const routine: Routine = {
        title: routineTitle,
        id: currentRoutineIndex,
        todos: [],
      };
      setRoutinesStore([...routinesStore, routine]);
      setRoutineTitle("");
      setCurrentRoutineIndex(currentRoutineIndex + 1);
    }
  };

  // TODO: make each routine clickable to display the content of the routine.
  const renderRoutines = () => {
    return (
      <>
        {routinesStore.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-green-300 rounded-xl w-full gap-8 px-12 py-8"
          >
            <h2 className="text-xl">{item.title}</h2>
            <div className="flex gap-4">
              <button className="bg-blue-400 rounded-xl px-8 py-4">View</button>
              <button className="bg-red-300 rounded-xl px-8 py-4">
                Delete
              </button>
            </div>
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
          <p className="text-gray-600 mb-4">
            You can only add up to 5 routines. Keep it small, simple.
          </p>
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
