import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';
import NexAnimation from '@nex-components/NexAnimation';

const ProcessV6 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});
  return (
    <div>
    <section id="snippet-6" className={`overflow-hidden p-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div>
        <div className="flex flex-wrap mt-[-50px] items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-sm:px-0 mt-[50px] max-w-full">
            <figure className="m-0 p-0">
              <NexAnimation type={get(props, 'imageAnimation', '')}>
            {
                get(props, 'imagePath',"").length != 0 &&
                <ImageOrVedio className={`rounded-lg !relative !w-full !h-full ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} 
                    src={get(props,"imagePath", "")}  vedioSrc={get(props,"vedioPath", "")}
              />
            }
            </NexAnimation>
            </figure>
          </div>
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-sm:px-0 mt-[50px] max-w-full">
          <NexAnimation type={get(props, 'contentAnimation', '')}>
            {
                get(props, 'subTitle',"").length != 0 &&
                <h2 className={`nx-text-primary text-[1.02rem] font-medium uppercase text-line relative align-top pl-[1.4rem] inline-flex leading-[1.35] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0] mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</h2>
            }
            {
                get(props, 'title',"").length != 0 &&
                <h3 className={`text-[1.5rem] font-bold xl:text-[2.1rem] leading-[1.3] mb-7 xxl:pr-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h3>
            }
                {
                get(props, 'items', []).map((item) =>
                <div className="flex flex-row mb-4">
                    <div className="mr-4 mt-2">
                    {
                        get(item, 'icon',"").length != 0 &&
                        <span className={`w-[2.2rem] h-[2.2rem] nx-text-primary ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(item,"icon"))}</span>
                    }
                    </div>
                    <div>
                    {
                        get(item, 'text1',"").length != 0 &&
                        <h4 className={`text-[1.4rem] font-bold mb-1 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item,"text1")}</h4>
                    }
                    {
                        get(item, 'text2',"").length != 0 &&
                        <p className={`text-[1.1rem] mb-1 ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item,"text2")}</p>
                    }
                    </div>
                </div>
            )}
            </NexAnimation>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
ProcessV6.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
  }
  ProcessV6.defaultProps = {
    style: {
      container: {},
      image: {},
      subTitle: {},
      title: {},
      icon: {},
      text1: {},
      text2: {}
    },
    tailwindClasses: {
        container: "",
        image: "",
        subTitle: "",
        title: "",
        icon: "",
        text1: "",
        text2: ""
    },
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735226768.730x490.png",
    vedioPath: "",
    subTitle: "How It Works?",
    title: "Everything you need on creating a business process.",
    items: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>`,
            text1: "Collect Ideas",
            text2: "Nulla vitae elit libero pharetra augue dapibus."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>`,
            text1: "Data Analysis",
            text2: "Vivamus sagittis lacus augue laoreet vel."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>`,
            text1: "Magic Touch",
            text2: "Cras mattis consectetur purus sit amet."
        }
    ],
    imageAnimation: "Top-To-Bottom",
    contentAnimation: "Top-To-Bottom"
  }
export default ProcessV6;