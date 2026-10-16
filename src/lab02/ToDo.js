
import { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { styles } from './styles';

export default function Todo() {
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all');

  const [todos, setTodos] = useState([
    { id: '1', title: 'Install Expo Go', done: true },
    { id: '2', title: 'Finish Lab 2', done: false },
  ]);

  function addTodo() {
    const title = text.trim();

    if (title === '') {
      return;
    }

    const newTodo = {
      id: Date.now().toString(),
      title: title,
      done: false,
    };

    setTodos(previous => [...previous, newTodo]);
    setText('');
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

  function deleteTodo(id) {
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

      <View style={{ flexDirection: 'row', gap: 8 }}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="New task"
          style={styles.input}
        />

        <Pressable onPress={addTodo}>
          <Text>Add</Text>
        </Pressable>
      </View>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        {['all', 'active', 'done'].map(item => (
          <Pressable
            key={item}
            onPress={() => setFilter(item)}
            style={{
              padding: 8,
              backgroundColor:
                filter === item ? 'lightblue' : 'lightgrey',
            }}
          >
            <Text>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Text>
          </Pressable>
        ))}
      </View>

      {todos.length === 0 ? (
        <Text>No tasks yet</Text>
      ) : (
        visibleTodos.map(todo => (
          <View
            key={todo.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginTop: 10,
            }}
          >
            <Pressable onPress={() => toggleTodo(todo.id)}>
              <Text
                style={{
                  textDecorationLine:
                    todo.done ? 'line-through' : 'none',
                }}
              >
                {todo.title}
              </Text>
            </Pressable>

            <Pressable onPress={() => deleteTodo(todo.id)}>
              <Text>Delete</Text>
            </Pressable>
          </View>
        ))
      )}
    </View>
  );
}