import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';

const TeamsV12 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});

  return (
    <section className={`py-8 overflow-hidden  ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="flex flex-wrap mx-[15px] mb-3">
        <div className="md:w-10/12 lg:w-full xl:w-10/12 xxl:w-9/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
          <NexAnimation type={get(props, 'topContentAnimation')}>
            {
              get(props, 'subTitle', "").length != 0 &&
              <h2 className={`text-[0.75rem] uppercase nx-text-primary mb-2 tracking-[0.02rem] leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}</h2>
            }
            {
              get(props, 'title', "").length != 0 &&
              <h3 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-semibold xl:text-[1.8rem] !leading-[1.3] mb-12 lg:px-36 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h3>
            }
          </NexAnimation>
        </div>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${get(props, 'boxNo')} mx-[15px] md:mx-[20px] lg:mx-[20px] xl:mx-[25px] mt-[-40px] xl:mt-0 lg:mt-0`}>
        {
          get(props, 'items', []).map((item) =>
            <NexAnimation type={get(props, 'bottomContentAnimation')}>
              <PrimaryLink href={get(item, 'ctaLink')} className={`${get(tailwindClasses, 'sectionBox')}`} style={get(style, "sectionBox")}>
                <div className={`flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mb-10`}>
                  <div className="!relative">
                    <div className={`!rounded-xl nx-bg-primary-light xl:block lg:block md:block absolute ${get(tailwindClasses, 'shape')}`} data-rellax-speed="0" style={{ bottom: "-0.75rem", right: "-0.75rem", width: "98%", height: "98%", zIndex: "0", ...get(style, 'shape') }}></div>
                    <div className={`overflow-hidden rounded-xl `}>
                      <figure className="card-img-top">
                        {
                          get(item, 'imagePath', "").length != 0 &&
                          <NexImage className={`!relative !max-w-full !h-60 rounded-t-lg ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(item, "imagePath", "")} />
                        }
                      </figure>
                      <div className={`!relative px-6 py-5 rounded-b-lg bg-white ${get(tailwindClasses, 'card')}`} style={get(style, 'card')}>
                        {
                          get(item, 'text1', "").length != 0 &&
                          <h4 className={`mb-1 font-semibold nx-text-primary text-[1.05rem] ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item, "text1")}</h4>
                        }
                        {
                          get(item, 'text2', "").length != 0 &&
                          <p className={`mb-0 text-[1rem] ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item, "text2")}</p>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </PrimaryLink>
            </NexAnimation>
          )}
      </div>
    </section>
  )
}
TeamsV12.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}

TeamsV12.defaultProps = {
  style: {
    container: {},
    subTitle: {},
    title: {},
    shape: {},
    image: {},
    sectionBox: {},
    card: {},
    text1: {},
    text2: {},
  },
  tailwindClasses: {
    container: "",
    subTitle: "",
    title: "",
    shape: "",
    image: "",
    sectionBox: "",
    card: "",
    text1: "",
    text2: "",
  },
  boxNo: "4",
  subTitle: "Our Team",
  title: "Think unique and be innovative. Make a difference with Sandbox.",
  topContentAnimation:"",
  bottomContentAnimation:"",
  items: [
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
      text1: "Coriss Ambady",
      text2: "Financial Analyst",
      ctaLink: "#",
    },
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
      text1: "Cory Zamora",
      text2: "Marketing Specialist",
      ctaLink: "#",
    },
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
      text1: "Nikolas Brooten",
      text2: "Sales Manager",
      ctaLink: "#",
    },
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
      text1: "Jackie Sanders",
      text2: "Investment Planner",
      ctaLink: "#",
    },
  ],
}
export default TeamsV12;