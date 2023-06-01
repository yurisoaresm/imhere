import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type Props = {
  name: string;
  onRemove: () => void;
};

export function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Feather name="trash-2" size={24} color="#B83238" />
      </TouchableOpacity>
    </View>
  );
}
