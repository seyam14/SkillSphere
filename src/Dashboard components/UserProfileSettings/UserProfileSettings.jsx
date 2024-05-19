import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";


const UserProfileSettings = () => {
  const {  user } = useContext(AuthContext);

  const { register } = useForm();

  const { isPending, isError, error, data: userData } = useQuery({
    queryKey: ["data", "user"],
    queryFn: async () => {
      const res = await fetch(`https://skillsphere-server-side.vercel.app/user/${user.email}`);
      return res.json();
    },
  });

  if (isPending) return <>loading.......</>;

  if (isError) {
    return <span>Error: {error.message}</span>;
  }


  return (
    <div className="min-h-screen bg-gray-100 py-6 mx-10 lg:mx-0 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <form>
            <div className="max-w-lg mx-auto">
              <div>
                <h1 className="text-2xl lg:w-96 text-center mb-5 font-semibold"> Profile</h1>
              </div>

              <div className="mx-auto w-32 h-32 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
                <img id="image" className="object-cover w-full h-32 rounded-full" src={user?.photoURL} alt="" />
              </div>

              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      {...register("name")}
                      name="name"
                      type="text"
                      defaultValue={user?.displayName}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Enter Your Name"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Your Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      {...register("phoneNo")}
                      type="text"
                      defaultValue={userData?.phoneNumber}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Enter Your Phone Number"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Phone Number
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSettings;
