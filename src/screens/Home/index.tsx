import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import StatusBar from '../../components/StatusBar';
import { CollectionType } from '../../data';
import Contents from './Contents';
import Footer from './Footer';
import Header from './Header';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const onItemClick = React.useCallback((item: CollectionType) => {
    console.log('Collection Selected', item);
    navigation.navigate('Details', {
      item
    })
  }, [navigation]);
  return (
    <gridLayout rows='auto, auto, *, 58'>
      <StatusBar color='white' />
      <Header />
      <Contents onItemClick={onItemClick} />
      <Footer />
    </gridLayout>
  )
}

export default HomeScreen;
