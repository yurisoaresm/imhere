import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1526',
  },
  headerContainer: {
    height: 239,
    width: '100%',
    paddingHorizontal: 24,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    shadowOffset: {height: 9, width: 0},
    shadowRadius: 15,
    shadowColor: '#000',
  },
  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#252F40',
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    color: '#fdfcfe',
    padding: 16,
    marginRight: 0,
    fontSize: 16,
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
  content: {
    padding: 24,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: '#fdfcfe',
    fontSize: 14,
    textAlign: 'center',
  }
});
