import React from "react";
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';

const FooterV17 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const items = get(props, 'items', {});
  const items1 = get(props, 'items1', {});
  const items2 = get(props, 'items2', {});
  const items3 = get(props, 'items3', {});


  return (
    <footer className={`bg-gradient-to-b from-blue-900 to-blue-900 text-gray-50 pt-16 pb-8 px-4 md:px-16 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="text-center mb-10">
        {get(props, 'title', "").length !== 0 &&
          <h2 className={`text-3xl font-bold ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>
        }
        {get(props, 'subTitle', "").length !== 0 &&
          <p className={`text-lg mt-2 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</p>
        }
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
          {get(props, 'emailIcon', "").length !== 0 &&
            <div className={`flex items-center bg-gray-50 bg-opacity-10 rounded-full px-4 py-2 w-full max-w-md ${get(tailwindClasses, 'curveBox')}`} style={get(style, 'curveBox')}>
              <span className={`text-gray-50 mr-2 ${get(tailwindClasses, 'emailIcon')}`} style={get(style, 'emailIcon')}>{parse(get(props, 'emailIcon'))} </span>
              <input type="email" placeholder={get(props, 'placeholder')} className={`bg-transparent text-gray-50 placeholder-white focus:outline-none w-full ${get(tailwindClasses, 'placeholder')}`} style={get(style, 'placeholder')}
              />
            </div>
          }
          {get(props, 'ctaText', "").length !== 0 &&
            <button href={get(props, 'ctaLink')} className={`nx-btn-primary nx-btn-primary:hover text-gray-50 font-semibold px-6 py-2 rounded-full shadow-lg ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>
              {get(props, 'ctaText')}
            </button>
          }
        </div>
      </div>

      <div className="border-t border-white border-opacity-20 mt-10 pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div>
          {get(props, 'section1', "").length !== 0 &&
            <h4 className={`font-semibold mb-2 ${get(tailwindClasses, 'section1')}`} style={get(style, 'section1')}>{get(props, 'section1')}</h4>
          }
          {
            get(props, 'items', []).map((item) =>
              get(item, 'section1Text', "").length !== 0 &&
                <ul className="space-y-1">
                  <li className={` ${get(tailwindClasses, 'section1Text')}`} style={get(style, 'section1Text')}>{get(item, 'section1Text')}</li>
                </ul>
            )}
        </div>
        <div>
          {get(props, 'section2', "").length !== 0 &&
            <h4 className={`font-semibold mb-2 ${get(tailwindClasses, 'section2')}`} style={get(style, 'section2')}>{get(props, 'section2')}</h4>
          }
          {
            get(props, 'items1', []).map((item) =>
              get(item, 'section2Text', "").length !== 0 &&
                <ul className="space-y-1">
                  <li className={` ${get(tailwindClasses, 'section2Text')}`} style={get(style, 'section2Text')}>{get(item, 'section2Text')}</li>
                </ul>
            )}
        </div>
        <div>
          {get(props, 'section3', "").length !== 0 &&
            <h4 className={`font-semibold mb-2 ${get(tailwindClasses, 'section3')}`} style={get(style, 'section3')}>{get(props, 'section3')}</h4>
          }
          {
            get(props, 'items2', []).map((item) => 
              get(item, 'section3Text', "").length !== 0 &&
                <ul className="space-y-1">
                  <li className={` ${get(tailwindClasses, 'section3Text')}`} style={get(style, 'section3Text')}>{get(item, 'section3Text')}</li>
                </ul>
            )}
        </div>
        <div>
          {get(props, 'section4', "").length !== 0 &&
            <h4 className={`font-semibold mb-2 ${get(tailwindClasses, 'section4')}`} style={get(style, 'section4')}>{get(props, 'section4')}</h4>
          }
          {
            get(props, 'items3', []).map((item) => 
              get(item, 'section4Icon', "").length !== 0 &&
                <div className="inline-flex mt-2 text-xl">
                  <span className={`mr-2 ${get(tailwindClasses, 'section4Icon')}`} style={get(style, 'section4Icon')}>{parse(get(item, 'section4Icon'))}</span>
                </div>
            )}
        </div>
        <div>
          {get(props, 'section5', "").length !== 0 &&
            <h4 className={`font-semibold mb-2 ${get(tailwindClasses, 'section5')}`} style={get(style, 'section5')}>{get(props, 'section5')}</h4>
          }
          {get(props, 'section5ctaIcon', "").length !== 0 &&
            <div className="flex items-center bg-gray-50 bg-opacity-10 rounded-full px-3 py-2">
              <input type="email" placeholder={get(props, 'section5Placeholder')} className={`bg-transparent text-gray-50 placeholder-white focus:outline-none w-full ${get(tailwindClasses, 'section5Placeholder')}`} style={get(style, 'section5Placeholder')} />
              <button href={get(props, 'section5Link')} className={`nx-btn-primary nx-btn-primary:hover text-gray-50 ml-2 p-2 rounded-full ${get(tailwindClasses, 'section5ctaIcon')}`} style={get(style, 'section5ctaIcon')}>
                {parse(get(props, 'section5ctaIcon'))}
              </button>
            </div>
          }
        </div>
      </div>

      {get(props, 'text1', "").length !== 0 &&
        <div className={`text-center text-sm mt-10 text-gray-50 text-opacity-70 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>
          {get(props, 'text1')}<span className={`nx-text-primary ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(props, 'text2')}</span>{get(props, 'text3')}
        </div>
      }
    </footer>
  )
}

