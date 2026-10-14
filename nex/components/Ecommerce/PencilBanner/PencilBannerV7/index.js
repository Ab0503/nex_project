import PrimaryLink from '@nex-core-ui/PrimaryLink';
import React from 'react'
import { useState, useEffect } from "react";
import { object, string } from 'prop-types'
import parse from 'html-react-parser'
import get from "lodash.get";
import withData from '@nex-core-ui/HOC/withData';

const PencilBannerV7 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});

    const [messageIndex, setMessageIndex] = useState(0);
    const messages = get(props,"items",[])
    useEffect(() => {
        const interval = setInterval(() => {
          setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 4000);
    
        return () => clearInterval(interval); 
      }, [messages]);
  return (
    <div className={`bg-gray-100 text-gray-600 text-sm py-2 px-4 w-full ${get(tailwindClasses,"container")}`} style={get(style, "container")}>
      <div className="mx-auto flex justify-between items-center">
        {/* Left Side - Message */}
        <p className={`block font-semibold max-lg:w-60 hover:text-orange-400 max-sm:hidden ${get(tailwindClasses,"text")}`} style={get(style, "text")}>{get(messages[messageIndex],'text')}</p>
        {/* Right Side - Links */}
        <div className="flex items-center gap-2 md:gap-4">
          <PrimaryLink href={get(props, "ctaLink1")} className={`flex items-center gap-1 hover:text-gray-800 ${get(tailwindClasses,"text1")}`} style={get(style, "text1")}>
            {parse(get(props, "icon1"))} {get(props, "text1")}
          </PrimaryLink>
          <span>|</span>
          <PrimaryLink href={get(props, "ctaLink2")} className={`flex items-center gap-1 hover:text-gray-800 ${get(tailwindClasses,"text2")}`} style={get(style, "text2")}>
          {parse(get(props, "icon2"))} {get(props, "text2")}
          </PrimaryLink>
          <span>|</span>
          <PrimaryLink href={get(props, "ctaLink3")} className={`flex items-center gap-1 hover:text-gray-800 ${get(tailwindClasses,"text3")}`} style={get(style, "text3")}>
          {parse(get(props, "icon3"))} {get(props, "text3")}
          </PrimaryLink>
          <span>|</span>
          <select className="bg-transparent focus:outline-none border-0 cursor-pointer">
            <option className={`${get(tailwindClasses,"menu1")}`} style={get(style, "menu1")}>{get(props, "menu1")}</option>
            <option className={`${get(tailwindClasses,"menu2")}`} style={get(style, "menu2")}>{get(props, "menu2")}</option>
            <option className={`${get(tailwindClasses,"menu3")}`} style={get(style, "menu3")}>{get(props, "menu3")}</option>
          </select>
        </div>
      </div>
    </div>
  )
}
PencilBannerV7.propTypes = {
    style: object,
    tailwindClasses: object,
    text: string
}
PencilBannerV7.defaultProps = {
    style: {
        container: {},
        text: {},
        text1: {},
        text2: {},
        text3: {},
        menu: {},
    },
    tailwindClasses: {
        container: "",
        text: "",
        text1: "",
        text2: "",
        text3: "",
        menu: ""
    },
    items: [
        {text:"Free 3-day delivery and free returns within the US"},
        {text:"20% Disvount in Selected Items"},
        {text:"Free Shipping on All Order !!!"}
    ],
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
            </svg>`,
    text1:"Sign In",
    ctaLink1:"#",
    icon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
            <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
            </svg>`,
    text2:"Gift Certificates",
    ctaLink2:"#",
    icon3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
            </svg>`,
    text3:"My Account",
    ctaLink3:"#",
    menu1:"USD",
    menu2:"EUR",
    menu3:"IND"
}
export default withData(PencilBannerV7);