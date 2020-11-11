import React, { useState } from 'react';
import '../styles/components/App.css';
import Form from './Form';
import ListTodos from './ListTodos';

const App = () => {
  const [tareas, setTareas] = useState<Array<string>>([]);

  return (
    <div className="app">
      <div className="app__container">
        <Form tareas={tareas} setTareas={setTareas} />
        <ListTodos tareas={tareas} setTareas={setTareas} />
      </div>
    </div>
  );
};
export default App;
