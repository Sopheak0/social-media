export interface Circle {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  rules: string;
}

export interface CircleMember {
  userId: number;
  circleId: number;
  joinedAt: string;
  role: "member" | "admin";
}

export const circles: Circle[] = [
  {
    id: 1,
    name: "Travel Enthusiasts",
    description: "A group for people who love to explore new places.",
    createdAt: "2025-06-01T09:00:00Z",
    updatedAt: "2025-07-01T09:00:00Z",
    rules: "Be respectful. Share only original content.",
  },
  {
    id: 2,
    name: "Foodies United",
    description: "Share recipes, restaurant reviews, and food photos.",
    createdAt: "2025-06-02T10:00:00Z",
    updatedAt: "2025-07-02T10:00:00Z",
    rules: "No spam. Respect dietary choices.",
  },
  {
    id: 3,
    name: "Book Club",
    description: "Discuss your favorite books and authors.",
    createdAt: "2025-06-03T11:00:00Z",
    updatedAt: "2025-07-03T11:00:00Z",
    rules: "No spoilers without warning.",
  },
  {
    id: 4,
    name: "Fitness Freaks",
    description: "Motivation and tips for a healthy lifestyle.",
    createdAt: "2025-06-04T12:00:00Z",
    updatedAt: "2025-07-04T12:00:00Z",
    rules: "Encourage, don't judge.",
  },
  {
    id: 5,
    name: "Photography Lovers",
    description: "Share your best shots and learn new techniques.",
    createdAt: "2025-06-05T13:00:00Z",
    updatedAt: "2025-07-05T13:00:00Z",
    rules: "Give credit. No offensive content.",
  },
  {
    id: 6,
    name: "Tech Geeks",
    description: "Discuss the latest in technology and gadgets.",
    createdAt: "2025-06-06T14:00:00Z",
    updatedAt: "2025-07-06T14:00:00Z",
    rules: "Stay on topic. No piracy.",
  },
  {
    id: 7,
    name: "Music Makers",
    description: "For musicians and music lovers.",
    createdAt: "2025-06-07T15:00:00Z",
    updatedAt: "2025-07-07T15:00:00Z",
    rules: "Respect all genres.",
  },
  {
    id: 8,
    name: "Movie Buffs",
    description: "Discuss movies, actors, and reviews.",
    createdAt: "2025-06-08T16:00:00Z",
    updatedAt: "2025-07-08T16:00:00Z",
    rules: "No spoilers without warning.",
  },
  {
    id: 9,
    name: "Pet Lovers",
    description: "Share stories and photos of your pets.",
    createdAt: "2025-06-09T17:00:00Z",
    updatedAt: "2025-07-09T17:00:00Z",
    rules: "Be kind to all animals.",
  },
  {
    id: 10,
    name: "Gamers Arena",
    description: "Talk about your favorite games and strategies.",
    createdAt: "2025-06-10T18:00:00Z",
    updatedAt: "2025-07-10T18:00:00Z",
    rules: "No cheating. Respect all players.",
  },
  {
    id: 11,
    name: "Art & Design",
    description: "Showcase your artwork and get feedback.",
    createdAt: "2025-06-11T19:00:00Z",
    updatedAt: "2025-07-11T19:00:00Z",
    rules: "No plagiarism.",
  },
  {
    id: 12,
    name: "Startup Founders",
    description: "Connect with other entrepreneurs.",
    createdAt: "2025-06-12T20:00:00Z",
    updatedAt: "2025-07-12T20:00:00Z",
    rules: "No unsolicited promotions.",
  },
  {
    id: 13,
    name: "Nature Watchers",
    description: "Share your experiences with wildlife and nature.",
    createdAt: "2025-06-13T21:00:00Z",
    updatedAt: "2025-07-13T21:00:00Z",
    rules: "Respect nature.",
  },
  {
    id: 14,
    name: "Language Learners",
    description: "Practice and learn new languages together.",
    createdAt: "2025-06-14T22:00:00Z",
    updatedAt: "2025-07-14T22:00:00Z",
    rules: "Be patient and helpful.",
  },
  {
    id: 15,
    name: "Makers & DIY",
    description: "Share your DIY projects and ideas.",
    createdAt: "2025-06-15T23:00:00Z",
    updatedAt: "2025-07-15T23:00:00Z",
    rules: "Share instructions clearly.",
  },
];

export const circleMembers: CircleMember[] = [
  { userId: 1, circleId: 1, joinedAt: "2025-07-01T10:00:00Z", role: "admin" },
  { userId: 2, circleId: 1, joinedAt: "2025-07-01T11:00:00Z", role: "member" },
  { userId: 3, circleId: 2, joinedAt: "2025-07-02T12:00:00Z", role: "admin" },
  { userId: 4, circleId: 2, joinedAt: "2025-07-02T13:00:00Z", role: "member" },
  { userId: 5, circleId: 3, joinedAt: "2025-07-03T14:00:00Z", role: "admin" },
  { userId: 6, circleId: 3, joinedAt: "2025-07-03T15:00:00Z", role: "member" },
  { userId: 7, circleId: 4, joinedAt: "2025-07-04T16:00:00Z", role: "admin" },
  { userId: 8, circleId: 4, joinedAt: "2025-07-04T17:00:00Z", role: "member" },
  { userId: 9, circleId: 5, joinedAt: "2025-07-05T18:00:00Z", role: "admin" },
  { userId: 10, circleId: 5, joinedAt: "2025-07-05T19:00:00Z", role: "member" },
  { userId: 11, circleId: 6, joinedAt: "2025-07-06T20:00:00Z", role: "admin" },
  { userId: 12, circleId: 6, joinedAt: "2025-07-06T21:00:00Z", role: "member" },
  { userId: 13, circleId: 7, joinedAt: "2025-07-07T22:00:00Z", role: "admin" },
  { userId: 14, circleId: 7, joinedAt: "2025-07-07T23:00:00Z", role: "member" },
  { userId: 15, circleId: 8, joinedAt: "2025-07-08T08:00:00Z", role: "admin" },
];
export const getCircleById = (id: number): Circle | undefined => {
  return circles.find((circle) => circle.id === id);
};
export const getCircleMembers = (circleId: number): CircleMember[] => {
  return circleMembers.filter((member) => member.circleId === circleId);
};
