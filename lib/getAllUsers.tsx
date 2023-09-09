export default async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}