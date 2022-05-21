import axios from "axios";
export default async function getData(user_id) {
  const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
  console.log(user);
  const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);
  const post = posts[0];
  const total = { user, post };
  console.log(total);
}
