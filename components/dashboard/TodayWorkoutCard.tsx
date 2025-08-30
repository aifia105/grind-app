import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TodayWorkoutCard() {
  const type = "upper";
  const upperSession = {
    title: "Upper Body",
    subtitle: "Push Day",
    duration: "45-60 min",
    exercises: "6 exercises",
    nextExercise: "Bench Press",
    nextDetails: "4 sets × 8-10 reps",
    image: require('@/assets/images/TrainingTypes/upper.jpg')
  };
  
  const lowerSession = {
    title: "Lower Body",
    subtitle: "Leg Day",
    duration: "50-65 min",
    exercises: "7 exercises",
    nextExercise: "Squat",
    nextDetails: "4 sets × 6-8 reps",
    image: require('@/assets/images/TrainingTypes/lower.jpg')
  };

  const todaySession = type === "upper" ? upperSession : lowerSession;

  return (
    <View style={styles.container}>
      <Image 
        source={todaySession.image}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.label}>Today's Workout</Text>
            <Text style={styles.title}>{todaySession.title}</Text>
            <Text style={styles.subtitle}>{todaySession.subtitle}</Text>
          </View>
          <TouchableOpacity style={styles.playButton}>
            <IconSymbol size={24} name="paperplane.fill" color={Colors.background.primary} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.workoutInfo}>
          <View style={styles.infoItem}>
            <IconSymbol size={16} name="gear" color="#9cbab3" />
            <Text style={styles.infoText}>{todaySession.duration}</Text>
          </View>
          <View style={styles.infoItem}>
            <IconSymbol size={16} name="dumbbell.fill" color="#9cbab3" />
            <Text style={styles.infoText}>{todaySession.exercises}</Text>
          </View>
        </View>
        
        <View style={styles.exercisePreview}>
          <Text style={styles.exerciseTitle}>Next: {todaySession.nextExercise}</Text>
          <Text style={styles.exerciseDetails}>{todaySession.nextDetails}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    height: 220,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titleContainer: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.accent.primary,
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 24,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.primary,
    opacity: 0.9,
  },
  playButton: {
    backgroundColor: Colors.accent.primary,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.accent.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  workoutInfo: {
    flexDirection: 'row',
    gap: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.primary,
    opacity: 0.9,
  },
  exercisePreview: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    backdropFilter: 'blur(10px)',
  },
  exerciseTitle: {
    fontSize: 16,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    marginBottom: 4,
  },
  exerciseDetails: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.primary,
    opacity: 0.8,
  },
});
