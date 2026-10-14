import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import NexAnimation from '@nex-components/NexAnimation';

const FaqV9 = (props) => {
  const style = get(props,'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const items = get(props, 'items', {});
  const items1 = get(props, 'items1', {});
  
  return (
    <div>
      <section id="snippet-3" className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
      {
        get(props, 'title',"").length != 0 &&
        <h2 className={`nx-section-heading-font text-[1.8rem] font-bold xl:text-[2.3rem] leading-[1.3] mb-3 text-center ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h2>
      }
      {
        get(props, 'subTitle',"").length != 0 &&
        <p className={`lead text-[1.2rem] font-medium leading-[1.65] !text-center mb-10 md:px-24 xl:px-0 lg:px-0 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}</p>
      }
        <div className="flex flex-wrap mx-[15px]">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mb-0">
            <div id="accordion-1">
            <NexAnimation  type={get(props, 'leftContentAnimation', '')}>
            {
              get(props, 'items', []).map((item) =>  (get(item, 'heading',"").length != 0 || get(item, 'cardBody',"").length != 0 ) &&
              (<Disclosure key={get(item, "heading")} as="div" className="pt-6 p-5 mb-3 nx-bg-primary-light">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left">
                  {
                    get(item, 'heading',"").length != 0 &&
                    <span className={`text-base/7 text-[1.3rem] font-semibold nx-text-primary:hover ${get(tailwindClasses, 'heading')}`} style={get(style, 'heading')}>{get(item, "heading")}</span>
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
                  <p className={`text-base/7 text-[1.1rem] ${get(tailwindClasses, 'cardBody')}`} style={get(style, 'cardBody')}>{get(item, "cardBody")}</p>
                }
                </DisclosurePanel>
              </Disclosure>)
            )}
            </NexAnimation>
            </div>
          </div>

          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
            <div id="accordion-2">
            <NexAnimation  type={get(props, 'rightContentAnimation', '')}>
            {
              get(props, 'items1', []).map((item) =>  (get(item, 'heading',"").length != 0 || get(item, 'cardBody',"").length != 0 ) &&
              (<Disclosure key={get(item, "heading")} as="div" className="pt-6 p-5 mb-3 nx-bg-primary-light">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left">
                  {
                    get(item, 'heading',"").length != 0 &&
                    <span className={`text-base/7 text-[1.3rem] font-semibold hover:text-blue-500 ${get(tailwindClasses, 'heading')}`} style={get(style, 'heading')}>{get(item, "heading")}</span>
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
                  <p className={`text-base/7 text-[1.1rem] ${get(tailwindClasses, 'cardBody')}`} style={get(style, 'cardBody')}>{get(item, "cardBody")}</p>
                }
                </DisclosurePanel>
              </Disclosure>)
            )}
            </NexAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
FaqV9.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
FaqV9.defaultProps = {
  style: {
    container: {},
    title: {},
    subTitle: {},
    heading: {},
    cardBody: {}
  },
  tailwindClasses: {
    container: "",
    title: "",
    subTitle: "",
    heading: "",
    cardBody: ""
  },
  leftContentAnimation: "",
  rightContentAnimation: "",
  title: "Pricing FAQ",
  subTitle: "If you don't see an answer to your question, you can send us an email from our contact form.",
  items: [
    {
        heading:"Can I cancel my subscription",
        cardBody: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis."
    },
    {
        heading:"Which payment methods do you accept?",
        cardBody: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis."
    },
    {
        heading:"How can I manage my Account?",
        cardBody: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis."
    },
    {
        heading:"Is my credit card information secure?",
        cardBody: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis."
    }
  ],
  items1: [
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
export default FaqV9;