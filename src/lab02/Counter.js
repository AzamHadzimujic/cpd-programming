import { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from './styles';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Count: {count}</Text>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Pressable
          disabled={count === 0}
          onPress={() => setCount(c => Math.max(0, c - 1))}
          style={{
            padding: 12,
            backgroundColor: count === 0 ? 'grey' : 'lightblue',
          }}
        >
          <Text>-1</Text>
        </Pressable>

        <Pressable
          onPress={() => setCount(c => c + 1)}
          style={{ padding: 12, backgroundColor: 'lightblue' }}
        >
          <Text>+1</Text>
        </Pressable>

        <Pressable
          onPress={() => setCount(0)}
          style={{ padding: 12, backgroundColor: 'lightblue' }}
        >
          <Text>Reset</Text>
        </Pressable>
      </View>

      <Pressable
        onPress={() => setLiked(liked => !liked)}
        style={{
          padding: 12,
          marginTop: 20,
          backgroundColor: liked ? 'lightgreen' : 'lightblue',
        }}
      >
        <Text>{liked ? 'Liked (13)' : 'Like (12)'}</Text>
      </Pressable>
    </View>
  );
}