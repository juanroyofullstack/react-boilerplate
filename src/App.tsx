import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <img src={logo} className="w-32 h-32 mx-auto animate-spin mb-6" alt="logo" />
        <p className="text-lg text-gray-700 mb-6">
          Edit <code className="bg-gray-100 px-2 py-1 rounded text-red-600">src/App.tsx</code> and save to reload.
        </p>
        <a
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
