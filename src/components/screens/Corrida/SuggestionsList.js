import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style/InserirEnderecoEstilo';

const SuggestionsList = ({suggestions, onPress}) => (
  <View
    style={[styles.suggestionsContainer, {maxHeight: 200, overflow: 'scroll'}]}>
    {suggestions.map(suggestion => (
      <TouchableOpacity
        key={suggestion.place_id}
        style={styles.suggestionButton}
        onPress={() => onPress(suggestion)}>
        <Text style={styles.suggestionText}>{suggestion.display_name}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default SuggestionsList;
