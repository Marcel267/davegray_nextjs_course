import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <>
      <h1 className="text-3xl">About</h1>
      <Link href={"/"}>⬅️ Back to home</Link>
    </>
  );
}
