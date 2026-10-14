import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

const FaqV10 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});
  return (
    <div>
      <section id="snippet-4" className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className={`max-w-6xl mx-auto nx-bg-primary rounded-xl ${get(tailwindClasses, 'box')}`} style={get(style, 'box')}>
          <div className="md:!p-10 lg:!p-10 xl:!p-12 p-[40px]">
            <div className="flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-50px]">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[50px]">
              {
                get(props, 'title',"").length != 0 &&
                <h3 className={`nx-section-heading-font text-[2.2rem] font-bold xl:text-[2.4rem] !leading-[1.3] mb-4 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h3>
              }
              {
                get(props, 'subTitle',"").length != 0 &&
                <p className={`lead text-[1.35rem] !leading-[1.6] font-medium !mb-0 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}</p>
              }
              </div>
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[35px]">
                <div id="accordionExample">
                {
                  get(props, 'items', []).map((item) =>  (get(item, 'heading',"").length != 0 || get(item, 'cardBody',"").length != 0 ) &&
                  (<Disclosure key={get(item, "heading")} as="div" className="pt-6">
                    <dt>
                      <DisclosureButton className="group flex w-full items-start justify-between text-left">
                        <span className={`text-base/7 text-[1.12rem] font-semibold ${get(tailwindClasses, 'heading')}`} style={get(style, 'heading')}>{get(item, "heading")}</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
FaqV10.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
FaqV10.defaultProps = {
  style: {
    container: {},
    box: {},
    title: {},
    subTitle: {},
    heading: {},
    cardBody: {}
  },
  tailwindClasses: {
    container: "",
    box: "",
    title: "",
    subTitle: "",
    heading: "",
    cardBody: ""
  },
  title: "Frequently Asked Questions",
  subTitle: "If you don't see an answer to your question, you can send us an email from our contact form.",
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
export default FaqV10;