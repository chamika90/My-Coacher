import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';
import {theme} from '../../config/theme';

const {colors} = theme;

interface Props {
  buttonType: string;
  title: string;
  isButtonDisabled: boolean;
  onButtonPress: () => void;
}

export const ButtonTypes = {
  primary: 'PRIMARY',
  secondary: 'SECONDARY',
};

const ButtonTypeProps = {
  [ButtonTypes.primary]: {
    backgroundColor: colors.primaryButtonBackgroundColor,
    textColor: colors.primaryButtonTextColor,
    textSize: 20,
  },
  [ButtonTypes.secondary]: {
    backgroundColor: undefined,
    textColor: colors.secondaryButtonTextColor,
    textSize: 15,
  },
};

/*
 * Custom Button
 */
const CustomButton: React.FC<Props> = ({
  buttonType,
  title,
  isButtonDisabled = false,
  onButtonPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: isButtonDisabled
            ? colors.primaryButtonDisabledColor
            : ButtonTypeProps[buttonType].backgroundColor,
        },
      ]}
      onPress={() => {
        onButtonPress();
      }}
      disabled={isButtonDisabled}>
      <Text
        style={[
          styles.title,
          {
            color: ButtonTypeProps[buttonType].textColor,
            fontSize: ButtonTypeProps[buttonType].textSize,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
