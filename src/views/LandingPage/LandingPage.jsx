import Button from "../../components/Button/Button";
import { banner_image, cv_carousel_1, cv_carousel_2, cv_carousel_3, land_job } from "../../assets";
import { cv_landing_page } from "../../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BsStarFill } from 'react-icons/bs';
import { PriceCards } from "../../components/PriceCards";




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

const ReviewCard = () => {
  return (
    <div className="w-[20vw] flex flex-col text-[11px] bg-white border-[1px] shadow-xl drop-shadow-md px-[2vw] py-[4vh] rounded-md text-left">
      <div className="flex flex-row text-[#FFFF00] pb-0">
      <BsStarFill/>
      <BsStarFill/>
      <BsStarFill/>
      <BsStarFill/>
      <BsStarFill/>
      </div>
      <h1 className="font-medium text-[12px] py-[10px]">Customer Reviews</h1>
      <p>&quot;Wow, what great service, I love it! Its the most valuable business resource we have ever purchased. We can&apos;t understand how we &apos;ve been living without it&quot;.</p>
      <p className="text-right">15 May 2020 9:00 am</p>
    </div>
  )
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
        <div className="py-[10vh]">
          <Button className="w-[15vw]">Choose Template</Button>
        </div>
        
      </div>

      <div className="h-auto w-[80vw] flex flex-row gap-[7vw] text-left pb-[10vh] text-[14px]">
        <div>
          <img src={cv_landing_page} className="h-screen w-[40vw]"/>
        </div>
        <div className="w-[34%] flex flex-col justify-between my-[1vh]">
          <h1 className="font-medium text-[25px] leading-[28px] pt-[6vh]">Build your job - winning <span className="text-[#0959FE]">CV</span> in minutes</h1>
          <h1 className="font-medium text-[22px]">Easy to use</h1>
          <p>Array of web-based applications with features that allows user to share and download created CVs.</p>
          <div className="bg-white border-[1px] shadow-xl drop-shadow-md px-[2vw] py-[4vh] rounded-md">
            <h1 className="font-medium text-[20px] pb-[5px]">Access to template</h1>
            <p className="text-[12px]">A vast CV template directory that provides additional model to choose from and create oustanding CV in minute.</p>
          </div>
          <h1 className="font-medium text-[22px]">Share and Download</h1>
          <p>Set of web-based applications that implements feastures which allows its users easily, and with less human intervention, create CVs for different job roles and industries.</p>
        </div>
      </div>

      <div className="py-[10vh] ">
        <h1 className="font-bold text-[25px] pb-2">Testimonial</h1>
        <p className="pb-[8vh]">Here&apos;s what people say about our online resume creator</p>
        <div className="flex flex-row flex-wrap gap-8 ml-[5vw]">
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
        </div>
      </div>

      <div className="pt-[5vh]">
        <h1 className="font-medium text-[23px]">Simple, Affordable <span className="text-[#0959FE]">Pricing</span></h1>
        <p className="text-[14px]">Choose one of our Pro Plans and enjoy the benefits that comes with it.</p>
      </div>

      <PriceCards/>

      <div className="h-auto w-[100vw] flex justify-center items-center flex-col pb-[10vh]">
    <div
          className={`h-[50vh] w-[80vw] bg-[url('../../src/assets/images/land_job2.jpg')]  bg-cover bg-center`}>
        <div className="w-full h-full flex flex-col  justify-center items-center backdrop-brightness-50 text-white">
                <h1 className="font-medium text-[30px]">Create a CV that lands your dream job</h1>
                <h1 className="text-[13px] pt-[5px] pb-[5vh]">Start building the outstanding CV that will help you make your next career move now.</h1>
                <div>
                <Button>Create CV</Button>
                </div>
                
        </div>
    </div>
</div>


    </main>
  );
};

export default LandingPage;
