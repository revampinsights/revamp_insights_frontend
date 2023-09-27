import Button from "../../components/Button/Button";
import Post from "../../components/Post";

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

      <main className="h-auto w-[100vw] flex flex-row gap-3 py-[10vh] px-[10vw]">
        <div className="w-2/3">
          <h1 className="font-medium text-[18px]">Recommended post</h1>
          <div className="w-[50%] bg-black h-[1.5px] mb-[4vh]"></div>
          <Post />
        </div>

        <div className="w-1/3">
          <h1 className="font-medium text-[18px]">Recent post</h1>
          <div className="w-[40%] bg-black h-[1px]"></div>
        </div>
      </main>
    </div>
  );
};

export default Jobs;
