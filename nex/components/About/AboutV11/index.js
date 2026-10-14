import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';
import PrimaryLink from '@nex-core-ui/PrimaryLink';

const AboutV11 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
    <section id="snippet-11" className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-20 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className={`flex flex-wrap mx-[15px] md:mx-[20px] lg:mx-[20px] xl:mx-[35px] mt-[-30px] items-center ${get(tailwindClasses, 'contentcontainer')}`} style={get(style, 'contentcontainer')}>
          <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full xl:order-2 lg:order-2 mx-auto mt-[30px]">
            <div className="img-mask mask-2">
            {
              get(props, 'imagePath',"").length != 0 &&
              <ImageOrVedio className={`!relative rounded-full ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props,"imagePath")} vedioSrc={get(props,"vedioPath","")}/>
            }
            </div>
          </div>
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[30px]">
            {
              get(props, 'title',"").length != 0 &&
              <h2 className={`nx-section-heading-font text-[calc(1.285rem_+_0.42vw)] font-bold xl:text-[2.3rem] leading-[1.3] mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h2>
            }
            {
              get(props, 'subTitle',"").length != 0 &&
              <p className={`nx-text-primary lead text-[1.35rem] leading-[1.45] font-medium mb-4 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</p>
            }
            {
              get(props, 'description1',"").length != 0 &&
              <p className={`text-[1.09rem] mb-4 ${get(tailwindClasses, 'description1')}`} style={get(style, 'description1')}>{get(props,"description1")}</p>
            }
            {
              get(props, 'description2',"").length != 0 &&
              <p className={`text-[1.12rem] mb-8 ${get(tailwindClasses, 'description2')}`} style={get(style, 'description2')}>{get(props,"description2")}</p>
            }
            {
              get(props, 'ctaText',"").length != 0 &&
              <PrimaryLink href={get(props,"ctaLink")} className={`p-4 nx-btn-primary nx-btn-primary:hover focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>{get(props,"ctaText")}</PrimaryLink>
            }
          </div>
        </div>
        <div className="flex flex-wrap mx-[15px] md:mx-[20px] lg:mx-[20px] xl:mx-[35px] mt-10 xl:mt-16 lg:mt-16 md:mt-16">
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[16px] px-[15px] max-w-full">
          {
            get(props, 'title1',"").length != 0 &&
            <h2 className={`nx-section-heading-font text-[calc(1.285rem_+_0.42vw)] font-bold xl:text-[1.6rem] leading-[1.3] mb-3 ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(props,"title1")}</h2>
          }
          {
            get(props, 'subTitle1',"").length != 0 &&
            <p className={`text-[1.01rem] ${get(tailwindClasses, 'subTitle1')}`} style={get(style, 'subTitle1')}>{get(props,"subTitle1")}</p>
          }
          </div>
          <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full">
            <div className="flex flex-wrap mx-[15px] mt-[-30px] md:mx-[20px] lg:mx-[-20px] xl:mx-[35px]">
            {
                get(props, 'items', []).map((item) =>
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                    <div className="flex flex-row">
                      <div className="text-gray-50 nx-bg-primary hover:text-gray-50 hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] mr-4 mt-1 w-[2.2rem] h-[2.2rem] inline-flex items-center justify-center text-[1rem] rounded-[100%]">
                      {
                        get(item, 'text1',"").length != 0 &&
                        <span className={`number text-[0.9rem] text-center font-bold p-4 mx-auto my-0 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item,"text1")}</span>
                      }
                      </div>
                    <div>
                      {
                        get(item, 'text2',"").length != 0 &&
                        <h4 className={`mb-1 font-bold ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item,"text2")}</h4>
                      }
                      {
                        get(item, 'text3',"").length != 0 &&
                        <p className={`mb-0 ${get(tailwindClasses, 'text3')}`} style={get(style, 'text3')}>{get(item,"text3")}</p>
                      }
                      </div>
                    </div>
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
AboutV11.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string,
}
AboutV11.defaultProps = {
    style: {
        container: {},
        contentcontainer: {},
        image: {},
        title: {},
        subTitle: {},
        description1: {},
        description2: {},
        ctaText: {},
        title1: {},
        subTitle1: {},
        text1: {},
        text2: {},
        text3: {}
    },
    tailwindClasses: {
        container: "",
        contentcontainer: "",
        image: "",
        title: "",
        subTitle: "",
        description1: "",
        description2: "",
        ctaText: "",
        title1: "",
        subTitle1: "",
        text1: "",
        text2: "",
        text3: ""
    },
    title: "About Me",
    subTitle: "I'm Caitlyn Sandbox, a photographer specializing in food, drink and product photography.",
    description1: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula.",
    description2: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur.",
    ctaText: "Learn More",
    ctaLink: "#",
    title1: "My Working Process",
    subTitle1: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus. Aenean eu leo quam.",
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735289010.628x593.png",
    vedioPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1728966855.1728152985.19420800-uhd_3840_2160_30fps.mp4",
    items:[
        {
            text1: "1",
            text2: "Concept",
            text3: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida."
        },
        {
            text1: "2",
            text2: "Prepare",
            text3: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida."
        },
        {
            text1: "3",
            text2: "Retouch",
            text3: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida."
        },
        {
            text1: "4",
            text2: "Finalize",
            text3: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida."
        }
    ]
}
export default AboutV11;