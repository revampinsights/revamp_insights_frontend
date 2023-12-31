import AppLogo from "../../components/AppLogo/AppLogo";
import { FIELDS } from "./constant";
import FormInputField from "../../components/FormInputField/FormInputField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import google from "../../assets/icons/google.svg";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const schema = z
    .object({
      email_address: z.string().min(1, { message: "Email is required" }).email({
        message: "Must be a valid email",
      }),
      password: z
        .string()
        .min(8, { message: "Password must be atleast 8 characters" })
        .max(32),
    })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    console.log(data, typeof data);

    // mutation.mutate(
    //     formData,
    //     {
    //         onError: (error) => {
    //             toast.show(error.message, 'error');
    //         },
    //         onSuccess: (data) => {
    //             // set the user's CV identifier
    //             if (data.identifier) {
    //                 load(data);
    //             }

    //             navigator('/review-resume');
    //             toast.show('Your resume has been created successfully', 'success');
    //         },
    //     }
    // );
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#FFFFFF]">
      <div
        className="flex flex-col flex-shrink-0 items-center md:border-[.5px] md:rounded-[5px] bg-[#FFFFFF]
        md:border-[#200E32] md:border-opacity-[0.15] w-full md:w-[310px] "
      >
        <div className="flex gap-[0px] items-center md:py-[15px] text-[17px]">
          <h5 className="capitalize translate-x-3 text-[#000714] font-medium leadIng-[18px] tracking-[-0.072px]">
            sign in
          </h5>
          <AppLogo tw_classes={["scale-[.7] font-semibold"]} />
        </div>
        <form
          className="max-w-[90%] md:max-w-[270px] mx-auto flex flex-wrap text-[13px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {FIELDS.map((field, index) => (
            <FormInputField
              key={index}
              {...field}
              register={register}
              errors={errors}
            />
          ))}

          <Button
            variant="contained"
            type="submit"
            className="!capitalize !bg-[#0062E0] !mt-[20px] !w-full !flex-shrink-0 rounded-[5px]
          !justify-center !items-center !h-[40px] !font-medium !text-[14px] !tracking-[-0.054px] !leading-[21px]"
          >
            continue
          </Button>

          <p
            className="text-[#0062E0] text-center text-[12px] tracking-[-0.045px] leading-[21px] pt-[14px]
          "
          >
            <a href="forgot-password">Forgot password?</a>
          </p>
        </form>
        <div className="mt-[20px] mb-[15px] w-full flex items-center justify-center">
          <Divider
            className="uppercase w-[90%] md:w-[270px] mx-auto text-[#1B263A] text-[12.5px] leading-[21px] 
          tracking-[-0.054px] stroke-[#C4C4C4]"
          >
            or
          </Divider>
        </div>
        <Button
          variant="contained"
          startIcon={
            <i className="fa-brands fa-facebook-f -translate-x-[25px]" />
          }
          className="!bg-[#0062E0] !w-[90%] md:!w-[270px] !h-[40px] rounded-[5px] !normal-case !text-[14px] !leading-[21px]
          !tracking-[-0.054px] "
        >
          Continue with Facebook
        </Button>
        <Button
          variant="outlined"
          startIcon={<img src={google} className="-translate-x-[30px]" />}
          className="!w-[90%] md:!w-[270px] !h-[40px] rounded-[5px] !normal-case !text-[14px] !leading-[21px]
          !tracking-[-0.054px] !mt-[10px] !mb-[15px]"
        >
          Continue with Google
        </Button>
        <Divider
          className="uppercase w-full mx-auto text-[#1B263A] text-[18px] leading-[21px] 
          tracking-[-0.054px] stroke-[#C4C4C4]"
        />

        <span className="text-center text-[11px] font-normal tracking-[-0.045px] leading-[21px] flex gap-[5px] my-[14px]">
          <p className="text-[#000714]">Don’t have an account?</p>
          <a href="sign-up" className="text-[#0062E0]">
            Register
          </a>
        </span>
      </div>
    </div>
  );
};

export default Login;
