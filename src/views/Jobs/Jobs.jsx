import Button from "../../components/Button/Button";

const Jobs = () => {
  return (
    <div className="h-auto w-[100vw] flex justify-center items-center flex-col pb-[10vh]">
      <div
        className={`h-[90vh] w-[100vw] bg-[url('../../src/assets/images/land_job2.jpg')]  bg-cover bg-center`}
      >
        <div className="w-[100%] h-full flex flex-col justify-center items-center place-content-center place-items-center px-[20vw] backdrop-brightness-50 text-white">
          <h1 className="font-medium text-[30px] place-self-center text-center">
            How to Manage a Difficult Co-worker
          </h1>
          <h1 className="text-[12px] py-[5vh] items-center place-self-center text-center">
            We all get to work with and manage a difficult co-worker at some
            point. That colleague with the ackward sense of humor, the one that
            has no idea of personal space and that assistant who loves to talk
            non-stop. In as much as we would love to work in a friendly and
            productive environment [...]
          </h1>
          <div>
            <Button>Create CV</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
