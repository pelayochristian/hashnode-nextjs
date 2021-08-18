import Layout from "../components/Layout";
import BlogList from "../components/BlogList";

export default function Home({ publications }) {
  return (
    <Layout>
      <BlogList publications={publications} />
    </Layout>
  );
}

/**
 * Method used to fetch data from Hashnode.
 * 1. AUTHORIZATION_TOKEN => Your Hashnode Personal Access Token
 * 2. USER_NAME => Your Hashnode username
 * @param {Object} context
 * @returns props
 */
export async function getServerSideProps(context) {
  const res = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "0a5eee0d-d0d1-443e-840c-e57fed1ec879",
    },
    body: JSON.stringify({
      query:
        'query {user(username: "testchan") {publication {posts(page: 0) {title brief slug coverImage dateAdded}}}}',
    }),
  });
  const publications = await res.json();

  if (!publications) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      publications,
    },
  };
}
