import { View, Text, Pressable } from 'react-native';

export default function FilterBar({ filter, onChange }) {
  return (
    <View style={{ flexDirection: 'row', gap: 10 }}>
      {['all', 'active', 'done'].map(item => (
        <Pressable
          key={item}
          onPress={() => onChange(item)}
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
  );
}