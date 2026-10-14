import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';
import NexAnimation from '@nex-components/NexAnimation';

const AboutV12 = (props) => {
  const style = get(props,'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
      <section id="snippet-12" className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-20 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[15px] text-center">
          <div className="md:w-11/12 lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full mx-auto relative">
          {
            get(props, 'icon1',"").length != 0 &&
            <span className={`nx-text-primary h-[3rem] absolute hidden xl:block lg:block ${get(tailwindClasses, 'icon1')}`} style={{top: "-20%", right: "-12%", ...get(style, 'icon1')}}>
              {parse(get(props,"icon1"))}
            </span>
          }
          {
            get(props, 'icon2',"").length != 0 &&
            <span className={`nx-text-primary h-[7rem] absolute hidden xl:block lg:block ${get(tailwindClasses, 'icon2')}`} style={{bottom: "5%", left: "-17%", ...get(style, 'icon2')}}>
              {parse(get(props,"icon2"))}
            </span>
          }
          {
            get(props, 'subTitle',"").length != 0 &&
            <h2 className={`nx-text-primary text-[1.1rem] uppercase text-[#3c6ac7] mb-3 text-center leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</h2>
          }
          {
            get(props, 'title1',"").length != 0 &&
            (<h3 className={`nx-section-heading-font text-[calc(1.325rem_+_0.9vw)] font-bold leading-[1.25] xl:text-[2rem] mb-14 text-center ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(props,"title1")}
              <span className={`nx-section-heading-font nx-text-primary ${get(tailwindClasses, 'title2')}`} style={get(style, 'title2')}>{get(props,"title2")}</span> 
              {get(props,"title3")}
            </h3>)
          }
          </div>
        </div>
        <div className="flex flex-wrap mx-[15px] items-start">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:sticky lg:sticky" style={{top: "8rem"}}>
            <figure className="m-0 p-0">
            <NexAnimation  type={get(props, 'leftContentAnimation', '')}>
            {
              get(props, 'imagePath',"").length != 0 &&
              <ImageOrVedio className={`!relative !w-full max-w-full h-auto ${get(tailwindClasses, 'imagePath')}`} style={get(style, 'imagePath')} src={get(props,"imagePath")} vedioSrc={get(props, "vedioPath")}/>
            }
            </NexAnimation>
            </figure>
          </div>
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full ml-auto">
          {
            get(props, 'items', []).map((item) =>
            <div className="flex flex-row mb-8">
              <div>
              {
                (get(item, 'icon',"").length != 0) &&
                (<div className={`nx-bg-primary-light w-16 h-16 mr-5 justify-center inline-flex items-center rounded-lg ${get(tailwindClasses, 'iconBox')}`} style={get(style, 'iconBox')}>
                {
                  get(item, 'icon',"").length != 0 &&
                  <span className={`nx-text-primary ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(item,"icon"))}</span>
                }
                </div>)
              }
              </div>
              <div>
              {
                get(item, 'title',"").length != 0 &&
                <h4 className={`text-[1.5rem] ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(item,"title")}</h4>
              }
              {
                get(item, 'description',"").length != 0 &&
                <p className={`text-[1.1rem] ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(item,"description")}</p>
              }
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
AboutV12.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
AboutV12.defaultProps = {
  style: {
      container: {},
      icon1: {},
      icon2: {},
      subTitle: {},
      title1: {},
      title2: {},
      image: {},
      icon: {},
      iconBox: {},
      title: {},
      description: {}
  },
  tailwindClasses: {
    container: "",
    icon1: "",
    icon2: "",
    subTitle: "",
    title1: "",
    title2: "",
    image: "",
    icon: "",
    iconBox: "",
    title: "",
    description: ""
  },
  leftContentAnimation:"",
  subTitle: "Why Choose Sandbox?",
  title1: "Here are a few", 
  title2: " reasons why ",
  title3: "our customers choose the Sandbox app.",
  imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735289822.1260x1590.png",
  vedioPath:"",
  icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>`,
  icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
              </svg>`,
  items:[
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
      <path fill-rule="evenodd" d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z" clip-rule="evenodd" />
      </svg>`,
      title: "Scheduled Transactions",
      description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna."
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd" />
      </svg>`,
      title: "Multiple Currencies",
      description: "Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum."
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
      <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
      <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
      <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
      </svg>`,
      title: "Database Management",
      description: "Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes."
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path d="M10.5 18a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
      <path fill-rule="evenodd" d="M7.125 1.5A3.375 3.375 0 0 0 3.75 4.875v14.25A3.375 3.375 0 0 0 7.125 22.5h9.75a3.375 3.375 0 0 0 3.375-3.375V4.875A3.375 3.375 0 0 0 16.875 1.5h-9.75ZM6 4.875c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125h-9.75A1.125 1.125 0 0 1 6 19.125V4.875Z" clip-rule="evenodd" />
      </svg>`,
      title: "Sync Between Devices",
      description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna."
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
      </svg>`,
      title: "Smart Search",
      description: "Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum."
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z" clip-rule="evenodd" />
      <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
      </svg>`,
      title: "Detailed Reports",
      description: "Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes."
    }
  ]
}
export default AboutV12;