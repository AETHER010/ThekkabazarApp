import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  bidsCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
    width: 200,
  },
  activeTab: {
    borderRadius: 18,
    backgroundColor: '#99ccff',
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5,
  },
  tabButtonText: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
  },
  interestCard: {
    margin: 15,
    backgroundColor: colors.white,
    padding: 8,
  },
  interestText: {
    color: 'black',
    fontSize: 20,
    fontFamily: fonts.regular,
  },
  Card: {
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 15,
  },
  image: {
    height: 300,
    width: 120,
    resizeMode: 'contain',
  },
  cusBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    backgroundColor: colors.white,
    borderRadius: 8,
    marginTop: 20,
    height: 35,
    borderWidth: 1,
    borderColor: colors.gray,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  CardText: {
    color: '#808080',
    fontSize: 14,
    marginLeft: 8,
  },
  CardHeading: {
    display: 'flex',
    flexDirection: 'row',
  },
  Cardbodytext: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // flexGrow: 1,
    flexWrap: 'wrap',
  },
  CardFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    borderTopColor: '#C6C1C1',
    padding: 10,
    marginTop: 8,
    alignItems: 'center',
  },
  Icons: {
    color: colors.primary,
    marginLeft: 20,
  },
});

export default styles;
