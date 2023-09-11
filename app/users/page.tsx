import getAllUsers from "@/lib/getAllUsers";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

import React from "react";

export default async function Users() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  console.log("jooooooooooo");

  const content = (
    <section>
      <h2 className="text-2xl">
        <Link href={"/"}>⬅️ Back to home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link href={`users/${user.id}`}>{user.name}</Link>
            <br />
          </div>
        );
      })}
    </section>
  );

  return content;
}
