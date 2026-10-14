import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import PrimaryLink from '@nex-core-ui/PrimaryLink';

const CallToActionV9 = (props) => {
  const style = get(props,'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
    <section id="snippet-9" className={`overflow-hidden ${get(tailwindClasses, 'container')}`}>
      <div className="pt-20 pb-10 !relative">
        <section className="section-frame xl:mx-6 xl:rounded-[1rem] lg:mx-6 lg:rounded-[1rem] md:mx-6 md:rounded-[1rem] xxl:!mx-12 overflow-hidden">
          <div className={`bg-cover bg-[center_center] bg-no-repeat relative z-0 ${get(tailwindClasses, 'image')}`} style={{"background-image":`url('${get(props,'bgImage')}')`,"backgroundRepeat":"no-repeat",...get(style, 'image')}}>
            <div className="py-24 xl:py-[8rem] lg:py-[8rem] md:py-[8rem] text-center">
              <div className="!absolute shape yellow hidden xl:block lg:block w-5" style={{top: "18%", left: "5%"}}>
              {
                get(props, 'icon1',"").length != 0 &&
                <span className={`nx-text-primary w-full h-full ${get(tailwindClasses, 'icon1')}`}>{parse(get(props,"icon1"))}</span>
              }
              </div>
              <div className="!absolute shape leaf hidden  xl:block lg:block !w-[2.5rem]" style={{bottom: "30%", left: "2%"}}>
              {
                get(props, 'icon2',"").length != 0 &&
                <span className={`nx-text-primary w-full h-full ${get(tailwindClasses, 'icon2')}`}>{parse(get(props,"icon2"))}</span>
              }
              </div>
              <div className="!absolute shape fuchsia hidden  xl:block lg:block w-6" style={{top: "20%", right: "2%", transform: "rotate(70deg)"}}>
              {
                get(props, 'icon3',"").length != 0 &&
                <span className={`nx-text-primary w-full h-full ${get(tailwindClasses, 'icon3')}`}>{parse(get(props,"icon3"))}</span>
              }
              </div>
              <div className="!absolute shape grape hidden  xl:block lg:block w-6" style={{bottom: "28%", right: "5%"}}>
              {
                get(props, 'icon4',"").length != 0 &&
                <span className={`nx-text-primary w-full h-full ${get(tailwindClasses, 'icon4')}`}>{parse(get(props,"icon4"))}</span>
              }
              </div>
              <div className="flex flex-wrap mx-[-15px]">
                <div className="lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                {
                  get(props, 'title',"").length != 0 &&
                  <h2 className={`nx-section-heading-font font-bold leading-[1.2] xl:text-[3.5rem] text-[calc(1.475rem_+_2.7vw)] lg:mx-[-2.5rem] xl:mx-0 mb-5 ${get(tailwindClasses, 'title')}`}>{get(props,"title")}</h2>
                }
                {
                  get(props, 'subTitle',"").length != 0 &&
                  <p className={`lead text-[1.2rem] !leading-[1.65] md:!px-14 lg:!px-0 lg:mx-[-2.5rem] xl:mx-0 !mb-8 ${get(tailwindClasses, 'subTitle')}`}>{get(props,"subTitle")}</p>
                }
                <div>
                  {
                    get(props, 'ctaText',"").length != 0 &&
                    <button>
                    <PrimaryLink href={get(props,"ctaLink")} className={`inline-flex p-3 text-gray-50 nx-btn-primary nx-btn-primary:hover hover:-translate-y-[0.15rem] focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] disabled:border-[#3f78e0] ${get(tailwindClasses, 'ctaText')}`}>{get(props,"ctaText")}
                      <span className={`ml-[.3rem] before:content-['\e950'] ${get(tailwindClasses, 'ctaIcon')}`}>{parse(get(props,"ctaIcon"))}</span>
                    </PrimaryLink>
                    </button>
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    </div>
  )
}
CallToActionV9.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
CallToActionV9.defaultProps = {
  style: {
      container: {},
      image: {},
      icon1: {},
      icon2: {},
      icon3: {},
      icon4: {},
      title: {},
      subTitle: {},
      ctaText: {},
      ctaIcon: {}
  },
  tailwindClasses: {
    container: "",
    image: "",
    icon1: "",
    icon2: "",
    icon3: "",
    icon4: "",
    title: "",
    subTitle: "",
    ctaText: "",
    ctaIcon: ""
  },
    bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297592.1280x720 - Hero Image.png",
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
</svg>`,
    icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`,
    icon3: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
</svg>`,
    icon4: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>`,
    title: "Got a project in mind? Let's work together.",
    subTitle: "I bring rapid solutions to make the life of my clients easier. Have any questions? Reach out to me and I will get back to you shortly.",
    ctaText: "Contact Me",
    ctaLink: "#",
    ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>`
}

export default CallToActionV9;