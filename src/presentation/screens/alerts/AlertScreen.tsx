import React, {useContext} from 'react';
import {Alert, Text, View} from 'react-native';

import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import {showPrompt} from '../../../config/adapters/prompt.adapter';
import {ThemeContext} from '../../context/ThemeContext';

export const AlertScreen = () => {
  const {isDark} = useContext(ThemeContext);
  const createTwoButtonAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        userInterfaceStyle: isDark ? 'dark' : 'light',
      },
    );
  };

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        userInterfaceStyle: isDark ? 'dark' : 'light',
      },
    );

  const onShowPrompt = () => {
    showPrompt({
      title: 'Are you sure?',
      subTtitle: 'This action cannot be undone',
      buttons: [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      promptType: 'plain-text',
      placeholder: 'Type something',
    });
    // Codigo Nativo
    // Alert.prompt(
    //   'Are you sure?',
    //   'This action cannot be undone',
    //   (value: string) => console.log('Prompt value:', value),
    // );
  };
  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alerts" />

      <Button text="Alerta - 2 Botones" onPress={createTwoButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Alerta - 3 Botones" onPress={createThreeButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Promp - Input" onPress={onShowPrompt} />
    </CustomView>
  );
};
