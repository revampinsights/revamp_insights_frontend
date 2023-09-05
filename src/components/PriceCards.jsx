import Button from "./Button/Button";
import { BsCheckLg } from "react-icons/bs";
import { prices } from "../constants";

const PriceCards = () => {
  return (
    <div className="h-auto flex flex-row gap-[10vw] py-[10vh]">
      {prices.map((price) => (
        <div key={price.id} className="flex flex-col text-left px-[2vw] py-[6vh] gap-3 bg-white border-[1px] shadow-md rounded-md">
          <h1 className="font-medium text-[14px]">{price.title}</h1>
          <h1 className="font-bold text-[20px]">{price.cost}</h1>
          <div className="text-xs pb-[1vh]"><Button>Use This Template</Button></div>

          {
            price.features.map((feature) => (
              <div key={feature.id} className="flex flex-col gap-1.5 text-xs">
            <div className="flex flex-row text-center gap-2">
              <div className="font-bold text-[18px] text-[#0959FE]">
                <BsCheckLg />
              </div>
              <p className="text-center align-middle place-self-center">
                {feature.desc}
              </p>
            </div>
          </div>
            ))
          }
          
        </div>
      ))}
    </div>
  );
};

export { PriceCards };
