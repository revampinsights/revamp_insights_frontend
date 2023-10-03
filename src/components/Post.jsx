import { posts } from "../constants";
import Button from "./Button/Button";



const Post = () => {
  return (
    <div className="h-auto w-[100%]">
      {posts.map((post) => (
        <div key={post.id} className="flex flex-col">
          <div>
            <img
              src={post.img}
              alt="Post image"
              className="h-[68vh] w-[100%] object-cover rounded-[5px]"
            />
          </div>
          <h1 className="font-medium text-[20px] pt-[6vh] pb-[2%]">
            {post.title}
          </h1>
          <p className="text-[14px] leading-[24px]">{post.desc}</p>

          <div className="w-[20vw] pt-[7vh] pb-[5vh]">
            <Button
              addons={{
                "font-size": "12px",
              }}
            >
              Read More
            </Button>
          </div>
          <div className="w-[100%] bg-[#e1e4e9] h-[1.5px] mb-[3vh]"></div>
        </div>
      ))}
    </div>
  );
};

export default Post;
