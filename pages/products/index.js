import Head from "next/head";
import Cardproduct from "@/component/cardproduct";

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
          <Cardproduct
            key={index}
            id={item.id}
            title={item.title}
            descrip={item.description}
          />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/get/getproductmany/route");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
