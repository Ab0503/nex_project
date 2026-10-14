import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';

const CallToActionV8 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
      <section className={`overflow-hidden bg-center bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)] ${get(tailwindClasses, 'container')}`} style={{ "backgroundImage": `url('${get(props, 'bgImage')}')`, "backgroundRepeat": "no-repeat", ...get(style, 'container') }}>
        <div className="pt-5 pb-5 !relative z-10">
          <section className="gradient-8 !relative">
            <div className="py-20 text-center">
              <div className="flex flex-wrap mx-[15px]">
                <div className="text-gray-50 lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full mx-auto text-center">
                  <NexAnimation type={get(props, 'contentAnimation')}>
                    {
                      get(props, 'subTitle', "").length != 0 &&
                      <h2 className={`nx-text-primary text-[0.75rem] leading-[1.35] uppercase mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}</h2>
                    }
                    {
                      get(props, 'title', "").length != 0 &&
                      <h3 className={`nx-section-heading-font text-[2.3rem] font-bold leading-[1.25] xl:text-[2.6rem] mb-8 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}<span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[10%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:mt-0 after:rounded-[5rem] after:bottom-[4%] motion-reduce:after:transition-none after:bg-[#3f78e0] after:!bg-[linear-gradient(45deg,#08aeea_0,#2af598_100%)] text-">
                        <em>{get(props, "title1")}</em></span>
                        {get(props, "title2")}
                      </h3>
                    }
                    <div>
                      {
                        get(props, 'ctaText', "").length != 0 &&
                        <button className={`px-5 py-2 nx-btn-primary nx-btn-primary:hover rounded-[50rem] mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>
                          <PrimaryLink href={get(props, "ctaLink")} >{get(props, "ctaText")}</PrimaryLink>
                        </button>
                      }
                    </div>
                  </NexAnimation>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
CallToActionV8.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
CallToActionV8.defaultProps = {
  style: {
    container: {},
    subTitle: {},
    title: {},
    ctaText: {},
  },
  tailwindClasses: {
    container: "",
    subTitle: "",
    title: "",
    ctaText: "",
  },
  bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297623.2560x1400 - Background Image.png",
  subTitle: "Join Our Community",
  title: "We are",
  title1: " trusted ",
  title2: "by over 5000+ clients. Join them now and grow your business.",
  ctaText: "Contact me",
  ctaLink: "#",
  contentAnimation:"",
}
export default CallToActionV8;