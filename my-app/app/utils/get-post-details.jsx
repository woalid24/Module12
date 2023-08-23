export default async function getPostDetails(id) {
  const res = await fetch(
    `https://basic-blog.teamrabbil.com/api/post-details/${id}`
  );

  if (res.ok) {
    // throw new Error("failed to fetch post");
    return res.json();
  } else {
    return [];
  }
}
