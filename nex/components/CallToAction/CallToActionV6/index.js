import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';

const CallToActionV6 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const items = get(props, 'items', {});
  return (
    <div>
      <section className="bg-gray-300">
        <div class="pt-5 pb-5 lg:!py-20 xl:!py-28">
          <div className="flex max-lg:flex-wrap mx-[15px] xl:mx-[15px] lg:mx-[20px] items-center justify-center">
          {
            get(props, 'imagePath',"").length != 0 &&
            <NexImage className={`!relative !w-1/2 !h-full md:!mb-10 lg:!mb-0 xl:!mb-0`} src={get(props, "imagePath")} />
          }
            <div className="md:w-10/12 lg:w-6/12 lg: xl:w-6/12  flex-[0_0_auto]  xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] w-full max-w-full xl:!mt-[1.25rem] lg:!mt-[1.25rem] md:!mt-[2.25rem] text-center xl:text-left lg:text-left">
            {
              get(props, 'title',"").length != 0 &&
              <h1 className={`text-[2.1rem] font-bold xl:text-[2.8rem] leading-[1.3] mb-4 md:!px-10 lg:!px-0 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h1>
            }
            {
              get(props, 'subTitle',"").length != 0 &&
              <p className={`lead text-[1.45rem] !leading-[1.6] mb-7 md:!px-10 lg:!px-0 xl:!px-0 xxl:!pr-20 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}</p>
            }
              <div className="flex justify-center xl:!justify-start lg:!justify-start">
                {
                  get(props, 'items', []).map((item) =>
                    <div>
                    {
                      get(item, 'ctaText',"").length != 0 &&
                      <a className={`inline-flex p-3 text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-start rounded !mr-2 ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>
                        <span className={`mr-[.3rem] before:content-['\e938'] ${get(tailwindClasses, 'ctaIcon')}`} style={get(style, 'ctaIcon')}>{parse(get(item, "ctaIcon"))}</span>{get(item, "ctaText")}
                      </a>
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
CallToActionV6.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
CallToActionV6.defaultProps = {
  style: {
    container: {},
    image: {},
    title: {},
    subTitle: {},
    ctaIcon: {},
    ctaText: {}
  },
  tailwindClasses: {
    container: "",
    image: "",
    title: "",
    subTitle: "",
    ctaIcon: "",
    ctaText: ""
  },
  imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735289822.1260x1590.png",
  title: "Get all of your steps, exercise, sleep and meds in one place.",
  subTitle: "Sandbox is now available to download from both the App Store and Google Play Store.",
  items: [
    {
      ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z" clip-rule="evenodd" />
              </svg>`,
      ctaText: "App Store"
    },
    {
      ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>`,
      ctaText: "Google Play"
    }
  ],
 
}
export default CallToActionV6;