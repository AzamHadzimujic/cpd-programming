import { View, Text, Pressable } from 'react-native';

export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 10,
      }}
    >
      <Pressable onPress={() => onToggle(todo.id)}>
        <Text
          style={{
            textDecorationLine: todo.done ? 'line-through' : 'none',
          }}
        >
          {todo.title}
        </Text>
      </Pressable>

      <Pressable onPress={() => onRemove(todo.id)}>
        <Text>Delete</Text>
      </Pressable>
    </View>
  );
}