
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

import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

export default function WellnessTrackerApp() {
  const [habits, setHabits] = useState([
    { name: 'Meditation', done: true },
    { name: 'Exercise', done: false },
    { name: '8+ Glasses of Water', done: true },
  ]);

  const [meals, setMeals] = useState({
    breakfast: '',
    lunch: '',
    dinner: ''
  });

  const toggleHabit = (index) => {
    const updated = [...habits];
    updated[index].done = !updated[index].done;
    setHabits(updated);
  };

  const handleMealChange = (mealType, value) => {
    setMeals({ ...meals, [mealType]: value });
  };

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Completed Habits',
        data: [2, 3, 1, 4, 2, 3, 5],
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Weekly Habit Progress' },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-purple-100 text-gray-900 p-6 font-sans">
      <header className="text-center mb-12">
        <motion.h1 layout className="text-6xl font-black mb-3 text-purple-800 drop-shadow-md">
          🌿 Wellness Tracker
        </motion.h1>
        <p className="text-xl text-purple-600 font-medium">
          Track your habits, meals, and weekly progress visually
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <motion.div
          layout
          className="bg-white p-6 rounded-3xl shadow-xl border border-purple-100 hover:shadow-2xl transition duration-300"
        >
          <h2 className="text-3xl font-semibold mb-5 text-purple-700">✅ Today's Habits</h2>
          <ul className="space-y-4">
            {habits.map((habit, index) => (
              <li
                key={index}
                className="flex items-center justify-between text-gray-700 px-4 py-2 rounded-lg bg-gray-50 hover:bg-purple-50 cursor-pointer transition"
                onClick={() => toggleHabit(index)}
              >
                <span className="text-lg">{habit.name}</span>
                <span className={habit.done ? 'text-green-500' : 'text-yellow-500 text-xl'}>
                  {habit.done ? '✔' : '⏳'}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          layout
          className="bg-white p-6 rounded-3xl shadow-xl border border-purple-100 hover:shadow-2xl transition duration-300"
        >
          <h2 className="text-3xl font-semibold mb-5 text-purple-700">🍽️ Meals</h2>
          <div className="space-y-4">
            {['breakfast', 'lunch', 'dinner'].map((meal) => (
              <div key={meal} className="flex flex-col">
                <label className="capitalize text-sm text-gray-600 mb-1">{meal}</label>
                <input
                  type="text"
                  value={meals[meal]}
                  onChange={(e) => handleMealChange(meal, e.target.value)}
                  className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
                  placeholder={`Enter your ${meal}`}
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="bg-white p-6 rounded-3xl shadow-xl border border-purple-100 lg:col-span-1 hover:shadow-2xl transition duration-300"
        >
          <h2 className="text-3xl font-semibold mb-5 text-purple-700">📈 Progress Chart</h2>
          <div className="bg-white rounded-xl p-2">
            <Line options={options} data={data} />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
useEffect(() => {
  const savedHabits = JSON.parse(localStorage.getItem('habits'));
  const savedMeals = JSON.parse(localStorage.getItem('meals'));
  if (savedHabits) setHabits(savedHabits);
  if (savedMeals) setMeals(savedMeals);
}, []);

useEffect(() => {
  localStorage.setItem('habits', JSON.stringify(habits));
  localStorage.setItem('meals', JSON.stringify(meals));
}, [habits, meals]);
