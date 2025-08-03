

import React from 'react';

export default function WellnessTrackerApp() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Wellness Tracker</h1>
        <p className="text-lg text-gray-600">Track your habits, meals, and progress</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Today's Habits</h2>
          <ul className="list-disc list-inside">
            <li>Meditation ✅</li>
            <li>Exercise ⏳</li>
            <li>8+ Glasses of Water ✅</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Meals</h2>
          <ul className="list-disc list-inside">
            <li>Breakfast: Oatmeal</li>
            <li>Lunch: Grilled chicken salad</li>
            <li>Dinner: Veggie stir-fry</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">Progress Chart</h2>
          <p className="text-sm text-gray-500">(Chart placeholder)</p>
          <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            [Progress Chart Here]
          </div>
        </div>
      </section>
    </div>
  );
}
