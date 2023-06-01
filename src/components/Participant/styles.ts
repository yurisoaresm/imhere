import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  conatiner: {
    width: '100%',
    backgroundColor: '#252F40',
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#fdfcfe',
    marginLeft: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    backgroundColor: '#252F40',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
