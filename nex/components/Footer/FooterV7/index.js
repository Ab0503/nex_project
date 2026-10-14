import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import ScrollToTop from '@nex-core-ui/ScrollToTop';

const FooterV7 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  return (

    <footer className={`bg-gray-800 opacity-100 text-[#cacaca] ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="py-16 xl:py-20 lg:py-20 md:py-20">
        <div className="flex flex-wrap mx-[15px] mt-[-30px] xl:mt-0 lg:mt-0">
          <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
            <div className="text-[#cacaca]">
              {
                get(props, 'imagePath', "").length != 0 &&
                <NexImage className={`!relative !w-auto !h-14 !mb-4 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props, "imagePath")} />
              }
              {
                get(props, 'copyrightText', "").length != 0 &&
                <h3 className={`!mb-4 xl:block lg:block text-[#cacaca] ${get(tailwindClasses, 'copyrightText')}`} style={get(style, 'copyrightText')}>{get(props, "copyrightText")}<br></br>{get(props, "copyrightText1")}</h3>
              }
              <div className="flex gap-2">
                {get(props, 'socials', []).map((social) =>
                  <PrimaryLink
                    href={get(social, "url")}
                    className={`text-gray-400 nx-text-hover-primary ${get(tailwindClasses, 'socialIcons')}`}
                    style={{ ...get(style, 'socialIcons') }}
                  >
                    <span className="sr-only">Facebook</span>
                    {get(social, 'icon').length !== 0 && <div aria-hidden="true" className="h-6 w-6" >
                      {parse(get(social, 'icon'))}
                    </div>}
                  </PrimaryLink>)}
              </div>
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
                <PrimaryLink className={`text-[#cacaca] ${get(tailwindClasses, 'section1ctaLink1')}`} style={get(style, 'section1ctaLink1')} href={`mailto:${get(props, "section1ctaLink1")}`}>{get(props, "section1ctaLink1")}<br />{get(props, "section1Text2")}</PrimaryLink>
              }
            </div>
          </div>
          <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
            <div className="text-[#cacaca]">
              {
                get(props, 'section2', "").length != 0 &&
                <h4 className={`text-gray-50  !mb-3 ${get(tailwindClasses, 'section2')}`} style={get(style, 'section2')}>{get(props, "section2")}</h4>
              }
              <ul className="pl-0 !mb-0">
                {
                  get(props, 'items', []).map((item) => (get(item, 'section2Text', "").length != 0) &&
                    <li className="mt-[0.35rem]">
                      <PrimaryLink className={`text-[#cacaca] nx-text-hover-primary ${get(tailwindClasses, 'section2Text')}`} style={get(style, 'section2Text')} href={get(item, 'section2Link')}>{get(item, "section2Text")}</PrimaryLink>
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
                <p className={`!mb-5 ${get(tailwindClasses, 'section3Text')}`} style={get(style, 'section3Text')}>{get(props, "section3Text")}</p>
              }
              <div className="newsletter-wrapper">
                <form action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate dark-fields" target="_blank" novalidate>
                  <div className="!text-left input-group form-floating !relative inline-flex items-stretch w-full">
                    {
                      get(props, 'email', "").length != 0 &&
                      <input type="email" name="EMAIL" className={`required email form-control block w-full text-[12px] font-medium leading-[1.7] appearance-none bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] px-4 py-[0.6rem] rounded-l-xl motion-reduce:transition-none focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] disabled:bg-[#aab0bc] disabled:opacity-100 file:mt-[-0.6rem] file:mr-[-1rem] file:mb-[-0.6rem] file:ml-[-1rem] file:bg-[#fefefe] file:pointer-events-none file:transition-all file:duration-[0.2s] file:ease-in-out file:px-4 file:py-[0.6rem] file:rounded-none motion-reduce:file:transition-none border border-solid border-[rgba(255,255,255,0.1)] focus:!border-[rgba(63,120,224,0.5)] bg-[rgba(255,255,255,.03)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 ${get(tailwindClasses, 'emailBox')}`} style={get(style, 'emailBox')} placeholder={get(props, "email")} />
                    }
                    {
                      get(props, 'ctaText', "").length != 0 &&
                      <button type="submit" name="subscribe" id="mc-embedded-subscribe" className={`p-3 rounded-r-xl nx-btn-primary nx-btn-primary:hover !relative z-[2] focus:z-[5] hover:!transform-none border-0 ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>{get(props, "ctaText")}</button>
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
FooterV7.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}

FooterV7.defaultProps = {
  style: {
    container: {},
    image: {},
    copyrightText: {},
    section1: {},
    section1Text1: {},
    section1ctaLink1: {},
    section1Text2: {},
    socialIcons: {},
    section2: {},
    section2Text: {},
    section3: {},
    section3Text: {},
    emailBox: {},
    ctaText: {}

  },
  tailwindClasses: {
    container: "",
    image: "",
    copyrightText: "",
    section1: "",
    section1Text1: "",
    section1ctaLink1: "",
    section1Text2: "",
    socialIcons: "",
    section2: "",
    section2Text: "",
    section3: "",
    section3Text: "",
    emailBox: "",
    ctaText: ""
  },
  wpMessage: "Hi hello",
  wpContactNo: "0000000000",
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
  ctaText: "Join",
  socials: [
    {
      url: "https://facebook.com",
      icon: `<svg fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>`
    },
    {
      url: "https://facebook.com",
      icon: `<svg fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                  </svg>`
    },
    {
      url: "https://facebook.com",
      icon: `<svg fill="currentColor" viewBox="0 0 24 24" >
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>`
    },
    {
      url: "https://facebook.com",
      icon: `<svg fill="currentColor" viewBox="0 0 24 24" >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>`
    },
  ],
  items: [
    {
      section2Text: "About Us",
      section2Link: "#"
    },
    {
      section2Text: "Our Story",
      section2Link: "#"
    },
    {
      section2Text: "Projects",
      section2Link: "#",
    },
    {
      section2Text: "Terms of Use",
      section2Link: "#",
    },
    {
      section2Text: "Privacy Policy",
      section2Link: "#"
    }
  ]
}
export default FooterV7;