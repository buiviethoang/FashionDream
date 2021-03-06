import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { SIZES } from '../../../data';
import { AppColors } from '../../../general/constants/AppStyle';
import GlobalButton from '../../components/GlobalButton/index';
import Modalheader from '../../components/ModalHeader/index';
import { setSizeFocus } from '../../screens/ProductCardScreen/ProductSlice';
import ProfileCell from '../../screens/ProfileScreen/ProfileCell';
import CategoryCell from '../FilterModal/components/CategoryCell/index';
import styles from './styles';
SelectSizeModal.propTypes = {
  isVisible: PropTypes.bool,
  onModalHidden: PropTypes.func,
  onAddSize: PropTypes.func,
};
SelectSizeModal.defaultProps = {
  isVisible: false,
  onModalHidden: () => {},
  onAddSize: () => {},
};
export default function SelectSizeModal(props) {
  const {isVisible, onModalHidden, onAddSize} = props;
  const insets = useSafeAreaInsets();
  const {sizeIdFocus, isSizeFocus} = useSelector(state => state.product);
  const dispatch = useDispatch();
  const renderItem = ({item}) => {
    return <CategoryCell item={item} />;
  };
  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackdropPress={() => {
        if (onModalHidden) onModalHidden();
      }}
      onModalHide={() => {
        console.log('On modal hide');
        if (isSizeFocus && onAddSize) {
          let sizeName = '';
          for (let size of SIZES) {
            if (size.id == sizeIdFocus) {
              sizeName = size.title;
              continue;
            }
          }
          onAddSize(sizeName);
        }
        dispatch(setSizeFocus(false));
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
      <View style={[styles.sizeContainer, {bottom: insets.bottom}]}>
        <Modalheader />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Select size</Text>
        </View>
        <FlatList
          data={SIZES}
          renderItem={renderItem}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginHorizontal: 26,
            height: 96,
            marginTop: 22,
            justifyContent: 'space-between',
          }}
          numColumns={3}
        />
        <View style={[styles.divider, {marginTop: 0}]}></View>
        <ProfileCell
          title="Size info"
          backgroundColor={AppColors.modalColor}
          suggestion=""
          height={48}
        />
        <View style={styles.divider}></View>
        <GlobalButton
          actionText="ADD SIZE"
          marginTop={28}
          action={() => {
            onModalHidden();
          }}
        />
      </View>
    </ReactNativeModal>
  );
}
