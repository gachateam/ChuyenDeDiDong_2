import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import Leaderboard from 'react-native-leaderboard';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useAuth} from '../context/AuthContext';

const Rank = () => {
  const state1 = {
    friendData: [
      {
        username: 'Joe Roddy',
        score: 69,
        photoURL:
          'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-braindead-zombie.png',
      },
      {
        username: 'Ericka Johannesburg',
        score: 101,
        photoURL:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShPis8NLdplTV1AJx40z-KS8zdgaSPaCfNINLtQ-ENdPvrtMWz',
      },
      {
        username: 'Tim Thomas',
        score: 41,
        photoURL:
          'http://conserveindia.org/wp-content/uploads/2017/07/teamMember4.png',
      },
    ],
  };

  const {user} = useAuth();

  const [globalData, setGlobalData] = useState();
  // eslint-disable-next-line no-unused-vars
  const [friendData, setFriendData] = useState(state1.friendData);
  const [filter, setFilter] = useState(0);
  const [userRank, setUserRank] = useState(1);
  const [userInRank, setUser] = useState();

  useEffect(() => {
    let globalData1 = [];

    firestore()
      .collection('users')
      .orderBy('score', 'desc')
      .limit(10)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          globalData1 = [...globalData1, documentSnapshot.data()];
          if (documentSnapshot.id === auth().currentUser.uid) {
            setUser(documentSnapshot.data());
          }
        });
        setGlobalData(globalData1);
      });

    auth().currentUser &&
      firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .get()
        .then(documentSnapshot => {
          setUser(documentSnapshot.data());
        });
  }, [user]);

  const alert = (title, body) => {
    Alert.alert(title, body, [{text: 'OK', onPress: () => {}}], {
      cancelable: false,
    });
  };

  const sort = data => {
    const sorted =
      data &&
      data.sort((item1, item2) => {
        return item2.score - item1.score;
      });
    let userRankTemp =
      userInRank && sorted[sorted.length - 1].score <= userInRank.score
        ? sorted.findIndex(item => {
            let name = (userInRank && userInRank.username) || '';
            return item.username === name;
          })
        : -1;
    setUserRank(userRankTemp + 1);
    return sorted;
  };

  const props = {
    labelBy: 'username',
    sortBy: 'score',
    data: filter > 0 ? friendData : globalData,
    icon: 'photoURL',
    onRowPress: item => {
      alert(item.username + ' clicked', item.score + ' points, wow!');
    },
    sort: sort,
  };

  return (
    <View>
      <View colors={['#1da2c6', '#1695b7']} style={styles.topLeaderboard}>
        <Text style={styles.leaderboardText}>Leaderboard</Text>
        <View style={styles.leaderboardRank}>
          <Text style={styles.leaderboardRankText}>
            {ordinal_suffix_of(userRank)}
          </Text>
          <Image
            style={styles.leaderboardRankAvatar}
            source={{
              uri: userInRank
                ? userInRank.photoURL
                : 'https://img.pokemondb.net/artwork/riolu.jpg',
            }}
          />
          <Text style={styles.leaderboardRankScore}>
            {userInRank ? userInRank.score : 0}pts
          </Text>
        </View>
        <ButtonGroup
          onPress={x => {
            setFilter(x);
          }}
          selectedIndex={filter}
          buttons={['Global', 'Friends']}
          containerStyle={styles.buttonGroup}
        />
      </View>
      {globalData && friendData && <Leaderboard {...props} />}
    </View>
  );
};

export default Rank;

const ordinal_suffix_of = i => {
  var j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return i + 'st';
  }
  if (j === 2 && k !== 12) {
    return i + 'nd';
  }
  if (j === 3 && k !== 13) {
    return i + 'rd';
  }
  return i + 'th';
};

const styles = StyleSheet.create({
  topLeaderboard: {
    backgroundColor: '#119abf',
    padding: 15,
    paddingTop: 35,
    alignItems: 'center',
  },
  leaderboardText: {
    fontSize: 25,
    color: 'white',
  },
  leaderboardRank: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  leaderboardRankText: {
    color: 'white',
    fontSize: 25,
    flex: 1,
    textAlign: 'right',
    marginRight: 40,
  },
  leaderboardRankAvatar: {
    flex: 0.66,
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
  },
  leaderboardRankScore: {
    color: 'white',
    fontSize: 25,
    flex: 1,
    marginLeft: 40,
  },
  buttonGroup: {height: 30},
});
