import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';
import NexAnimation from '@nex-components/NexAnimation';

const ProcessV1 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});
  return (
    <div>
    <section id="snippet-1" className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className={`flex flex-wrap mx-[15px] xsm:mt-[-50px] mt-[-80px] xl:mx-[15px] lg:mx-[7.5px] items-center ${get(tailwindClasses, 'contentcontainer')}`} style={get(style, 'contentcontainer')}>
          <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[15px] lg:px-[7.5px] px-[15px] max-w-full !relative mt-[80px]">
            <div className={`bg-dot primary rellax !w-[7rem] !h-[12.5rem] absolute z-[1] opacity-50 bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] ${get(tailwindClasses, 'shape1')}`} data-rellax-speed="1" style={{top: "-2rem", left: "0.2rem", ...get(style, 'shape1')}}></div>
            <div className={`rounded-lg nx-bg-primary-light xl:block lg:block md:block max-sm:hidden !absolute ${get(tailwindClasses, 'shape2')}`} data-rellax-speed="0" style={{bottom: "-1.8rem", right: "-3.8rem", width: "85%", height: "90%", zIndex: "0", ...get(style, 'shape2')}}></div>
            <figure className="relative z-[2]">
            {
                get(props, 'imagePath',"").length != 0 &&
                <ImageOrVedio className={`rounded-lg !relative !w-full !h-full ml-12 max-sm:ml-0 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} 
                    src={get(props,"imagePath", "")}  vedioSrc={get(props,"vedioPath", "")}
              />
            }
            </figure>
          </div>
          <div className="lg:w-5/12 xl:w-4/12 xl:ml-[8.33333333%] lg:ml-[8.33333333%] w-full flex-[0_0_auto] xl:px-[7.5px] lg:px-[7.5px] px-[15px] max-w-full mt-[20px]">
          <NexAnimation  type={get(props, 'TextContentAnimation', '')}>
            {
              get(props, 'title',"").length != 0 &&
                <h2 className={`nx-section-heading-font mb-3 leading-[1.3] text-[2.1rem] ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h2>
            }
            {
              get(props, 'subTitle',"").length != 0 &&
              <p className={`lead text-[1.6rem] leading-[1.4] mb-6 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}</p>
            }
            <NexAnimation  type={get(props, 'mapContentAnimation', '')}>
            {
              get(props, 'items', []).map((item) =>
                <div className="flex flex-row mb-6">
              <div>
                {
                  get(item, 'number',"").length != 0 &&
                  <span className={`text-gray-50 nx-bg-primary focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] disabled:border-[#3f78e0] pointer-events-none mr-5 w-[2.2rem] h-[2.2rem] inline-flex items-center justify-center !leading-none p-0 rounded-full text-[1.2rem] text-center align-middle font-bold mx-auto ${get(tailwindClasses, 'number')}`} style={get(style, 'number')}>
                        {get(item, "number")}
                    </span>
                }
              </div>
              <div>
                {
                  get(item, 'text1',"").length != 0 &&
                  <h4 className={`mb-1 text-[1.3rem] font-medium ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item, "text1")}</h4>
                }
                {
                  get(item, 'text2',"").length != 0 &&
                  <p className={`mb-0 text-[1.2rem] ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item, "text2")}</p>
                }
               </div>
            </div>
            )}
            </NexAnimation>
          </NexAnimation>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
ProcessV1.propTypes = {
  style: object,
  tailwindClasses: object,
  subTitle: string,
  title: string,
}
ProcessV1.defaultProps = {
  style: {
    container: {},
    contentcontainer: {},
    image: {},
    shape1: {},
    shape2: {},
    title: {},
    subTitle: {},
    number: {},
    text1: {},
    text2: {}
  },
  tailwindClasses: {
    container: "",
    contentcontainer: "",
    image: "",
    shape1: "",
    shape2: "",
    title: "",
    subTitle: "",
    number: "",
    text1: "",
    text2: ""
  },
    TextContentAnimation: "",
    mapContentAnimation: "",
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735216715.500x500.png",
    vedioPath: "",
    title: "How It Works?",
    subTitle: "So here are three working steps why our valued customers choose us.",
    items: [
        {
            number: "1",
            text1: "Collect Ideas",
            text2: "Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus."
        },
        {
            number: "2",
            text1: "Data Analysis",
            text2: "Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna."
        },
        {
            number: "3",
            text1: "Finalize Product",
            text2: "Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed."
        }
    ]
}
export default ProcessV1;