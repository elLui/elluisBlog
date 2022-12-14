import { HiHome, HiUser, HiChatBubbleLeftRight, HiListBullet } from "react-icons/hi2";

export const nav_data = [
    {
        id: 0,
        url: "/",
        text: "00_home",
        icon: <HiHome/>,
    },
    {
        id: 1,
        url: "/posts",
        text: "posts",
        icon: <HiUser/>,
    },
    {
        id: 2,
        url: "/",
        text: "services",
        icon: <HiListBullet/>,
    },
    {
        id: 3,
        url: "/",
        text: "portfolio",
        icon: <HiBriefcase/>,
    },
    {
        id: 4,
        url: "/contact",
        text: "contact",
        icon: <HiChatBubbleLeftRight/>,

    },
]


import { TbBrandTwitter, TbBrandInstagram, TbBrandFacebook, TbBug, } from "react-icons/tb";
import { HiBriefcase } from "react-icons/all";

export const social = [
    {
        id: 0,
        url: "#",
        icon: <TbBrandTwitter/>,
    },
    {
        id: 1,
        url: "#",
        icon: <TbBrandInstagram/>,
    },
    {
        id: 2,
        url: "#",
        icon: <TbBug/>,
    },
    {
        id: 3,
        url: "#",
        icon: <TbBrandFacebook/>,
    },
]