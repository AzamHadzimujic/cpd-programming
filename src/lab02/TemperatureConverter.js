import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState('0');
  const [lastEdited, setLastEdited] = useState('celsius');

  const fahrenheit =
    celsius === '' ? '' : (Number(celsius) * 9 / 5 + 32).toString();

  const displayedCelsius =
    lastEdited === 'fahrenheit' && fahrenheit !== ''
      ? ((Number(fahrenheit) - 32) * 5 / 9).toString()
      : celsius;

  function handleCelsiusChange(value) {
    setCelsius(value);
    setLastEdited('celsius');
  }

  function handleFahrenheitChange(value) {
    setLastEdited('fahrenheit');

    if (value.trim() === '') {
      setCelsius('');
      return;
    }

    const converted = ((Number(value) - 32) * 5 / 9).toString();
    setCelsius(converted);
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Temperature Converter</Text>

      <Text>Celsius (°C)</Text>
      <TextInput
        value={lastEdited === 'celsius' ? celsius : displayedCelsius}
        onChangeText={handleCelsiusChange}
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter Celsius"
      />

      <Text>Fahrenheit (°F)</Text>
      <TextInput
        value={
          lastEdited === 'fahrenheit'
            ? (celsius === ''
                ? ''
                : (Number(celsius) * 9 / 5 + 32).toString())
            : fahrenheit
        }
        onChangeText={handleFahrenheitChange}
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter Fahrenheit"
      />
    </View>
  );
}