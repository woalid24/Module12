
import Hero from "@/app/components/home/Hero";
import getPostNewest from "@/app/utils/get-post-newest";

const AboutPage = async () => {
  const data = await getPostNewest();
  return (
    <div>
      
      <div className="text-center text-3xl p-5 m-5 bg-green-400">
      <h1>This is About page with 2 section + header & footer section</h1>
        </div>
      <Hero />
   
    </div>
  );
};

export default AboutPage;
