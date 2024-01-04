/* eslint-disable prettier/prettier */
import React , {useState ,  useEffect} from 'react';
import { View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { connect } from 'react-redux';
import { updateOnboarding } from '../../redux/action/authAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = ( ) => {
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);

  useEffect(() => {
    // Check if the onboarding flag is set in AsyncStorage.
    AsyncStorage.getItem('onboardingCompleted').then((value) => {
      if (value === 'true') {
        // Onboarding has been completed before.
        setOnboardingCompleted(true);
      }
    });
  }, []);

  const handleCompleteOnboarding = async () => {
    // Set the onboarding flag in AsyncStorage.
    await AsyncStorage.setItem('onboardingCompleted', 'true');
    setOnboardingCompleted(true);
  };


  const navigation = useNavigation();
  const slides = [
    {
      key: 'slide1',
      image: require('@Asset/onboarding/frontal_home.png'),
      title: 'Welcome to React Native News App.',
      text: 'Here you can read latest news updates. By registering to this application.',
    },
    {
      key: 'slide2',
      image: require('@Asset/onboarding/doodle_reading.png'),
      title: 'Read News',
      text: 'Read news at anywhere at any place just by connecting to the internet.',
    },
    {
      key: 'slide3',
      image: require('@Asset/onboarding/stting_on_floor.png'),
      title: 'Add to favorites.',
      text: 'Add to your favorite read list and also you can add comments.',
    },
  ];

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <IonIcons name="arrow-forward-outline" color="rgba(255,255,255,.9)" size={24} />
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <IonIcons name="md-checkmark" color="rgba(255,255,255,.9)" size={24} />
      </View>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View style={styles.skipView}>
        <Text style={styles.skipTextColor}>Skip</Text>
      </View>
    );
  };

  const _onEndReached = () => {
    if (onboardingCompleted) {
      // If onboarding is completed, navigate to the login screen or your main app screen.
      navigation.navigate('Login');
    } else {
      // If onboarding is not completed, set the flag and navigate to the login screen.
      handleCompleteOnboarding();
      navigation.navigate('Login');
    }
   
  };








  return (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      renderSkipButton={_renderSkipButton}
      onDone={_onEndReached}
      onSkip={_onEndReached}
      dotClickEnabled={true}
      showNextButton={true}
      showDoneButton={true}
      showSkipButton={true}
    />
  );
};





export default OnboardingScreen;
