import Button from "../../components/Button/Button";
import { banner_image, cv_carousel_1, cv_carousel_2, cv_carousel_3 } from "../../assets";
import { cv_landing_page } from "../../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "20px",
      slidesToShow: 3,
      speed: 500,
      dots: true,
    };
    return (
      <div>
        <h2 className="w-[30vw] font-medium text-[20px] py-[5vh] text-white ml-[40vw]"> Choose from our Professionally Designed CV Templates </h2>
        <Slider {...settings}>
          <div>
            <img src={cv_carousel_1} alt="CV carousel" className="h-[80vh] w-[30vw]"/>
          </div>
          <div>
          <img src={cv_landing_page} alt="CV carousel" className="h-[80vh] w-[30vw]"/>
          </div>
          <div>
          <img src={cv_landing_page} alt="CV carousel" className="h-[80vh] w-[30vw]"/>
          </div>
          <div>
          <img src={cv_landing_page} alt="CV carousel" className="h-[80vh] w-[30vw]"/>
          </div>
        </Slider>
      </div>
    );
}

const LandingPage = () => {
  return (
    <main className="h-auto w-[100vw] flex flex-col justify-center place-content-center place-items-center text-center gap-8">

      <div className="w-[37vw]">
      <p className="font-bold text-[33px] leading-[38px] pt-[6vh]">Create a <span className="text-[#0959FE]">Job - Winning CV</span> in only 5 minutes</p>
      </div>
      <div>
      <p className="w-[38vw] text-[14px]">
        Easily create an outstanding CV for different roles and industries with
        less intervention to level up your career and get hired by top firms.
      </p>
      </div>
      <Button className="w-[10vw]">Create CV</Button>
      <div>
        <img src={banner_image} alt="banner image" className="h-[50vh] w-[70vw]"/>
      </div>
      <div className="w-[18vw]">
        <p className="font-medium text-[23px]">Start building your <span className="text-[#0959FE]">CV</span> in 5 minutes</p>
      </div>

      <div className="h-auto w-[80vw] flex flex-row justify-center place-items-center">
        <div className="flex flex-col ml-[10vw]">
        <h1 className="w-[50px] h-[50px] p-[6px] rounded-full font-medium border-[1px] border-[#0959FE] text-[23px] text-[#0959FE] text-center">01</h1>
        <div className="h-[20vh] border-l-[1.5px] border-[#0959FE] border-dashed ml-[25px] my-[3px]"></div>
        <h1 className="w-[50px] h-[50px] p-[6px] rounded-full font-medium border-[1px] border-[#0959FE] text-[23px] text-[#0959FE] text-center">02</h1>
        <div className="h-[20vh] border-l-[1.5px] border-[#0959FE] border-dashed ml-[25px] my-[3px]"></div>
        <h1 className="w-[50px] h-[50px] p-[6px] rounded-full font-medium border-[1px] border-[#0959FE] text-[23px] text-[#0959FE] text-center">03</h1>
        </div>
        <div className="w-[40vw] flex flex-col gap-[15vh]">
          <div className="text-left pl-[2vw]">
            <h1 className="font-medium text-[20px]">Create CV</h1>
            <p className="w-[15vw] text-[13px]">Create industry standard CV with your key skills, experience, etc.</p>
          </div>
          <div className="text-left pl-[2vw]">
            <h1 className="font-medium text-[20px]">Add a Subscription Plan</h1>
            <p className="w-[15vw] text-[13px]">Choose a subscription plan and pay using your debit card or bank transfer.</p>
          </div>
          <div className="text-left pl-[2vw]">
            <h1 className="font-medium text-[20px]">Get Hired fast</h1>
            <p className="w-[15vw] text-[13px]">Submit your CV and get hired fast by top firms.</p>
          </div>
        </div>
        <div>
          <img src={cv_landing_page} alt="landing page CV template" className="h-full w-[40vw] mr-[10vw]"/>
        </div>
      </div>

      <div className="h-auto w-[100vw] bg-[#051A45] py-[10vh]">
        <Carousel/>
      </div>
    </main>
  );
};

export default LandingPage;
