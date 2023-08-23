import BlogCard from "@/app/components/BlogCard";
import getPostNewest from "@/app/utils/get-post-newest";

const BlogPage = async () => {
  const data = await getPostNewest();
  return (
    <div>
       <div className="text-center text-3xl p-5 m-5 ">
      <h1>This is BlogPage With 1 section + header & footer section</h1>
        </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-4 gap-4 p-8">
          {data.map((item) => (
            <BlogCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
