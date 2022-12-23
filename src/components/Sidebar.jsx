import { Article, CreditCard, FormatListBulleted, Groups2, Headphones, HomeWork, Inventory2, LocalPolice, Percent, RecentActors, ViewCarousel } from "@mui/icons-material"
import { IoNewspaperSharp } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import HomeIcon from "../assets/homeIcon.svg"

const Sidebar = () => {
  const navigate = useNavigate()
    const icons = []
  return (
    <div className="flex px-6 pt-2  flex-col gap-8 bg-[#283848]   h-full mt-2  items-center">
        <img src={HomeIcon}  className="w-[30px] " onClick={()=>navigate("/")} />

        <Article sx={{fontSize:"30px"}}  className=" cursor-pointer  transition-all duration-700 hover:text-[#E11E25] " onClick={()=>navigate("/performance")}/>
        <ViewCarousel sx={{fontSize:"30px"}} className=" cursor-pointer transition-all duration-700 hover:text-[#E11E25] " />
        <RecentActors sx={{fontSize:"30px"}} className=" cursor-pointer transition-all duration-700 hover:text-[#E11E25] " />
        <HomeWork sx={{fontSize:"30px"}} className=" cursor-pointer transition-all duration-700 hover:text-[#E11E25] " />
        <Inventory2 sx={{fontSize:"30px"}} className=" cursor-pointer transition-all duration-700 hover:text-[#E11E25] " />
        <Percent sx={{fontSize:"30px"}} className=" cursor-pointer transition-all duration-700 hover:text-[#E11E25] " />
        <CreditCard sx={{fontSize:"30px"}} className=" cursor-pointer transition-all duration-700 hover:text-[#E11E25] " />
        <LocalPolice sx={{fontSize:"30px"}} className=" cursor-pointer transition-all duration-700 hover:text-[#E11E25] " />
        <Headphones sx={{fontSize:"30px"}} className=" cursor-pointer transition-all duration-700 hover:text-[#E11E25] " />
        <FormatListBulleted sx={{fontSize:"30px"}} className=" cursor-pointer transition-all duration-700 hover:text-[#E11E25] " />
        <Groups2 sx={{fontSize:"30px"}} className=" cursor-pointer transition-all duration-700 hover:text-[#E11E25] " />
    </div>
  )
}

export default Sidebar