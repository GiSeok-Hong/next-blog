import Profile from "@/components/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "커리어 소개",
};

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
export default function AboutPage() {
  return (
    <>
      <Profile />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>hello</p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>기간</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>React</p>
      </section>
    </>
  );
}
