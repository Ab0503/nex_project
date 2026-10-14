import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';

const MiscV1 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});
  return (
    <div>
    <section id="snippet-1" className={`bg-gray-300 border-b-[rgba(164,174,198,0.2)] border-b border-solid ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[15px] !text-center">
          <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
          {
            get(props, 'subTitle',"").length != 0 &&
            <h2 className={`text-[1.02rem] uppercase text-[#3f78e0] font-normal leading-[1.35] !mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}</h2>
          }
          {
            get(props, 'title',"").length != 0 &&
            <h3 className={`font-bold xl:text-[2.5rem] lg:text-[2.09rem] max-lg:text-[2.1rem] max-sm:text-[1.8rem] !leading-[1.3] mb-10 xxl:!px-20 lg:px-10 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h3>
          }
          </div>
        </div>
        <div className="flex flex-wrap mx-[15px] mt-[-30px]">
        {
            get(props, 'items', []).map((item) => (get(item, 'boxText',"").length != 0 || get(item, 'text1',"").length != 0 ||
            get(item, 'text2',"").length != 0 || get(item, 'text3',"").length != 0) &&
            (<div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                <a href="#" className="card">
                <div className={`p-5 flex flex-row bg-gray-50 shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] hover:-translate-y-5 hover:transform hover:transition-all hover:ease hover:duration-300 !h-full ${get(tailwindClasses, 'card')}`} style={get(style, 'card')}>
                    <div>
                      {
                        get(item, 'boxText',"").length != 0 &&
                        <span className={`flex items-center justify-center font-bold leading-[1.7] tracking-[-0.01rem] rounded-[100%] bg-[rgba(226,98,107)] opacity-100 text-white !w-[4rem] !h-[4rem] text-[1rem] !mr-3 ${get(tailwindClasses, 'boxText')}`} style={get(style, 'boxText')}>{get(item, "boxText")}</span>
                      }
                    </div>
                    <div className="text-gray-800 mx-4">
                      {
                        get(item, 'text1',"").length != 0 &&
                        <span className={`bg-[#e0e9fa] !text-[#3f78e0] rounded-lg py-1 px-1 mb- ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item, "text1")}</span>
                      }
                      {
                        get(item, 'text2',"").length != 0 &&
                        <h4 className={`text-[1.4rem] font-semibold !mb-1 !mt-2 ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item, "text2")}</h4>
                      }
                      {
                        get(item, 'text3',"").length != 0 &&
                        <p className={`mb-0 text-[1.1rem] text-[#60697b] ${get(tailwindClasses, 'text3')}`} style={get(style, 'text3')}>{get(item, "text3")}</p>
                      }
                    </div>
                </div>
                </a>
            </div>)
        )}
        </div>
        <div className="flex flex-wrap mx-[15px] !mt-[3rem]">
          <div className="lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
          {
            get(props, 'title1',"").length != 0 &&
            <h2 className={`text-[1.5rem] font-semibold xl:text-[1.9rem] leading-[1.35] xl:!px-8 !mb-3 ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(props, "title1")}</h2>
          }
          {
            get(props, 'description1',"").length != 0 &&
            <p className={`lead text-[1.2rem] font-normal leading-[1.06] !mb-8 xl:!px-12 lg:!px-8 md:!px-24 ${get(tailwindClasses, 'description1')}`} style={get(style, 'description1')}>{get(props, "description1")}</p>
          }
          {
            get(props, 'ctaText',"").length != 0 &&
            <a href="#" className={`p-3 text-white font-semibold !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>{get(props, "ctaText")}</a>
          }
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
MiscV1.propTypes = {
  style: object,
  tailwindClasses: object,
  subTitle: string,
  title: string,
}
MiscV1.defaultProps = {
  style: {
    container: {},
    subTitle: {},
    title: {},
    card: {},
    boxText: {},
    text1: {},
    text2: {},
    text3: {},
    title1: {},
    description1: {},
    ctaText: {}
  },
  tailwindClasses: {
    container: "",
    subTitle: "",
    title: "",
    card: "",
    boxText: "",
    text1: "",
    text2: "",
    text3: "",
    title1: "",
    description1: "",
    ctaText: ""
  },
    subTitle: "Job Positions",
    title: "We’re always searching for amazing people to join our team. Take a look at our current openings.",
    title1: "Can't find the right position?",
    description1: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur.",
    ctaText: "Get in Touch",
    items: [
        {
            boxText: "SD",
            text1: "Full Time",
            text2: "Senior Graphic Designer",
            text3: "San Francisco, US",
        },
        {
            boxText: "UX",
            text1: "Remote",
            text2: "UI/UX Designer",
            text3: "Anywhere",
        },
        {
            boxText: "AN",
            text1: "Full Time",
            text2: "Multimedia Artist &amp; Animator",
            text3: "Birmingham, UK",
        },
        {
            boxText: "FD",
            text1: "Part Time",
            text2: "Front End Developer",
            text3: "Sydney, AU",
        },
        {
            boxText: "MD",
            text1: "Full Time",
            text2: "Mobile Developer",
            text3: "San Francisco, US",
        },
        {
            boxText: "ND",
            text1: "Full Time",
            text2: ".NET Developer",
            text3: "Manchester, UKs",
        }
    ]
}
export default MiscV1;