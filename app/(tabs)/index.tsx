
import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, TextInput, ScrollView, TouchableOpacity, Text, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

const recommendedCombos = [
  {
    name: 'Honey lime combo',
    price: '₦ 2,000',
    image: require('../../assets/images/react-logo.png'),
    liked: true,
  },
  {
    name: 'Berry mango combo',
    price: '₦ 8,000',
    image: require('../../assets/images/partial-react-logo.png'),
    liked: false,
  },
];

const hottestCombos = [
  {
    name: 'Quinoa fruit salad',
    price: '₦ 10,000',
    image: require('../../assets/images/icon.png'),
  },
  {
    name: 'Tropical fruit salad',
    price: '₦ 10,000',
    image: require('../../assets/images/icon.png'),
  },
  {
    name: 'Melon combo',
    price: '₦ 10,000',
    image: require('../../assets/images/icon.png'),
  },
];

const popularCombos = [
  {
    name: 'Berry mango combo',
    price: '₦ 8,000',
    image: require('../../assets/images/partial-react-logo.png'),
  },
  {
    name: 'Honey lime combo',
    price: '₦ 2,000',
    image: require('../../assets/images/react-logo.png'),
  },
];
const newCombos = [
  {
    name: 'Melon combo',
    price: '₦ 10,000',
    image: require('../../assets/images/icon.png'),
  },
];
const topCombos = [
  {
    name: 'Quinoa fruit salad',
    price: '₦ 10,000',
    image: require('../../assets/images/icon.png'),
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState('Hottest');
  const handleProductPress = (product: any) => {
    router.push('/product-detail');
  };
  let combosToShow = hottestCombos;
  if (activeTab === 'Popular') combosToShow = popularCombos;
  if (activeTab === 'New combo') combosToShow = newCombos;
  if (activeTab === 'Top') combosToShow = topCombos;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FAFAFF' }} contentContainerStyle={{ paddingBottom: 32 }}>
      {/* Header */}
      <View style={styles.headerRow}>
        <IconSymbol name="chevron.right" size={28} color="#0a7ea4" />
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={styles.basketButton} onPress={() => router.push('/basket')}>
          <Image source={require('../../assets/images/icon.png')} style={styles.basketIcon} />
          <Text style={styles.basketText}>My basket</Text>
        </TouchableOpacity>
      </View>

      {/* Greeting */}
      <Text style={styles.greetingText}>
        <Text style={styles.greetingHello}>Hello Tony, </Text>
        <Text style={styles.greetingQuestion}>What fruit salad combo do you want today?</Text>
      </Text>

      {/* Search bar */}
      <View style={styles.searchBar}>
        <IconSymbol name="chevron.right" size={20} color="#687076" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for fruit salad combos"
          placeholderTextColor="#687076"
        />
        <IconSymbol name="paperplane.fill" size={20} color="#687076" />
      </View>

      {/* Recommended Combo */}
      <Text style={styles.sectionTitle}>Recommended Combo</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {recommendedCombos.map((combo, idx) => (
          <TouchableOpacity key={idx} style={styles.card} onPress={() => handleProductPress(combo)}>
            <Image source={combo.image} style={styles.cardImage} />
            <View style={styles.cardRow}>
              <Text style={styles.cardTitle}>{combo.name}</Text>
              <TouchableOpacity>
                <Text style={[styles.heartIcon, combo.liked ? styles.heartActive : styles.heartInactive]}>♥</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.cardPrice}>{combo.price}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Hottest Combos Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: 20, marginBottom: 12 }}
        contentContainerStyle={{ alignItems: 'center', gap: 8 }}
      >
        {['Hottest', 'Popular', 'New combo', 'Top'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={activeTab === tab ? styles.tabActive : styles.tab}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={activeTab === tab ? styles.tabActiveText : styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {combosToShow.map((combo, idx) => (
          <TouchableOpacity key={idx} style={styles.cardSmall} onPress={() => handleProductPress(combo)}>
            <Image source={combo.image} style={styles.cardImageSmall} />
            <Text style={styles.cardTitleSmall}>{combo.name}</Text>
            <Text style={styles.cardPriceSmall}>{combo.price}</Text>
            <TouchableOpacity style={styles.addButtonSmall}>
              <Text style={styles.addButtonTextSmall}>+</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  basketButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  basketIcon: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  basketText: {
    color: '#0a7ea4',
    fontWeight: 'bold',
    fontSize: 14,
  },
  greetingText: {
    fontSize: 18,
    marginHorizontal: 20,
    marginBottom: 18,
    color: '#11181C',
  },
  greetingHello: {
    fontWeight: '400',
    color: '#11181C',
  },
  greetingQuestion: {
    fontWeight: 'bold',
    color: '#11181C',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    marginHorizontal: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 16,
    color: '#11181C',
    backgroundColor: 'transparent',
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginBottom: 12,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#11181C',
  },
  horizontalScroll: {
    paddingLeft: 20,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 3,
    width: 160,
    marginRight: 16,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F6F6F6',
  },
  cardImage: {
    width: 120,
    height: 90,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: '#F6F6F6',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    color: '#11181C',
  },
  heartIcon: {
    fontSize: 18,
    marginLeft: 6,
  },
  heartActive: {
    color: '#0a7ea4',
  },
  heartInactive: {
    color: '#ccc',
  },
  cardPrice: {
    fontSize: 15,
    color: '#0a7ea4',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#E6F4FE',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: 8,
  },
  addButtonText: {
    color: '#0a7ea4',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tabsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 12,
    gap: 8,
  },
  tab: {
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginRight: 0,
  },
  tabText: {
    color: '#687076',
    fontWeight: '600',
    fontSize: 15,
  },
  tabActive: {
    backgroundColor: '#FFEED9',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginRight: 0,
  },
  tabActiveText: {
    color: '#F2994A',
    fontWeight: 'bold',
    fontSize: 15,
  },
  cardSmall: {
    backgroundColor: '#fff',
    borderRadius: 18,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 3,
    width: 120,
    marginRight: 16,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F6F6F6',
  },
  cardImageSmall: {
    width: 80,
    height: 60,
    borderRadius: 10,
    marginBottom: 6,
    backgroundColor: '#F6F6F6',
  },
  cardTitleSmall: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 2,
    color: '#11181C',
  },
  cardPriceSmall: {
    fontSize: 13,
    color: '#0a7ea4',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  addButtonSmall: {
    backgroundColor: '#E6F4FE',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 4,
  },
  addButtonTextSmall: {
    color: '#0a7ea4',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
