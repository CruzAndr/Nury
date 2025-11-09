import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProductDetail() {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  // Datos de ejemplo, puedes recibirlos por props o navegación
  const product = {
    name: 'Quinoa Fruit Salad',
    price: '₦ 2,000',
    image: require('../assets/images/icon.png'),
    ingredients: 'Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.',
    description:
      'If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make',
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBg}>
        <TouchableOpacity style={styles.goBack} onPress={() => router.back()}>
          <Text style={styles.goBackText}>Go back</Text>
        </TouchableOpacity>
        <Image source={product.image} style={styles.productImage} />
      </View>
      <View style={styles.card}>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))} style={styles.qtyBtn}>
            <Text style={styles.qtyBtnText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qty}>{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.qtyBtn}>
            <Text style={styles.qtyBtnText}>+</Text>
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <Text style={styles.price}>{product.price}</Text>
        </View>
        <Text style={styles.sectionTitle}>One Pack Contains:</Text>
        <Text style={styles.ingredients}>{product.ingredients}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.favoriteBtn}>
            <Text style={styles.favoriteIcon}>♡</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addBtnText}>Add to basket</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFF',
  },
  headerBg: {
    backgroundColor: '#FFA94D',
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 40,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  goBack: {
    position: 'absolute',
    left: 16,
    top: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
    zIndex: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  goBackText: {
    color: '#0a7ea4',
    fontWeight: 'bold',
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 16,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: -40,
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 3,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#11181C',
    marginBottom: 16,
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  qtyBtn: {
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginHorizontal: 4,
  },
  qtyBtnText: {
    fontSize: 20,
    color: '#FFA94D',
    fontWeight: 'bold',
  },
  qty: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#11181C',
    marginHorizontal: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#11181C',
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: '#11181C',
    marginBottom: 4,
    marginTop: 8,
  },
  ingredients: {
    color: '#F2994A',
    fontWeight: '600',
    marginBottom: 12,
  },
  description: {
    color: '#687076',
    marginBottom: 16,
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 12,
  },
  favoriteBtn: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#F6F6F6',
    marginRight: 8,
  },
  favoriteIcon: {
    fontSize: 22,
    color: '#F2994A',
  },
  addBtn: {
    backgroundColor: '#FFA94D',
    borderRadius: 16,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
  },
  addBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
