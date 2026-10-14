import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';

const CallToActionV7 = (props) => {
  const style = get(props,'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
    <section id="snippet-7" className={`bg-gray-50 border-b-[rgba(164,174,198,0.2)] border-b border-solid ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-40 pb-10 !relative">
        <section className={`bg-full bg-[center_center] bg-no-repeat relative z-0 ${get(tailwindClasses, 'image')}`} style={{"background-image":`url(${get(props,'bgImage')})`,"backgroundRepeat":"no-repeat",...get(style, 'image')}}>
          <div className="overflow-hidden" style={{zIndex:1}}>
            <div className="divider divider-alt text-gray-100 mx-[0.12rem]">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <g fill="currentColor">
                  <polygon points="1440 100 0 15 0 0 1440 0 1440 100" />
                </g>
              </svg>
              </span>
            </div>
          </div>
          <div className="pt-10 xl:pt-10 lg:pt-10 md:pt-16 pb-8 xl:pb-10 lg:pb-10 md:pb-10 text-center xl:text-left lg:text-left">
            <div className="flex flex-wrap mx-20 max-sm:mx-8 mt-[50px] max-sm:mt-[8px]">
              <div className="md:w-10/12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-6/12 xl:!ml-0 xl:w-5/12 w-full flex-[0_0_auto] max-w-full !relative mt-[50px]">
              {
                get(props, 'icon1',"").length != 0 &&
                <span className={`!h-[5rem] !absolute xl:block lg:block ${get(tailwindClasses, 'icon1')}`} style={{bottom: "36%", right: "15%", ...get(style, 'icon1')}}>{parse(get(props,"icon1"))}</span>
              }
              {
                get(props, 'icon2',"").length != 0 &&
                <span className={`!h-[4.5rem] !absolute xl:block lg:block ${get(tailwindClasses, 'icon2')}`} style={{top: "-15%", left: "25%", ...get(style, 'icon2')}}>{parse(get(props,"icon2"))}</span>
              }
              {
                get(props, 'title',"").length != 0 &&
                <h2 className={`font-bold text-[2.1rem] xl:text-[2.5rem] mb-4 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}<span className={`bg-gradient-to-t from-purple-500 to-teal-400 bg-clip-text text-transparent ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(props,"title1")}</span></h2>
              }
              {
                get(props, 'subTitle',"").length != 0 &&
                <p className={`lead text-[1.2rem] leading-normal mb-7 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</p>
              }
                <div className="flex justify-center xl:!justify-start lg:!justify-start">
                {
                  get(props, 'items', []).map((item) =>   
                  <div>
                  {
                    get(item, 'ctaText',"").length != 0 &&
                    <a className={`inline-flex p-2 text-white !bg-gray-800 border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded-lg !mr-2 ${get(tailwindClasses, 'ctaText')}`}style={get(style, 'ctaText')}>
                      <span className={`mt-4 mr-[.3rem] before:content-['\e938'] ${get(tailwindClasses, 'ctaIcon')}`} style={get(style, 'ctaIcon')}>{parse(get(item,"ctaIcon"))}</span>
                      <div className='text-start'>
                        <span className="text-[0.85rem]">{get(item,"ctaText")}</span><br></br>
                        <span className="text-[1.2rem]">{get(item,"ctaText1")}</span>
                      </div>
                    </a>
                  }
                  </div>
                  )
                }
                </div>
              </div>
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full ml-auto mt-lg-n15 xl:!mt-[-16rem] lg:!mt-[-5rem] mt-[50px]">
                <figure className="m-0 p-0">
                {
                  get(props, 'imagePath',"").length != 0 &&
                  <NexImage className={`!relative !w-full max-w-full !h-auto ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props,"imagePath")}/>
                }
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    </div>
  )
}
CallToActionV7.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
CallToActionV7.defaultProps = {
  style: {
      container: {},
      icon: {},
      title: {},
      title1: {},
      subTitle: {},
      ctaIcon: {},
      ctaText: {},
      ctaText1: {},
      icon1 : {},
      icon2: {}
  },
  tailwindClasses: {
    container: "",
    icon: "",
    title: "",
    title1: "",
    subTitle: "",
    ctaIcon: "",
    ctaText: "",
    ctaText1:"",
    icon1: "",
    icon2: ""
  },
  imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735289822.1260x1590.png",
  bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735208225.CallToAction-9.png",
  icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>`,
  icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>`,
  title: "Manage all your bills, accounts & budgets in",
  title1: " one place.",
  subTitle: "Sandbox is available to download from both App Store and Google Play Store.",
  items: [
    {
        ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>`,
        ctaText: "Download on the",
        ctaText1: "App Store"
    },
    {
        ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>`,
        ctaText: "GET IT ON",
        ctaText1: "Google Play"
    }
  ],
  
}
export default CallToActionV7;