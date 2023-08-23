
import BlogCard from "./components/BlogCard";
import Hero from "./components/home/Hero";
import getPostNewest from "./utils/get-post-newest";

export default async function Home() {
  const data = await getPostNewest();
  return (
    <div className="flex flex-col items-center">
       <div className="text-center text-3xl p-5 m-5">
      <h1> This is home page with 3 section + header & footer section. But in one section i displayed blog items using the api.</h1>
        </div>
      <Hero />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-4 gap-4 p-8">
          {data.map((item) => (
            <BlogCard item={item} key={item.id} />
          ))}
        </div>
      </div>
     
    </div>
  );
}
