import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';

const HeroSectionV14 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});

    return (
    <div>
      <div className={`bg-green-50 w-full p-5 max-sm:h-auto ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
        {/* Header Section  */}
        <div className="relative text-center mt-5 h-80 max-w-6xl mx-auto">
          <div className='absolute inset-0'>
          {
            get(props, 'imagePath',"").length != 0 &&
            <NexImage src={get(props, 'imagePath')} className={`w-full h-full rounded-lg mx-auto object-cover opacity-35 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')}/>
          }
          </div>
          <div className='absolute lg:mt-14 max-lg:mt-12 max-sm:mt-16 max-sm:p-2 inset-0'>
            <div className="mt-2 inline-flex gap-2">
            {
              get(props, 'icon',"").length != 0 &&
              <span className={`bg-orange-500 rounded-full ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon'))}</span>
            }
            {
              get(props, 'subTitle',"").length != 0 &&
              <p className={`lg:text-sm max-sm:text-sm text-green-800 font-medium tracking-wide ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</p>
            }
            </div>
            {
              get(props, 'title',"").length != 0 &&
              <h1 className={`text-center lg:text-3xl max-lg:text-3xl max-sm:text-2xl font-bold text-gray-800 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h1>
            }
            </div>
        </div>

        {/* Content Section  */}
        <div className="relative max-w-5xl h-80 mx-auto -mt-32 sm:-mt-48">
          {/* Background Image */}
          <div className="absolute inset-0">
          {
            get(props, 'imagePath1',"").length != 0 &&
            <NexImage src={get(props, 'imagePath1')} className={`w-full h-full object-cover ${get(tailwindClasses, 'image1')}`} style={get(style, 'image1')}/>
          }
          </div>

          {/* Foreground Content */}
          <div className="absolute place-content-center inline-flex max-sm:flex-col max-sm:place-content-center lg:gap-16 max-sm:gap-2 sm:gap-12 inset-0 items-end">
            {/* Reliable Organization  */}
              {
              get(props, 'items', []).map((item) =>
              <div className='inline-flex'>
                {
                  (get(item, 'icon1',"").length != 0) &&
                  (<div className={`absolute place-content-center bg-orange-100  rounded-tl-lg p-4 h-20 w-18 -ml-10 ${get(tailwindClasses, 'icon1Box')}`} style={get(style, 'icon1Box')}>
                    <span className={`text-orange-500 ${get(tailwindClasses, 'icon1')}`} style={get(style, 'icon1')}>{parse(get(item, "icon1"))}</span>
                  </div>)
                }
                {
                  (get(item, 'box1Title',"").length != 0 || get(item, 'box1Description',"").length != 0) &&
                  (<div className={`text-start items-center space-y-2 bg-gray-50 lg:h-44 lg:w-64 max-sm:w-60 max-sm:h-36 sm:w-56 sm:h-44 lg:p-8 max-sm:p-6 sm:p-4 ${get(tailwindClasses, 'box1')}`} style={get(style, 'box1')}>
                  {
                    get(item, 'box1Title',"").length != 0 &&
                    <h3 className={`text-md sm:text-sm font-bold text-gray-800 ${get(tailwindClasses, 'box1Title')}`} style={get(style, 'box1Title')}>{get(item, "box1Title")}</h3>
                  }
                  {
                    get(item, 'box1Description',"").length != 0 &&
                    <p className={`text-xs text-gray-500 mt-2 ${get(tailwindClasses, 'box1Description')}`} style={get(style, 'box1Description')}>{get(item, "box1Description")}</p>
                  }
                  </div>)
                }
              </div>
              )}
          </div>
        </div>
      </div>
    </div>
)
}

HeroSectionV14.propTypes = {
  style: object,
  tailwindClasses: object,
  subTitle: string,
  title: string,
}
HeroSectionV14.defaultProps = {
  style: {
      container: {},
      image: {},
      icon: {},
      subTitle: {},
      title: {},
      image1: {},
      box1: {},
      box1Title: {},
      box1Description: {},
      icon1: {},
      icon1Box: {},
  },
  tailwindClasses: {
      container: "",
      image: "",
      icon: "",
      subTitle: "",
      title: "",
      image1: "",
      box1: "",
      box1Title: "",
      box1Description: "",
      icon1: "",
      icon1Box: "",
  },
  items: [
    {
      icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clip-rule="evenodd" />
              </svg>`,
      box1Title: "Reliable Organization",
      box1Description: "In these times, let us strive to be active participants in the acts of giving. Every effort counts, together we can create brighter more compassionate"
    },
    {
      icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
              </svg>`,
      box1Title: "On-time Distribution",
      box1Description: "In these times, let us strive to be active participants in the acts of giving.Together, we can create brighter and more compassionate futures."
    }
  ],
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297550.1200x400 - Website banner.png",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-green-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>`,
      subTitle: "Helping Hand",
      title: "Services that Change Lives What we do",
      imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297550.1200x400 - Website banner.png",
      box1Title: "Reliable Organization",
      box1Description: "In these times, let us strive to be active participants in the acts of giving. Every effort counts, together we can create brighter more compassionate",
      icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clip-rule="evenodd" />
              </svg>`
}
export default HeroSectionV14;