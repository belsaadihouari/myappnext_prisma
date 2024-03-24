import Head from "next/head";
import Cardsales from "@/component/cardsales";

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
          <Cardsales
            key={index}
            id={item.id}
            title={item.productTitle}
            price={item.price}
            salemen={item.username}
          />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/get/getsalesmany/route");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
