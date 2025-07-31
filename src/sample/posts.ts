import { getUserById, User } from "./user";

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: User;
  images?: string[];
  tags?: string[];
  createdAt: string;
  updatedAt: string;
  upVotes: User["id"][];
  downVotes: User["id"][];
}

export const allPosts: Post[] = [
  {
    id: 1,
    title:
      "Exploring the MountainsHad an amazing time hiking in the Rockies last weekend!Had an amazing time hiking in the Rockies last weekend!Had an amazing time hiking in the Rockies last weekend!Had an amazing time hiking in the Rockies last weekend!Had an amazing time hiking in the Rockies last weekend!Had an amazing time hiking in the Rockies last weekend!Had an amazing time hiking in the Rockies last weekend!Had an amazing time hiking in the Rockies last weekend!",
    content:
      "Had an amazing time hiking in the Rockies last weekend!Had an amazing time hiking in the Rockies last weekend!Had an amazing time hiking in the Rockies last weekend!Had an amazing time hiking in the Rockies last weekend!Had an amazing time hiking in the Rockies last weekend!Had an amazing time hiking in the Rockies last weekend!Had an amazing time hiking in the Rockies last weekend!Had an amazing time hiking in the Rockies last weekend!Had an amazing time hiking in the Rockies last weekend!Had an amazing time hiking in the Rockies last weekend!Had an amazing time hiking in the Rockies last weekend!",
    authorId: getUserById(1)!,
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      // "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      // "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      // "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      // "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    ],
    tags: ["travel", "mountains", "adventure"],
    createdAt: "2025-07-01T10:00:00Z",
    updatedAt: "2025-07-01T10:00:00Z",
    upVotes: [2, 3, 4, 5],
    downVotes: [6],
  },
  {
    id: 2,
    title: "Best Coding Practices",
    content:
      "Always write clean and maintainable code. Here are my top tips...",
    authorId: getUserById(7)!,
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c"],
    tags: ["coding", "tips", "development"],
    createdAt: "2025-07-02T12:30:00Z",
    updatedAt: "2025-07-02T12:30:00Z",
    upVotes: [1, 3, 5, 7, 9],
    downVotes: [],
  },
  {
    id: 3,
    title: "Delicious Homemade Pizza",
    content: "Tried a new pizza recipe and it turned out great!",
    authorId: getUserById(4)!,
    images: ["https://images.unsplash.com/photo-1542281286-9e0a16bb7366"],
    tags: ["food", "pizza", "homemade"],
    createdAt: "2025-07-03T15:45:00Z",
    updatedAt: "2025-07-03T15:45:00Z",
    upVotes: [2, 4, 6, 8, 10],
    downVotes: [1],
  },
  {
    id: 4,
    title: "Morning Yoga Routine",
    content: "Yoga helps me start my day with energy and focus.",
    authorId: getUserById(12)!,
    images: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    tags: ["yoga", "health", "morning"],
    createdAt: "2025-07-04T07:20:00Z",
    updatedAt: "2025-07-04T07:20:00Z",
    upVotes: [1, 3, 5, 7, 9, 11],
    downVotes: [],
  },
  {
    id: 5,
    title: "City Lights at Night",
    content: "Captured this beautiful view of the city skyline.",
    authorId: getUserById(11)!,
    images: ["https://images.unsplash.com/photo-1465101046530-73398c7f28ca"],
    tags: ["photography", "city", "night"],
    createdAt: "2025-07-05T21:10:00Z",
    updatedAt: "2025-07-05T21:10:00Z",
    upVotes: [2, 4, 6, 8, 10, 12],
    downVotes: [3],
  },
  {
    id: 6,
    title: "Gardening Tips for Beginners",
    content: "Start your own garden with these simple steps.",
    authorId: getUserById(14)!,
    images: ["https://images.unsplash.com/photo-1464983953574-0892a716854b"],
    tags: ["gardening", "tips", "nature"],
    createdAt: "2025-07-06T09:00:00Z",
    updatedAt: "2025-07-06T09:00:00Z",
    upVotes: [1, 3, 5, 7, 9, 11, 13],
    downVotes: [],
  },
  {
    id: 7,
    title: "Learning TypeScript",
    content: "TypeScript makes JavaScript development more robust.",
    authorId: getUserById(13)!,
    images: ["https://images.unsplash.com/photo-1519125323398-675f0ddb6308"],
    tags: ["typescript", "javascript", "programming"],
    createdAt: "2025-07-07T14:30:00Z",
    updatedAt: "2025-07-07T14:30:00Z",
    upVotes: [2, 4, 6, 8, 10, 12, 14],
    downVotes: [5],
  },
  {
    id: 8,
    title: "Sunday Brunch Ideas",
    content: "Here are some easy and tasty brunch recipes.",
    authorId: getUserById(12)!,
    images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836"],
    tags: ["food", "brunch", "recipes"],
    createdAt: "2025-07-08T11:00:00Z",
    updatedAt: "2025-07-08T11:00:00Z",
    upVotes: [1, 3, 5, 7, 9, 11, 13, 15],
    downVotes: [],
  },
  {
    id: 9,
    title: "Traveling to Japan",
    content: "Japan is a beautiful country with rich culture and history.",
    authorId: getUserById(7)!,
    images: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb"],
    tags: ["travel", "japan", "culture"],
    createdAt: "2025-07-09T18:00:00Z",
    updatedAt: "2025-07-09T18:00:00Z",
    upVotes: [2, 4, 6, 8, 10, 12, 14],
    downVotes: [7],
  },
  {
    id: 10,
    title: "My Favorite Books",
    content: "Sharing a list of books that inspired me.",
    authorId: getUserById(6)!,
    images: ["https://images.unsplash.com/photo-1512820790803-83ca734da794"],
    tags: ["books", "reading", "inspiration"],
    createdAt: "2025-07-10T16:00:00Z",
    updatedAt: "2025-07-10T16:00:00Z",
    upVotes: [1, 3, 5, 7, 9, 11, 13, 15],
    downVotes: [],
  },
  {
    id: 11,
    title: "Street Art in Berlin",
    content: "Berlin's street art scene is vibrant and creative.",
    authorId: getUserById(3)!,
    images: [
      "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    tags: ["art", "berlin", "streetart"],
    createdAt: "2025-07-11T13:00:00Z",
    updatedAt: "2025-07-11T13:00:00Z",
    upVotes: [2, 4, 6, 8, 10, 12, 14],
    downVotes: [9],
  },
  {
    id: 12,
    title: "Running a Marathon",
    content: "Completed my first marathon! Here’s how I trained.",
    authorId: getUserById(4)!,
    images: ["https://images.unsplash.com/photo-1509228468518-180dd4864904"],
    tags: ["running", "marathon", "fitness"],
    createdAt: "2025-07-12T08:00:00Z",
    updatedAt: "2025-07-12T08:00:00Z",
    upVotes: [1, 3, 5, 7, 9, 11, 13, 15],
    downVotes: [],
  },
  {
    id: 13,
    title: "Minimalist Workspace Setup",
    content: "A clean workspace helps me stay productive.",
    authorId: getUserById(5)!,
    images: ["https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"],
    tags: ["workspace", "minimalism", "productivity"],
    createdAt: "2025-07-13T10:00:00Z",
    updatedAt: "2025-07-13T10:00:00Z",
    upVotes: [2, 4, 6, 8, 10, 12, 14],
    downVotes: [11],
  },
  {
    id: 14,
    title: "Learning to Play Guitar",
    content: "Started learning guitar and loving it so far.",
    authorId: getUserById(2)!,
    images: ["https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"],
    tags: ["music", "guitar", "learning"],
    createdAt: "2025-07-14T17:00:00Z",
    updatedAt: "2025-07-14T17:00:00Z",
    upVotes: [1, 3, 5, 7, 9, 11, 13, 15],
    downVotes: [],
  },
  {
    id: 15,
    title: "Baking Chocolate Cake",
    content: "Tried a new chocolate cake recipe and it was delicious!",
    authorId: getUserById(3)!,
    images: [
      "https://images.unsplash.com/photo-1542843137-8791a6904d14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    tags: ["baking", "cake", "chocolate"],
    createdAt: "2025-07-15T19:00:00Z",
    updatedAt: "2025-07-15T19:00:00Z",
    upVotes: [2, 4, 6, 8, 10, 12, 14],
    downVotes: [13],
  },
];

export const popularPosts: Post[] = allPosts.filter(
  (post) => post.upVotes.length > 5
);
export const getPostById = (id: number): Post | undefined => {
  return allPosts.find((post) => post.id === id);
};
