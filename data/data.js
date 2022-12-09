import { HiHome, HiUser, HiChatBubbleLeftRight } from "react-icons/hi2";
// HiListBullet, HiBriefcase,
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
    // {
    //     id: 2,
    //     url: "/",
    //     text: "services",
    //     icon: <HiListBullet/>,
    // },
    // {
    //     id: 3,
    //     url: "/",
    //     text: "portfolio",
    //     icon: <HiBriefcase/>,
    // },
    {
        id: 4,
        url: "/contact",
        text: "contact",
        icon: <HiChatBubbleLeftRight/>,

    },
]


import { TbBrandTwitter, TbBrandInstagram, TbBrandTiktok, TbBrandFacebook, } from "react-icons/tb";

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
        icon: <TbBrandTiktok/>,
    },
    {
        id: 3,
        url: "#",
        icon: <TbBrandFacebook/>,
    },
]