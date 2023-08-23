import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ item }) => {
  return (
    <Link href={`/blogs/${item.id}`}>
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition duration-300">
        <figure className="relative">
          <Image
            src={item.img}
            alt={item.title}
            width={800}
            height={400}
            className="object-cover w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96"
          />
        </figure>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-600">{item.short.substring(0, 200)}...</p>
          <div className="mt-4 flex justify-end">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-600 transition duration-300">
              Read More...
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
