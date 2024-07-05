import "./App.css";
import React, { useState } from 'react';

function App() {
  let [todo, setTodo] = useState([{id: 1, content: 'React를 배워봅시다'}]);
  let [content, setContent] = useState('');

  function changeHandler (event) {
    setContent(event.target.value)
  }

  // Todo 추가하기
  function addHandler () {
    const newTodo = {
      id: todo.length + 1,
      content: content,
    };
    
    setTodo([...todo, newTodo]);
    setContent('');
  }

  return (
    <div>
      <div className="add-style">
        <input value={content} onChange={changeHandler} />
        <button onClick={addHandler}>추가하기</button>
      </div>

      <h1 className="header-style">To Do List</h1>

      <div className="todo-area-style">
        {todo.map(function (item) {
          return <div className="todo-style" key={item.id}>{item.content}</div>
          })
        }
      </div>

    </div>
  );
}

export default App;
