import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';

const CallToActionV1 = (props) => {
  const style = get(props,'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
      <section className={`nx-bg-primary-light bg-[center_center] bg-no-repeat relative z-0 overflow-hidden ${get(tailwindClasses, 'container')}`} style={{"background-image":`url('${get(props,'bgImage')}')`,"backgroundSize":"cover",...get(style, 'container')}}>
      <div className="xl:py-16 lg:py-20 md:py-28 max-sm:py-24">
        <div className="flex flex-wrap mx-[15px]">
          <div className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mx-auto text-center">
          <NexAnimation  type={get(props, 'ContentAnimation', '')}>
          {
            get(props, 'title',"").length != 0 &&
            <h2 className={`nx-section-heading-font text-[2.7rem] font-bold xl:text-[2.8rem] mb-3 text-center ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h2>
          }
          {
            get(props, 'subTitle',"").length != 0 &&
            <p className={`text-[1.2rem] font-medium mb-5 xl:px-3 lg:px-3 md:px-24 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</p>
          }
          {
            get(props, 'ctaText',"").length != 0 &&
            <button className={`p-3 text-center text-gray-50 text-[1.1rem] nx-btn-primary nx-btn-primary:hover focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] rounded-[50rem] hover:-translate-y-[0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}><PrimaryLink href={get(props,"ctaLink")}>{get(props,"ctaText")}</PrimaryLink></button>
          }
          </NexAnimation>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
CallToActionV1.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
CallToActionV1.defaultProps = {
  style: {
      container: {},
      title: {},
      subTitle: {},
      ctaText: {}
  },
  tailwindClasses: {
    container: "",
    title: "",
    subTitle: "",
    ctaText: ""
  },
    ContentAnimation: "",
    bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297623.2560x1400 - Background Image.png",
    title: "Join Our Community",
    subTitle: "We are trusted by over 5000+ clients. Join them by using our services and grow your business.",
    ctaText: "Join Us",
    ctaLink: "#"
}
export default CallToActionV1;