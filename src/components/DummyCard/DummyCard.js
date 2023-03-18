import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './DummyCard.style'

const DummyCard = ({ products, onSelectCategory }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onSelectCategory}
      >
        <View style={styles.image_view}>
          <Image source={{ uri: products.thumbnail }} style={styles.image} />
        </View>
        <View style={styles.text_container}>
          <View style={styles.content_container}>
          <Text style={styles.text}>{products.brand}, {products.title}</Text>

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={styles.content_container}>
              <Text style={styles.price}>Price: {products.price} $</Text>
            </View>
            <Text>Stok Durumu: {products.stock}</Text>
          </View>

        </View>

      </TouchableOpacity>
    </View>

  )
}

export default DummyCard

//Tasarımını düzelt kodlamaya devam et
// Custom componet yaparak ilerle
// Shop App Alışveriş Sepeti yap
// + butonu koy fazla ekleme yapabilmek için

{
  /*
  "products": [{
    "brand": "Apple", 
    "category": "smartphones", 
    "description": "An apple mobile which is nothing like apple", 
    "discountPercentage": 12.96, 
    "id": 1, 
    "images": [Array], 
    "price": 549, 
    "rating": 4.69, 
    "stock": 94, 
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg", 
    "title": "iPhone 9",


    ["smartphones", 
    "laptops", 
    "fragrances", 
    "skincare", 
    "groceries", 
    "home-decoration", 
    "furniture", 
    "tops", 
    "womens-dresses", 
    "womens-shoes", 
    "mens-shirts", 
    "mens-shoes", 
    "mens-watches", 
    "womens-watches", 
    "womens-bags", 
    "womens-jewellery", 
    "sunglasses", 
    "automotive", 
    "motorcycle", 
    "lighting"
  ]
  }]
  */
}