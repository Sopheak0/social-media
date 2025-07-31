import { Home, Settings, User } from "lucide-react";

interface SideBarItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const sideBarMenu: SideBarItem[] = [
  {
    title: "Home",
    icon: <Home />,
    href: "/",
  },
  {
    title: "Popular",
    icon: <User />,
    href: "/popular",
  },
  {
    title: "All Posts",
    icon: <Settings />,
    href: "/all-posts",
  },
  {
    title: "Home",
    icon: <Home />,
    href: "/",
  },
  {
    title: "Popular",
    icon: <User />,
    href: "/popular",
  },
  {
    title: "All Posts",
    icon: <Settings />,
    href: "/all-posts",
  },
  {
    title: "Home",
    icon: <Home />,
    href: "/",
  },
  {
    title: "Popular",
    icon: <User />,
    href: "/popular",
  },
  {
    title: "All Posts",
    icon: <Settings />,
    href: "/all-posts",
  },
  {
    title: "Home",
    icon: <Home />,
    href: "/",
  },
  {
    title: "Popular",
    icon: <User />,
    href: "/popular",
  },
  {
    title: "All Posts",
    icon: <Settings />,
    href: "/all-posts",
  },
  {
    title: "Home",
    icon: <Home />,
    href: "/",
  },
  {
    title: "Popular",
    icon: <User />,
    href: "/popular",
  },
  {
    title: "All Posts",
    icon: <Settings />,
    href: "/all-posts",
  },
  {
    title: "Home",
    icon: <Home />,
    href: "/",
  },
  {
    title: "Popular",
    icon: <User />,
    href: "/popular",
  },
  {
    title: "All Posts",
    icon: <Settings />,
    href: "/all-posts",
  },
  {
    title: "Home",
    icon: <Home />,
    href: "/",
  },
  {
    title: "Popular",
    icon: <User />,
    href: "/popular",
  },
  {
    title: "All Posts",
    icon: <Settings />,
    href: "/all-posts",
  },
];

export const AppSideBar = () => {
  return (
    <nav className="flex flex-col space-y-4 p-4 dark:bg-gray-800 min-w-xs h-full">
      {sideBarMenu.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-background dark:hover:bg-primary-700 p-2 rounded-md transition-colors"
        >
          <div className="flex-shrink-0">{item.icon}</div>
          <span className="text-lg">{item.title}</span>
        </a>
      ))}
    </nav>
  );
};
