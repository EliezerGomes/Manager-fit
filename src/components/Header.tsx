import { IoFitness } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

function Header() {
  return (
    <div className="flex h-12 flex-row justify-between items-center text-secundary bg-primary  px-5">
      <div className="flex flex-row items-center text-secundary gap-2">
        <h1 className="text-2xl font-semibold">Manager Fit </h1>
        <IoFitness className="text-2xl" />
      </div>
 
      <div className="flex flex-row justify-center items-center border w-8 h-8 rounded-full bg-secundary cursor-pointer">
        <FaUserAlt className="text-primary" />
      </div>
    </div>
  );
}

export default Header;
