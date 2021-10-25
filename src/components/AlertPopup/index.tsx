import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import {theme} from '../../config/theme';

const {colors} = theme;

interface Props {
  icon: string;
  iconTint: string;
  visible: boolean;
  title: string;
  message: string;
  cancelButtonText: string;
  confirmButtonText: string;
  cancelOnPress: () => void;
  confirmOnPress: () => void;
}

/*
 * AlertPopup
 */
const AlertPopup: React.FC<Props> = ({
  icon,
  iconTint,
  visible,
  title,
  message,
  cancelButtonText,
  confirmButtonText,
  confirmOnPress,
  cancelOnPress,
}) => {
  return (
    <Modal isVisible={visible} onBackdropPress={cancelOnPress}>
      <StatusBar backgroundColor="rgba(0,0,0,0.7)" barStyle="light-content" />

      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Icon name={icon} size={20} color={iconTint} />
          <Text style={styles.title}>{title}</Text>
        </View>

        <Text style={styles.message}>{message}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={cancelOnPress}>
            <Text style={styles.buttonText}>{cancelButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={confirmOnPress}>
            <Text style={styles.buttonText}>{confirmButtonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AlertPopup;
