/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
const DATA = [
  {
    index: 1,
    text: 'Ola tudo bem',
    motorista: true,
  },
  {
    index: 12,
    text: 'Ola tudo bem',
    motorista: false,
  },
  {
    index: 3,
    text: 'Ola tudo bem',
    motorista: true,
  },
  {
    index: 6,
    text: 'Ola tudo djfdkjfdjkfjkfdkjfdjkfdkjfdfdjdfkfdkfdjkfdkjfdjkdfjfdjkfdjkfdjkfdjfdkjfdjfddddddddddddddddddddddddddfdjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    motorista: false,
  },
  {
    index: 3,
    text: 'Ola tudo bem',
    motorista: true,
  },
  {
    index: 6,
    text: 'Ola tudo djfdkjfdjkfjkfdkjfdjkfdkjfdfdjdfkfdkfdjkfdkjfdjkdfjfdjkfdjkfdjkfdjfdkjfdjfddddddddddddddddddddddddddfdjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    motorista: false,
  },
  {
    index: 3,
    text: 'Ola tudo bem',
    motorista: true,
  },
  {
    index: 6,
    text: 'Ola tudo djfdkjfdjkfjkfdkjfdjkfdkjfdfdjdfkfdkfdjkfdkjfdjkdfjfdjkfdjkfdjkfdjfdkjfdjfddddddddddddddddddddddddddfdjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    motorista: false,
  },
  {
    index: 3,
    text: 'Ola tudo bem',
    motorista: true,
  },
  {
    index: 6,
    text: 'Ola tudo djfdkjfdjkfjkfdkjfdjkfdkjfdfdjdfkfdkfdjkfdkjfdjkdfjfdjkfdjkfdjkfdjfdkjfdjfddddddddddddddddddddddddddfdjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    motorista: false,
  },
  {
    index: 3,
    text: 'Ola tudo bem',
    motorista: true,
  },
  {
    index: 6,
    text: 'Ola tudo djfdkjfdjkfjkfdkjfdjkfdkjfdfdjdfkfdkfdjkfdkjfdjkdfjfdjkfdjkfdjkfdjfdkjfdjfddddddddddddddddddddddddddfdjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    motorista: false,
  },
  {
    index: 3,
    text: 'Ola tudo bem',
    motorista: true,
  },
  {
    index: 6,
    text: 'Ola tudo djfdkjfdjkfjkfdkjfdjkfdkjfdfdjdfkfdkfdjkfdkjfdjkdfjfdjkfdjkfdjkfdjfdkjfdjfddddddddddddddddddddddddddfdjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    motorista: false,
  },
  {
    index: 3,
    text: 'Ola tudo bem',
    motorista: true,
  },
  {
    index: 6,
    text: 'Ola tudo djfdkjfdjkfjkfdkjfdjkfdkjfdfdjdfkfdkfdjkfdkjfdjkdfjfdjkfdjkfdjkfdjfdkjfdjfddddddddddddddddddddddddddfdjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    motorista: false,
  },
];

import Message from './Message';

const MessageList = () => {
  return (
    <View>
      {DATA.map((message, index) => (
        <Message
          key={index}
          message={message.text}
          StyleSheet={{backgroundColor: 'red'}}
          condicao={message.motorista}
        />
      ))}
    </View>
  );
};
const Processar = () => {
  return (
    <View>
      <MessageList />
    </View>
  );
};
export {Processar};
