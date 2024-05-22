import React from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearUser } from "@/store/slices/auth";
import { FaUserEdit } from "react-icons/fa";

const Profile = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const handleLogOut = () => {
    dispatch(clearUser());
    router.back();
  };
  return (
    <div className="w-fit mx-auto flex flex-col items-center">
      <FaUserEdit size={100} />
      <div className="mt-8 text-lg flex gap-[3vw]">
        <div className="font-bold">
          <p>Name:</p>
          <p>Mobile No:</p>
          <p>Email:</p>
        </div>
        <div>
          <p>{user.name.toUpperCase()}</p>
          <p>+91 {user.contactNo}</p>
          <p>{user.email}</p>
        </div>
      </div>
      <button style={{
                boxShadow: "0px 5px 14px rgba(0, 0, 255, 0.7)",
              }}
              className="rounded-xl w-[12em] mt-10 h-[3.5em] text-center text-white bg-black max-md:mt-3" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default Profile;
