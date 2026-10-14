import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';

const AboutV14 = (props) => {
  const style = get(props,'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
      <section id="snippet-14" className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className={`flex flex-wrap mx-[15px] md:mx-[20px] lg:mx-[20px] xl:mx-[35px] mt-[-50px] items-center mb-24 xl:mb-[8rem] lg:mb-[8rem] md:mb-[8rem] ${get(tailwindClasses, 'contentcontainer')}`} style={get(style, 'contentcontainer')}>
          <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mx-auto mt-[50px]">
            <div className="img-mask mask-3 xxl:px-5">
            <NexAnimation  type={get(props, 'imageContentAnimation', '')}>
              <ImageOrVedio className={`!relative rounded-full ${get(tailwindClasses, 'imagePath')}`} style={get(style, 'imagePath')} src={get(props,"imagePath")} vedioSrc={get(props,"vedioPath","")}/>
            </NexAnimation>
            </div>
          </div>
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[50px]">
          <NexAnimation  type={get(props, 'rightContentAnimation', '')}>
          {
            get(props, 'title',"").length != 0 &&
            <h2 className={`nx-section-heading-font text-[calc(1.345rem_+_1.14vw)] font-bold leading-[1.25] xl:text-[2.7rem] mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h2>
          }
          {
            get(props, 'subTitle',"").length != 0 &&
            <p className={`nx-text-primary lead text-[1.7rem] font-medium leading-[1.65] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</p>
          }
          {
            get(props, 'description1',"").length != 0 &&
            <p className={`text-[1.1rem] font-medium mb-3 ${get(tailwindClasses, 'description1')}`} style={get(style, 'description1')}>{get(props,"description1")}</p>
          }
          {
            get(props, 'description2',"").length != 0 &&
            <p className={`text-[1.1rem] font-medium mb-6 ${get(tailwindClasses, 'description2')}`} style={get(style, 'description2')}>{get(props,"description2")}</p>
          }
          {
            get(props, 'ctaIcon',"").length != 0 &&
            <PrimaryLink href={get(props,"ctaLink")} className={`inline-flex p-4 rounded-lg text-gray-50 nx-btn-primary nx-btn-primary:hover focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-end mt-2 ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>{get(props,"ctaText")}
              <span className={`ml-[.3rem] before:content-['\e950'] ${get(tailwindClasses, 'ctaIcon')}`} style={get(style, 'ctaIcon')}>{parse(get(props,"ctaIcon"))}</span>
            </PrimaryLink>
          }
          </NexAnimation>
          </div>
        </div>
        <div className={`flex flex-wrap mx-[15px] md:mx-[20px] lg:mx-[20px] xl:mx-[35px] mt-[-50px] ${get(tailwindClasses, 'contentcontainer1')}`} style={get(style, 'contentcontainer1')}>
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mx-auto mt-[50px]">
          <NexAnimation  type={get(props, 'bottomleftContentAnimation', '')}>
          {
            get(props, 'title1',"").length != 0 &&
            <h2 className={`nx-section-heading-font text-[calc(1.345rem_+_1.14vw)] font-bold leading-[1.25] xl:text-[2.2rem] mb-3 ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(props,"title1")}</h2>
          }
          {
            get(props, 'subTitle1',"").length != 0 &&
            <p className={`lead text-[1.2rem] font-medium leading-[1.65] xxl:pr-8 mb-6 ${get(tailwindClasses, 'subTitle1')}`} style={get(style, 'subTitle1')}>{get(props,"subTitle1")}</p>
          }
          {
            get(props, 'ctaIcon1',"").length != 0 &&
            <PrimaryLink href={get(props,"ctaLink1")} className={`inline-flex text-gray-50 nx-btn-primary nx-btn-primary:hover focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] disabled:border-[#3f78e0] p-4 rounded-lg ${get(tailwindClasses, 'ctaText1')}`} style={get(style, 'ctaText1')}>{get(props,"ctaText1")}
              <span className={`ml-[.3rem] before:content-['\e950'] ${get(tailwindClasses, 'ctaIcon1')}`} style={get(style, 'ctaIcon1')}>{parse(get(props,"ctaIcon1"))}</span>
            </PrimaryLink>
          }
          </NexAnimation>
          </div>
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[50px]">
            <ul className="timeline xl:table lg:table md:table w-full m-0 p-0 list-none">
            {
              get(props, 'items', []).map((item) =>  
              <li className="relative pl-8 xl:table-row xl:p-0 lg:table-row lg:p-0 md:table-row md:p-0">
              {
                get(item, 'text1',"").length != 0 &&
                <h2 className={`uppercase tracking-[0.02rem] font-bold text-[#aab0bc] text-[0.7rem] whitespace-nowrap mb-2 xl:text-right xl:table-cell xl:align-top xl:pr-6 lg:text-right lg:table-cell lg:align-top lg:pr-6 md:text-right md:table-cell md:align-top md:pr-6 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item,"text1")}</h2>
              }
                <div className={`absolute w-[0.6rem] text-[#3f78e0] left-0 inset-y-0 xl:relative xl:table-cell xl:align-top lg:relative lg:table-cell lg:align-top md:relative md:table-cell md:align-top before:w-[0.55rem] before:h-[0.55rem] before:content-[''] before:block before:absolute before:rounded-[100%] before:left-0 before:top-[0.2rem] before:bg-[#3f78e0] after:w-px after:content-[''] after:block after:absolute after:left-1 after:top-4 after:bottom-0 after:bg-[rgba(164,174,198,.2)] ${get(tailwindClasses, 'timeLine')}`} style={get(style, 'timeLine')}></div>
                <div className="pb-8 xl:pl-6 lg:pl-6 md:pl-6">
                {
                  get(item, 'title2',"").length != 0 &&
                  <h3 className={`nx-section-heading-font xl:mt-[-1.01rem] lg:mt-[0.25rem] md:mt-[0.25rem] text-[1.7rem] ${get(tailwindClasses, 'title2')}`} style={get(style, 'title2')}>{get(item,"title2")}</h3>
                }
                {
                  get(item, 'subTitle2',"").length != 0 &&
                  <p className={`m-0 text-[1.1rem] ${get(tailwindClasses, 'subTitle2')}`} style={get(style, 'subTitle2')}>{get(item,"subTitle2")}</p>
                }
                </div>
              </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
AboutV14.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string
}
AboutV14.defaultProps = {
  style: {
      container: {},
      contentcontainer: {},
      image: {},
      title: {},
      subTitle: {},
      description1: {},
      description2: {},
      ctaText: {},
      ctaIcon: {},
      contentcontainer1: {},
      title1: {},
      subTitle1: {},
      ctaText1: {},
      ctaIcon1: {},
      text1: {},
      timeLine: {},
      title2: {},
      subTitle2: {}
  },
  tailwindClasses:{
      container: "",
      contentcontainer: "",
      image: "",
      title: "",
      subTitle: "",
      description1: "",
      description2: "",
      ctaText: "",
      ctaIcon: "",
      contentcontainer1: "",
      title1: "",
      subTitle1: "",
      ctaText1: "",
      ctaIcon1: "",
      text1: "",
      timeLine: "",
      title2: "",
      subTitle2: ""
  },
  imageContentAnimation: "",
  rightContentAnimation: "",
  bottomleftContentAnimation: "",
  title: "More about me",
  subTitle: "Hello I'm Camille, a multidisciplinary product designer based in New York City. I’m very passionate about the work that I do.",
  description1: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh ut fermentum massa justo sit amet risus.",
  description2: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur.",
  ctaText: "Learn More",
  ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd" />
            </svg>`,
  ctaLink: "#",
  title1: "My experiences",
  subTitle1: "I've had the pleasure to work with companies across a variety of industries I'm always interested in new and exciting adventures",
  ctaText1: "Download Resume",
  ctaIcon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd" />
            </svg>`,
  ctaLink1: "#",
  imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735293404.1120x1050.png",
  vedioPath: "",
  items: [
    {
      text1: "Nov 2017 - Present",
      title2: "Creative Director at Malory House",
      subTitle2: "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non euismod id nulla."
    },
    {
      text1: "Sep 2015 - Apr 2017",
      title2: "Senior Developer at Longwave Studio",
      subTitle2: "Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque."
    },
    {
      text1: "May 2011 - Sep 2015",
      title2: "Junior Developer at Webpaint Media",
      subTitle2: "Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    }
  ]
}
export default AboutV14;