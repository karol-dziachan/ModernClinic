import React, { useState, useRef } from "react";
import { View, TextInput, Text, TouchableOpacity, Dimensions, FlatList, Animated, Easing, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const OffersAccordionForm = ({ offersData, offersCategories, isNfzAccordion, setService, setIsNfz, setRefferalNumber }) => {
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
          <Text style={styles.headerText}>{item.name}</Text>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Icon name='chevron-down' size={10} color="black" />
          </Animated.View>
        </TouchableOpacity>
        {isExpanded && (
          <View style={styles.expandedContainer}>
            {filteredOffers.map((offer) => (
              <TouchableOpacity onPress={() => { setService({ id: offer.id, name: offer.name }); toggleAccordion(index); setIsNfz(isNfzAccordion); }}>
                <View key={offer.name} style={styles.offerContainer}>
                  <Text style={styles.accordionContent}><Icon name='checkmark-outline' size={10} color="black" style={styles.markIcon} /> {offer.name} {offer.promo && !isNfzAccordion && <Text style={styles.promo}> {offer.promo} </Text>} {offer.price && !isNfzAccordion && <Text style={styles.price}> {offer.price} zł</Text>}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.accordionContainer}>
      {
        isNfzAccordion &&
        <View>
          <Text style={styles.label}>Numer skierowania:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setRefferalNumber(text)}
          />

        </View>
      }
      <FlatList
        data={offersCategories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAccordionItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  accordionContent: {
    fontSize: 10,
  },
  accordionContainer: {
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 0,
  },
  headerText: {
    fontSize: 11
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    fontSize: 10
  },
  expandedContainer: {
    overflow: 'hidden',
  },
  offerContainer: {
    paddingLeft: 15,
    marginBottom: 2
  },
  container: {
    width: 0.8 * screenWidth,
  },
  markIcon: {
    marginRight: 5
  },
  promo: {
    fontWeight: "600",
    color: '#FF0000'
  },
  price: {
    fontWeight: "600",
    color: 'black'
  }
});

export default OffersAccordionForm;
