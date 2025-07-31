export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  password: string;
  username: string;
}

export const users: User[] = [
  {
    id: 1,
    first_name: "Alice",
    last_name: "Johnson",
    email: "alice.johnson@example.com",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    password: "hashedpassword1",
    username: "alicejohnson",
  },
  {
    id: 2,
    first_name: "Bob",
    last_name: "Smith",
    email: "bob.smith@example.com",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    password: "hashedpassword2",
    username: "bobsmith",
  },
  {
    id: 3,
    first_name: "Carol",
    last_name: "Williams",
    email: "carol.williams@example.com",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    password: "hashedpassword3",
    username: "carolwilliams",
  },
  {
    id: 4,
    first_name: "David",
    last_name: "Brown",
    email: "david.brown@example.com",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    password: "hashedpassword4",
    username: "davidbrown",
  },
  {
    id: 5,
    first_name: "Eve",
    last_name: "Davis",
    email: "eve.davis@example.com",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    password: "hashedpassword5",
    username: "evedavis",
  },
  {
    id: 6,
    first_name: "Frank",
    last_name: "Miller",
    email: "frank.miller@example.com",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    password: "hashedpassword6",
    username: "frankmiller",
  },
  {
    id: 7,
    first_name: "Grace",
    last_name: "Wilson",
    email: "grace.wilson@example.com",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    password: "hashedpassword7",
    username: "gracewilson",
  },
  {
    id: 8,
    first_name: "Henry",
    last_name: "Moore",
    email: "henry.moore@example.com",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    password: "hashedpassword8",
    username: "henrymoore",
  },
  {
    id: 9,
    first_name: "Ivy",
    last_name: "Taylor",
    email: "ivy.taylor@example.com",
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
    password: "hashedpassword9",
    username: "ivytaylor",
  },
  {
    id: 10,
    first_name: "Jack",
    last_name: "Anderson",
    email: "jack.anderson@example.com",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    password: "hashedpassword10",
    username: "jackanderson",
  },
  {
    id: 11,
    first_name: "Kate",
    last_name: "Thomas",
    email: "kate.thomas@example.com",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    password: "hashedpassword11",
    username: "katethomas",
  },
  {
    id: 12,
    first_name: "Leo",
    last_name: "Jackson",
    email: "leo.jackson@example.com",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    password: "hashedpassword12",
    username: "leojackson",
  },
  {
    id: 13,
    first_name: "Mia",
    last_name: "White",
    email: "mia.white@example.com",
    avatar: "https://randomuser.me/api/portraits/women/13.jpg",
    password: "hashedpassword13",
    username: "miawhite",
  },
  {
    id: 14,
    first_name: "Noah",
    last_name: "Harris",
    email: "noah.harris@example.com",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    password: "hashedpassword14",
    username: "noahharris",
  },
  {
    id: 15,
    first_name: "Olivia",
    last_name: "Martin",
    email: "olivia.martin@example.com",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    password: "hashedpassword15",
    username: "oliviamartin",
  },
];
export const getUserById = (id: number): User | undefined => {
  return users.find((user) => user.id === id);
};
