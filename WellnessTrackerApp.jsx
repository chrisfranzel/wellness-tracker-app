
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WellnessTrackerApp() {
  const [habits, setHabits] = useState([
    { name: 'Meditation', done: true },
    { name: 'Exercise', done: false },
    { name: '8+ Glasses of Water', done: true },
  ]);

  const toggleHabit = (index) => {
    const updated = [...habits];
    updated[index].done = !updated[index].done;
    setHabits(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-indigo-100 text-gray-900 p-6">
      <header className="text-center mb-10">
        <motion.h1 layout className="text-5xl font-extrabold mb-2 text-indigo-800 drop-shadow-sm">
          Wellness Tracker
        </motion.h1>
        <p className="text-xl text-indigo-600 font-medium">
          Track your habits, meals, and progress
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          layout
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
        >
          <h2 className="text-2xl font-semibold mb-3 text-teal-700">Today's Habits</h2>
          <ul className="space-y-2">
            {habits.map((habit, index) => (
              <li
                key={index}
                className="flex items-center justify-between text-gray-700 cursor-pointer"
                onClick={() => toggleHabit(index)}
              >
                <span>{habit.name}</span>
                <span className={habit.done ? 'text-green-500' : 'text-yellow-500'}>
                  {habit.done ? '✔' : '⏳'}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          layout
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
        >
          <h2 className="text-2xl font-semibold mb-3 text-teal-700">Meals</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>Breakfast:</strong> Oatmeal</li>
            <li><strong>Lunch:</strong> Grilled chicken salad</li>
            <li><strong>Dinner:</strong> Veggie stir-fry</li>
          </ul>
        </motion.div>

        <motion.div
          layout
          className="bg-white p-6 rounded-2xl shadow-lg md:col-span-2 hover:shadow-xl transition duration-300"
        >
          <h2 className="text-2xl font-semibold mb-3 text-teal-700">Progress Chart</h2>
          <p className="text-sm text-gray-500 mb-3">(Chart placeholder)</p>
          <div className="h-52 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            [Progress Chart Coming Soon]
          </div>
        </motion.div>
      </section>
    </div>
  );
}