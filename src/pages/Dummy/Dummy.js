import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './Dummy.style'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import DummyCard from '../../components/DummyCard'
import Config from 'react-native-config'

const Dummy = ({ navigation }) => {

  const { data, loading, error } = useFetch('https://dummyjson.com/products/');

  if (loading) { return (<Loading />) }
  if (error) { return (<Error />) }

  const ProductSelect = (id) => { navigation.navigate("DummyCategory", { id }) }

  const renderCategory = ({ item }) => <DummyCard products={item} onSelectCategory={() => ProductSelect(item.id)} />

  return (
    <View style={styles.container}> 
      <FlatList
        keyExtractor={item => item.id}
        renderItem={renderCategory}
        data={data.products}

      />
    </View>
  )
}

export default Dummy