import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';

const TestimonialsV18 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
    <section id="snippet-9" className={`bg-gray-200 border-b-[rgba(164,174,198,0.2)] border-b border-solid ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="py-[4.5rem] xl:py-[6rem] lg:py-[6rem] md:py-[6rem] xl:pt-[14rem] lg:pt-[14rem] md:pt-[6rem]">
        <div className={`bg-[#586f9e] rounded-lg max-sm:mx-4 mx-16 ${get(tailwindClasses, 'card')}`} style={get(style, 'card')}>
          <div className="card-body xl:p-[2.5rem] lg:p-[2.5rem] md:p-[2.5rem] xxl:py-24 p-[40px] !relative">
            <div className="absolute hidden lg:block xl:block" style={{bottom:"0", left:"10%", width: "28%", zIndex:"2"}}>
              <figure className="m-0 p-0">
                {
                    get(props, 'imagePath',"").length != 0 &&
                    <NexImage className={`!relative w-full max-w-full h-auto ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props, "imagePath")}/>
                }
              </figure>
            </div>
            <div className="flex flex-wrap sm:mx-[-15px] xsm:mx-[-15px] xl:mx-[-35px] mx-0 !text-center">
              <div className="lg:w-7/12 lg:ml-[41.66666667%] xl:w-6/12 xl:ml-[41.66666667%] w-full flex-[0_0_auto] sm:px-[15px] xsm:px-[15px] xl:px-[35px] px-0 max-w-full">
                <span className="ratings inline-block relative w-20 h-[0.8rem] text-[1.2rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five mb-3"></span>
                <blockquote className="pl-0 text-[1rem] mb-0 border-0 !leading-[1.7] font-medium m-[0_0_1rem]">
                {
                    get(props, 'text1',"").length != 0 &&
                    <p className={`text-[1.2rem] mb-4 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(props, "text1")}</p>
                }
                    <div className="flex items-center justify-center !text-center">
                        <div className="info p-0">
                        {
                            get(props, 'text2',"").length != 0 &&
                            <h5 className={`mb-1 text-[1.3rem] leading-[1.5] ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(props, "text2")}</h5>
                        }
                        {
                            get(props, 'text3',"").length != 0 &&
                            <h2 className={`text-[0.85rem] uppercase tracking-[0.02rem] font-bold text-[#aab0bc] mb-0 ${get(tailwindClasses, 'text3')}`} style={get(style, 'text3')}>{get(props, "text3")}</h2>
                        }
                        </div>
                    </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
TestimonialsV18.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
TestimonialsV18.defaultProps = {
  style: {
    container: {},
    box: {},
    image: {},
    text1: {},
    text2: {},
    text3: {}
  },
  tailwindClasses: {
    container: "",
    box: "",
    image: "",
    text1: "",
    text2: "",
    text3: ""
  },
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736507416.dummy_260x447_ffffff_cc3833.png",
    text1: "“Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh ut fermentum massa, justo sit amet vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed”",
    text2: "Coriss Ambady",
    text3: "Financial Analyst"
}
export default TestimonialsV18;