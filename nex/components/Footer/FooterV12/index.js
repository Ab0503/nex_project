import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import ScrollToTop from '@nex-core-ui/ScrollToTop';

const FooterV12 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});

  return (

    <footer className={`bg-gray-800 opacity-100  text-[#cacaca] ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="py-16 xl:!py-20 lg:!py-20 md:!py-20">
        <div className="flex flex-wrap mx-[15px] mt-[-30px] xl:mt-0 lg:mt-0">
          <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
            {
              get(props, 'section1', "").length != 0 &&
              <h4 className={`font-bold text-white text-[1.3rem] !mb-3 ${get(tailwindClasses, 'section1')}`} style={get(style, 'section1')}>{get(props, "section1")}</h4>
            }
            <ul className="m-0 p-0 after:content-[''] after:block after:h-0 after:clear-both after:invisible">
              {
                get(props, 'items', []).map((item) =>
                  <li className="overflow-hidden">
                    <figure className="float-left">
                      {
                        get(item, 'section1Image', "").length != 0 &&
                        <a href="#">
                          <NexImage className={`!relative !w-20 !h-20 border rounded-xl !mb-8 ${get(tailwindClasses, 'section1Image')}`} style={get(style, 'section1Image')} src={get(item, "section1Image")} />
                        </a>
                      }
                    </figure>
                    <div className="!relative ml-[6.25rem] mb-0">
                      <h6 className="!mb-2">
                        {
                          get(item, 'section1ctaLink', "").length != 0 &&
                          <a className={`text-[1.15rem] text-white hover:text-[#3f78e0] ${get(tailwindClasses, 'section1ctaLink')}`} style={get(style, 'section1ctaLink')} href="#">{get(item, "section1ctaLink")}</a>
                        }
                      </h6>
                      <ul className="text-[#cacaca] m-0 p-0 list-none">
                        <li className="inline-flex">
                          {
                            get(item, 'section1Icon', "").length != 0 &&
                            <span className={`pr-[0.2rem] ${get(tailwindClasses, 'section1Icon')}`} style={get(style, 'section1Icon')}>{parse(get(item, "section1Icon"))}</span>
                          }
                          {
                            get(item, 'section1Text', "").length != 0 &&
                            <span className={`text-[0.90rem] ${get(tailwindClasses, 'section1Text')}`} style={get(style, 'section1Text')}>{get(item, "section1Text")}</span>
                          }
                        </li>
                      </ul>
                    </div>
                  </li>
                )}

            </ul>
          </div>
          <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
            <div className="widget">
              {
                get(props, 'section2', "").length != 0 &&
                <h4 className={`font-bold text-white text-[1.3rem] !mb-3 ${get(tailwindClasses, 'section2')}`} style={get(style, 'section2')}>{get(props, "section2")}</h4>
              }
              <ul className="pl-0 list-none tag-list mb-6">
                {
                  get(props, 'items1', []).map((item) => (get(item, 'section2ctaLink', "").length != 0) &&
                    <li className="mt-0 mb-[0.45rem] mr-[0.6rem] inline-block">
                      <a href="#" className={`p-3 w-28 justify-center text-[1.1rem] text-white rounded-full bg-gray-400 flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:pr-[0.2rem] ${get(tailwindClasses, 'section2ctaLink')}`} style={get(style, 'section2ctaLink')}>{get(item, "section2ctaLink")}</a>
                    </li>
                  )}
              </ul>
            </div>
            <div className="widget">
              {
                get(props, 'section3', "").length != 0 &&
                <h4 className={`font-bold text-white text-[1.3rem] !mb-3 ${get(tailwindClasses, 'section3')}`} style={get(style, 'section3')}>{get(props, "section3")}</h4>
              }
              <ul className="pl-0 list-none text-inherit">
                {
                  get(props, 'items2', []).map((item) => (get(item, 'section3Text', "").length != 0) &&
                    <li className="relative pl-4 mb-2 before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:text-white before:font-SansSerif">
                      <a className={`text-[1.1rem] text-[#cacaca] hover:text-[#3f78e0] ${get(tailwindClasses, 'section3Text')}`} style={get(style, 'section3Text')} href="#">{get(item, "section3Text")}</a>
                    </li>
                  )}
              </ul>
            </div>
          </div>
          <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
            <div className="widget">
              {
                get(props, 'section4', "").length != 0 &&
                <h4 className={`font-bold text-white text-[1.3rem] !mb-3 ${get(tailwindClasses, 'section4')}`} style={get(style, 'section4')}>{get(props, "section4")}</h4>
              }
              {
                get(props, 'section4Text', "").length != 0 &&
                <address className={`text-[1.1rem] xl:pr-20 xxl:!pr-28 not-italic leading-[inherit] block mb-4 ${get(tailwindClasses, 'section4Text')}`} style={get(style, 'section4Text')}>{get(props, "section4Text")}</address>
              }
              {
                get(props, 'section4ctaLink', "").length != 0 &&
                <a className={`text-[1.1rem] text-[#cacaca] hover:text-[#3f78e0] ${get(tailwindClasses, 'section4ctaLink')}`} style={get(style, 'section4ctaLink')} href="mailto:first.last@email.com">{get(props, "section4ctaLink")}</a>
              }<br />
              {
                get(props, 'section4Text1', "").length != 0 &&
                <span className={`text-[1.1rem] ${get(tailwindClasses, 'section4Text1')}`} style={get(style, 'section4Text1')}>{get(props, "section4Text1")}</span>
              }
            </div>
            <div className="mt-[1.7rem]">
              {
                get(props, 'section5', "").length != 0 &&
                <h4 className={`font-bold text-white text-[1.3rem] !mb-3 ${get(tailwindClasses, 'section5')}`} style={get(style, 'section5')}>{get(props, "section5")}</h4>
              }
              <nav className="inline-flex">
                {
                  get(props, 'items3', []).map((item) => (get(item, 'section5Icon', "").length != 0) &&
                    <a className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]" href="#">
                      <span className={`text-[1rem] text-[#5daed5] ${get(tailwindClasses, 'section5Icon')}`} style={get(style, 'section5Icon')}>{parse(get(item, "section5Icon"))}</span>
                    </a>
                  )}
              </nav>
            </div>
          </div>
          <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
            <div className="widget">
              {
                get(props, 'section6', "").length != 0 &&
                <h4 className={`font-bold text-white text-[1.3rem] !mb-3 ${get(tailwindClasses, 'section6')}`} style={get(style, 'section6')}>{get(props, "section6")}</h4>
              }
              <ul className="pl-0 list-none text-inherit !mb-0">
                {
                  get(props, 'items4', []).map((item) => (get(item, 'section6Text', "").length != 0) &&
                    <li className="mt-[0.35rem]">
                      <a className={`text-[1.1rem] text-[#cacaca] hover:text-[#3f78e0] ${get(tailwindClasses, 'section6Text')}`} style={get(style, 'section6Text')} href="#">{get(item, "section6Text")}</a>
                    </li>
                  )}
              </ul>
            </div>
            <div className="mt-[1rem]">
              {
                get(props, 'section7', "").length != 0 &&
                <h4 className={`font-bold text-white text-[1.3rem] !mb-3 ${get(tailwindClasses, 'section7')}`} style={get(style, 'section7')}>{get(props, "section7")}</h4>
              }
              <ul className="pl-0 list-none text-inherit  !mb-0">
                {
                  get(props, 'items5', []).map((item) => (get(item, 'section7Text', "").length != 0) &&
                    <li className="mt-[0.35rem]">
                      <a className={`text-[1.1rem] text-[#cacaca] hover:text-[#3f78e0] ${get(tailwindClasses, 'section7Text')}`} style={get(style, 'section7Text')} href="#">{get(item, "section7Text")}</a>
                    </li>
                  )}
              </ul>
            </div>
          </div>
        </div>
        <p className={`mt-6 !mb-0 text-[1.1rem] !text-center ${get(tailwindClasses, 'copyrightText')}`} style={get(style, 'copyrightText')}>{get(props, "copyrightText")}</p>
      </div>
      <div className="fixed bottom-5 right-10 space-y-4" style={{ zIndex: "1000" }}>
        <div className='text-green-500 bg-white p-2 animate-bounce hover:bg-gray-100 hover:animate-none rounded-full'>
          <a href={`https://api.whatsapp.com/send?phone=${get(props, 'wpContactNo')}&text=${get(props, 'wpMessage')}`}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg></a>
        </div>
        <ScrollToTop />
      </div>
    </footer>

  )
}
FooterV12.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
FooterV12.defaultProps = {
  style: {
    container: {},
    container1: {},
    section1: {},
    section1Image: {},
    section1ctaLink: {},
    section1Icon: {},
    section1Text: {},
    section2: {},
    section2ctaLink: {},
    section3: {},
    section3Text: {},
    section4: {},
    section4Text: {},
    section4ctaLink: {},
    section4Text1: {},
    section5: {},
    section5Icon: {},
    section6: {},
    section6Text: {},
    section7: {},
    section7Text: {},
    copyrightText: {}
  },
  tailwindClasses: {
    container: "",
    container1: "",
    section1: "",
    section1Image: "",
    section1ctaLink: "",
    section1Icon: "",
    section1Text: "",
    section2: "",
    section2ctaLink: "",
    section3: "",
    section3Text: "",
    section4: "",
    section4Text: "",
    section4ctaLink: "",
    section4Text1: "",
    section5: "",
    section5Icon: "",
    section6: "",
    section6Text: "",
    section7: "",
    section7Text: "",
    copyrightText: ""
  },
  wpMessage: "Hi hello",
  wpContactNo: "0000000000",
  section1: "Popular Posts",
  section2: "Tags",
  section3: "Categories",
  section4: "Get in Touch",
  section4Text: "Moonshine St. 14/05 Light City, London, United Kingdom",
  section4ctaLink: "info@email.com",
  section4Text1: "00 (123) 456 78 90",
  section5: "Elsewhere",
  section6: "Learn More",
  section7: "Need Help?",
  copyrightText: "© 2024 Sandbox. All rights reserved.",
  items: [
    {
      section1Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
      section1ctaLink: "Magna Mollis Ultricies",
      section1Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
      <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
      </svg>`,
      section1Text: "26 Mar 2022"
    },
    {
      section1Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
      section1ctaLink: "Ornare Nullam Risus",
      section1Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
      <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
      </svg>`,
      section1Text: "16 Feb 2022"
    },
    {
      section1Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
      section1ctaLink: "Euismod Nullam Fusce",
      section1Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
      <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
      </svg>`,
      section1Text: "8 Jan 2022"
    }
  ],
  items1: [
    {
      section2ctaLink: "Still Life",
    },
    {
      section2ctaLink: "Urban",
    },
    {
      section2ctaLink: "Nature",
    },
    {
      section2ctaLink: "Landscape",
    }
  ],
  items2: [
    {
      section3Text: "Lifestyle (21)",
    },
    {
      section3Text: "Photography (19)",
    },
    {
      section3Text: "Journal (16)",
    }
  ],
  items3: [
    {
      section5Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
          </svg>`,
    },
    {
      section5Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" />
          </svg>`,
    },
    {
      section5Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
          </svg>`,
    },
    {
      section5Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" />
          </svg>`,
    },
    {
      section5Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
          </svg>`,
    }
  ],
  items4: [
    {
      section6Text: "About Us",
    },
    {
      section6Text: "Our Story",
    },
    {
      section6Text: "Projects",
    }
  ],
  items5: [
    {
      section7Text: "Support",
    },
    {
      section7Text: "Get Started",
    },
    {
      section7Text: "Contact Us",
    }
  ]
}
export default FooterV12;