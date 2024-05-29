import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Dimensions,  FlatList, Animated, Easing, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


const { height: screenHeight, width: screenWidth } = Dimensions.get('window');


if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const OffersAccordion = ({ offersData, offersCategories }) => {
  const [expanded, setExpanded] = useState({});
  const animatedValues = useRef({}).current;

  const toggleAccordion = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded({ ...expanded, [index]: !expanded[index] });
  };

    const rotateIcon = (index) => {
    const toValue = expanded[index] ? 1 : 0;
    Animated.timing(
      animatedValues[index],
      {
        toValue,
        duration: 300, // Adjust duration as needed
        easing: Easing.linear,
        useNativeDriver: true,
      }
    ).start();
  };

  const renderAccordionItem = ({ item, index }) => {
    const isExpanded = expanded[index];
    const filteredOffers = offersData.filter((offer) => offer.category === item.id);

        if (!animatedValues[index]) {
      animatedValues[index] = new Animated.Value(0);
    }

    rotateIcon(index);

    const spin = animatedValues[index].interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.header} onPress={() => toggleAccordion(index)}>
          <Text>{item.name}</Text>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Icon name='chevron-down' size={13} color="black" />
          </Animated.View>
        </TouchableOpacity>
        {isExpanded && (
          <View style={styles.expandedContainer}>
            {filteredOffers.map((offer) => (
              <View key={offer.id} style={styles.offerContainer}>
                <Text><Icon name='checkmark-outline' size={10} color="black" style={styles.markIcon} /> {offer.name} {offer.promo && <Text style={styles.promo}> {offer.promo} </Text>}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.accordionContainer}>
      <FlatList
        data={offersCategories}
        keyExtractor={(item) => item.id.toString()}
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
  offerContainer: {
    paddingLeft: 10,
    marginBottom: 2
  },
  container: {
    width: 0.9*screenWidth,
  },
  markIcon: {
    marginRight: 5
  },
  promo: {
    fontWeight: "600",
    color: '#FF0000'
  }
});

export default OffersAccordion;
