import React, { useState } from 'react';
import Props from '../models/Props';
import '../styles/components/Form.css';

const Form: React.FunctionComponent<Props> = ({ tareas, setTareas }) => {
  const [newTarea, setNewTarea] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTareas([...tareas, newTarea]);
    setNewTarea('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTarea(event.target.value);
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
          onChange={handleChange}
          value={newTarea}
        />
        <button type="submit" className="button">
          Agregar
        </button>
      </div>
    </form>
  );
};

export default Form;
