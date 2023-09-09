import React from "react";

type Props = {
  promise: Promise<Post[]>;
};

export default async function UserPosts({ promise }: Props) {
  const posts = await promise;

  const content = posts.map((post) => {
    return (
      <article key={post.id} className="mt-5">
        <h2 className="text-2xl">{post.title}</h2>
        <p className="text-gray-300">{post.body}</p>
      </article>
    );
  });

  return content;
}
