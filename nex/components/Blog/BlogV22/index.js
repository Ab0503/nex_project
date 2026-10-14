import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import parse from 'html-react-parser';
import NexImage from '@nex-core-ui/NexImage';

const BlogV22 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});

  return (
    <div>
      <div className={`bg-gray-50 flex flex-col xl:min-h-screen items-center justify-center ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
        <div className={`container bg-gray-100 w-full h-96 max-sm:mt-16 max-sm:h-full max-lg:h-80 max-lg:mb-16 lg:mb-12 ${get(tailwindClasses, 'container1')}`} style={{"background-image":`url('${get(props,'bgImage')}')`,"backgroundRepeat":"no-repeat", "backgroundSize":"cover",...get(style, 'container1')}}>
            {/* Logo Section */}
            <div className={`relative flex lg:max-w-5xl max-lg:max-w-2xl max-md:max-w-xl max-sm:w-72 mx-auto justify-center gap-12 max-sm:gap-4 py-8 rounded-lg bg-white border -mt-16 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {
                get(props, 'items1', []).map((item) => ((get(item, 'imagePath1',"").length != 0) && 
                <div className='inline-flex gap-12'>
                  <NexImage src={get(item, 'imagePath1')} className={`!h-20 !w-20 lg:h-20 max-lg:h-10 max-sm:h-10 opacity-70 !relative ${get(tailwindClasses, 'images1')}`} style={get(style, 'images1')}/>
                  <div className={`absolute w-[0.6rem] text-[#3f78e0] left-0 inset-y-0 xl:relative xl:table-cell xl:align-top lg:relative lg:table-cell lg:align-top md:relative md:table-cell md:align-top before:w-[0.55rem] before:h-[0.55rem] before:content-[''] before:block before:absolute before:rounded-[100%] before:left-0 before:top-[2.5rem] before:bg-[#3f78e0] after:w-px after:content-[''] after:block after:absolute after:left-1 after:top-4 after:bottom-0 after:bg-[rgba(164,174,198,.2)] ${get(tailwindClasses, 'timeLine')}`} style={get(style, 'timeLine')}></div>
                </div>
                ))
            }
            </div>

            {/* Cards Section  */}
            <div className="relative flex max-sm:flex-col max-w-4xl mx-auto md:flex-row gap-4 px-6 max-sm:px-4 py-10 max-sm:py-5 mt-6 justify-center items-center">
                {/* Card */}
                {
                  get(props, 'items', []).map((item) => ((get(item, 'imagePath',"").length !== 0) && 
                  (<div className='relative max-sm:w-44 max-sm:h-48'>
                    <div className="relative group rotate-12 bg-gray-800 text-white rounded-lg overflow-hidden">
                      <NexImage src={get(item, 'imagePath')} className={`!w-full !h-64 max-sm:w-44 max-sm:h-44 object-cover opacity-80 group-hover:opacity-100 transition !relative ${get(tailwindClasses, 'image')}`} style={get(style, 'image')}/>
                      {
                        (get(item, 'icon',"").length != 0 || get(item, 'subTitle',"").length != 0 || get(item, 'title',"").length != 0) &&
                      (<div className={`absolute inset-14 max-sm:inset-10 rounded-tr-xl -rotate-12 flex flex-col justify-center items-center bg-red-800 bg-opacity-40 ${get(tailwindClasses, 'box1')}`} style={get(style, 'box1')}>
                        <div className='inline-flex gap-1'>
                          {
                            get(item, 'icon',"").length != 0 &&
                            <span>{parse(get(item, 'icon'))}</span>
                          }
                          {
                            get(item, 'subTitle',"").length != 0 &&
                            <p className={`text-orange-500 text-xs font-bold mb-2 ${get(tailwindClasses, 'subTitle')}`}style={get(style, 'subTitle')}>{get(item, 'subTitle')}</p>
                          }
                        </div>
                        {
                          get(item, 'title',"").length != 0 &&
                          <h2 className={`text-2xl max-sm:text-md font-semibold ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(item, 'title')}</h2>
                        }
                      </div>)
                      }
                    </div>
                    <div className='-mt-8 flex'>
                    {
                      get(item, 'ctaIcon',"").length != 0 &&
                      <a href="#" className={`absolute px-3 py-2 ml-20 max-sm:ml-10 bg-white text-black rounded-full shadow-lg hover:bg-gray-200 ${get(tailwindClasses, 'ctaIcon')}`} style={get(style, 'ctaIcon')}>
                      {parse(get(item, 'ctaIcon'))}
                      </a>
                    }
                    </div>
                  </div>)
                ))
              }
            </div>
        </div>
      </div>
    </div>
  )
}

BlogV22.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
BlogV22.defaultProps = {
  style: {
    container: {},
    container1: {},
    box:{},
    image: {},
    timeLine: {},
    image1: {},
    box1: {},
    icon: {},
    subTitle: {},
    title: {},
    ctaIcon: {}
  },
  tailwindClasses: {
    container: "",
    container1: "",
    box:"",
    image: "",
    timeLine: "",
    image1: "",
    box1: "",
    icon: "",
    subTitle: "",
    title: "",
    ctaIcon: ""
  },
  items:[
    {
        imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
        icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 rounded-full bg-orange-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>`,
        subTitle:"Join With Us",
        title: "Partners",
        ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>`
    },
    {
        imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
        icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 rounded-full bg-orange-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>`,
        subTitle:"Join With Us",
        title: "Mission",
        ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>`
    },
    {
        imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
        icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 rounded-full bg-orange-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>`,
        subTitle:"Join With Us",
        title: "Vision",
        ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>`
    }
  ],
  items1:[
    {
      imagePath1:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297474.100x100 - Logo square.png"
    },
    {
      imagePath1:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297474.100x100 - Logo square.png"
    },
    {
      imagePath1:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297474.100x100 - Logo square.png"
    },
    {
      imagePath1:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297474.100x100 - Logo square.png"
    },
    {
      imagePath1:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297474.100x100 - Logo square.png"
    },

  ],
  bgImage:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297550.1200x400 - Website banner.png"
}
export default BlogV22;