import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import CheckoutModal from './checkout-modal';
import CardPaymentModal from './card-payment-modal';
import { useRouter } from 'expo-router';

const basketItems = [
  {
    name: 'Quinoa fruit salad',
    image: require('../assets/images/icon.png'),
    price: '₦ 20,000',
    quantity: 2,
  },
  {
    name: 'Melon fruit salad',
    image: require('../assets/images/icon.png'),
    price: '₦ 20,000',
    quantity: 2,
  },
  {
    name: 'Tropical fruit salad',
    image: require('../assets/images/icon.png'),
    price: '₦ 20,000',
    quantity: 2,
  },
];

export default function Basket() {
  const router = useRouter();
  const total = basketItems.reduce((acc, item) => acc + parseInt(item.price.replace(/\D/g, '')), 0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showCardPayment, setShowCardPayment] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerBg}>
        <TouchableOpacity style={styles.goBack} onPress={() => router.back()}>
          <Text style={styles.goBackText}>Go back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Basket</Text>
      </View>
      <ScrollView style={styles.itemsList}>
        {basketItems.map((item, idx) => (
          <View key={idx} style={styles.itemRow}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemQty}>{item.quantity}packs</Text>
            </View>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalPrice}>₦ {total.toLocaleString()}</Text>
        <TouchableOpacity style={styles.checkoutBtn} onPress={() => setShowCheckout(true)}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
      <CheckoutModal
        visible={showCheckout}
        onClose={() => setShowCheckout(false)}
        payWithCard={() => {
          setShowCheckout(false);
          setShowCardPayment(true);
        }}
        payOnDelivery={() => {
          setShowCheckout(false);
          router.push('/order-success');
        }}
      />
      <CardPaymentModal
        visible={showCardPayment}
        onClose={() => setShowCardPayment(false)}
        completeOrder={() => {
          setShowCardPayment(false);
          router.push('/order-success');
        }}
      />
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
    paddingBottom: 24,
    paddingTop: 40,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    alignItems: 'center',
    position: 'relative',
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
  headerTitle: {
    color: '#11181C',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 8,
  },
  itemsList: {
    marginTop: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  itemImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
    backgroundColor: '#F6F6F6',
  },
  itemName: {
    fontWeight: 'bold',
    color: '#11181C',
    fontSize: 15,
  },
  itemQty: {
    color: '#687076',
    fontSize: 13,
  },
  itemPrice: {
    color: '#11181C',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
    marginHorizontal: 8,
    marginBottom: 8,
  },
  totalLabel: {
    color: '#687076',
    fontSize: 15,
    flex: 1,
  },
  totalPrice: {
    color: '#11181C',
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 16,
  },
  checkoutBtn: {
    backgroundColor: '#FFA94D',
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
