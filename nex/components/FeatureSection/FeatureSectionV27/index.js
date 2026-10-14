import NexAnimation from '@nex-components/NexAnimation';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import parse from 'html-react-parser';
import get from 'lodash.get';
import { object, string } from 'prop-types';
import React from 'react';

const FeatureSectionv27 = (props) => {
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const style = get(props, 'style', {})
  return (
    <section className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-20 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className={`flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-50px] items-center ${get(tailwindClasses,'contentContainer')}`} style={get(style,'contentContainer')}>
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full xl:!order-2 lg:!order-2 mt-[50px]">
          
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
        
              <div className="xl:w-5/12 lg:w-5/12 md:w-5/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] md:!ml-[8.33333333%] !self-end mt-[25px]">
              <NexAnimation type={get(props,'box1ContentAnimation')}>
                <div className={`rounded-lg bg-[#fef3e4] ${get(tailwindClasses,'section1Box')}`} style={get(style,'section1Box')}>
                  <div className=" p-[40px]">
                    {get(props,'section1Icon',"").length !==0 &&<span className={`text-[#fab758] mb-3 inline-flex ${get(tailwindClasses,'section1Icon')}`} style={get(style,'section1Icon')}>{parse(get(props,'section1Icon'))}</span>}
                    {get(props,'section1Title',"").length !==0 &&<h4 className={`font-bold text-xl ${get(tailwindClasses,'sectionTitle')}`} style={get(style,'sectionTitle')}>{get(props,'section1Title')}</h4>}
                    {get(props,'section1Text',"").length !==0 &&<p className={`!mb-0 text-gray-600 ${get(tailwindClasses,'sectionText')}`}style={get(style,'sectionText')}>{get(props,'section1Text')}</p>}
                  </div>
                </div>
                </NexAnimation>
              </div>
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full !self-end mt-[25px]">
              <NexAnimation type={get(props,'box2ContentAnimation')}>
                <div className={`rounded-lg bg-[#fae6e7] ${get(tailwindClasses,'section2Box')}`} style={get(style,'section2Box')}>
                  <div className=" p-[40px]">
                    {get(props,'section2Icon',"").length !==0 &&<span className={`text-[#e2626b] mb-3 inline-flex ${get(tailwindClasses,'section2Icon')}`} style={get(style,'section2Icon')}>{parse(get(props,'section2Icon'))}</span>}
                    {get(props,'section2Title',"").length !==0 &&<h4 className={`font-bold text-xl ${get(tailwindClasses,'sectionTitle')}`} style={get(style,'sectionTitle')}>{get(props,'section2Title')}</h4>}
                    {get(props,'section2Text',"").length !==0 &&<p className={`!mb-0 text-gray-600 ${get(tailwindClasses,'sectionText')}`}style={get(style,'sectionText')}>{get(props,'section2Text')}</p>}
                  </div>
                </div>
                </NexAnimation>
              </div>
              <div className="xl:w-5/12 lg:w-5/12 md:w-5/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full mt-[25px]">
              <NexAnimation type={get(props,'box3ContentAnimation')}>
                <div className={`rounded-lg bg-[#eaf3ef] ${get(tailwindClasses,'section3Box')}`} style={get(style,'section3Box')}>
                  <div className="p-[40px]">
                    {get(props,'section3Icon',"").length !==0 &&<span className={`text-[#7cb798] mb-3 inline-flex ${get(tailwindClasses,'section3Icon')}`} style={get(style,'section3Icon')}>{parse(get(props,'section3Icon'))}</span>}
                    {get(props,'section3Title',"").length !==0 &&<h4 className={`font-bold text-xl ${get(tailwindClasses,'sectionTitle')}`} style={get(style,'sectionTitle')}>{get(props,'section3Title')}</h4>}
                    {get(props,'section3Text',"").length !==0 &&<p className={`mb-0 text-gray-600 ${get(tailwindClasses,'sectionText')}`}style={get(style,'sectionText')}>{get(props,'section3Text')}</p>}
                  </div>
                </div>
                </NexAnimation>
              </div>
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full !self-start mt-[25px]">
              <NexAnimation type={get(props,'box4ContentAnimation')}>
                <div className={`rounded-lg bg-[#e0e9fa] ${get(tailwindClasses,'section4Box')}`} style={get(style,'section4Box')}>
                  <div className="p-[40px]">
                    {get(props,'section4Icon',"").length !==0 &&<text className={`text-[#3f78e0] mb-3 inline-flex ${get(tailwindClasses,'section4Icon')}`} style={get(style,'section4Icon')}>{parse(get(props,'section4Icon'))}</text>}
                    {get(props,'section4Title',"").length !==0 &&<h4 className={`font-bold text-xl ${get(tailwindClasses,'sectionTitle')}`} style={get(style,'sectionTitle')}>{get(props,'section4Title')}</h4>}
                    {get(props,'section4Text',"").length !==0 &&<p className={`mb-0 text-gray-600 ${get(tailwindClasses,'sectionText')}`}style={get(style,'sectionText')}>{get(props,'section4Text')}</p>}
                  </div>
                </div>
                </NexAnimation>
              </div>
            </div>
          </div>
          
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
          <NexAnimation type={get(props,'TextContentAnimation')}>
            {get(props, 'subTitle', "").length !== 0 && <h2 className={`nx-text-primary text-[.75rem] uppercase mb-3 tracking-[0.02rem] leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h2>}
            {get(props, 'title', "").length !== 0 && <h3 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h3>}
            {get(props, 'description', "").length !== 0 && <p className={`mb-3 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
            {get(props, 'ctaText', "").length !== 0 && <button className={`px-5 py-2 text-gray-50 nx-btn-primary nx-btn-primary:hover focus:shadow-[rgba(82,92,108,1)] active:text-gray-50 active:bg-[#343f52] active:border-[#343f52] disabled:text-gray-50 disabled:bg-[#343f52] disabled:border-[#343f52] rounded-[50rem] mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] font-bold ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
              <PrimaryLink href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</PrimaryLink>
            </button>}
            </NexAnimation>
          </div>
    
        </div>
      </div>
    </section>
  )
}

FeatureSectionv27.propTypes={
  style: object,
  tailwindClasses: object,
  subTitle: string,
  title: string,
  description: string,
  ctaLink: string,
  ctaText: string,
  section1Icon: string,
  section1Title: string,
  section1Text: string,
  section2Icon: string,
  section2Title: string,
  section2Text: string,
  section3Icon: string,
  section3Title: string,
  section3Text: string,
  section4Icon: string,
  section4Title: string,
  section4Text: string,
}

FeatureSectionv27.defaultProps = {
  style:{
    container:{},
    contentContainer:{},
    subTitle:{},
    title:{},
    description:{},
    cta:{},
    section1Box:{},
    section1Icon:{},
    section2Box:{},
    section2Icon:{},
    section3Box:{},
    section3Icon:{},
    section4Box:{},
    section4Icon:{},
    sectionTitle:{},
    sectionText:{}
  },
  tailwindClasses:{
    container:"",
    contentContainer:"",
    subTitle:"",
    title:"",
    description:"",
    cta:"",
    section1Box:"",
    section1Icon:"",
    section2Box:"",
    section2Icon:"",
    section3Box:"",
    section3Icon:"",
    section4Box:"",
    section4Icon:"",
    sectionTitle:"",
    sectionText:""
  },
  box1ContentAnimation: "",
  box2ContentAnimation: "",
  box3ContentAnimation: "",
  box4ContentAnimation: "",
  TextContentAnimation: "",
  subTitle: "What We Do?",
  title: "The service we offer is specifically designed to meet your needs.",
  description: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
  ctaLink: "#",
  ctaText: "More Details",
  section1Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
</svg>
`,
  section1Title: "24/7 Support",
  section1Text: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.",
  section2Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>
`,
  section2Title: "Secure Payments",
  section2Text: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.",
  section3Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
  section3Title: "Daily Updates",
  section3Text: "Nulla vitae elit libero, a pharetra augue.",
  section4Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
</svg>
`,
  section4Title: "Market Research",
  section4Text: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget.",
}
export default FeatureSectionv27
