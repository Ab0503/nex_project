import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';

const CallToActionV4 = (props) => {
  const style = get(props,'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
      <section id="snippet-4" className={`bg-black ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
      {
        (get(props, 'subTitle',"").length != 0 || get(props, 'title',"").length != 0 || get(props, 'ctaText',"").length != 0) &&
        (<div className={`m-6 text-white mt-[1.25rem] xl:mt-0 lg:mt-0 xl:-translate-y-2/4 lg:-translate-y-2/4 border-radius-lg-top [background-size:100%] bg-[center_center] bg-no-repeat relative z-0 rounded-[0.4rem] before:rounded-[0.4rem] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 ${get(tailwindClasses, 'box')}`} style={{"background-image":`url('${get(props,'bgImage')}')`,"backgroundRepeat":"no-repeat",...get(style, 'box')}}>
          <div className="p-10 xl:p-14">
            <div className="flex flex-wrap mx-[15px] text-center">
              <div className="xl:w-11/12 xxl:w-9/12 w-full flex-[0_0_auto] px-[15px] max-w-full mx-auto">
              {
                get(props, 'subTitle',"").length != 0 &&
                <h2 className={`text-[1.1rem] leading-[1.35] uppercase text-white mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</h2>
              }
              {
                get(props, 'title',"").length != 0 &&
                <h3 className={`text-[calc(1.990rem_+_0.9vw)] font-semibold leading-[1.25] xl:text-[2.9rem] mb-8 xl:px-8 lg:px-8 text-white ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}
                  <span className={`relative z-[2] after:content-[''] after:absolute after:z-[-1] after:bg-bottom underline ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(props,"title1")}</span> 
                  {get(props,"title2")}
                </h3>
              }
              </div>
            </div>
            <div className="flex justify-center">
            {
              get(props, 'ctaText',"").length != 0 &&
              <a href="#" className={`bg-gray-50 text-black p-4 font-semibold rounded ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>{get(props,"ctaText")}</a>
            }
            </div>
          </div>
        </div>)
      }
      </div>
    </section>
    </div>
  )
}
CallToActionV4.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
CallToActionV4.defaultProps = {
  style: {
      container: {},
      icon: {},
      title: {},
      subTitle: {},
      ctaText: {}
  },
  tailwindClasses: {
    container: "",
    icon: "",
    title: "",
    subTitle: "",
    ctaText: ""
  },
  bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297592.1280x720 - Hero Image.png",
  subTitle: "Join Our Community",
  title: "We are",
  title1: " trusted ",
  title2: "by over 5000+ clients. Join them now and grow your business.",
  ctaText: "Get Started"
}
export default CallToActionV4;
