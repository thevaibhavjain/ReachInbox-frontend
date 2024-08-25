import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";

function TopBar() {
  return (
    <div className="h-16 w-screen bg-white  dark:bg-[#1F1F1F] fixed px-8 text-[#5B5F66] dark:text-white top-0 flex justify-between items-center border-b-2 dark:border-[#343A40] border-[#E0E0E0]">
      <div className="w-127 h-22 font-open-sans font-bold text-5B5F66">Onebox</div>
      <div className="pr-10 flex items-center  font-semibold  ">
        <ThemeToggle />
        
        Tim's Workspace <MdOutlineKeyboardArrowDown className="text-3xl ml-2" />
      </div>
    </div>
  );
}

export default TopBar;
