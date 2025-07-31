import { PostCard } from "@/components/common/post-card";
import { AppRightBar } from "@/components/commons-main/AppRightBar";
import { AppSideBar } from "@/components/commons-main/AppSideBar";
import { AppTopBar } from "@/components/commons-main/AppTopBar";
import { allPosts } from "@/sample/posts";

export default function Home() {
  return (
    <div className="flex flex-col top-0 w-full h-screen overflow-hidden ">
      <AppTopBar />

      <div className="flex justify-between items-start">
        <div className="h-screen overflow-y-auto">
          <AppSideBar />
        </div>
        <main className="flex-1 h-screen overflow-y-auto flex flex-col w-3xl justify-center-safe items-center sm:px-2 md:px-4 lg:px-6 xl:px-8 2xl:px-10 mt-5">
          {/* Main content goes here */}
          <div className="space-y-6">
            {allPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </main>
        <div className="h-screen overflow-y-auto">
          <AppRightBar />
        </div>
      </div>
    </div>
  );
}
