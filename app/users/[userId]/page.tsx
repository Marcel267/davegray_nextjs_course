import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import React, { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import Link from "next/link";
import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";

import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  if (!user.name) {
    return {
      title: "user not found",
    };
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  //  entweder so, oder wie unten promise als prop übergeben und in UserPosts resolven
  //  const [user, userPosts] = await Promise.all([userData, userPostsData]);

  const user = await userData;

  if (!user.name) notFound();

  return (
    <>
      <Link href={"/users"}>⬅️ Back to Users</Link>
      <h2 className="text-2xl">{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
