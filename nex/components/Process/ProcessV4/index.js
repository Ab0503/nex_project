import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';

const ProcessV4 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});
  return (
    <div>
    <section id="snippet-4" className={`bg-gray-300 border-b-[rgba(164,174,198,0.2)] border-b border-solid ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[15px] !text-center">
          <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <div className="!relative">
                <div className={`hidden xl:block lg:block bg-dot red rellax !w-[6rem] !h-[8rem] absolute opacity-50 bg-[radial-gradient(#e2626b_2px,transparent_2.5px)] ${get(tailwindClasses, 'shape1')}`} data-rellax-speed="1" style={{top: "1rem", left: "-3.9rem", ...get(style, 'shape1')}}></div>
                <div className={`hidden xl:block lg:block !rounded-[50%] bg-line primary rellax !w-[8rem] !h-[8rem] absolute opacity-50 ${get(tailwindClasses, 'shape2')}`} data-rellax-speed="1" style={{bottom: "2rem", right: "-3rem", ...get(style, 'shape2')}}></div>
                <figure className="relative z-[2]">
                {
                    get(props, 'imagePath',"").length != 0 &&
                    <ImageOrVedio className={`rounded-lg !relative !w-full !h-full ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} 
                    src={get(props,"imagePath", "")}  vedioSrc={get(props,"vedioPath", "")}
              />
                }
                </figure>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mx-[15px] !text-center">
          <div className="xl:w-9/12 lg:w-9/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
          {
            get(props, 'subTitle',"").length != 0 &&
            <h2 className={`text-[1.1rem] uppercase text-[#aab0bc] mb-3 mt-[3.5rem] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</h2>
          }
          {
            get(props, 'title',"").length != 0 &&
            <h3 className={`text-[1.6rem] font-bold xl:text-[2.3rem] leading-[1.3] mb-0 !text-center xl:px-20 xxl:!px-20 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h3>
          }
            <div className="flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] process-wrapper !text-center mt-9">
            {
                get(props, 'items', []).map((item) =>  
                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full"> 
                {
                    get(item, 'icon',"").length != 0 &&
                    <span className={`inline-flex text-[#3f78e0] !w-[2.6rem] !h-[2.6rem] ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(item,"icon"))}</span>
                }
                {
                    get(item, 'text1',"").length != 0 &&
                    <h4 className={`text-[1.2rem] font-semibold !mb-1 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item,"text1")}</h4>
                }
                {
                    get(item, 'text2',"").length != 0 &&
                    <p className={`text-[1.1rem] !mb-1 ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item,"text2")}</p>
                }
                </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
ProcessV4.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
  }
  ProcessV4.defaultProps = {
    style: {
      container: {},
      image: {},
      shape: {},
      shape1: {},
      subTitle: {},
      title: {},
      icon: {},
      text1: {},
      text2: {}
    },
    tailwindClasses: {
        container: "",
        image: "",
        shape: "",
        shape1: "",
        subTitle: "",
        title: "",
        icon: "",
        text1: "",
        text2: ""
    },
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735987785.sa7.jpg",
    vedioPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1728966855.1728152985.19420800-uhd_3840_2160_30fps.mp4",
    subTitle: "Our Process",
    title: "Find out everything you need to know about creating a business process model",
    items: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>`,
            text1: "1. Concept",
            text2: "Nulla vitae elit libero elit non porta gravida eget metus cras."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>`,
            text1: "2. Prepare",
            text2: "Nulla vitae elit libero elit non porta gravida eget metus cras."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>`,
            text1: "3. Retouch",
            text2: "Nulla vitae elit libero elit non porta gravida eget metus cras."
        }
    ]
}
export default ProcessV4;