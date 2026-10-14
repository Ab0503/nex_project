import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';

const TestimonialsV12 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
    <section id="snippet-2" className={`bg-gray-50 border-b-[rgba(164,174,198,0.2)] border-b border-solid ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[15px] !relative">
            <figure className="absolute hidden lg:block xl:block px-[15px]" style={{top: "50%", right:"0", width: "45%", height: "auto", transform: "translateY(-50%)", zIndex:"2"}}>
            {
                get(props, 'imagePath',"").length != 0 &&
                <ImageOrVedio className={`rounded-lg !relative !w-full !h-80 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} 
                    src={get(props,"imagePath", "")}  vedioSrc={get(props,"vedioPath", "")}
                />
            }
            </figure>
            <div className="xl:w-9/12 lg:w-9/12 w-full flex-[0_0_auto] px-[15px] max-w-full !text-center">
                <div className={`bg-gray-500 rounded-lg ${get(tailwindClasses, 'card')}`} style={get(style, 'card')}>
                    <div className="card-body xl:p-10 lg:p-10 md:p-10 xxl:py-24 p-[40px]">
                        <div className="flex flex-wrap mx-8">
                            <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] max-w-full xl:pl-10">
                                <span className="ratings inline-block relative w-20 h-[0.8rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five text-[1.2rem] mt-4 mb-4"></span>
                                <blockquote className="pl-0 text-[1rem] mb-0 border-0 leading-[1.7] font-medium m-[0_0_1rem]">
                                {
                                    get(props, 'description',"").length != 0 &&
                                    <p className={`text-[1.2rem] xl:text-[1.3rem] mb-3 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props,"description")}</p>
                                }
                                <div className="flex items-center justify-center !text-center">
                                    <div className="info p-0">
                                    {
                                        get(props, 'text1',"").length != 0 &&
                                        <h4 className={`text-[1.4rem] tracking-[-0.03em] mb-1 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(props,"text1")}</h4>
                                    }
                                    {
                                        get(props, 'text2',"").length != 0 &&
                                        <p className={`mb-0 text-[1.1rem] ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(props,"text2")}</p>
                                    }
                                    </div>
                                </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
    </div>
  )
}
TestimonialsV12.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
}
TestimonialsV12.defaultProps = {
    style: {
        container: {},
        card: {},
        description: {},
        text1: {},
        text2: {},
        image: {}
    },
    tailwindClasses: {
        container: "",
        card: "",
        description: "",
        text1: "",
        text2: "",
        image: ""
    },
    description: "“Donec id elit non mi porta gravida at eget metus. Vivamus mollis est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis porta est non commodo luctus.”",
    text1: "Coriss Ambady",
    text2: "Financial Analyst",
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
    vedioPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1728966855.1728152985.19420800-uhd_3840_2160_30fps.mp4",
}
export default TestimonialsV12;