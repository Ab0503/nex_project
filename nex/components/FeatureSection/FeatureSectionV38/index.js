import NexAnimation from '@nex-components/NexAnimation';
import NexProgressBar from '@nex-core-ui/NexProgressBar';
import parse from 'html-react-parser';
import get from 'lodash.get'
import { arrayOf, number, object, string } from 'prop-types';
import React from 'react'

const FeatureSectionV38 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="">
        <div className={`flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-30px] mb-10 ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>

          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[30px] xl:!order-2 lg:!order-2">
            <NexAnimation type={get(props, 'topRightContentAnimation')}>
              <ul className="progress-list m-0 p-0 list-none">
                <li className={`mb-[1rem] ${get(tailwindClasses, 'percentageText')}`} style={get(style, 'percentageText')}>
                  {get(props, 'progressTitle1', "").length !== 0 && <p className={`!mb-[.25rem] font-semibold text-[1.125rem] ${get(tailwindClasses, 'progressTitle')}`} style={get(style, 'progressTitle')}>{get(props, 'progressTitle1')}</p>}
                  {get(props, 'progressValue1', "").length !== 0 && <div className="font-bold" >
                    <NexProgressBar shape="Line" strokeWidth={1.5} strokeColor={get(props, 'progress1Color')} percentTextStyle={{ color: `${get(props, 'percentageTextColor')}` }} percent={get(props, 'progressValue1')} />
                  </div>}
                </li>
                <li className={`mb-[1rem] ${get(tailwindClasses, 'percentageText')}`} style={get(style, 'percentageText')}>
                  {get(props, 'progressTitle2', "").length !== 0 && <p className={`!mb-[.25rem] font-semibold text-[1.125rem] ${get(tailwindClasses, 'progressTitle')}`} style={get(style, 'progressTitle')}>{get(props, 'progressTitle2')}</p>}
                  {get(props, 'progressValue2', "").length !== 0 && <div className="font-bold" >
                    <NexProgressBar shape="Line" strokeWidth={1.5} strokeColor={get(props, 'progress2Color')} percentTextStyle={{ color: `${get(props, 'percentageTextColor')}` }} percent={get(props, 'progressValue2')} />
                  </div>}
                </li>
                <li className={`mb-[1rem] ${get(tailwindClasses, 'percentageText')}`} style={get(style, 'percentageText')}>
                  {get(props, 'progressTitle3', "").length !== 0 && <p className={`!mb-[.25rem] font-semibold text-[1.125rem] ${get(tailwindClasses, 'progressTitle')}`} style={get(style, 'progressTitle')}>{get(props, 'progressTitle3')}</p>}
                  {get(props, 'progressValue3', "").length !== 0 && <div className="font-bold" >
                    <NexProgressBar shape="Line" strokeWidth={1.5} strokeColor={get(props, 'progress3Color')} percentTextStyle={{ color: `${get(props, 'percentageTextColor')}` }} percent={get(props, 'progressValue3')} />
                  </div>}
                </li>
                <li className={`mb-[1rem] ${get(tailwindClasses, 'percentageText')}`} style={get(style, 'percentageText')}>
                  {get(props, 'progressTitle4', "").length !== 0 && <p className={`!mb-[.25rem] font-semibold text-[1.125rem] ${get(tailwindClasses, 'progressTitle')}`} style={get(style, 'progressTitle')}>{get(props, 'progressTitle4')}</p>}
                  {get(props, 'progressValue4', "").length !== 0 && <div className="font-bold" >
                    <NexProgressBar shape="Line" strokeWidth={1.5} strokeColor={get(props, 'progress4Color')} percentTextStyle={{ color: `${get(props, 'percentageTextColor')}` }} percent={get(props, 'progressValue4')} />
                  </div>}
                </li>
              </ul>
            </NexAnimation>
          </div>
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[30px]">
            <NexAnimation type={get(props, 'topLeftContentAnimation')}>
              {get(props, 'title', "").length !== 0 && <h2 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[2.4rem] leading-[1.3] !mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
              {get(props, 'description', "").length !== 0 && <p className={`lead text-[1.4rem] !leading-[1.65] font-medium mb-5 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
            </NexAnimation>
          </div>
        </div>
          <div className="flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-30px] !text-center">
            {get(props, 'items', []).map((item) => <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[30px] max-w-full">
              <NexAnimation type={get(props, 'bottomContentAnimation')}>
              {get(item, 'icon', "").length !== 0 && <span className={`inline-flex nx-text-primary !mb-3 m-[0_auto] ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(item, 'icon'))}</span>}
              {get(item, 'title', "").length !== 0 && <h4 className={`text-xl font-bold mb-3 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h4>}
              {get(item, 'description', "").length !== 0 && <p className={`!mb-2 text-[1.05rem] ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(item, 'description')}</p>}
              </NexAnimation>
            </div>)}
          </div>
      </div>
    </section>
  )
}

FeatureSectionV38.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  description: string,
  percentageTextColor: string,
  progress1Color: string,
  progressTitle1: string,
  progressValue1: number,
  progress2Color: string,
  progressTitle2: string,
  progressValue2: number,
  progress3Color: string,
  progressTitle3: string,
  progressValue3: number,
  progress4Color: string,
  progressTitle4: string,
  progressValue4: number,
  items: arrayOf(object)
}

FeatureSectionV38.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title: {},
    description: {},
    progressTitle: {},
    percentageText: {},
    sectionIcon: {},
    sectionTitle: {},
    sectionDescription: {}
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    title: "",
    description: "",
    progressTitle: "",
    percentageText: "",
    sectionIcon: "",
    sectionTitle: "",
    sectionDescription: ""
  },
  title: "What I Do?",
  description: "Duis mollis est commodo luctus nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl.",
  percentageTextColor: "gray",
  progress1Color: "rgb(160 124 197)",
  progressTitle1: "Web Design",
  progressValue1: 100,
  progress2Color: "rgb(63 120 224)",
  progressTitle2: "Mobile Design",
  progressValue2: 80,
  progress3Color: "rgb(124 183 152)",
  progressTitle3: "Development",
  progressValue3: 85,
  progress4Color: "rgb(209 107 134)",
  progressTitle4: "SEO",
  progressValue4: 90,
  topLeftContentAnimation: "",
  topRightContentAnimation: "",
  bottomContentAnimation: "",
  items: [
    {
      bgColor: "",
      iconColor: "text-[#a07cc5]",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
</svg>
`,
      title: "Web Design",
      description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis."
    },
    {
      bgColor: "",
      iconColor: "text-[#3f78e0]",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>
`,
      title: "Mobile Design",
      description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis."
    },
    {
      bgColor: "",
      iconColor: "text-[#7cb798]",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
</svg>
`,
      title: "Development",
      description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis."
    },
    {
      bgColor: "",
      iconColor: "text-[#d16b86]",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
`,
      title: "SEO",
      description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis."
    },
  ]
}
export default FeatureSectionV38
