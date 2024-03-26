import Head from "next/head";
import Formproduct from "@/component/formproduct";
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
        <Formproduct />
      </div>
    </>
  );
}

export async function getStaticProps() {

  return {
    props: {}, 
  };
}
