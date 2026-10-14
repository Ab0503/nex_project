import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import ScrollToTop from '@nex-core-ui/ScrollToTop';

const FooterV8 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});

  return (

    <footer className={`bg-pink-300 !mt-[4.5rem] ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="mx-auto">
        <div className="flex flex-wrap mx-[15px]">
          <div className="xl:w-11/12 xxl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <div className={`h-52 max-sm:h-72 max-lg:h-64 max-w-6xl bg-black text-white -translate-y-2/4 xl:!mt-0 lg:!mt-0 rounded-xl  xl:-translate-y-2/4 lg:-translate-y-2/4 [background-size:100%] bg-[center_center] bg-no-repeat !relative z-0 ${get(tailwindClasses, 'box')}`} style={{ "background-image": `url('${get(props, 'bgImage')}')`, "backgroundRepeat": "no-repeat", ...get(style, 'box') }}>
              <div className="p-6 flex-row text-center xl:!justify-between lg:!justify-between md:!justify-between xl:flex xl:!items-center lg:flex lg:!items-center xl:!p-12 lg:!p-12 md:!p-12 xl:!text-left lg:!text-left">
                {
                  get(props, 'title', "").length != 0 &&
                  <h3 className={`text-[1.7rem] font-bold xl:text-[2.1rem] !leading-[1.35] xl:pr-20 lg:pr-20 xxl:pr-32 text-white mb-[1.5rem] lg:!mb-0 xl:!mb-0 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h3>
                }
                {
                  get(props, 'ctaText', "").length != 0 &&
                  <a href="#" className={`p-3 w-36 text-center font-semibold text-white rounded-full bg-blue-400 !mb-0 whitespace-nowrap ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>{get(props, "ctaText")}</a>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-14 !text-center">
        <div className="flex flex-wrap mx-[15px] mt-[-2.5rem]">
          <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <div className="flex flex-wrap mx-[15px] !mb-3">
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                <div className="widget">
                  {
                    get(props, 'section1', "").length != 0 &&
                    <h4 className={`font-semibold ${get(tailwindClasses, 'section1')}`} style={get(style, 'section1')}>{get(props, "section1")}</h4>
                  }
                  {
                    get(props, 'section1Text1', "").length != 0 &&
                    <address className={`not-italic leading-[inherit] mb-4 ${get(tailwindClasses, 'section1Text')}`} style={get(style, 'section1Text')}>{get(props, "section1Text1")} <br /> {get(props, "section1Text2")}</address>
                  }
                </div>
              </div>
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                <div className="widget">
                  {
                    get(props, 'section2', "").length != 0 &&
                    <h4 className={`font-semibold ${get(tailwindClasses, 'section2')}`} style={get(style, 'section2')}>{get(props, "section2")}</h4>
                  }
                  {
                    get(props, 'section2Text1', "").length != 0 &&
                    <p className={`text-white ${get(tailwindClasses, 'section2Text')}`} style={get(style, 'section2Text')}>{get(props, "section2Text1")}<br />{get(props, "section2Text2")}</p>
                  }
                </div>
              </div>
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                <div className="widget">
                  {
                    get(props, 'section2', "").length != 0 &&
                    <h4 className={`font-semibold ${get(tailwindClasses, 'section3')}`} style={get(style, 'section3')}>{get(props, "section3")}</h4>
                  }
                  <h2>
                    {
                      get(props, 'section3ctaLink1', "").length != 0 &&
                      <a href="mailto:sandbox@email.com" className={`text-[#60697b] ${get(tailwindClasses, 'section3ctaLink1')}`} style={get(style, 'section3ctaLink1')}>{get(props, "section3ctaLink1")}</a>
                    }
                    {
                      get(props, 'section3ctaLink2', "").length != 0 &&
                      <a href="mailto:help@sandbox.com" className={`text-[#60697b] xl:block lg:block md:block ${get(tailwindClasses, 'section3ctaLink2')}`} style={get(style, 'section3ctaLink2')}>{get(props, "section3ctaLink2")}</a>
                    }
                  </h2>
                </div>
              </div>
            </div>
            {
              get(props, 'copyrightText', "").length != 0 &&
              <p className={`mb-5 ${get(tailwindClasses, 'copyrightText')}`} style={get(style, 'copyrightText')}>{get(props, "copyrightText")}</p>
            }
            <nav className="inline-flex nav social justify-center">
              {
                get(props, 'items', []).map((item) => (get(item, 'icon', "").length != 0) &&
                  <a className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]" href="#">
                    <span className={`text-[1rem] text-[#5daed5] ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(item, "icon"))}</span>
                  </a>
                )}
            </nav>
          </div>
        </div>
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
FooterV8.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
FooterV8.defaultProps = {
  style: {
    container: {},
    box: {},
    title: {},
    ctaText: {},
    section1: {},
    section1Text1: {},
    section1Text2: {},
    section2: {},
    section2Text1: {},
    section2Text2: {},
    copyrightText: {},
    icon: {},
    section3: {},
    section3ctaLink: {},
  },
  tailwindClasses: {
    container: "",
    box: "",
    title: "",
    ctaText: "",
    section1: "",
    section1Text: "",
    section2: "",
    section2Text1: "",
    section2Text2: "",
    copyrightText: "",
    icon: "",
    section3: "",
    section3ctaLink: "",
  },
  wpMessage: "Hi hello",
  wpContactNo: "0000000000",
  bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735289010.628x593.png",
  title: "We are trusted by over 5000+ clients. Join them by using our services and grow your business.",
  ctaText: "Join Us",
  section1: "Address",
  section1Text1: "Moonshine St. 14/05",
  section1Text2: "Light City, London, UK",
  section2: "Phone",
  section2Text1: "00 (123) 456 78 90",
  section2Text2: "00 (987) 654 32 10",
  copyrightText: "© 2024 Sandbox. All rights reserved.",
  section3: "E-mail",
  section3ctaLink1: "sandbox@email.com",
  section3ctaLink2: "help@nexnnova.com",

  items: [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
          </svg>`,
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
          </svg>`,
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
          </svg>`,
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" />
          </svg>`,
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
          </svg>`,
    }
  ]
}
export default FooterV8;