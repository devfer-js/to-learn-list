import React from 'react';
import '../styles/components/Form.css';

const Form = ({ tareas, setTareas }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const { tarea } = event.target;
    setTareas([...tareas, tarea.value]);
    tarea.value = '';
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form--title">¿Que deseas aprender?</h1>
      <div className="form__input-container">
        <input
          className="input"
          type="text"
          autoComplete="off"
          name="tarea"
          placeholder="React, Angular, Vue"
        />
        <button type="submit" className="button">
          Agregar
        </button>
      </div>
    </form>
  );
};

export default Form;
