export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!res) {
    throw new Error("Failed to fetch user");
  }
  return res.json();
}
