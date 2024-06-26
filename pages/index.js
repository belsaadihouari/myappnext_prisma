import Head from "next/head";
import Card from "@/component/card";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Prisma APP</title>
        <meta name="description" content="use prisma orm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        {posts.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            username={item.username}
            email={item.email}
          />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/get/getmany/route");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
