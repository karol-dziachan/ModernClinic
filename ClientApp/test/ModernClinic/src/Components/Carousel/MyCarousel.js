import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions  } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BlurView } from 'expo-blur';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
    button:{
    backgroundColor: "#17B5FF",
    border: "1px solid white",
    borderRadius: 4,
    width: 250,
    padding: 15,
    margin: "0 auto",
    borderColor: 'white',
    borderWidth: 1
    // width: 10
  },
  buttonText: {
    color: "white",
    textTransform: 'uppercase',
    fontSize: 22,
    letterSpacing: 2,
    textAlign: "center",
    fontFamily: "Roboto",
  },
  container: {
    marginTop: 23,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: 0.8*screenHeight,
    maxHeight: 0.8*screenHeight
  },
  slide: {
    backgroundColor: 'white',
    flex: 1,
    display: "flex", 
    top: 0,
    alignContent: "space-between",
    justifyContent: "space-between",
    height: screenHeight,
    position: "absolute"
  },
  slidePic: {
    position: "absolute",
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
  },
  sliderContentContainerBlur: {
    // position: "fixed",
    // bottom: 250,
    left: 0,
    height: 400,
    // bottom: 0,
    top: 0.8*screenHeight-260, 
    padding: 15,
    paddingTop: 60,
    blurRadius: 100,
    width: screenWidth,
    bottom: 0,
    position: "absolute"
    // filter: [{ blur: 4 }],
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 50,
    paddingBottom: 67,
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: 100,
    // height: 600,
    backgroundColor: 'rgba(255,255,255,0.5)',
    // padding: 50
  },
  sliderText: {
    fontFamily: "Roboto",
    fontSize: 22, 
    textAlign: "center",
    color: "#626262",
    textTransform: "uppercase",
    lineHeight: 28
  },
  sliderButtonContainer: {
    marginTop: 20,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  arrowLeft: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -60 }],
    width: 55,
    height: 55,
    backgroundColor: 'rgba(128,124,124,0.5)',
    borderRadius: 100,
    zIndex: 2
  },
  arrowRight: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -60 }],
    width: 55,
    height: 55,
    backgroundColor: 'rgba(128,124,124,0.5)',
    borderRadius: 100,
    zIndex: 2
  },
  iconLeft: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateY: -18 }, { translateX: -14 }],
  },
  iconRight: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateY: -18 }, { translateX: -10 }],
  },
  buttonContentContainer: {
    display: "flex"
  },
  icon: {
    paddingRight: 10
  }
});

const data = [
  { pic: require('../../../assets/slid1.jpeg'), text: 'Przyjedziemy do ciebie \n do domu', button: {url: "BookVisitPage", title: "Umów wizytę", icon: "calendar-alt"} },
  { pic: require('../../../assets/slid2.jpeg'), text: 'Tylko w tym miesiącu \n -20% na wszystkie badania', button: {url: "OffersPage", title: "Promocje", icon: ""} },
];

const MyCarousel = ({currentPage, setPage}) => {
  const carouselRef = React.useRef(null);
  const [activeSlide, setActiveSlide] = React.useState(0);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
        <Image source={item.pic} style={styles.slidePic}/>
      <View style={styles.sliderContentContainer}>
          <BlurView
            style={styles.sliderContentContainerBlur}
            tint="light"
            intensity={50}
          >
            <View>
                  <Text style={styles.sliderText}>{item.text}</Text>
            </View>
            <View style={styles.sliderButtonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => setPage(item.button.url || "BookVisitPage")}>
                <View style = {styles.buttonContentContainer}>
                  <Text style={styles.buttonText}>
                    {item.button.icon &&  
                    <Icon name={item.button.icon} style={styles.icon} size={27} color="white" /> 
                    }
                    {item.button.icon &&  
                    <Text>&nbsp;</Text>
                    }
                    {item.button.title}
                  </Text>
                </View>
              </TouchableOpacity>
          </View>
        </BlurView>
      </View>
    </View>
  );

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.snapToNext();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.snapToPrev();
    }
  };
  return (

    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowLeft} onPress={handlePrev}>
        <Icon name="chevron-left" size={35} color="white" style={styles.iconLeft} />
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <TouchableOpacity style={styles.arrowRight} onPress={handleNext}>
        <Icon name="chevron-right" size={35} color="white" style={styles.iconRight} />
      </TouchableOpacity>
    </View>
  );
}

export default MyCarousel;
