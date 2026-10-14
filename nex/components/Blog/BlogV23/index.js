import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';

const BlogV23 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});

  return (
    <div>
      <div className={`bg-gray-100 max-sm:min-h-screen ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
         {/* Charity Donate Card  */}
         <div className='relative xl:px-28 px-32 max-sm:px-16 max-lg:px-2 max-lg:pr-4 max-sm:flex-col inline-flex gap-4 mt-28 mb-4 max-sm:mt-16'>
          {
            get(props, 'items', []).map((item) => (
            <div className="relative w-full h-44">
              {
                get(item, 'imagePath',"").length != 0 &&
                <NexImage src={parse(get(item, 'imagePath'))} className={`lg:w-80 max-lg:w-56 rounded-lg !relative`} alt="Charity"/>
              }
              {
              (get(item, 'icon',"").length != 0 || get(item, 'title',"").length != 0 || 
              get(item, 'subTitle',"").length != 0 || get(item, 'text',"").length != 0) &&
              (<div className={`relative lg:w-80 max-lg:w-60 max-lg:h-16 bg-gray-50 shadow-lg rounded-l-full overflow-hidden lg:-mt-64 max-lg:-mt-52 max-sm:-mt-52 ${get(tailwindClasses, 'box')}`} style={get(style, 'box')}>
                <div className="inline-flex gap-2 p-4 text-center">
                  <div className={`flex bg-red-500 lg:w-16 lg:h-14 max-lg:w-8 max-lg:h-8 mx-auto items-center justify-center ${get(tailwindClasses, 'box1')}`} style={get(style, 'box1')}>
                  {
                    get(item, 'icon',"").length != 0 &&
                    <span>{parse(get(item, 'icon'))}</span>
                  }
                  </div>
                  <div className='text-gray-800 relative'>
                  {
                    get(item, 'title',"").length != 0 &&
                    <h3 className={`lg:text-md max-lg:text-sm font-bold ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(item, 'title')}</h3>
                  }
                  {
                    get(item, 'subTitle',"").length != 0 &&
                    <p className={`mt-2 text-xs ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(item, 'subTitle')}</p>
                  }
                  </div>
                </div>
              </div>)
              }
              {
                get(item, 'text',"").length != 0 &&
                <p className={`absolute top-15 right-0 bg-red-500 rounded-bl-xl text-white px-3 py-2 text-sm font-bold ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item, 'text')}</p>
              }
              </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

BlogV23.propTypes = {
  style: object,
  tailwindClasses: object,
  subTitle: string,
  title: string,
}
BlogV23.defaultProps = {
  style: {
      container: {},
      box: {},
      box1: {},
      icon: {},
      title: {},
      subTitle: {},
      text: {},
      image: {}
  },
  tailwindClasses: {
      container: "",
      box: "",
      box1: "",
      icon: "",
      title: "",
      subTitle: "",
      text:"",
      image:""
  },
  items:[
    {
      icon:`<svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8zm-6.5 0a2.5 2.5 0 00-5 0c0 1.657 2.015 4.315 5 6.5 2.985-2.185 5-4.843 5-6.5a2.5 2.5 0 00-5 0zm13-2a2.5 2.5 0 00-5 0c0 1.657 2.015 4.315 5 6.5 2.985-2.185 5-4.843 5-6.5a2.5 2.5 0 00-5 0z" />
            </svg>`,
      title:"Charity Donate",
      subTitle:"No matter what have",
      text:"01",
      imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png"
    },
    {
      icon:`<svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8zm-6.5 0a2.5 2.5 0 00-5 0c0 1.657 2.015 4.315 5 6.5 2.985-2.185 5-4.843 5-6.5a2.5 2.5 0 00-5 0zm13-2a2.5 2.5 0 00-5 0c0 1.657 2.015 4.315 5 6.5 2.985-2.185 5-4.843 5-6.5a2.5 2.5 0 00-5 0z" />
            </svg>`,
      title:"Treatment Help",
      subTitle:"No matter what have",
      text:"02",
      imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png"
    },
    {
      icon:`<svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8zm-6.5 0a2.5 2.5 0 00-5 0c0 1.657 2.015 4.315 5 6.5 2.985-2.185 5-4.843 5-6.5a2.5 2.5 0 00-5 0zm13-2a2.5 2.5 0 00-5 0c0 1.657 2.015 4.315 5 6.5 2.985-2.185 5-4.843 5-6.5a2.5 2.5 0 00-5 0z" />
            </svg>`,
      title:"Money Raised",
      subTitle:"No matter what have",
      text:"03",
      imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png"
    }
  ]
}
export default BlogV23;