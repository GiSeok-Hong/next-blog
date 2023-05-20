import FeaturedPosts from "@/components/FeaturedPosts";
import Profile from "@/components/Profile";

export default function HomePage() {
  return (
    <>
      <Profile />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
    </>
  );
}
