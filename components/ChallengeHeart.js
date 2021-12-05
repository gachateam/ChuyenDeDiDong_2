import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useQuestion} from '../context/QuestionContext';
import {ACTIONS} from './../context/QuestionContext/Action';
import {ACTIONS as ACTIONS_GLOBAL} from './../context/Action';
import {useGlobal} from '../context/GlobalContext';

const ChallengeHeart = ({navigation}) => {
  const {check, questionIncorrect, dispatch} = useQuestion();
  const {hideTabBar, review} = useGlobal();

  useEffect(() => {
    if (review) {
      dispatch({type: ACTIONS.CHECK});
      if (check.current === 0) {
        dispatch({type: ACTIONS_GLOBAL.HIDE_TAB_BAR, payload: !hideTabBar});
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'StageScreen',
            },
          ],
        });
        dispatch({type: ACTIONS_GLOBAL.SET_REVIEW, payload: false});
        // dispatch({type: ACTIONS.SET_CHECK_DEFAULT});
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionIncorrect]);

  return (
    <View style={styles.review}>
      {[...Array(check.max)].map((e, i) => (
        <AntDesign
          name={i < check.current ? 'heart' : 'heart'}
          color={i < check.current ? 'red' : '#828282'}
          size={24}
          key={i}
          style={styles.heart}
        />
      ))}
    </View>
  );
};

export default ChallengeHeart;

const styles = StyleSheet.create({
  review: {
    paddingTop: 5,
    alignItems: 'flex-end',
    flexDirection: 'row-reverse',
  },
  heart: {
    paddingHorizontal: 2.5,
  },
});
