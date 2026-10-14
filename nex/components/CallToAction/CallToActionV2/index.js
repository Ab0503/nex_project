import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';

const CallToActionV2 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-2">
        <div className="flex flex-wrap mx-[15px]">
          <div className="xl:w-10/12 flex-[0_0_auto] px-[15px] max-w-full mx-auto">
            {
              (get(props, 'title', "").length != 0 || get(props, 'ctaText', "").length != 0) &&
              (<NexAnimation type={get(props, 'contentAnimation', '')}>
                <div className={`font-semibold rounded-lg mt-[1.25rem] xl:mt-0 lg:mt-0 xl:-translate-y-2/4 lg:-translate-y-2/4 bg-[center_center] bg-cover relative z-0 p-4 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)] ${get(tailwindClasses, 'box')}`} style={{ "background-image": `url('${get(props, 'bgImage')}')`, "backgroundRepeat": "no-repeat", ...get(style, 'box') }}>
                  <div className="flex-row text-center xl:justify-between lg:justify-between md:justify-between xl:flex xl:items-center lg:flex lg:items-center xl:p-12 lg:p-12 md:p-12 xl:text-left lg:text-left relative z-10">
                    {
                      get(props, 'title', "").length != 0 &&
                      <h3 className={`nx-section-heading-font text-[calc(1.495rem_+_0.18vw)] font-bold xl:text-[2.1rem] leading-[1.35] mb-6 xl:mb-0 lg:mb-0 lg:pr-10 xl:pr-5 xxl:pr-32 text-gray-50 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h3>
                    }
                    {
                      get(props, 'ctaText', "").length != 0 &&
                      <PrimaryLink href={get(props, "ctaLink")} className={`xl:flex text-center px-5 py-2 nx-btn-primary justify-center rounded-[50rem] xl:text-[1.1rem] hover:-translate-y-[0.15rem] nx-btn-primary:hover mb-0 whitespace-nowrap ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>{get(props, "ctaText")}</PrimaryLink>
                    }
                  </div>
                </div>
              </NexAnimation>)
            }
          </div>
        </div>
      </div>
    </section>
  )
}
CallToActionV2.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
  ctaLink: string,
}
CallToActionV2.defaultProps = {
  style: {
    container: {},
    box: {},
    title: {},
    ctaText: {},
    ctaLink: {},
  },
  tailwindClasses: {
    container: "",
    box: "",
    title: "",
    ctaText: ""
  },
  contentAnimation: "",
  bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297592.1280x720 - Hero Image.png",
  title: "We are trusted by over 5000+ clients. Join them by using our services and grow your business.",
  ctaText: "Join Us",
  ctaLink: "#",
}
export default CallToActionV2;