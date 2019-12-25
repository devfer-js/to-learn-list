/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import '../styles/components/ListTodos.css';
import noFound from '../assets/img/noFound.png';

const ListTodos = ({ tareas, setTareas }) => {
  const handleClick = id => {
    const newTareas = [...tareas];
    newTareas.splice(id, 1);
    setTareas(newTareas);
  };
  return (
    <div className="container-todos">
      {!(tareas.length === 0) ? (
        <div>
          <h2 className="container-todos--title">Debo aprender:</h2>
          <ul className="container-todos__list">
            {tareas.map((tarea, id) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <li
                className="container-todos__list--item"
                // eslint-disable-next-line react/no-array-index-key
                key={`${tarea}-${id}-${Math.round(Math.random() * 10)}`}
                onClick={() => handleClick(id)}
              >
                {tarea}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="container-todos__image">
          <img
            className="container-todos__image--img"
            src={noFound}
            alt="No todos"
          />
          <h1>Nunca pares de aprender</h1>
          <h3>Aun no tienes cosas que aprender</h3>
        </div>
      )}
    </div>
  );
};

export default ListTodos;
