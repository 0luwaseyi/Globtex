import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>

}

export const footer_links = [
    {
        title: "About Us",
        links: [
            {title: "Contact Us", url: "/"},
            {title: "Blogs", url: "/"},
            {title: "Awards and Recognition", url: "/"},
            {title: "Customer Stories",  url: "/"},
        ]
    },

 

    {
        title: "Customer Service",
        links: [
            {title: "Contact us", url: "/"},
            {title: "FAQs", url: "/"},
            {title: "Customer Stories", url: "/"},
            {title: "Features",  url: "/"},
            {title: "About us", url: "/"},
        ]
    },


    {
        title: "Accessibility",
        links: [
            {title: "Pricing", url: "/"},
            {title: "Careers", url: "/"},
            {title: "Advertise with us", url: "/"},
            {title: "Brand assets",  url: "/"},
        ]

    },

    {

        title: "Customer Service",
        links: [
            {title: "Contact us", url: "/"},
            {title: "FAQs", url: "/"},
            {title: "Customer Stories", url: "/"},
            {title: "Features",  url: "/"},
            {title: "About us", url: "/"},
        ]
    }
]