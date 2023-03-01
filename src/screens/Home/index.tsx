import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  const participants = ['Yuri', 'Marcos', 'Juan', 'Flavio', 'Fabio', 'Maria', 'Ana', 'Júlia']

  function handleParticipantAdd() {
    if (participants.includes('Yuri')) {
      return Alert.alert('Participante Presente', 'Já existe um participante com esse nome na lista.')
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Deseja remover ${name} da lista de participantes?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Participante removido', `O participante foi removido com sucesso!`)
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}> 
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Quarta, 1 de Março de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}
