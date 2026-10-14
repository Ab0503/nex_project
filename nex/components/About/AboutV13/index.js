import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import CountUp from 'react-countup';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';

const AboutV13 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const theme = get(props, "theme", {}); // Get the theme prop

  return (
    <section className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="flex flex-wrap mx-[15px] xsm:mt-[50px] mt-[-80px] md:mx-[20px] xl:mx-[35px] items-center mb-10 xl:mb-14 lg:mb-14 md:mb-14">
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[80px]">
          <div className="flex flex-wrap mx-[15px] xl:mx-[12.5px] lg:mx-[12.5px] md:mx-[12.5px] mt-[-25px]">
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full mt-[25px]">
              <figure className="rounded-[0.4rem]">
                {
                  get(props, 'imagePath1', "").length != 0 &&
                  <NexAnimation type={get(props, 'leftContentAnimation')}>
                    <NexImage className={`!relative rounded-[0.4rem] ${get(tailwindClasses, 'image1')}`} style={get(style, 'image1')} src={get(props, "imagePath1")} />
                  </NexAnimation>
                }
              </figure>
            </div>
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full self-end mt-[25px]">
              <figure className="rounded-[0.4rem]">
                {
                  get(props, 'imagePath2', "").length != 0 &&
                  <NexAnimation type={get(props, 'leftContentAnimation')}>
                    <NexImage className={`!relative rounded-[0.4rem] ${get(tailwindClasses, 'image2')}`} style={get(style, 'image2')} src={get(props, "imagePath2")} />
                  </NexAnimation>
                }
              </figure>
            </div>
            <div className="w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full mt-[25px]">
              <figure className="rounded-[.4rem] xl:mx-5 lg:mx-5 md:mx-5">
                {
                  get(props, 'imagePath3', "").length != 0 &&
                  <NexAnimation type={get(props, 'leftContentAnimation')}>
                    <NexImage className={`!relative rounded-[.4rem] ${get(tailwindClasses, 'image3')}`} style={get(style, 'image3')} src={get(props, "imagePath3")} />
                  </NexAnimation>
                }
              </figure>
            </div>
          </div>
        </div>
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[80px]">
          <NexAnimation type={get(props,'rightContentAnimation')}>
            {
              get(props, 'subTitle', "").length != 0 &&
              <h2 className={`nx-text-primary text-[.75rem] uppercase mb-3 leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}</h2>
            }
            {
              get(props, 'title', "").length != 0 &&
              <h3 className={`nx-section-heading-font text-[calc(1.325rem_+_0.9vw)] font-bold leading-[1.25] xl:text-[1.8rem] mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h3>
            }
            {
              get(props, 'description', "").length != 0 &&
              <p className={`mb-6 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, "description")}</p>
            }
            <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-30px]">
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                {
                  get(props, 'text1', "").length != 0 &&
                  <h3 className={`nx-text-primary text-[calc(1.305rem_+_0.66vw)]  tracking-[normal] leading-none xl:text-[1.8rem] font-bold mb-1 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}><CountUp end={get(props, "text1")} enableScrollSpy decimals={1} />%</h3>
                }
                {
                  get(props, 'text2', "").length != 0 &&
                  <h5 className={`mb-0 ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(props, "text2")}</h5>
                }
              </div>
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                {
                  get(props, 'text3', "").length != 0 &&
                  <h3 className={`nx-text-primary text-[calc(1.305rem_+_0.66vw)]  tracking-[normal] leading-none xl:text-[1.8rem] font-bold mb-1 ${get(tailwindClasses, 'text3')}`} style={get(style, 'text3')}><CountUp end={get(props, "text3")} enableScrollSpy />x</h3>
                }
                {
                  get(props, 'text4', "").length != 0 &&
                  <h5 className={`mb-0 ${get(tailwindClasses, 'text4')}`} style={get(style, 'text4')}>{get(props, "text4")}</h5>
                }
              </div>
            </div>
          </NexAnimation>
        </div>
      </div>
      <div className="flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-30px] mb-7 xl:mb-9 lg:mb-9 md:mb-9">
        {
          get(props, 'items', []).map((item) =>
            <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[30px]">
              <NexAnimation type={get(props,'bottomContentAnimation')}>
              <div className="flex items-start flex-row">
                {
                  (get(item, 'num1', "").length != 0) &&
                  (<div className={`nx-bg-primary mt-3 place-content-center text-center mr-4 p-2 ${get(tailwindClasses, 'numBox')}`} style={get(style, 'numBox')}>
                    {
                      get(item, 'num1', "").length != 0 &&
                      <span className={`text-[1.4rem] font-bold mx-auto my-0 ${get(tailwindClasses, 'num1')}`} style={get(style, 'num1')}>{get(item, "num1")}</span>
                    }
                  </div>)
                }
                <div>
                  {
                    get(item, 'title1', "").length != 0 &&
                    <h3 className={`text-[1.6rem] font-bold ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(item, "title1")}</h3>
                  }
                  {
                    get(item, 'description1', "").length != 0 &&
                    <p className={`mb-2 ${get(tailwindClasses, 'description1')}`} style={get(style, 'description1')}>{get(item, "description1")}</p>
                  }
                </div>
              </div>
              </NexAnimation>
            </div>
          )
        }
      </div>
      <div className="text-center">
        {
          get(props, 'ctaText', "").length != 0 &&
          <PrimaryLink href={get(props, "ctaLink")} className={`nx-btn-primary text-gray-50 nx-btn-primary:hover focus:shadow-[rgba(92,140,229,1)] p-3 rounded-lg ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>{get(props, "ctaText")}</PrimaryLink>
        }
      </div>
    </section>
  )
}
AboutV13.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string
}
AboutV13.defaultProps = {
  style: {
    container: {},
    image1: {},
    image2: {},
    image3: {},
    subTitle: {},
    title: {},
    description: {},
    text1: {},
    text2: {},
    text3: {},
    text4: {},
    numBox: {},
    num1: {},
    title1: {},
    description1: {},
    ctaText: {}
  },
  tailwindClasses: {
    container: "",
    image1: "",
    image2: "",
    image3: "",
    subTitle: "",
    title: "",
    description: "",
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    numBox: "",
    num1: "",
    title1: "",
    description1: "",
    ctaText: ""
  },
  subTitle: "Who Are We?",
  title: "Company that believes in the power of creative strategy.",
  description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed.",
  text1: 99.7,
  text2: "Customer Satisfaction",
  text3: 12,
  text4: "Revenue Growth",
  ctaText: "More Details",
  ctaLink: "#",
  imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735292963.586x520.png",
  imagePath2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735292976.586x470.png",
  imagePath3: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735292989.750x382.png",
  leftContentAnimation:"",
  rightContentAnimation:"",
  bottomContentAnimation:"",
  items: [
    {
      num1: "1",
      title1: "Our Vision",
      description1: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus."
    },
    {
      num1: "2",
      title1: "Our Mission",
      description1: "Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur."
    },
    {
      num1: "3",
      title1: "Our Values",
      description1: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque."
    }
  ]
}
export default AboutV13;