import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        'Participante Presente',
        'Já existe um participante com esse nome na lista.',
      );
    }

    if (!participantName) {
      return Alert.alert(
        'Nome Vazio',
        'Por favor, digite um nome para o participante.',
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      'Remover',
      `Deseja remover ${name} da lista de participantes?`,
      [
        {
          text: 'Sim',
          onPress: () => {
            setParticipants((prevState) =>
              prevState.filter((participant) => participant !== name),
            );
            Alert.alert(
              'Participante removido',
              `${name} foi removido da sua lista`,
            );
          },
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient
          colors={['#204073', '#0F1C33']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.headerGradient}
        >
          <Text style={styles.eventName}>Nome do evento</Text>
          <Text style={styles.eventDate}>Quarta, 1 de Março de 2023</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Nome do participante"
              placeholderTextColor="#6b6b6b"
              onChangeText={setParticipantName}
              value={participantName}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleParticipantAdd}
              >
                <Feather name="user-plus" size={24} color="#458AF7" />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>

      <View style={styles.content}>
        <FlatList
          data={participants}
          keyExtractor={(item) => item}
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
              Ninguém chegou no evento ainda? Adicione participantes a sua lista
              de presença.
            </Text>
          )}
        />
      </View>
    </View>
  );
}
