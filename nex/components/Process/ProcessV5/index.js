import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';

const ProcessV5 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="flex mx-[15px]">
        <div className="md:w-10/12 lg:w-8/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full mx-auto text-center">
          <NexAnimation type={get(props, 'topContentAnimation')}>
            {
              get(props, 'icon', "").length != 0 &&
              <span className={`nx-text-primary inline-flex w-[2.6rem] h-[2.6rem] mb-3 m-[0_auto] ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, "icon"))}</span>
            }
            {
              get(props, 'title', "").length != 0 &&
              <h2 className={`nx-section-heading-font text-[2.4rem] font-bold xl:text-[2.4rem] leading-[1.3] mb-4 xl:px-[5rem] lg:px-[5rem] ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h2>
            }
          </NexAnimation>
        </div>
      </div>
      <div className={`flex flex-wrap mx-[15px] md:mx-[20px] lg:mx-[20px] xl:mx-[35px] mt-[-50px] items-center ${get(tailwindClasses, 'contentcontainer')}`} style={get(style, 'contentcontainer')}>
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-sm:px-0 mt-[50px] max-w-full xl:!order-2 lg:!order-2">
          <NexAnimation type={get(props, 'rightContentAnimation')}>
            <div className="card xl:mr-6 lg:mr-6">
              <div className={`p-6 rounded-lg ${get(tailwindClasses, 'card')}`} style={get(style, 'card')}>
                <div className="flex flex-row">
                  <div>
                    {
                      get(props, 'number1', "").length != 0 &&
                      <span className={`pointer-events-none nx-bg-primary-light nx-text-primary mr-4 xl:text-[1.3rem] w-12 h-12 inline-flex items-center justify-center leading-none p-0 rounded-full
                          text-center align-middle text-[1.1rem] font-bold m-[0_auto] ${get(tailwindClasses, 'number1')}`} style={get(style, 'number1')}>{get(props, "number1")}</span>
                    }
                  </div>
                  <div>
                    {
                      get(props, 'section1Text1', "").length != 0 &&
                      <h4 className={`mb-1 text-[1.2rem] font-bold ${get(tailwindClasses, 'section1Text1')}`} style={get(style, 'section1Text1')}>{get(props, "section1Text1")}</h4>
                    }
                    {
                      get(props, 'section1Text2', "").length != 0 &&
                      <p className={`mb-0 text-[1rem] ${get(tailwindClasses, 'section1Text2')}`} style={get(style, 'section1Text2')}>{get(props, "section1Text2")}</p>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-6 xl:!ml-16 lg:!ml-16">
              <div className={`p-6 rounded-lg ${get(tailwindClasses, 'card')}`} style={get(style, 'card')}>
                <div className="flex flex-row">
                  <div>
                    {
                      get(props, 'number2', "").length != 0 &&
                      <span className={`pointer-events-none nx-bg-primary-light nx-text-primary mr-4 xl:text-[1.3rem] w-12 h-12 inline-flex items-center justify-center leading-none p-0 rounded-full
                          text-center align-middle text-[1.1rem] font-bold m-[0_auto] ${get(tailwindClasses, 'number2')}`} style={get(style, 'number2')}>{get(props, "number2")}</span>
                    }
                  </div>
                  <div>
                    {
                      get(props, 'section2Text1', "").length != 0 &&
                      <h4 className={`mb-1 text-[1.2rem] font-bold ${get(tailwindClasses, 'section2Text1')}`} style={get(style, 'section2Text1')}>{get(props, "section2Text1")}</h4>
                    }
                    {
                      get(props, 'section2Text2', "").length != 0 &&
                      <p className={`mb-0 text-[1rem] ${get(tailwindClasses, 'section2Text2')}`} style={get(style, 'section2Text2')}>{get(props, "section2Text2")}</p>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 xl:mx-6 lg:mx-6">
              <div className={`p-6 rounded-lg ${get(tailwindClasses, 'card')}`} style={get(style, 'card')}>
                <div className="flex flex-row">
                  <div>
                    {
                      get(props, 'number3', "").length != 0 &&
                      <span className={`pointer-events-none nx-bg-primary-light nx-text-primary mr-4 xl:text-[1.3rem] w-12 h-12 inline-flex items-center justify-center leading-none p-0 rounded-full
                          text-center align-middle text-[1.1rem] font-bold m-[0_auto] ${get(tailwindClasses, 'number3')}`} style={get(style, 'number3')}>{get(props, "number3")}</span>
                    }
                  </div>
                  <div>
                    {
                      get(props, 'section3Text1', "").length != 0 &&
                      <h4 className={`!mb-1 text-[1.2rem] font-bold ${get(tailwindClasses, 'section3Text1')}`} style={get(style, 'section3Text1')}>{get(props, "section3Text1")}</h4>
                    }
                    {
                      get(props, 'section3Text2', "").length != 0 &&
                      <p className={`!mb-0 text-[1rem] ${get(tailwindClasses, 'section3Text2')}`} style={get(style, 'section3Text2')}>{get(props, "section3Text2")}</p>
                    }
                  </div>
                </div>
              </div>
            </div>
          </NexAnimation>
        </div>
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-sm:px-0 mt-[50px] max-w-full">
          <NexAnimation type={get(props, 'leftContentAnimation')}>
            {
              get(props, 'title1', "").length != 0 &&
              <h2 className={`text-[1.5rem] font-bold xl:text-[1.8rem] leading-[1.35] mb-3 ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(props, "title1")}</h2>
            }
            {
              get(props, 'subTitle1', "").length != 0 &&
              <p className={`lead text-[1.4rem] xl:pr-5 lg:pr-5 mb-3 ${get(tailwindClasses, 'subTitle1')}`} style={get(style, 'subTitle1')}>{get(props, "subTitle1")}</p>
            }
            {
              get(props, 'description1', "").length != 0 &&
              <p className={`text-[1rem] mb-3 ${get(tailwindClasses, 'description1')}`} style={get(style, 'description1')}>{get(props, "description1")}</p>
            }
            {
              get(props, 'description2', "").length != 0 &&
              <p className={`text-[1rem] mb-3 ${get(tailwindClasses, 'description2')}`} style={get(style, 'description2')}>{get(props, "description2")}</p>
            }
            {
              get(props, 'ctaText', "").length != 0 &&
              <button className={`px-5 py-2 nx-btn-primary nx-btn-primary:hover rounded-[50rem] mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>
                <PrimaryLink href={get(props, 'ctaLink')} >{get(props, "ctaText")}</PrimaryLink>
              </button>
            }
          </NexAnimation>
        </div>
      </div>
    </section>
  )
}
ProcessV5.propTypes = {
  style: object,
  tailwindClasses: object,
  subTitle: string,
  title: string,
}
ProcessV5.defaultProps = {
  style: {
    container: {},
    contentcontainer: {},
    icon: {},
    title: {},
    title1: {},
    subTitle1: {},
    description1: {},
    description2: {},
    ctaText: {},
    card: {},
    number1: {},
    section1Text1: {},
    section1Text2: {},
    number2: {},
    section2Text1: {},
    section2Text2: {},
    number3: {},
    section3Text1: {},
    section3Text2: {},
  },
  tailwindClasses: {
    container: "",
    contentcontainer: "",
    icon: "",
    title: "",
    title1: "",
    subTitle1: "",
    description1: "",
    description2: "",
    ctaText: "",
    card: "",
    number1: "",
    section1Text1: "",
    section1Text2: "",
    number2: "",
    section2Text1: "",
    section2Text2: "",
    number3: "",
    section3Text1: "",
    section3Text2: "",
  },
  icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>`,
  title: "Here are 3 working steps to organize our business projects.",
  title1: "How It Works?",
  subTitle1: "Find out everything you need to know and more about how we create our business process models.",
  description1: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare.",
  description2: "Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis.",
  ctaLink: "#",
  ctaText: "Learn More",
  number1: "1",
  section1Text1: "Collect Ideas",
  section1Text2: "Nulla vitae elit libero pharetra augue dapibus.",
  number2: "2",
  section2Text1: "Data Analysis",
  section2Text2: "Vivamus sagittis lacus vel augue laoreet.",
  number3: "3",
  section3Text1: "Finalize Product",
  section3Text2: "Cras mattis consectetur purus sit amet.",
  topContentAnimation:"",
  rightContentAnimation:"",
  leftContentAnimation:""
}
export default ProcessV5;