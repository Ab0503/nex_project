import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import ScrollToTop from '@nex-core-ui/ScrollToTop';

const FooterV11 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});

  return (
    <footer className={`bg-gray-950 text-white ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-16 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="xl:flex lg:flex flex-row xl:!items-center lg:items-center mx-[36px]">
          {
            get(props, 'title', "").length != 0 &&
            <h3 className={`nx-section-heading-font text-[1.9rem] font-bold xl:text-[2.4rem] !leading-[1.3] mb-8 xl:mb-0 lg:mb-0 lg:pr-40 xl:pr-80 xxl:pr-[22.5rem] text-gray-50 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h3>
          }
          {
            get(props, 'ctaLink', "").length != 0 &&
            <PrimaryLink href={get(props, "ctaLink")} className={`p-4 text-center text-gray-50 font-semibold nx-btn-primary nx-btn-primary:hover focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded-full !mb-0 whitespace-nowrap ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>{get(props, "ctaText")}</PrimaryLink>
          }
        </div>
        <hr className="mt-[3rem] mb-[3.5rem] opacity-100 m-[4.5rem_0] border-t border-solid border-[rgba(164,174,198,.2)] max-w-full mx-auto max-sm:mx-6 lg:mx-6 max-lg:mx-10" />
        <div className="flex flex-wrap mx-[15px] mt-[-30px] xl:mt-0 lg:mt-0">
          <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
            <div className="widget text-[#cacaca]">
              {
                get(props, 'imagePath', "").length != 0 &&
                <NexImage className={`!relative !w-36 !h-12 !mb-4 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props, "imagePath")} />
              }
              {
                get(props, 'copyrightText', "").length != 0 &&
                <p className={`mb-4 text-[#cacaca] ${get(tailwindClasses, 'copyrightText')}`} style={get(style, 'copyrightText')}>{get(props, "copyrightText")}<br />{get(props, "copyrightText1")}</p>
              }
              <nav className="inline-flex">
                {
                  get(props, 'items', []).map((item) => (get(item, 'icon', "").length != 0) &&
                    <PrimaryLink className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]" href={get(item, "Link1")}><span className={`nx-text-primary text-[1rem] ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(item, "icon"))}</span></PrimaryLink>
                  )}
              </nav>
            </div>
          </div>
          <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
            <div className="text-[#cacaca]">
              {
                get(props, 'section1', "").length != 0 &&
                <h4 className={`text-gray-50 !mb-3 ${get(tailwindClasses, 'section1')}`} style={get(style, 'section1')}>{get(props, "section1")}</h4>
              }
              {
                get(props, 'section1Text1', "").length != 0 &&
                <address className={`xl:pr-20 xxl:!pr-28 not-italic leading-[inherit] block mb-4 ${get(tailwindClasses, 'section1Text1')}`} style={get(style, 'section1Text1')}>{get(props, "section1Text1")}</address>
              }
              {
                get(props, 'section1ctaLink1', "").length != 0 &&
                <PrimaryLink className={`text-[#cacaca] nx-text-hover-primary ${get(tailwindClasses, 'section1ctaLink1')}`} style={get(style, 'section1ctaLink1')} href="mailto:first.last@email.com">{get(props, "section1ctaLink1")}<br />{get(props, "section1Text2")}</PrimaryLink>
              }
            </div>
          </div>
          <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
            <div className="text-[#cacaca]">
              {
                get(props, 'section2', "").length != 0 &&
                <h4 className={`text-gray-50 mb-3 ${get(tailwindClasses, 'section2')}`} style={get(style, 'section2')}>{get(props, "section2")}</h4>
              }
              <ul className="pl-0 list-none !mb-0">
                {
                  get(props, 'items1', []).map((item) => (get(item, 'section2Text', "").length != 0) &&
                    <li className="mt-[0.35rem]">
                      <PrimaryLink className={`text-[#cacaca] nx-text-hover-primary ${get(tailwindClasses, 'section2Text')}`} style={get(style, 'section2Text')} href={get(item, "section2ctaLink")}>{get(item, "section2Text")}</PrimaryLink>
                    </li>
                  )}
              </ul>
            </div>
          </div>
          <div className="md:w-full xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
            <div className="text-[#cacaca]">
              {
                get(props, 'section3', "").length != 0 &&
                <h4 className={`text-gray-50 !mb-3 ${get(tailwindClasses, 'section3')}`} style={get(style, 'section3')}>{get(props, "section3")}</h4>
              }
              {
                get(props, 'section3Text', "").length != 0 &&
                <p className={`mb-5 ${get(tailwindClasses, 'section3Text')}`} style={get(style, 'section3Text')}>{get(props, "section3Text")}</p>
              }
              <div className="newsletter-wrapper">
                <form action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate dark-fields" target="_blank" novalidate>
                  <div className="!text-left input-group form-floating !relative inline-flex items-stretch w-full">
                    {
                      get(props, 'email', "").length != 0 &&
                      <input type="email" name="EMAIL" className={`required email form-control block w-full text-[12px] font-medium leading-[1.7] appearance-none bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] px-4 py-[0.6rem] rounded-l-xl motion-reduce:transition-none focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] disabled:bg-[#aab0bc] disabled:opacity-100 file:mt-[-0.6rem] file:mr-[-1rem] file:mb-[-0.6rem] file:ml-[-1rem] file:text-[#60697b] file:bg-[#fefefe] file:pointer-events-none file:transition-all file:duration-[0.2s] file:ease-in-out file:px-4 file:py-[0.6rem] file:rounded-none motion-reduce:file:transition-none placeholder:text-[#959ca9] placeholder:opacity-100 border border-solid !border-[rgba(255,255,255,0.1)] text-[#cacaca] focus:!border-[rgba(63,120,224,0.5)] bg-[rgba(255,255,255,.03)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 ${get(tailwindClasses, 'emailBox')}`} style={get(style, 'emailBox')} placeholder={get(props, "email")} />
                    }
                    {
                      get(props, 'ctaText1', "").length != 0 &&
                      <button type="submit" name="subscribe" id="mc-embedded-subscribe" className={`p-3 rounded-r-xl text-gray-50 nx-bg-primary nx-bg-hover-primary focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !relative z-[2] focus:z-[5] hover:!transform-none border-0 ${get(tailwindClasses, 'ctaText1')}`} style={get(style, 'ctaText1')}>{get(props, "ctaText1")}</button>
                    }
                  </div>
                </form>
              </div>
            </div>
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
FooterV11.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
FooterV11.defaultProps = {
  style: {
    container: {},
    title: {},
    ctaLink: {},
    image: {},
    copyrightText: {},
    icon: {},
    Link1: {},
    section1: {},
    section1Text1: {},
    section1ctaLink1: {},
    section1Text2: {},
    section2: {},
    section2Text: {},
    section2ctaLink: {},
    section3: {},
    section3Text: {},
    emailBox: {},
    email: {},
    ctaText: {},
    ctaText1: {}
  },
  tailwindClasses: {
    container: "",
    title: "",
    ctaLink: "",
    image: "",
    copyrightText: "",
    icon: "",
    Link1: "",
    section1: "",
    section1Text1: "",
    section1ctaLink1: "",
    section1Text2: "",
    section2: "",
    section2Text: "",
    section2ctaLink: "",
    section3: "",
    section3Text: "",
    emailBox: "",
    email: "",
    ctaText: "",
    ctaText1: ""
  },
  wpMessage: "Hi hello",
  wpContactNo: "0000000000",
  title: "Join our community by using our services and grow your business.",
  ctaText: "Try It For Free",
  ctaLink: "#",
  imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735797740.sa3.jpg",
  copyrightText: "© 2024 Sandbox.",
  copyrightText1: "All rights reserved.",
  section1: "Get in Touch",
  section1Text1: "Moonshine St. 14/05 Light City, London, United Kingdom",
  section1ctaLink1: "info@email.com",
  section1Text2: "00 (123) 456 78 90",
  section2: "Learn More",
  section3: "Our Newsletter",
  section3Text: "Subscribe to our newsletter to get our news & deals delivered to you.",
  email: "Email Address",
  ctaText1: "Join",
  items: [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
          </svg>`,
      Link1: "#"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
          </svg>`,
      Link1: "#"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
          </svg>`,
      Link1: "#"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" />
          </svg>`,
      Link1: "#"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
          </svg>`,
      Link1: "#"
    }
  ],
  items1: [
    {
      section2Text: "About Us",
      section2ctaLink: "#",
    },
    {
      section2Text: "Our Story",
      section2ctaLink: "#",
    },
    {
      section2Text: "Projects",
      section2ctaLink: "#",
    },
    {
      section2Text: "Terms of Use",
      section2ctaLink: "#",
    },
    {
      section2Text: "Privacy Policy",
      section2ctaLink: "#",
    }
  ]
}
export default FooterV11;