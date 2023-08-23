import getPostDetails from "@/app/utils/get-post-details";
import Image from "next/image";

const SingleBlogPage = async ({ params: { id } }) => {
  const list = await getPostDetails(id);
  const postData = await list;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
      <div className="text-center text-3xl p-1 m-1 font-bold underline">
      {postData.postDetails.title}
      </div>
        <figure>
          <Image
            src={postData.postDetails.img}
            alt={postData.postDetails.title}
            height={400}
            width={700}
          />
        </figure>
        <div className="card-body">
         
          <p>{postData.postDetails.content}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
