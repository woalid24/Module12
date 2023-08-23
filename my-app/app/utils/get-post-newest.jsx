export default async function getPostNewest() {
  const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-newest`);

  if (res.ok) {
    // throw new Error("failed to fetch post");
    return res.json();
  } else {
    return [];
  }
}
