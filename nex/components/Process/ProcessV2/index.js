import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';

const ProcessV2 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});
  return (
    <div>
      <section id="snippet-2" className={`bg-red-300 border-b-[rgba(164,174,198,0.2)] border-b border-solid ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="mx-[15px] xl:mx-[64px] lg:mx-[20px]">
        {
          get(props, 'title',"").length != 0 &&
          <h2 className={`font-bold xl:text-[1.8rem] text-[1.7rem] leading-[1.3] !mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h2>
        }
        {
          get(props, 'subTitle',"").length != 0 &&
          <p className={`lead mb-8 text-[1.05rem] leading-[1.6] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}
            <span className={`relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)] ${get(tailwindClasses, 'subTitle1')}`} style={get(style, 'subTitle1')}>{get(props, "subTitle1")}</span>
            {get(props, "subTitle2")}
          </p>
        }
        </div>
        <div className="flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-30px] process-wrapper line">
        {
          get(props, 'items', []).map((item) =>
          <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[30px] max-w-full !relative after:w-full after:absolute after:content-[''] after:h-px after:z-[1] after:border-t-[rgba(8,13,23,0.2)] after:border-t after:border-solid after:left-[3rem] after:top-6 after:bg-inherit md:after:hidden sm:after:hidden xsm:after:hidden">
          <div className='inline-flex gap-5'>
          {
            get(item, 'number',"").length != 0 &&
            <span className={`mb-4 bg-blue-200 text-blue-500 hover:bg-blue-500 hover:text-gray-50 !relative z-[2] xl:text-[1.3rem] w-14 h-14 inline-flex items-center justify-center leading-none p-0 rounded-full
              text-center align-middle text-[1.1rem] font-bold mx-auto my-0 ${get(tailwindClasses, 'number')}`} style={get(style, 'number')}>{get(item, "number")}</span>
          }
          <div className={`absolute w-44 mt-5 h-[0.6rem] text-[#3f78e0] top-0 inset-x-0 xl:relative xl:table-row xl:align-middle lg:relative lg:table-row lg:align-middle md:relative md:table-row md:align-middle 
          before:w-[0.55rem] before:h-[0.55rem] before:content-[''] before:block before:absolute before:rounded-[100%] before:top-0 before:left-[0.2rem] before:bg-[#3f78e0]
          after:h-px after:content-[''] after:block after:absolute after:top-1 after:right-0 after:left-[1rem] after:bg-[rgba(164,174,198,.2)] ${get(tailwindClasses, 'timeLine')}`}
          style={get(style, 'timeLine')}>
          </div>
          </div>
          {
            get(item, 'text1',"").length != 0 &&
            <h4 className={`mb-1 text-[1.3rem] font-bold ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item, "text1")}</h4>
          }
          {
            get(item, 'text2',"").length != 0 &&
            <p className={`mb-0 text-[1.1rem] ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item, "text2")}</p>
          }
          </div>
        )}
        </div>
      </div>
    </section>
    </div>
  )
}
ProcessV2.propTypes = {
  style: object,
  tailwindClasses: object,
  subTitle: string,
  title: string,
}
ProcessV2.defaultProps = {
  style: {
    container: {},
    title: {},
    subTitle: {},
    number: {},
    timeLine: {},
    text1: {},
    text2: {}
  },
  tailwindClasses: {
    container: "",
    title: "",
    subTitle: "",
    number: "",
    timeLine: "",
    text1: "",
    text2: ""
  },
  title: "How We Do It?",
  subTitle: "We make your spending" ,
  subTitle1: " stress-free ",
  subTitle2: "for you to have the perfect control.",
  items: [
    {
      number: "01",
      text1: "Concept",
      text2: "Nulla vitae elit libero elit non porta gravida eget metus cras. Aenean eu leo quam. Pellentesque ornare."
    },
    {
      number: "02",
      text1: "Prepare",
      text2: "Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis."
    },
    {
      number: "03",
      text1: "Retouch",
      text2: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero."
    },
    {
      number: "04",
      text1: "Finalize",
      text2: "Integer posuere erat, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo."
    }
  ]
}
export default ProcessV2;