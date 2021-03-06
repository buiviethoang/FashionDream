import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../../general/constants/AppStyle';

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'column',
    width: 150,
    height: 270,
    marginLeft: 16,
    backgroundColor: AppColors.primaryColor,
    borderRadius: 8,
  },
  imageSection: {
    width: 148,
    height: 184,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  discountContainer: {
    backgroundColor: '#FF3E3E',
    borderRadius: 29,
    width: 40,
    height: 24,
    position: 'absolute',
    left: 10,
    top: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  discountText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11,
    color: 'white',
  },
  likeContainer: {
    width: 36,
    height: 36,
    backgroundColor: '#2A2C36',
    top: 164,
    left: 113,
    position: 'absolute',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  starSection: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  infoSection: {},
  textSection: {
    marginTop: 6,
  },
  priceSection: {
    flexDirection: 'row',
    marginTop: 3,
  },
  brand: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11,
    color: '#ABB4BD',
  },
  product: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    color: '#F7F7F7',
    marginTop: 5,
  },
  price: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#ABB4BD',
  },
});
export default styles;
