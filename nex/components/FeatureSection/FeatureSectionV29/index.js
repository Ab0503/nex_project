import NexAnimation from '@nex-components/NexAnimation';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import parse from 'html-react-parser';
import get from 'lodash.get'
import { object, string } from 'prop-types';
import React from 'react'

const FeatureSectionV29 = (props) => {
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const style = get(props, 'style', {})
  return (
    <section className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-14 pb-12">
        <div className={`flex flex-wrap mx-[15px] xl:mx-32 lg:mx-[20px] mt-[-50px] items-center ${get(tailwindClasses,'contentContainer')}`} style={get(style,'contentContainer')}>
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-0 lg:px-0 px-[15px] max-w-full mt-[50px]">
            <NexAnimation type={get(props, 'leftContentAnimation', '')}>
            <div className="flex flex-wrap mx-[-15px] mt-[-30px] !text-center">
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                <div className="flex flex-wrap mx-[-15px]">
                  <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                    {get(props,'image1',"").length !==0 &&<figure className="rounded-[.4rem] mb-6"><NexImage className={`!relative rounded-[.4rem] ${get(tailwindClasses,'image')}`} style={get(style,'image')} src={get(props,'image1')} alt="image" /></figure>}
                  </div>
                  <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                    <div className={`border rounded-lg ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}>
                      <div className="flex-[1_1_auto] p-[40px]">
                        {get(props, 'section1Icon', "").length !== 0 && <div className={`nx-bg-primary-light nx-text-primary pointer-events-none mb-3 !inline-flex items-center justify-center leading-none rounded-full p-3 ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}> {parse(get(props, 'section1Icon'))} </div>}
                        {get(props, 'section1Title', "").length !== 0 && <h4 className={`font-bold text-lg ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'section1Title')}</h4>}
                        {get(props, 'section1Description', "").length !== 0 && <p className={`mb-2 text-gray-600 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, 'section1Description')}</p>}
                        {get(props, 'section1CtaText', "").length !== 0 && <button className={`focus:text-gray-50 nx-bg-primary-light nx-text-primary font-bold px-5 py-2 rounded-full text-[.75rem] hover:translate-x-0 hover:translate-y-0 hover:rotate-0 hover:skew-x-0 hover:skew-y-0 hover:scale-x-105 hover:scale-y-105 ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}>
                          <PrimaryLink href={get(props, 'section1CtaLink')}>{get(props, 'section1CtaText')}</PrimaryLink>
                        </button>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                <div className="flex flex-wrap mx-[-15px]">
                  <div className="w-full flex-[0_0_auto] px-[15px] max-w-full xl:!order-2 lg:!order-2 md:!order-2">
                  {get(props,'image2',"").length !==0 &&<figure className="rounded-[.4rem] !mb-6"><NexImage className={`!relative rounded-[.4rem] ${get(tailwindClasses,'image')}`} style={get(style,'image')} src={get(props,'image2')} alt="image" /></figure>}
                  </div>
                  <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                    <div className={`rounded-lg border xl:mb-6 lg:mb-6 md:mb-6 lg:mt-6 xl:mt-6 ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}>
                      <div className="flex-[1_1_auto] p-[40px]">
                        {get(props, 'section2Icon', "").length !== 0 && <div className={`nx-bg-primary-light nx-text-primary pointer-events-none !mb-3 !inline-flex !items-center !justify-center !leading-none !rounded-[100%] p-3 ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}> {parse(get(props, 'section2Icon'))} </div>}
                        {get(props, 'section2Title', "").length !== 0 && <h4 className={`font-bold text-lg ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'section2Title')}</h4>}
                        {get(props, 'section2Description', "").length !== 0 && <p className={`mb-2 text-gray-600 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, 'section2Description')}</p>}
                        {get(props, 'section2CtaText', "").length !== 0 && <button className={`focus:text-[#3f78e0] nx-bg-primary-light nx-text-primary font-bold px-5 py-2 rounded-full text-[.75rem] hover:translate-x-0 hover:translate-y-0 hover:rotate-0 hover:skew-x-0 hover:skew-y-0 hover:scale-x-105 hover:scale-y-105 ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}>
                          <PrimaryLink href={get(props, 'section2CtaLink')}>{get(props, 'section2CtaText')}</PrimaryLink>
                        </button>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </NexAnimation>
          </div>
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] mt-[50px]">
            <NexAnimation type={get(props, 'rightContentAnimation', '')}>
            {get(props, 'title', "").length !== 0 && <h2 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[2.4rem] leading-[1.3] !mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
            {get(props, 'subTitle', "").length !== 0 && <p className={`lead text-[1.4rem] text-gray-600 leading-[1.6] font-medium mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</p>}
            {get(props, 'description', "").length !== 0 && <p className={`mb-3 text-base text-gray-600 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
            {get(props, 'ctaText', "").length !== 0 && <button className={`px-5 py-2 text-gray-50 nx-btn-primary nx-btn-primary:hover focus:shadow-[rgba(82,92,108,1)] active:text-gray-50 active:bg-[#747ed1] active:border-[#747ed1] disabled:text-gray-50 disabled:bg-[#747ed1] disabled:border-[#747ed1] rounded-[50rem] mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] font-bold ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
              <PrimaryLink href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</PrimaryLink>
            </button>}
            </NexAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

FeatureSectionV29.propTypes={
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
  description: string,
  ctaLink: string,
  ctaText: string,
  section1Icon: string,
  image1: string,
  section1Title: string,
  section1Description: string,
  section1CtaLink: string,
  section1CtaText: string,
  image2: string,
  section2Icon: string,
  section2Title: string,
  section2Description: string,
  section2CtaLink: string,
  section2CtaText: string,
}

FeatureSectionV29.defaultProps = {
  style:{
    container:{},
    contentContainer:{},
    title:{},
    subTitle:{},
    description:{},
    cta:{},
    image:{},
    sectionBox:{},
    sectionIcon:{},
    sectionTitle:{},
    sectionDescription:{},
    sectionCta:{}
  },
  tailwindClasses:{
    container:"",
    contentContainer:"",
    title:"",
    subTitle:"",
    description:"",
    cta:"",
    image:"",
    sectionBox:"",
    sectionIcon:"",
    sectionTitle:"",
    sectionDescription:"",
    sectionCta:""
  },
  title: "What We Do?",
  subTitle: "The full service we are offering is specifically designed to meet your business needs.",
  description: "Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis elit interdum. Duis mollis, est non commodo luctus, nisi erat ligula.",
  ctaLink: "#",
  ctaText: "More Details",
  section1Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" /></svg>`,
  image1:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736139651.se1.jpg",
  section1Title: "Web Design",
  section1Description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida.",
  section1CtaLink: "#",
  section1CtaText: "Learn More",
  image2:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736139651.se1.jpg",
  section2Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>`,
  section2Title: "Mobile Design",
  section2Description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida.",
  section2CtaLink: "#",
  section2CtaText: "Learn More",
  rightContentAnimation: "Right-To-Left",
  leftContentAnimation: "Right-To-Left"
}
export default FeatureSectionV29