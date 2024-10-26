import { SiDocsify } from "react-icons/si";
import { GiClothJar } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { FaShirt } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { RiCoupon2Line } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa6";

interface IconList {
    [key: string]: JSX.Element;
}

export const  iconsList: IconList = {
    GeneralIcon:<CiSettings className="fill-slate-500 group-data-[hover]:fill-sky-500/80" />,
    DashboardIcon:<FaChartPie className="fill-slate-500 group-data-[hover]:fill-sky-500/80" />,
    ProductIcon:<AiFillProduct className="fill-slate-500 group-data-[hover]:fill-sky-500/80" />,
    OrderIcon:<IoCartOutline className="text-slate-500 fill-slate-500 group-data-[hover]:fill-sky-500/80" />,
    UserIcon:<FaRegUser className="fill-slate-500 group-data-[hover]:fill-sky-500/80" />,
    DocsIcon:<SiDocsify className="fill-slate-500 group-data-[hover]:fill-sky-500/80" />,
    CouponIcon:<RiCoupon2Line  className="fill-slate-500 group-data-[hover]:fill-sky-500/80" />,
}