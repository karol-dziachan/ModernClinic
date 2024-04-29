import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, FlatList, Animated, Easing, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Accordion = ({ tabData }) => {
  const [expanded, setExpanded] = useState({});

  const toggleAccordion = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded({ ...expanded, [index]: !expanded[index] });
  };

  const renderAccordionItem = ({ item, index }) => {
    const isExpanded = expanded[index];

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.header} onPress={() => toggleAccordion(index)}>
          <Text>{item.Header}</Text>
          <Icon name={isExpanded ? 'chevron-up' : 'chevron-down'} size={13} color="black" />
        </TouchableOpacity>
        {isExpanded && (
          <View style={styles.expandedContainer}>
            {item.Content}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.accordionContainer}>
      <FlatList
        data={tabData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderAccordionItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  accordionContainer: {
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10
  },
  expandedContainer: {
    overflow: 'hidden',
  },
  container: {
    width: 0.9 * screenWidth,
  },
});

export default Accordion;
