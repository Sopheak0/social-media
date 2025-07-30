export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  password: string; // Assuming password is also part of the User interface
}

export const users: User[] = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    avatar: "https://example.com/avatar1.png",
    password: "password123",
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Smith",
    email: "jane.smith@example.com",
    avatar: "https://example.com/avatar2.png",
    password: "securepassword",
  },
];
