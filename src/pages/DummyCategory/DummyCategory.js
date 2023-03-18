import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './DummyCategory.style'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

const DummyCategory = ({ route }) => {

  const { id } = route.params
  const { data, loading, error } = useFetch('https://dummyjson.com/products/' + id);

  if (loading) { return <Loading /> }
  if (error) { return <Error /> }

  return (
    <View style={styles.container}>
      <View style={styles.image_view}>
        <Image source={{ uri: data.thumbnail }} style={styles.image} />
      </View>
      <View>
        <Text style={styles.text}>Marka: {data.brand}</Text>
        <Text style={styles.text}>Model: {data.title}</Text>
        <Text style={styles.text}>Açıklama: {data.description}</Text>
        <Text style={styles.text}>Fiyat: {data.price} $</Text>
        <Text style={styles.text}>Stok Durumu: {data.stock} Adet</Text>
        <Text style={styles.text}>Değerlendirme: {data.rating} / 5</Text>
      </View>

    </View>
  )
}

export default DummyCategory

//Alta sepete ekle butonu koy fiyat yanına sepete ekle
//Açıklama düzenle