FooterV17.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string
}
FooterV17.defaultProps = {
  style: {
    container: {},
    title: {},
    subTitle: {},
    curveBox: {},
    emailIcon: {},
    placeholder: {},
    ctaText: {},
    section1: {},
    section1Text: {},
    section2: {},
    section2Text: {},
    section3: {},
    sectionText: {},
    section4: {},
    section4Icon: {},
    section5: {},
    section5CurveBox: {},
    section5Placeholder: {},
    section5cta: {},
    section5Link: {},
    text1: {},
    text2: {},
    text3: {}
  },
  tailwindClasses: {
    container: "",
    title: "",
    subTitle: "",
    curveBox: "",
    emailIcon: "",
    placeholder: "",
    ctaText: "",
    section1: "",
    section1Text: "",
    section2: "",
    section2Text: "",
    section3: "",
    sectionText: "",
    section4: "",
    section4Icon: "",
    section5: "",
    section5CurveBox: "",
    section5Placeholder: "",
    section5cta: "",
    section5Link: "",
    text1: "",
    text2: "",
    text3: ""
  },
  title: "GET IN TOUCH",
  subTitle: "Write us an email!",
  emailIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>`,
  placeholder: "E-mail Address",
  ctaText: "GET STARTED",
  ctaLink: "#",
  section1: "POPULAR COURSES",
  section2: "QUICK MENU",
  section3: "PRIVACY & LINKS",
  section4: "LOCATE US",
  section5: "SUBSCRIBE US",
  section5Placeholder: "E-mail",
  section5ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
              </svg>`,
  section5Link: "#",
  text1: "© 2019 ",
  text2: "Webful Creations. ",
  text3: "All Rights Reserved.",
  items: [
    {
      section1Text: "Web Application Dev"
    },
    {
      section1Text: "Graphic Designing"
    },
    {
      section1Text: "Mobile App Development"
    },
    {
      section1Text: ".NET with ASP Course"
    },
    {
      section1Text: "Project Management"
    },
    {
      section1Text: "English Language Course"
    }
  ],
  items1: [
    {
      section2Text: "About us"
    },
    {
      section2Text: "Our Faculty"
    },
    {
      section2Text: "Featured Courses"
    },
    {
      section2Text: "Campus Life"
    },
    {
      section2Text: "Testimonials"
    },
    {
      section2Text: "Our News"
    }
  ],
  items2: [
    {
      section3Text: "Q & A"
    },
    {
      section3Text: "Privacy Policy"
    },
    {
      section3Text: "Terms & Condition"
    },
    {
      section3Text: "Admission"
    }
  ],
  items3: [
    {
      section4Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
              <path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clip-rule="evenodd" />
            </svg>`
    },
    {
      section4Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
              <path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clip-rule="evenodd" />
            </svg>`
    },
    {
      section4Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
              <path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clip-rule="evenodd" />
            </svg>`
    },
    {
      section4Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
              <path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clip-rule="evenodd" />
            </svg>`
    },
    {
      section4Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
              <path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clip-rule="evenodd" />
            </svg>`
    }
  ]
}
export default FooterV17;