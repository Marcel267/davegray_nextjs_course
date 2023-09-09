import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl">Home</h1>
      <ul className="mt-5 flex flex-col">
        <Link href={"/about"}>About</Link>
        <Link href={"/users"}>Users</Link>
      </ul>
    </>
  );
}
