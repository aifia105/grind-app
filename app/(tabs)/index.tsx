import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image 
              source={{ 
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8_iomKTN2Ginqu1XE8pmZtfmXgRPiU2dTHVLD8VtIDWBiQMpAHDwDfuEkJy-mON5Ci2KllSJrrsrN6Oib_6V29nRiZrIC3cWpwTu7mXuNucBeLaxorLfW6tZW8wEebLql2mkkmoal6dpGThnIIaO2JQFumBz-AUNEBH_-ZuaXL8-41bSarJCDS0dwehoR335NIYIAT88UfTshiuDhqX33TTSsvzOWpRQmMa1CBGcr1kZWgcdnFKAXbZdKCFnZp_FzDaDo4nGUyY1_' 
              }}
              style={styles.profileImage}
            />
          </View>
          <TouchableOpacity style={styles.settingsButton}>
            <IconSymbol size={24} name="gear" color="#ffffff" />
          </TouchableOpacity>
        </View>

        {/* Today Section */}
        <Text style={styles.todayTitle}>Today</Text>

        {/* Workout Card */}
        <View style={styles.cardContainer}>
          <View style={styles.workoutCard}>
            <Image 
              source={{ 
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpwdClUHJvo31YJjK7aQFb_yLxmFK_sy7tIO2B1xdvE2-gXK_WI_GrC-Frd3lTIRNCLERZ_deh4G_Bumhw1Ns_fNk4Xox-INouUmLn5SD0r7S66ZuQdPstp1zeJE97WcfXWs32NEGUiTGcV064cjsVwK3niif9MmIBZry-s3FuxXrQ7Vq6rMbOt_aQbsxpSZSEBVajs1jTpvypnCOpxwPW62YAZB2KAL128sG2ivjAe14PuUxHjaWC-fO2UJg1LyhyKLBQnL2uVIcm' 
              }}
              style={styles.workoutImage}
            />
            <View style={styles.workoutInfo}>
              <Text style={styles.workoutTitle}>Full Body Strength</Text>
              <View style={styles.workoutDetails}>
                <View style={styles.detailsColumn}>
                  <Text style={styles.workoutLocation}>Gym</Text>
                  <Text style={styles.workoutTime}>10:00 AM - 11:00 AM</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111816',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#111816',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  profileContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  settingsButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todayTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: -0.015,
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 20,
  },
  cardContainer: {
    paddingHorizontal: 16,
  },
  workoutCard: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    overflow: 'hidden',
  },
  workoutImage: {
    width: '100%',
    aspectRatio: 16 / 10,
    borderRadius: 12,
  },
  workoutInfo: {
    paddingVertical: 16,
    gap: 4,
  },
  workoutTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: -0.015,
  },
  workoutDetails: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  detailsColumn: {
    gap: 4,
  },
  workoutLocation: {
    color: '#9cbab3',
    fontSize: 16,
    fontWeight: 'normal',
  },
  workoutTime: {
    color: '#9cbab3',
    fontSize: 16,
    fontWeight: 'normal',
  },
});
