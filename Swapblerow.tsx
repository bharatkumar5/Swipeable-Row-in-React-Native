import React, {Component, PropsWithChildren, useRef, ReactNode} from 'react';
import {Animated, StyleSheet, I18nManager, View, Text} from 'react-native';

import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
  Animation,
} from 'react-native-reanimated';

interface Message {
  from: string;
  when: string;
  message: string;
}

interface MyComponentProps {
  item: Message;
  children: ReactNode;
}

const Gmailswap: React.FC<MyComponentProps> = ({children, item}) => {
  const swipeableRowRef = useRef(null);

  function renderLeftActions(
    prog: SharedValue<number>,
    drag: SharedValue<number>,
  ) {
    const styleAnimation = useAnimatedStyle(() => {
      return {
        flex: 1,
        backgroundColor: '#800000',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
        width: '100%',
      };
    });

    return (
      <Reanimated.View style={styleAnimation}>
        <View>
          {' '}
          <Text> Deleted</Text>
        </View>
      </Reanimated.View>
    );
  }

  return (
    <Swipeable
      ref={swipeableRowRef}
      friction={2}
      leftThreshold={150}
      enableTrackpadTwoFingerGesture
      onSwipeableOpen={direction => {
        if (direction === 'left') {
        } else {
        }
      }}
      renderLeftActions={renderLeftActions}>
      {children}
    </Swipeable>
  );
};

export default Gmailswap;
