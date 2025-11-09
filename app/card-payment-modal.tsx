import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';

export default function CardPaymentModal({ visible, onClose, completeOrder }: { visible: boolean; onClose: () => void; completeOrder?: () => void }) {
  const [holder, setHolder] = useState('');
  const [card, setCard] = useState('');
  const [date, setDate] = useState('');
  const [ccv, setCcv] = useState('');

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalCard}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeIcon}>×</Text>
          </TouchableOpacity>
          <Text style={styles.label}>Card Holders Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Adolphus Chris"
            value={holder}
            onChangeText={setHolder}
          />
          <Text style={styles.label}>Card Number</Text>
          <TextInput
            style={styles.input}
            placeholder="1234 5678 9012 1314"
            value={card}
            onChangeText={setCard}
            keyboardType="number-pad"
            maxLength={19}
          />
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Date</Text>
              <TextInput
                style={styles.input}
                placeholder="10/30"
                value={date}
                onChangeText={setDate}
                keyboardType="number-pad"
                maxLength={5}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.label}>CCV</Text>
              <TextInput
                style={styles.input}
                placeholder="123"
                value={ccv}
                onChangeText={setCcv}
                keyboardType="number-pad"
                maxLength={3}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.completeBtn} onPress={completeOrder}>
            <Text style={styles.completeBtnText}>Complete Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.12)',
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    minHeight: 340,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 3,
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: -28,
    left: '50%',
    marginLeft: -24,
    backgroundColor: '#fff',
    borderRadius: 24,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 2,
    zIndex: 2,
  },
  closeIcon: {
    fontSize: 32,
    color: '#687076',
    fontWeight: 'bold',
  },
  label: {
    color: '#11181C',
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 6,
    fontSize: 15,
  },
  input: {
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: '#687076',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  completeBtn: {
    backgroundColor: '#FFA94D',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 14,
    marginTop: 24,
  },
  completeBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
