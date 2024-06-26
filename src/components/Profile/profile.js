import {View, Text, Linking} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './profileStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import Custombutton from '../../Containers/Button/button';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {getProfile} from '../../reducers/profileSlice';
import {useFocusEffect} from '@react-navigation/native';
import {resetUserProfile} from '../../reducers/profileSlice';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const {data, error} = useSelector(state => state.userprofile);
  const [token, setToken] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      const fetchToken = async () => {
        try {
          const storedToken = await AsyncStorage.getItem('access_token');
          setToken(storedToken);
          dispatch(getProfile({access_token: storedToken}));
        } catch (error) {
          console.error(error);
        }
      };

      fetchToken();
    }, [dispatch]),
  );

  // useFocusEffect(
  //   React.useCallback(() => {
  //     getToken();
  //   }, []),
  // );
  const getToken = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('access_token');
      setToken(storedToken);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    try {
      dispatch(resetUserProfile());
      Toast.show({
        type: 'success',
        text1: 'Logout Successful',
        visibilityTime: 3000,
      });
      navigation.navigate('MainScreen', {
        screen: 'BottomNav',
        params: {screen: 'Home', params: {screen: 'HomeScreen'}},
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle phone number tap
  const handlePhonePress = () => {
    const phoneNumber = '01-4794001';
    Linking.openURL(`tel:${phoneNumber}`);
  };

  // Function to handle email tap
  const handleEmailPress = () => {
    const email = 'info@thekkabazar.com';
    Linking.openURL(`mailto:${email}`);
  };
  const handleLoginNavigation = () =>{
    navigation.navigate('MainScreen', {
      screen: 'BottomNav',
      params: {screen: 'Home', params: {screen: 'Login'}},
    });
  }
  return (
    <View style={styles.ProfileContainer}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 15,
          padding: 15,
        }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Icon name="person-circle" size={50} color="black" />
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 20, color: 'black', alignSelf: 'center'}}>
              {data?.fullname || 'No User'}
            </Text>
            <Text style={{fontSize: 15, color: 'black'}}>Free Account</Text>
          </View>
        </View>
        {token?<Custombutton
          title="Upgrade"
          onPress={() => navigation.navigate('Pricing')}
        />:<Custombutton
        title="Login"
        onPress={() => handleLoginNavigation()}
      />}
        
      </View>


      <View
        style={{
          marginTop: 5,
          borderBottomWidth: 1,
          borderBottomColor: '#B5B5B5',
          margin: 10,
        }}>
        <Text style={{fontSize: 14, color: 'black', marginBottom: 18}}>
          Your free plans account have limited feature. Explore more with our
          other packages.
        </Text>
      </View>

      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            margin: 14,
            justifyContent: 'space-between',
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Icon name="person" size={25} color="black" />
            <Text
              style={{marginLeft: 10, color: 'black', fontSize: 18}}
              onPress={() => navigation.navigate('UserProfile')}>
              Profile
            </Text>
          </View>
          <Icon2
            name="arrow-forward-ios"
            size={20}
            color="black"
            onPress={() => navigation.navigate('UserProfile')}
          />
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            margin: 14,
            justifyContent: 'space-between',
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Icon name="hammer" size={25} color="black" />
            <Text
              style={{marginLeft: 10, color: 'black', fontSize: 18}}
              onPress={() => navigation.navigate('SavedBids')}>
              Saved Bids
            </Text>
          </View>
          <Icon2
            name="arrow-forward-ios"
            size={20}
            color="black"
            onPress={() => navigation.navigate('SavedBids')}
          />
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            margin: 14,
            justifyContent: 'space-between',
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Icon name="hammer" size={25} color="black" />
            <Text
              onPress={() => navigation.navigate('Aboutus')}
              style={{marginLeft: 10, color: 'black', fontSize: 18}}>
              About us
            </Text>
          </View>
          <Icon2
            name="arrow-forward-ios"
            size={20}
            color="black"
            onPress={() => navigation.navigate('Aboutus')}
          />
        </View>

        {/* <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            margin: 14,
            justifyContent: 'space-between',
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Icon name="hammer" size={25} color="black" />
            <Text style={{marginLeft: 10, color: 'black', fontSize: 18}}>
              Tax & vat services
            </Text>
          </View>
          <Icon2 name="arrow-forward-ios" size={20} color="black" />
        </View> */}

        {/* <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            margin: 14,
            justifyContent: 'space-between',
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Icon name="hammer" size={25} color="black" />
            <Text
              style={{marginLeft: 10, color: 'black', fontSize: 18}}
              onPress={() => navigation.navigate('Notice')}>
              Notice
            </Text>
          </View>
          <Icon2
            name="arrow-forward-ios"
            size={20}
            color="black"
            onPress={() => navigation.navigate('Notice')}
          />
        </View> */}

        <View style={{display: 'flex', flexDirection: 'row', margin: 14}}>
          <Icon name="exit-outline" size={25} color="red" />
          <Text
            style={{marginLeft: 10, color: 'red', fontSize: 18}}
            onPress={() => handleLogout()}>
            Log Out
          </Text>
        </View>
      </View>

      <View style={{margin: 15}}>
        <Text
          style={{
            color: 'black',
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          Get In Touch
        </Text>
        <View
          style={{
            borderBottomWidth: 3,
            borderBottomColor: '#4A99D3',
            marginTop: 15,
            width: '34%',
          }}></View>

        <Text
          style={{
            color: 'black',
            fontSize: 14,
            marginTop: 10,
          }}>
          Any question or remarks? Just write us a message!
        </Text>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 10,
            // alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <Icon name="location" size={30} color="#185CAB" />
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{
              display: 'flex',
              color: 'black',
              fontSize: 18,
              marginLeft: 7,
              width: '70%',
            }}>
            Buddhanagar, Kathmandu Nepal bibhuti marga
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 10,
            // alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <Icon2 name="local-phone" size={30} color="#28A745" />
          <Text
            onPress={handlePhonePress}
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{
              display: 'flex',
              color: 'black',
              fontSize: 18,
              marginLeft: 7,
              width: '70%',
            }}>
            01-4794001
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 10,
            // alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <Icon2 name="email" size={30} color="#185CAB" />
          <Text
            onPress={handleEmailPress}
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{
              display: 'flex',
              color: 'black',
              fontSize: 18,
              marginLeft: 7,
              width: '70%',
            }}>
            info@thekkabazar.com
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
