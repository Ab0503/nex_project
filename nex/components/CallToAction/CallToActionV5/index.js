import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';

const CallToActionV5 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
    <section id="snippet-5" className={`xl:px-32 lg:px-24 md:px-20 max-sm:px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className=" mb-14 md:mb-[4.5rem]">
        <div className="py-[4.5rem] xl:py-24 lg:py-24 md:py-24">
          <div className="flex flex-wrap mx-[-15px] !mb-8">
            <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
              <h2 className={`text-[1.05rem] uppercase nx-text-primary mb-3 leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</h2>
              <h3 className={`text-[calc(1.305rem_+_0.66vw)] nx-section-heading-font font-bold xl:text-[1.8rem] leading-[1.3] mb-0 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h3>
            </div>
          </div>
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
              <form action="#">
                <div className="flex form-floating input-group relative">
                  <input type="url" className={`form-control border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-l-lg duration-[0.15s] ease-in-out focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] ${get(tailwindClasses, 'Input')}`} style={get(style, 'Input')} placeholder={get(props,"Input")} id="analyze"/>
                  <label className={`inline-block text-[#959ca9] text-[0.75rem] absolute z-[2] h-full w-auto overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent`} for="analyze"></label>
                  <button className={`max-w-40 text-gray-50 w-full nx-btn-primary nx-btn-primary:hover focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] rounded-r-lg max-sm:text-xs ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')} type="button">{get(props,"ctaText")}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
CallToActionV5.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
CallToActionV5.defaultProps = {
  style: {
      container: {},
      subTitle: {},
      title: {},
      Input: {},
      ctaText: {}
  },
  tailwindClasses: {
    container: "",
    subTitle: "",
    title: "",
    Input: "",
    ctaText: ""
  },
  subTitle: "Analyze Now",
  title: "Wonder how much faster your website can go? Easily check your SEO Score now.",
  Input: "Enter Website Url",
  ctaText: "Book Appointment"
}
export default CallToActionV5;