import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';

const ProcessV7 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});
  return (
    <div>
    <section id="snippet-7" className={`bg-gray-300 border-b-[rgba(164,174,198,0.2)] border-b border-solid ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-50px] items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
            <figure className="m-0 p-0">
            {
                get(props, 'imagePath',"").length != 0 &&
                <ImageOrVedio className={`rounded-lg !relative !w-full !h-full ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} 
                    src={get(props,"imagePath", "")}  vedioSrc={get(props,"vedioPath", "")}
              />
            }
            </figure>
          </div>
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
            {
                get(props, 'subTitle',"").length != 0 &&
                <h3 className={`text-[1.02rem] uppercase font-medium text-[#aab0bc] mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</h3>
            }
            {
                get(props, 'title',"").length != 0 &&
                <h2 className={`text-[1.7rem] font-bold xl:text-[2.3rem] leading-[1.3] mb-6 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h2>
            }
            <div className="flex flex-wrap mt-[-20px]">
            {
                get(props, 'items', []).map((item) =>  
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[20px]">
                    {
                        get(item, 'text1',"").length != 0 &&
                        <h4 className={`font-bold text-[1.2rem] mb-2 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>
                            <span className={`text-[#3f78e0] mr-2 ${get(tailwindClasses, 'number')}`} style={get(style, 'number')}>{get(item,"number")}</span>{get(item,"text1")}
                        </h4>
                    }
                    {
                        get(item, 'text2',"").length != 0 &&
                        <p className={`text-[1.02rem] mb-0 ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item,"text2")}</p>
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
ProcessV7.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
  }
  ProcessV7.defaultProps = {
    style: {
      container: {},
      image: {},
      subTitle: {},
      title: {},
      number: {},
      text1: {},
      text2: {}
    },
    tailwindClasses: {
        container: "",
        image: "",
        subTitle: "",
        title: "",
        number: "",
        text1: "",
        text2: ""
    },
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735226768.730x490.png",
    vedioPath: "",
    subTitle: "How It Works?",
    title: "Find out everything about creating a business model.",
    items: [
        {
            number:"1." ,
            text1: "Creative Ideas",
            text2: "Nulla vitae elit libero a augue donec id elit non mi porta."
        },
        {
            number:"2." ,
            text1: "Magic Touch",
            text2: "Nulla vitae elit libero a augue donec id elit non mi porta."
        },
        {
            number:"3." ,
            text1: "Data Analysis",
            text2: "Nulla vitae elit libero a augue donec id elit non mi porta."
        },
        {
            number:"4." ,
            text1: "Finalize Product",
            text2: "Nulla vitae elit libero a augue donec id elit non mi porta."
        }
    ]
}
export default ProcessV7;