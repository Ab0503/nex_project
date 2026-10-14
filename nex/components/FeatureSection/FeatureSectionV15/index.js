'use client'
import React from "react";
import PropTypes, { arrayOf, object } from 'prop-types'
import get from "lodash.get";
import parse from 'html-react-parser';
import NexImage from "@nex-core-ui/NexImage";
import ImageOrVedio from "@nex-core-ui/ImageOrVedio";



const FeatureSectionV15 = (props) => {
  const style = get(props, 'style', {})
  const taliwindClasses = get(props, 'taliwindClasses', {});
  return (
    <div class={`grid max-sm:grid-cols-1 grid-cols-2 gap-10 sm:p-10 md:p-20 text-white bg-green-600 ${get(taliwindClasses, 'container')}`}
        style={get(style, 'container')}
    >
        {get(props,'imagePath').length !== 0 && <div>
            <ImageOrVedio
                className="sm:h-20 md:h-96 w-full !relative" 
                src={get(props,'imagePath')} alt=""
                vedioSrc={get(props, 'vedioPath', '')}
            >

            </ImageOrVedio>
        </div>}
        <div className="flex flex-col items-center pt-10">
        {
                 get(props, 'title', '').length !== 0 && <h4 className={`text-center font-bold mb-10 text-4xl ${get(taliwindClasses, 'title')}`}  style={get(style, 'title')}>{get(props, 'title', '')} </h4>
            }
                    
            {
                 get(props, 'description', '').length !== 0 && <p className={`text-center mb-5 text-sm font-light ${get(taliwindClasses, 'description')}`}  style={get(style, 'description')}>{get(props, 'description')}</p>
            }
            <div className={`grid grid-cols-2 gap-8 mb-10 p-5 ${get(taliwindClasses, 'itemBox')}`} style={get(style, 'itemBox')}>
                {
                    get(props, 'items', []).map((item) => (
                      get(item, 'text').length !== 0 && <div className={`flex items-center `}>
                            {get(item, 'icon').length !== 0 && <span className={`${get(taliwindClasses, 'itemIcon')}`} style={get(style,'itemIcon')}>{parse(get(item, 'icon'))}</span>}
                            {<span className={` ml-2 ${get(taliwindClasses, 'itemText')}`} style={get(style,'itemText')}>{get(item, 'text')}</span>}
                        </div>
                    ))
                }
            </div>
            {
                get(props, 'cta', '').length !== 0 && <div className="flex justify-center">
                    <button className={`drop-shadow-xl sm:justify-center md:justify-left bg-emerald-800 p-3 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 rounded-lg ${get(taliwindClasses,'cta')}`} style={get(style,'cta')}><a href={get(props,'ctaLink')}>{get(props, 'cta')}</a></button>
                </div>
            }
            
        </div>
        
    </div>
  );
}
FeatureSectionV15.defaultProps = {
  style: {
    container: {},
    title: {},
    description: {},
    itemBox: {},
    itemIcon: {},
    itemText: {},
    cta: {},
    image: {}
},
taliwindClasses: {
    container: "",
    title: "",
    description: "",
    itemBox: "",
    itemIcon: "",
    itemText: "",
    cta: "",
    image: ""
},
title: "Why Choose Us",
description: "Enter Description or Sub title here....",
imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297592.1280x720 - Hero Image.png",
vedioPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1728966855.1728152985.19420800-uhd_3840_2160_30fps.mp4",
items: [
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            `,
        text: 'Proper Take Care'
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            `,
        text: 'Expert Farmer'
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            `,
        text: 'Clrean working 1'
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            `,
        text: 'Home Gardening'
    }
],
cta: "Read more..",
ctaLink: "#"
}

FeatureSectionV15.propTypes = {
  style: PropTypes.object,
  taliwindClasses: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  imagePath: PropTypes.string,
  cta: PropTypes.string,
  ctaLink: PropTypes.string,
  items: arrayOf(object)
}

export default FeatureSectionV15;