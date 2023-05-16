import Image from "next/image";
import Link from "next/link";
import profileImg from "/public/images/profile.jpg";

export default function Profile() {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        src={profileImg}
        width={250}
        height={250}
        alt="profile image"
        priority
      />
      <h2 className="text-3xl font-bold mt-2">홍기석입니다.</h2>
      <h3 className="text-xl font-semibold">Front-end 개발자</h3>
      <p className="my-1">조깅하는 개발자</p>
      <Link
        href="/contact"
        className="bg-yellow-500 font-bold rounded-xl py-1 px-4"
      >
        Contact Me
      </Link>
    </section>
  );
}
