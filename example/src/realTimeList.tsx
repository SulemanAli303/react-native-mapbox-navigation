import { useEffect, useState } from 'react';
import type { Participant } from './Participant';

export default function useRandomUsers() {
  const startOrigin = { latitude: 28.4212, longitude: 70.2989 };
  const destination = { latitude: 31.5204, longitude: 74.3587 };
  const [participants, setParticipants] = useState<Participant[]>([]);
  // Generate initial 10 users within start-destination bounds
  useEffect(() => {
    const users: Participant[] = Array.from({ length: 10 }).map((_, idx) => ({
      id: `user-${idx + 1}`,
      userMail: `user${idx + 1}@example.com`,
      coverImage: '',
      displayName: `User ${idx + 1}`,
      imageUrl: `image-${Date.now() + idx}.jpg`,
      isBenzifiMember: false,
      nation: 'AE',
      userName: `user${idx + 1}`,
      lat: getRandomInRange(startOrigin.latitude, destination.latitude),
      lng: getRandomInRange(startOrigin.longitude, destination.longitude),
    }));
    setParticipants(users);
  }, [
    startOrigin.latitude,
    startOrigin.longitude,
    destination.latitude,
    destination.longitude,
  ]);

  // Update positions every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setParticipants((prev) =>
        prev.map((user) => ({
          ...user,
          lat: clamp(
            user.lat + getRandomDelta(),
            startOrigin.latitude,
            destination.latitude
          ),
          lng: clamp(
            user.lng + getRandomDelta(),
            startOrigin.longitude,
            destination.longitude
          ),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [
    startOrigin.latitude,
    startOrigin.longitude,
    destination.latitude,
    destination.longitude,
  ]);
  return participants;
}
// Helper: Random value in given lat/lng range
function getRandomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// Helper: Small random delta for movement
function getRandomDelta(): number {
  return (Math.random() - 0.5) * 0.01; // ~1km variation
}

// Clamp value to min/max
function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
