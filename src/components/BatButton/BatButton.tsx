import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function BatButton() {

  const [pass, setPass] = useState("");

  const handleGeneratePass = () => {
    let generateToken = generatePass();
    setPass(generateToken);
  }

  const handleCopyPass = async () => {
    await Clipboard.setStringAsync(pass);
  }

  return (
    <>
     <BatTextInput pass={pass}/>
      <Pressable style={styles.button} onPress={handleGeneratePass}>
        <Text style={styles.text}>
          ⚡ GENERATE
        </Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleCopyPass}>
        <Text style={styles.text}>
           📑COPY
        </Text>
      </Pressable>
      
    </>
  );
}