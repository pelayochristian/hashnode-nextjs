import BlogItem from "./BlogItem";

export default function BlogList({ publications }) {
  let posts = publications.data.user.publication.posts;

  return (
    <div className="mt-5">
      <div className="mb-4">
        <h2>My Publications</h2>
      </div>
      <div className="row">
        {posts.map((post, index) => {
          return (
            <div key={index} className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <BlogItem post={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
