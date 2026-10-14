import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';
import NexAnimation from '@nex-components/NexAnimation';


const ProcessV3 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});
  return (
    <div>
    <section id="snippet-3" className={`bg-gray-300 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-12 xl:pt-16 lg:pt-16 pb-24 xl:pb-6 lg:pb-6">
        <div className={`flex flex-wrap mx-[15px] xl:mx-[25px] lg:mx-[20px] items-center ${get(tailwindClasses, 'contentcontainer')}`} style={get(style, 'contentcontainer')}>
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] px-[15px] max-w-full">
            <figure className="m-0 p-0">
            <NexAnimation  type={get(props, 'leftContentAnimation', '')}>
            {
                get(props, 'imagePath',"").length != 0 &&
                <ImageOrVedio className={`!relative !w-full max-w-full !h-auto ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props, "imagePath")}/>
            }
            </NexAnimation>
            </figure>
          </div>
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] px-[15px] max-w-full">
          {
            get(props, 'subTitle',"").length != 0 &&
            <h2 className={`text-[1.08rem] uppercase text-[#aab0bc] mb-2 leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}</h2>
          }
          <NexAnimation  type={get(props, 'titleContentAnimation', '')}>
          {
            get(props, 'title',"").length != 0 &&
            <h3 className={`text-[2.1rem] font-bold xl:text-[2.4rem] leading-[1.3] mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h3>
          }
          </NexAnimation>
          <NexAnimation  type={get(props, 'descContentAnimation', '')}>
          {
            get(props, 'description',"").length != 0 &&
            <p className={`text-[1.1rem] mb-8 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, "description")}</p>
          }
          </NexAnimation>
            <NexAnimation  type={get(props, 'mapContentAnimation', '')}>
            <div className="flex flex-wrap mx-[15px] mt-[-30px] xxl:mx-[20px] process-wrapper">
            {
                get(props, 'items', []).map((item) =>
                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xxl:px-[20px] px-[15px] max-w-full mt-[30px]"> 
                {
                    get(item, 'icon',"").length != 0 &&
                    <span className={`!w-[2.2rem] !h-[2.2rem] text-teal-400 mb-4 ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(item, "icon"))}</span>
                }
                {
                    get(item, 'text1',"").length != 0 &&
                    <h4 className={`text-[1.2rem] font-semibold mb-1 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item, "text1")}</h4>
                }
                {
                    get(item, 'text2',"").length != 0 &&
                    <p className={`text-[1.01rem] mb-2 ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item, "text2")}</p>
                }
                </div>
            )}
            </div>
            </NexAnimation>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
ProcessV3.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
  }
  ProcessV3.defaultProps = {
    style: {
      container: {},
      contentcontainer: {},
      image: {},
      subTitle: {},
      title: {},
      description: {},
      icon: {},
      text1: {},
      text2: {}
    },
    tailwindClasses: {
        container: "",
        contentcontainer: "",
        image: "",
        subTitle: "",
        title: "",
        description: "",
        icon: "",
        text1: "",
        text2: ""
    },
    leftContentAnimation: "",
    titleContentAnimation: "",
    descContentAnimation: "",
    mapContentAnimation: "",
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735825372.co3.png",
    subTitle: "How It Works",
    title: "Download the app, create your profile and voilà, you're all set!",
    description: "Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo.",
    items: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
            <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
            </svg>`,
            text1: "1. Download",
            text2: "Nulla vitae elit libero elit non porta eget."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
            </svg>`,
            text1: "2. Set Profile",
            text2: "Nulla vitae elit libero elit non porta eget."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
            <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>`,
            text1: "3. Start",
            text2: "Nulla vitae elit libero elit non porta eget."
        }
    ]  
}
export default ProcessV3;