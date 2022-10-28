import Head from "next/head";

export default function SEO() {
  return (
    <Head>
      <title>{`Jill Pomares | Front End Developer`}</title>
      <meta
        name="description"
        content="Portfolio built using NextJS and written in React. This project showcases my previous and current projects"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Jill Pomares" />
      <meta
        property="og:description"
        content="Portfolio built using NextJS and written in React. This project showcases my previous and current projects"
      />
      <meta property="og:site_name" content="Portfolio" />
    </Head>
  );
}