import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncsignup } from "../store/actions/userAction";

const Signup = ({display,setDisplay}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();
    const onSubmit = (data)=>{
      dispatch(asyncsignup(data));
      setDisplay(false);
    };

  if (!display) return null; // If display is false, do not render the component


    return (

        
        <div className="signupPage flex fixed z-[2] top-0 left-0 w-full bg-zinc-800/[.4] h-screen items-center justify-center ">
        <div className=" py-1 w-[35%] bg-zinc-50 rounded-xl ">
          <div className="w-full py-4 relative border-b border-[#dfdfdf]">
            <div className="absolute left-[3%] top-1/2 -translate-y-1/2">
              <i onClick={() => setDisplay(false)} className="ri-close-large-line text-zinc-800 cursor-pointer"></i>
            </div>
            <h1 className="text-center font-bold text-lg text-zinc-800">
              Sign Up
            </h1>
          </div>

          <div className="py-5 px-5 ">
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full border border-zinc-500 rounded-lg">
            <div className="w-full p-4 text-md relative  flex justify-center items-center gap-3 border-b border-zinc-500">
                <label>Email:</label>
                <input
                className="w-full h-full focus:outline-none text-xl "
                    type="email"
                    {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="absolute bottom-0 left-[3%] w-full text-[red] text-xs "> <i className="ri-information-fill text-[red]"></i> {errors.email.message}</p>}
            </div>
            <div className="w-full p-4 text-md relative  flex justify-center items-center gap-3 border-b border-zinc-500">
                <label>Username:</label>
                <input
                className="w-full h-full focus:outline-none text-xl "
                    type="text"
                    {...register("username", { required: "Username is required" })}
                />
                {errors.email && <p className="absolute bottom-0 left-[3%] w-full text-[red] text-xs "> <i className="ri-information-fill text-[red]"></i> {errors.email.message}</p>}
            </div>
            <div className="p-4 text-md relative w-full flex justify-center items-center gap-3 ">
                <label>Password:</label>
                <input
                className="w-full h-full focus:outline-none text-xl "
                    type="password"
                    {...register("password", {
                        required: "Password is required",
                    })}
                />
                  {errors.password && <p className="absolute bottom-0 left-[3%] w-full text-[red] text-xs "> <i className="ri-information-fill text-[red]"></i> {errors.password.message}</p>}
            </div>
            </div>
            <button className="w-full text-center bg-[#b17f44] mt-4 text-white rounded-md py-3" type="submit">Continue</button>
        </form>
          </div>
        </div>
        
      </div>

    );
};

export default Signup;
