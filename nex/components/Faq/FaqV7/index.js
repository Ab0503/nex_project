import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';
import NexAnimation from '@nex-components/NexAnimation';

const FaqV7 = (props) => {
  const style = get(props,'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const items = get(props, 'items', {});
  
  return (
    <div>
    <section id="snippet-1" className={`overflow-hidden nx-bg-primary-light ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-20 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-50px]">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px]  px-[15px] max-w-full mt-[50px]">
            <NexAnimation  type={get(props, 'imageContentAnimation', '')}>
            <figure className="m-0 p-0">
              {
                get(props, 'imagePath',"").length != 0 &&
                <ImageOrVedio className={`!relative !w-auto ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props, "imagePath", "")}   vedioSrc={get(props, "vedioPath", "")}/>
              }
            </figure>
            </NexAnimation>
          </div>
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px]  px-[15px] max-w-full mt-[50px]">
          <NexAnimation  type={get(props, 'textContentAnimation', '')}>
          {
            get(props, 'title',"").length != 0 &&
            <h2 className={`nx-section-heading-font text-[1.8rem] font-bold xl:text-[1.9rem] leading-[1.3] mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h2>
          }
          {
            get(props, 'subTitle',"").length != 0 &&
            <p className={`lead text-[1rem] !mb-6 xxl:pr-10 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}
              <span className={`relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]`}>{get(props, "span")}</span>
              {get(props, "subTitle1")}
            </p>
          }
            <div id="accordionExample-2">
            {
              get(props, 'items', []).map((item) =>  (get(item, 'heading',"").length != 0 || get(item, 'cardBody',"").length != 0 ) &&
              (<Disclosure key={get(item, "heading")} as="div" className="pt-6">
                <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left">
                        <span className={`text-base/7 font-semibold ${get(tailwindClasses, 'heading')}`} style={get(style, 'heading')}>{get(item, "heading")}</span>
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
                    <p className={`text-base/7 ${get(tailwindClasses, 'cardBody')}`} style={get(style, 'cardBody')}>{get(item, "cardBody")}</p>
                </DisclosurePanel>
              </Disclosure>)
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
FaqV7.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string,
  }
  FaqV7.defaultProps = {
    style: {
      container: {},
      image: {},
      title: {},
      subTitle: {},
      heading: {},
      cardBody: {}
    },
    tailwindClasses: {
      container: "",
      image: "",
      title: "",
      subTitle: "",
      heading: "",
      cardBody: ""
    },
    imageContentAnimation: "",
    textContentAnimation: "",
    title: "Common Questions",
    subTitle: "If you don't see an", 
    span: " answer to your question " ,
    subTitle1: ", you can send us an email from our contact form.",
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735226768.730x490.png",
    vedioPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1728966855.1728152985.19420800-uhd_3840_2160_30fps.mp4",
    items: [
      {
          heading: "Can I cancel my subscription?",
          cardBody: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."
      },
      {
          heading: "Which payment methods do you accept?",
          cardBody: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."
      },
      {
          heading: "How can I manage my Account?",
          cardBody: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."
      }
    ]
  }
export default FaqV7;