import Button from "../../components/Button/Button";
import Post from "../../components/Post";

import { posts, categories, trendingTags } from "../../constants";
import FormInputField from "../../components/FormInputField/FormInputField";

const RecentPost = () => {
  return (
    <div className="h-auto w-[100%]">
      {posts
        .filter((filteredpost) => filteredpost.id <= 4)
        .map((post) => (
          <>
            <div
              key={post.id}
              className="flex flex-row gap-5 justify-center mb-[2%]"
            >
              <div className="w-[40%]">
                <img
                  src={post.img}
                  alt="Post image"
                  className="h-[22vh] w-[100%] object-cover rounded-[5px]"
                />
              </div>
              <div className="w-[60%]">
                <h1 className="font-medium text-[13px] pb-[3%]">
                  {post.title}
                </h1>
                <p className="text-[12px] leading-[20px] justify-items-stretch">
                  {'"'}
                  {[...post.desc].slice(0, 133)} {'..."'}
                </p>
              </div>
            </div>
            <div className="w-[100%] bg-[#e1e4e9] h-[1.5px] mb-[1.5vh]"></div>
          </>
        ))}
    </div>
  );
};

const Categories = () => {
  return (
    <div className="w-[100%] h-auto flex flex-col gap-3">
      {categories.map((category) => (
        <div
          key={category.id}
          className=" text-white bg-[#0959FE] rounded-[10px] border-[1px] py-3 pl-5"
        >
          <p className="text-[14px]">{category.title}</p>
        </div>
      ))}
    </div>
  );
};

const TrendingTags = () => {
  return (
    <div className="w-[100%] h-auto flex flex-row flex-wrap gap-3">
      {trendingTags.map((tag) => (
        <div
          key={tag.id}
          className="bg-white text-black  border-[2px] border-white drop-shadow-md shadow-lg py-3 px-6 rounded-[50px]"
        >
          <p className="text-center font-medium text-[13px]">{tag.title}</p>
        </div>
      ))}
    </div>
  );
};

const Jobs = () => {
  return (
    <div className="h-auto w-[100vw] flex flex-col pb-[10vh]">
      <div
        className={`h-[70vh] w-[100vw] bg-[url('../../src/assets/images/land_job2.jpg')]  bg-cover bg-center`}
      >
        <div className="w-[100%] h-full flex flex-col justify-start place-content-center place-items-center py-[5%] backdrop-brightness-50 text-white">
          <div className="px-[20vw]">
            <h1 className="font-bold text-[35px] leading-[34px] place-self-center text-center">
              How to Manage a Difficult Co-worker
            </h1>
            <h1 className="text-[14px] leading-[20px] py-[3.5%] items-center place-self-center text-center">
              We all get to work with and manage a difficult co-worker at some
              point. That colleague with the ackward sense of humor, the one
              that has no idea of personal space and that assistant who loves to
              talk non-stop. In as much as we would love to work in a friendly
              and productive environment [...]
            </h1>

            <form className="flex place-items-center place-content-center mt-8">
              <div className="flex gap-3 rounded-l-md w-[40vw] py-2.5 px-3 text-[#8C97AC] items-center bg-white">
                <input
                  type="email"
                  placeholder="Search for job ..."
                  className="outline-none w-full text-[13px]"
                />
              </div>
              <Button
                addons={{
                  "font-size": "12px",
                  "border-top-left-radius": "0px",
                  "border-bottom-left-radius": "0px",
                  padding: "11px 30px 11px 30px",
                }}
              >
                Search
              </Button>
            </form>
          </div>

          <div className="place-self-start mt-[6%] ml-[10%]">
            <Button
              addons={{
                "font-size": "12px",
                padding: "12px 33px 12px 33px",
              }}
            >
              Post a job
            </Button>
          </div>
        </div>
      </div>

      <main className="h-auto w-[100vw] flex flex-row gap-[5%] py-[10vh] px-[10vw]">
        <div className="w-3/5">
          <>
            <div>
              <h1 className="font-medium text-[18px]">Recommended post</h1>
              <div className="w-[50%] bg-black h-[1.5px] mb-[4vh]"></div>
              <Post />
            </div>

            <div>
              <h1 className="font-medium text-[18px] py-[2%]">Leave a Reply</h1>
              <div className="w-[50%] bg-black h-[1.5px] mb-[4vh]"></div>

              <div>
                <form>
                  <label className="block mb-2 text-sm font-medium dark:text-black">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="9"
                    className="block p-2.5 w-full text-sm border-[1px] rounded-[10px] drop-shadow-sm shadow-sm bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Comment"
                  ></textarea>
                </form>
              </div>

              <div className="w-[100%] h-auto flex flex-row gap-5">
                <FormInputField placeholder="Name" className="pr-[40%]" label="Name"/>
                <FormInputField placeholder="Email" className="pr-[40%]" label="Email" />
              </div>

<div className="w-[100%] my-[5%]">
              <Button className=" w-[30%]">Subscribe</Button>
              </div>
            </div>
          </>
        </div>

        <div className="w-2/5">
          <>
            <div>
              <h1 className="font-medium text-[18px]">Recent post</h1>
              <div className="w-[40%] bg-black h-[1.5px] mb-[4vh]"></div>

              <div className="">
                <RecentPost />
              </div>
            </div>

            <div className="py-[3%]">
              <h1 className="font-medium text-[18px] py-[2%]">Categories</h1>
              <div className="w-[40%] bg-black h-[1.5px] mb-[4vh]"></div>

              <div className="">
                <Categories />
              </div>
            </div>

            <div className="py-[3%]">
              <h1 className="font-medium text-[18px] py-[2%]">Trending Tags</h1>
              <div className="w-[40%] bg-black h-[1.5px] mb-[4vh]"></div>

              <div className="">
                <TrendingTags />
              </div>
            </div>

            <div className="py-[3%]">
              <h1 className="font-medium text-[18px] py-[2%]">Newsletter</h1>
              <div className="w-[40%] bg-black h-[1.5px] mb-[4vh]"></div>

              <div className="">
                <FormInputField
                  placeholder="Your email address"
                  className="outline-none drop-shadow-sm shadow-sm text-[14px]"
                />
                <Button className="w-[100%]">Subscribe</Button>
              </div>
            </div>
          </>
        </div>
      </main>
    </div>
  );
};

export default Jobs;
