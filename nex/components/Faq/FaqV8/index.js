import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';

const FaqV8 = (props) => {
  const style = get(props,'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const items = get(props, 'items', {});
  
  return (
    <div>
      <section id="snippet-2" className={`bg-gray-300 border-b-[rgba(164,174,198,0.2)] border-b border-solid ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-50px]">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[50px] !mb-0">
          {
            get(props, 'title',"").length != 0 &&
            <h2 className={`!text-[.75rem] uppercase text-[#3f78e0] tracking-[0.02rem] leading-[1.35] !mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h2>
          }
          {
            get(props, 'title1',"").length != 0 &&
            <h3 className={`text-[calc(1.285rem_+_0.42vw)] font-bold xl:text-[1.6rem] !leading-[1.3] mb-4 ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(props, "title1")}</h3>
          }
          {
            get(props, 'subTitle',"").length != 0 &&
            <p className={`lead text-[0.9rem] font-medium !leading-[1.65] !mb-6 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}</p>
          }
          {
            get(props, 'ctaText',"").length != 0 &&
            <a href="#" className={`p-3 text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'ctaText')}`}style={get(style, 'ctaText')}>{get(props, "ctaText")}</a>
          }
          </div>
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[50px]">
            <div id="accordion-3">
            {
              get(props, 'items', []).map((item) =>  (get(item, 'heading',"").length != 0 || get(item, 'cardBody',"").length != 0 ) &&
              (<Disclosure key={get(item, "heading")} as="div" className="pt-6 p-5 border border-gray-800 mb-3">
                <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left">
                    {
                        get(item, 'heading',"").length != 0 &&
                        <span className={`text-base/7 font-semibold hover:text-blue-500 ${get(tailwindClasses, 'heading')}`} style={get(style, 'heading')}>{get(item, "heading")}</span>
                    }
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
                {
                    get(item, 'cardBody',"").length != 0 &&
                    <p className={`text-base/7 ${get(tailwindClasses, 'cardBody')}`} style={get(style, 'cardBody')}>{get(item, "cardBody")}</p>
                }
                </DisclosurePanel>
              </Disclosure>)
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
FaqV8.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string,
  }
  FaqV8.defaultProps = {
    style: {
      container: {},
      title: {},
      title1: {},
      subTitle: {},
      ctaText: {}
    },
    tailwindClasses: {
      container: "",
      title: "",
      title1: "",
      subTitle: "",
      ctaText: ""
    },
    title: "FAQ",
    title1: "If you don't see an answer to your question, you can send us an email from our contact form.",
    subTitle: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare.",
    ctaText: "ALL FAQ",
    items: [
      {
          heading:"How do I get my subscription receipt",
          cardBody: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis."
      },
      {
          heading:"Are there any discounts for people in need",
          cardBody: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis."
      },
      {
          heading:"Do you offer a free trial edit",
          cardBody: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis."
      },
      {
          heading:"How do I reset my account password?",
          cardBody: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis."
      }
    ]
  }
export default FaqV8;