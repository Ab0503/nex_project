import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';
import NexAnimation from '@nex-components/NexAnimation';

const AboutV5 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
      <section id="snippet-5" className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
        <div className="pt-2 xl:pt-20 lg:pt-28 md:pt-28 pb-2 xl:pb-20 lg:pb-20 md:pb-20">
          <div className={`flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-30px] items-center ${get(tailwindClasses, 'contentcontainer')}`} style={get(style, 'contentcontainer')}>
            <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full xl:order-2 lg:order-2">
            <NexAnimation  type={get(props, 'ImageContentAnimation', '')}>
              <figure className="m-0 p-0">
                {
                  get(props, 'imagePath', "").length != 0 &&
                  <ImageOrVedio className={`!w-auto !h-full !relative ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} 
                    src={get(props, "imagePath", "")}   vedioSrc={get(props, "vedioPath", "")} />
                }
              </figure>
            </NexAnimation>
            </div>
            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
            <NexAnimation  type={get(props, 'TextContentAnimation', '')}>
              {
                get(props, 'subTitle', "").length != 0 &&
                <h2 className={`nx-text-primary text-[1.1rem] uppercase text-line relative align-top pl-[1.4rem] inline-flex tracking-[0.02rem] leading-[1.35] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0] text-[#3f78e0] mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}</h2>
              }
              {
                get(props, 'title', "").length != 0 &&
                <h3 className={`nx-section-heading-font text-[2.2rem] font-bold xl:text-[2.1rem] leading-[1.3] mb-7 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h3>
              }

              <div id="accordionExample">
              {
                get(props, 'items', []).map((item) =>
                <Disclosure key={get(item, "heading1")} as="div" className="pt-6">
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left">
                      <span className="text-base/7 font-semibold">{get(item, "heading1")}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <span className="size-6 group-data-[open]:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </span>
                        <span className="size-6 group-[&:not([data-open])]:hidden" >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                          </svg>
                        </span>
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <p className="text-base/7">{get(item, "cardBody1")}</p>
                  </DisclosurePanel>
                </Disclosure>
                )}
              </div>
            </NexAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
AboutV5.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string
}
AboutV5.defaultProps = {
  style: {
    container: {},
    contentcontainer: {},
    image: {},
    subTitle: {},
    title: {},
    heading: {},
    cardBody: {}
  },
  tailwindClasses: {
    container: "",
    contentcontainer: "",
    image: "",
    subTitle: "",
    title: "",
    heading: "",
    cardBody: ""
  },
  TextContentAnimation: "",
  ImageContentAnimation: "",
  subTitle: "Why Choose Us?",
  title: "A few reasons why our valued customers choose us.",
  imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735226768.730x490.png",
  vedioPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1728966855.1728152985.19420800-uhd_3840_2160_30fps.mp4",
  items: [
    {
        heading1: "Professional Design",
        cardBody1: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."
    },
    {
        heading1: "Top-Notch Support",
        cardBody1: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."
    },
    {
        heading1: "Header and Slider Options",
        cardBody1: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."
    }
  ]
}
export default AboutV5;