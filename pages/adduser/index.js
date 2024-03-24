import Head from "next/head";
import FormUser from "@/component/formUser";
import formusercss from "@/styles/formUser.module.css"
export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Prisma APP</title>
        <meta name="description" content="use prisma orm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={formusercss.containerform}>
        <FormUser />
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
