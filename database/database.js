import {firebase} from '@react-native-firebase/database';

const database = firebase
  .app()
  .database(
    'https://englishlearning-ec586-default-rtdb.asia-southeast1.firebasedatabase.app/',
  );

export default database;
