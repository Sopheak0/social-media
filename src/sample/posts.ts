import { User } from "./user";

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: User["id"];
  images?: string[];
  createdAt: string;
  updatedAt: string;
}
