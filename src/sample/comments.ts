import { Post } from "./posts";
import { User } from "./user";

export interface Comment {
  id: number;
  postId: Post["id"];
  authorId: User["id"];
  content: string;
  createdAt: string;
  updatedAt: string;
  upVotes: User["id"][];
  downVotes: User["id"][];
  replies?: Comment[];
}

export const comments: Comment[] = [
  {
    id: 1,
    postId: 1,
    authorId: 2,
    content: "Looks amazing! Which trail did you take?",
    createdAt: "2025-07-01T11:00:00Z",
    updatedAt: "2025-07-01T11:00:00Z",
    upVotes: [3, 4],
    downVotes: [],
    replies: [
      {
        id: 2,
        postId: 1,
        authorId: 1,
        content: "Thanks! We did the Bear Lake trail.",
        createdAt: "2025-07-01T11:10:00Z",
        updatedAt: "2025-07-01T11:10:00Z",
        upVotes: [2],
        downVotes: [],
      },
    ],
  },
  {
    id: 3,
    postId: 2,
    authorId: 3,
    content: "Great tips! I always struggle with code organization.",
    createdAt: "2025-07-02T13:00:00Z",
    updatedAt: "2025-07-02T13:00:00Z",
    upVotes: [1, 2],
    downVotes: [],
  },
  {
    id: 4,
    postId: 3,
    authorId: 4,
    content: "That pizza looks delicious! Recipe please?",
    createdAt: "2025-07-03T16:00:00Z",
    updatedAt: "2025-07-03T16:00:00Z",
    upVotes: [5],
    downVotes: [],
    replies: [
      {
        id: 5,
        postId: 3,
        authorId: 3,
        content: "Sure! I'll DM you the recipe.",
        createdAt: "2025-07-03T16:10:00Z",
        updatedAt: "2025-07-03T16:10:00Z",
        upVotes: [4],
        downVotes: [],
      },
    ],
  },
  {
    id: 6,
    postId: 4,
    authorId: 5,
    content: "Yoga is the best way to start the day!",
    createdAt: "2025-07-04T08:00:00Z",
    updatedAt: "2025-07-04T08:00:00Z",
    upVotes: [1, 7],
    downVotes: [],
  },
  {
    id: 7,
    postId: 5,
    authorId: 6,
    content: "Stunning photo! What camera did you use?",
    createdAt: "2025-07-05T22:00:00Z",
    updatedAt: "2025-07-05T22:00:00Z",
    upVotes: [5, 8],
    downVotes: [],
  },
  {
    id: 8,
    postId: 6,
    authorId: 7,
    content: "Thanks for the gardening tips!",
    createdAt: "2025-07-06T10:00:00Z",
    updatedAt: "2025-07-06T10:00:00Z",
    upVotes: [6],
    downVotes: [],
  },
  {
    id: 9,
    postId: 7,
    authorId: 8,
    content: "TypeScript has changed my workflow too.",
    createdAt: "2025-07-07T15:00:00Z",
    updatedAt: "2025-07-07T15:00:00Z",
    upVotes: [7, 2],
    downVotes: [],
  },
  {
    id: 10,
    postId: 8,
    authorId: 9,
    content: "Brunch is my favorite meal of the week!",
    createdAt: "2025-07-08T12:00:00Z",
    updatedAt: "2025-07-08T12:00:00Z",
    upVotes: [8, 1],
    downVotes: [],
  },
  {
    id: 11,
    postId: 9,
    authorId: 10,
    content: "Japan is on my bucket list!",
    createdAt: "2025-07-09T19:00:00Z",
    updatedAt: "2025-07-09T19:00:00Z",
    upVotes: [9, 2],
    downVotes: [],
  },
  {
    id: 12,
    postId: 10,
    authorId: 11,
    content: "Can you recommend a good book?",
    createdAt: "2025-07-10T17:00:00Z",
    updatedAt: "2025-07-10T17:00:00Z",
    upVotes: [10, 3],
    downVotes: [],
  },
  {
    id: 13,
    postId: 11,
    authorId: 12,
    content: "Berlin's art scene is so inspiring.",
    createdAt: "2025-07-11T14:00:00Z",
    updatedAt: "2025-07-11T14:00:00Z",
    upVotes: [11, 4],
    downVotes: [],
  },
  {
    id: 14,
    postId: 12,
    authorId: 13,
    content: "Congrats on finishing the marathon!",
    createdAt: "2025-07-12T09:00:00Z",
    updatedAt: "2025-07-12T09:00:00Z",
    upVotes: [12, 5],
    downVotes: [],
  },
  {
    id: 15,
    postId: 13,
    authorId: 14,
    content: "Love your workspace setup!",
    createdAt: "2025-07-13T11:00:00Z",
    updatedAt: "2025-07-13T11:00:00Z",
    upVotes: [13, 6],
    downVotes: [],
  },
];
export const getCommentsByPostId = (postId: Post["id"]): Comment[] => {
  return comments.filter((comment) => comment.postId === postId);
};
export const getCommentById = (id: number): Comment | undefined => {
  return comments.find((comment) => comment.id === id);
};
export const getRepliesByCommentId = (commentId: number): Comment[] => {
  return comments
    .filter((comment) => comment.replies)
    .flatMap((comment) => comment.replies || [])
    .filter((reply) => reply.id === commentId);
};
export const getUserComments = (userId: User["id"]): Comment[] => {
  return comments.filter((comment) => comment.authorId === userId);
};
export const getUpvotedComments = (userId: User["id"]): Comment[] => {
  return comments.filter((comment) => comment.upVotes.includes(userId));
};
export const getDownvotedComments = (userId: User["id"]): Comment[] => {
  return comments.filter((comment) => comment.downVotes.includes(userId));
};
