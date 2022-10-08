import React from 'react';
import './App.css';
import Form from './components/Form';
import IntroForm from './components/IntroForm';

function App() {
  return (
    <div className="w-screen flex flex-col lg:h-screen lg:flex-row">
      <IntroForm />
      <Form />
    </div>
  );
}

export default App;
