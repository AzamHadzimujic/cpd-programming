import { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

import AddTodo from '../lab02/AddToDo';
import TodoItem from '../lab02/ToDoItem';
import FilterBar from '../lab02/FilterBar';

export default function Todo() {
  const [filter, setFilter] = useState('all');

  const [todos, setTodos] = useState([
    { id: '1', title: 'Install Expo Go', done: true },
    { id: '2', title: 'Finish Lab 2', done: false },
  ]);

  function addTodo(title) {
    const newTodo = {
      id: Date.now().toString(),
      title,
      done: false,
    };

    setTodos(previous => [...previous, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(previous =>
      previous.map(todo =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  }

  function removeTodo(id) {
    setTodos(previous =>
      previous.filter(todo => todo.id !== id)
    );
  }

  const left = todos.filter(todo => !todo.done).length;

  const visibleTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.done;
    if (filter === 'done') return todo.done;
    return true;
  });

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>To-Do List</Text>
      <Text>{left} left</Text>

      <AddTodo onAdd={addTodo} />

      <FilterBar
        filter={filter}
        onChange={setFilter}
      />

      {todos.length === 0 ? (
        <Text>No tasks yet</Text>
      ) : (
        visibleTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          />
        ))
      )}
    </View>
  );
}