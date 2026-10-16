import { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import { styles } from './styles';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  function handleAdd() {
    const title = text.trim();

    if (title === '') return;

    onAdd(title);
    setText('');
  }

  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="New task"
        style={styles.input}
      />

      <Pressable onPress={handleAdd}>
        <Text>Add</Text>
      </Pressable>
    </View>
  );
}