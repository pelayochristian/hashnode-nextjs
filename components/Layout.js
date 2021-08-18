import Head from "next/head";
import Header from "../components/Header";

export default function Layout(props) {
  return (
    <div className="main-container">
      <Head>
        <title>Hashnode NextJS Integration</title>
      </Head>
      <Header />
      <main className="container mb-5">{props.children}</main>
    </div>
  );
}
