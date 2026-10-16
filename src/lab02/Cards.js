
import { Text, View } from 'react-native';
import { styles } from './styles';

function ProfileCard({ name, role, year }) {
  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      <Text>{role} · Year {year}</Text>
    </View>
  );
}

export default function Cards() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Lab 2</Text>

      <Section title="Team">
        <ProfileCard name="Ana" role="Student" year={3} />
        <ProfileCard name="Marko" role="Student" year={2} />
        <ProfileCard
          name="Ivana"
          role="Teaching assistant"
          year={5}
        />
      </Section>
    </View>
  );
}

function Section({ title, children }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}