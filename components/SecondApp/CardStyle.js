import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  cardHeading: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  cardbody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 8,
    backgroundColor: 'red',
  },
  cardOne: {
    backgroundColor: '#ff4000',
  },
  cardTwo: {
    backgroundColor: '#00bfff',
  },
  cardThree: {
    backgroundColor: '#ffbf00',
  },
});

export default styles;
