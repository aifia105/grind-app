import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/* image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpwdClUHJvo31YJjK7aQFb_yLxmFK_sy7tIO2B1xdvE2-gXK_WI_GrC-Frd3lTIRNCLERZ_deh4G_Bumhw1Ns_fNk4Xox-INouUmLn5SD0r7S66ZuQdPstp1zeJE97WcfXWs32NEGUiTGcV064cjsVwK3niif9MmIBZry-s3FuxXrQ7Vq6rMbOt_aQbsxpSZSEBVajs1jTpvypnCOpxwPW62YAZB2KAL128sG2ivjAe14PuUxHjaWC-fO2UJg1LyhyKLBQnL2uVIcm"*/

export default function HomeScreen() {
  const profile = {
    name: "John Doe",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8_iomKTN2Ginqu1XE8pmZtfmXgRPiU2dTHVLD8VtIDWBiQMpAHDwDfuEkJy-mON5Ci2KllSJrrsrN6Oib_6V29nRiZrIC3cWpwTu7mXuNucBeLaxorLfW6tZW8wEebLql2mkkmoal6dpGThnIIaO2JQFumBz-AUNEBH_-ZuaXL8-41bSarJCDS0dwehoR335NIYIAT88UfTshiuDhqX33TTSsvzOWpRQmMa1CBGcr1kZWgcdnFKAXbZdKCFnZp_FzDaDo4nGUyY1_' 
  }
  const type = "upper"
  const upperSession = {
    title: "Upper Body",
    location: "Gym",
    time: "10:00 AM - 11:00 AM",
    image: require('@/assets/images/TrainingTypes/upper.jpg')
  }
  const lowerSession = {
    title: "Lower Body",
    location: "Gym",
    time: "11:00 AM - 12:00 PM",
    image: require('@/assets/images/TrainingTypes/lower.jpg')
  }

  const todaySession = type === "upper" ? upperSession : lowerSession;

  const macro = [
    { title: "Calories", value: "2,500 cal", image: require('@/assets/images/macroImages/calories.jpg') },
    { title: "Protein", value: "150 g", image: require('@/assets/images/macroImages/protien.jpg') },
    { title: "Carbs", value: "300 g", image: require('@/assets/images/macroImages/carbs.jpg') },
    { title: "Fats", value: "70 g", image: require('@/assets/images/macroImages/fats.jpg') },
  ];

  const sleepHours = 7;
  const waterIntake = { current: 1, target: 3 };
  const workoutStreak = 2; 
  
  const weeklyStats = { completed: 6, total: 6 };
  
  const bodyWeight = { current: 75.2, change: -0.8, trend: 'up' }; 
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image 
              source={{ 
                uri: profile.image
              }}
              style={styles.profileImage}
            />
          </View>
          <TouchableOpacity style={styles.settingsButton}>
            <IconSymbol size={24} name="gear" color="#ffffff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.todayTitle}>Today</Text>

        <View style={styles.cardContainer}>
          <View style={styles.workoutCard}>
            <Image 
              source={todaySession.image}
              style={styles.workoutImage}
            />
            <View style={styles.workoutInfo}>
              <Text style={styles.workoutTitle}>{todaySession.title}</Text>
              <View style={styles.workoutDetails}>
                <View style={styles.detailsColumn}>
                  <Text style={styles.workoutTime}>{todaySession.time}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.dashboardCard}>
          <Text style={styles.dashboardTitle}>This Week</Text>
          <View style={styles.dashboardContent}>
            <View style={styles.dashboardStat}>
              <Text style={styles.dashboardValue}>{weeklyStats.completed}/{weeklyStats.total}</Text>
              <Text style={styles.dashboardLabel}>Workouts</Text>
              <Text style={styles.dashboardSubtext}>
                {weeklyStats.total - weeklyStats.completed} remaining
              </Text>
            </View>
            <View style={styles.progressRingContainer}>
              <View style={styles.progressRing}>
                <View style={styles.progressRingTrack} />
                {Array.from({ length: weeklyStats.total }, (_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.progressDot,
                      {
                        backgroundColor: index < weeklyStats.completed ? '#4ade80' : 'transparent',
                        transform: [
                          { rotate: `${(index * 360) / weeklyStats.total - 90}deg` },
                          { translateY: -35 }
                        ]
                      }
                    ]}
                  />
                ))}
                <View style={styles.progressRingCenter}>
                  <Text style={styles.progressPercent}>
                    {Math.round((weeklyStats.completed / weeklyStats.total) * 100)}%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statIcon}>💧</Text>
            <Text style={styles.statTitle}>Water</Text>
            <Text style={styles.statValue}>{waterIntake.current}/{waterIntake.target}</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${(waterIntake.current / waterIntake.target) * 100}%` }]} />
            </View>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statIcon}>🔥</Text>
            <Text style={styles.statTitle}>Streak</Text>
            <Text style={styles.statValue}>{workoutStreak} days</Text>
            <Text style={styles.statSubtext}>Keep it up!</Text>
          </View>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statIcon}>⚖️</Text>
            <Text style={styles.statTitle}>Weight</Text>
            <Text style={styles.statValue}>{bodyWeight.current}kg</Text>
            <View style={styles.trendContainer}>
              <Text style={[styles.trendIcon, { color: bodyWeight.trend === 'up' ? '#4ade80' : '#ef4444' }]}>
                {bodyWeight.trend === 'up' ? '↗' : '↘'}
              </Text>
              <Text style={[styles.trendText, { color: bodyWeight.trend === 'up' ? '#4ade80' : '#ef4444' }]}>
                {bodyWeight.change > 0 ? '+' : ''}{bodyWeight.change}kg
              </Text>
            </View>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statIcon}>😴</Text>
            <Text style={styles.statTitle}>Sleep</Text>
            <Text style={styles.statValue}>{sleepHours}h</Text>
            <Text style={styles.sleepQualityText}>
              {sleepHours >= 8 ? 'Great' : sleepHours >= 7 ? 'Good' : sleepHours >= 6 ? 'Fair' : 'Poor'}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.macroTitle}>Daily Macro</Text>
          <View style={{ flex: 1, padding: 20, flexDirection: 'column', gap: 16 }}>
            {macro.map((item, index) => (
              <View key={index} style={styles.macroItem}>
                <View style={styles.detailsMacro}>
                  <Text style={styles.macroItemTitle}>{item.title}</Text>
                  <Text style={styles.macroValue}>{item.value}</Text>
                </View>
                <Image 
                  source={item.image} 
                  style={styles.macroImage}
                  resizeMode="cover"
                  fadeDuration={100}
                  defaultSource={require('@/assets/images/adaptive-icon.png')}
                />
              </View>
            ))}
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
    paddingTop: 10,
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
    textTransform: 'uppercase',
  },
  macroTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: -0.015,
    paddingHorizontal: 16,
    paddingBottom: 2,
    paddingTop: 16,
    textTransform: 'uppercase',
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
    height: 200,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  workoutInfo: {
    paddingVertical: 16,
    gap: 4,
  },
  workoutTitle: {
    color: '#ffffffff',
    fontSize: 18,
    fontWeight: 'medium',
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
  macroItem: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: 16,
    borderRadius: 12,
  },
  macroImage: {
    width: 100,
    height: 60,
    borderRadius: 12,
    resizeMode: 'cover',
    backgroundColor: '#2a332f',
  },
  macroItemTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'medium',
    lineHeight: 20,
  },
  macroValue: {
    color: '#9cbab3',
    fontSize: 14,
    lineHeight: 18,
  },
  detailsMacro: {
    gap: 4,
    flexDirection: 'column',
    flex: 2,
    justifyContent: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 16,
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1a201d',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  statTitle: {
    color: '#9cbab3',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  statValue: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  statSubtext: {
    color: '#9cbab3',
    fontSize: 12,
    fontWeight: '400',
  },
  progressBar: {
    width: '100%',
    height: 4,
    backgroundColor: '#2a332f',
    borderRadius: 2,
    marginTop: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4ade80',
    borderRadius: 2,
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 4,
  },
  trendIcon: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  trendText: {
    fontSize: 12,
    fontWeight: '600',
  },
  sleepQualityText: {
    color: '#9cbab3',
    fontSize: 11,
    fontWeight: '500',
    marginTop: 4,
  },
  dashboardCard: {
    backgroundColor: '#1a201d',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop: 16,
  },
  dashboardTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    textTransform: 'uppercase',
  },
  dashboardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dashboardStat: {
    flex: 1,
  },
  dashboardValue: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  dashboardLabel: {
    color: '#9cbab3',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  dashboardSubtext: {
    color: '#9cbab3',
    fontSize: 12,
    fontWeight: '400',
  },
  progressRingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressRing: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  progressRingTrack: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 6,
    borderColor: '#2a332f',
  },
  progressDot: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4ade80',
  },
  progressRingCenter: {
    position: 'absolute',
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#1a201d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressPercent: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  }
})
