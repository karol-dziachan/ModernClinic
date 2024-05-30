import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6
  },
  star: {
    marginRight: 5,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 17,
    marginBottom: 3
  },
  titleBold: {
    fontFamily: "Roboto-Bold",
  },
  comment: {
    fontFamily: "Roboto",
    fontSize: 14
  },
  commentBold: {
    fontFamily: "Roboto-Bold",
  },
  container: {
    width: '100%',
    marginBottom: 15
  },
  bar: {
    marginTop: 15,
    width: 0.6 * screenWidth,
    height: 1,
    backgroundColor: 'rgba(98, 98, 98, 0.4)',
    marginLeft: "auto",
    marginRight: "auto",
  },
})

export default Opinion = ({ mark, title, comment }) => {
  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      var rating = mark;
      stars.push(
        <View key={i}>
          <Icon
            name={'star'}
            size={25}
            color={i <= rating ? '#FDD835' : '#BDBDBD'}
            style={styles.star}
          />
        </View>
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        {renderStars()}
      </View>
      <Text style={styles.title}><Text style={styles.titleBold}>Tytuł:</Text> {title}</Text>
      <Text style={styles.comment}><Text style={styles.commentBold}>Komentarz:</Text> {comment}</Text>
      <View style={styles.bar}></View>
    </View>
  );
}