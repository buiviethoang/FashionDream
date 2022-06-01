import React from 'react';
import { Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PaymentCard from '../../../model/PaymentCard/index';
import CheckBox from '../../components/CheckBox/index';
import GlobalButton from '../../components/GlobalButton/index';
import Modalheader from '../../components/ModalHeader/index';
import InputSection from '../../screens/PaymentScreen/InputSection/index';
import styles from './styles';
AddCardModal.propTypes = {};
AddCardModal.defaultProps = {};
var menuIndex = -1;
var isCheck = true;
let newCard = new PaymentCard();
export default function AddCardModal(props) {
  const {isVisible, onModalHidden, onMenuClick} = props;
  const insets = useSafeAreaInsets();
  const date = new Date().getTime();
  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackdropPress={() => {
        if (onModalHidden) onModalHidden();
      }}
      onModalHide={() => {
        console.log('On modal hide');
        if (menuIndex != -1 && onMenuClick) {
          onMenuClick(menuIndex);
        }
        menuIndex = -1;
      }}
      hasBackdrop={true}
      avoidKeyboard={true}
      onSwipeComplete={() => {
        if (onModalHidden) {
          onModalHidden();
        }
      }}
      swipeDirection="down"
      coverScreen={true}
      style={{margin: 0}}>
      <View style={[styles.addCardContainer, {bottom: insets.bottom}]}>
        <Modalheader />
        <View style={styles.titleSection}>
          <Text style={styles.titleText}>Add new card</Text>
        </View>
        {/* <View style={styles.inputContainer}>
          <TextInput
            placeholder="Name on card"
            placeholderTextColor={'#ABB4BD'}
            style={styles.textInput}
          />
        </View> */}
        <InputSection title={''} content={'Name on card'} />
        <InputSection title={'Card number'} content={'5546 8205 3693 3947'} />
        <InputSection title={'Expire date'} content={'05/22'} />
        <InputSection title={'CVV'} content={'567'} />
        <CheckBox
          isCheck={true}
          message={'Set as default payment method'}
          marginLeft={16}
          marginTop={20}
        />
        <GlobalButton actionText="ADD CARD" marginTop={25} />
      </View>
    </ReactNativeModal>
  );
}
