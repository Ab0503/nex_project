import parse from 'html-react-parser/lib/index';
import get from 'lodash.get'
import React, { useState } from 'react'
import PropTypes, { arrayOf, object } from 'prop-types'
import NexImage from '@nex-core-ui/NexImage';
import withData from "@nex-core-ui/HOC/withData";
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';


const TeamsV11 = (props) => {
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const style = get(props, 'style', {});

  const [isVisible, setIsVisible] = useState(null);

  const toggleHideShow = (id) => {
    setIsVisible(isVisible === id ? null : id)
  }
  return (
    <div className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className={`xl:mx-24 md:mx-16 max-sm:mx-5 ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
        <NexAnimation type={get(props, 'topContentAnimation')}>
          {get(props, 'subTitle', "").length !== 0 && <h1 className={`nx-text-primary text-center text-sm m-2 max-sm:mx-0 font-light ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
          {get(props, 'title', "").length !== 0 && <h1 className={`nx-section-heading-font text-center text-4xl font-bold m-2 max-sm:mx-0 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
        </NexAnimation>
        <div className={`grid grid-cols-${get(props, 'boxNo')} max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 mt-10`}>
          {
            get(props, 'items').map((item, index) =>
              <NexAnimation type={get(props, "bottomContentAnimation")}>
                <div key={index} className={`relative border rounded-xl overflow-hidden ${isVisible === index && get(props, 'socialIconVisibleSectionColor')} ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                  {get(item, 'sectionImage', "").length !== 0 && <NexImage className={`!relative !h-auto !w-full bg-gray-500 ${isVisible === index && "blur-sm"} ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} src={get(item, 'sectionImage')} alt="" />}
                  <div className={`flex items-center justify-between p-2`}>
                    <div>
                      {get(item, 'sectionText1', "").length !== 0 && <h1 className={`text-sm font-bold ${isVisible === index && "text-white"} ${get(tailwindClasses, 'sectionText1')}`} style={get(style, 'sectionText1')}>{get(item, 'sectionText1')}</h1>}
                      {get(item, 'sectionText2', "").length !== 0 && <p className={`font-light text-xs ${isVisible === index && "text-white"} ${get(tailwindClasses, 'sectionText2')} `} style={get(style, 'sectionText2')}>{get(item, 'sectionText2')}</p>}
                    </div>
                    {(get(props, 'sectionIcon2', "").length !== 0 || get(props, 'sectionIcon1', '').length !== 0) && <button onClick={() => toggleHideShow(index)} className={`nx-btn-primary p-1 rounded-full ${isVisible === index && get(props, "socialIconVisiblePlusColor")} ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>
                      {isVisible === index ? parse(get(props, 'sectionIcon2')) : parse(get(props, 'sectionIcon1'))}
                    </button>}
                  </div>

                  {isVisible === index && (<div className='absolute bottom-16 right-2'>
                    <div className='flex flex-col gap-1'>
                      {get(props, 'socialIcon1',"").length !==0 &&<PrimaryLink href={get(item, 'url1')} className={`text-black bg-white nx-text-hover-primary rounded-full p-1 ${get(tailwindClasses, 'socialIcons')}`} style={get(style, 'socialIcons')} >
                        {parse(get(props, 'socialIcon1'))}
                      </PrimaryLink>}
                      {get(props, 'socialIcon2').length !==0 &&<PrimaryLink href={get(item, 'url2')} className={`text-black bg-white nx-text-hover-primary rounded-full p-1 ${get(tailwindClasses, 'socialIcons')}`} style={get(style, 'socialIcons')} >
                        {parse(get(props, 'socialIcon2'))}
                      </PrimaryLink>}
                      {get(props, 'socialIcon3',"").length !==0 &&<PrimaryLink href={get(item, 'url3')} className={`text-black bg-white nx-text-hover-primary rounded-full p-1 ${get(tailwindClasses, 'socialIcons')}`} style={get(style, 'socialIcons')} >
                        {parse(get(props, 'socialIcon3'))}
                      </PrimaryLink>}
                      {get(props, 'socialIcon4',"").length !==0 &&<PrimaryLink href={get(item, 'url4')} className={`text-black bg-white nx-text-hover-primary rounded-full p-1 ${get(tailwindClasses, 'socialIcons')}`} style={get(style, 'socialIcons')} >
                        {parse(get(props, 'socialIcon4'))}
                      </PrimaryLink>}
                    </div>
                  </div>)}
                </div>
              </NexAnimation>
            )
          }
        </div>
      </div>
    </div>
  )
}

TeamsV11.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    subTitle: {},
    title: {},
    sectionBox: {},
    sectionImage: {},
    sectionText1: {},
    sectionText2: {},
    sectionIcon: {},
    socialIcons: {}
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    subTitle: "",
    title: "",
    sectionBox: "",
    sectionImage: "",
    sectionText1: "",
    sectionText2: "",
    sectionIcon: "",
    socialIcons: ""
  },
  boxNo: 4,
  subTitle: "Start Donating Poor People",
  title: "Meet Our Volunteer Team members",
  socialIconVisiblePlusColor: "bg-yellow-500",
  socialIconVisibleSectionColor: "bg-green-950",
  sectionIcon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>`,
  sectionIcon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>`,
  socialIcon1: `<svg fill="currentColor" viewBox="0 0 24 24" className="size-6">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>`,
  socialIcon2: `<svg fill="currentColor" viewBox="0 0 24 24" className="size-6" >
                      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                    </svg>`,
  socialIcon3: `<svg fill="currentColor" viewBox="0 0 24 24" className="size-6" >
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                      />
                    </svg>`,
  socialIcon4: `<svg fill="currentColor" viewBox="0 0 24 24" className="size-6" ><path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>`,
  topContentAnimation: "",
  bottomContentAnimation: "",
  items: [
    {
      sectionImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
      sectionText1: "Michel Fokluz Huta",
      sectionText2: "Manager",
      url1: "https://facebook.com",
      url2: "https://facebook.com",
      url3: "https://facebook.com",
      url4: "https://facebook.com",
    },
    {
      sectionImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
      sectionText1: "Michel Fokluz Huta",
      sectionText2: "Manager",
      url1: "https://google.com",
      url2: "https://facebook.com",
      url3: "https://facebook.com",
      url4: "https://facebook.com",
    },
    {
      sectionImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
      sectionText1: "Michel Fokluz Huta",
      sectionText2: "Manager",
      url1: "https://twitter.com",
      url2: "https://facebook.com",
      url3: "https://facebook.com",
      url4: "https://facebook.com",
    },
    {
      sectionImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
      sectionText1: "Michel Fokluz Huta",
      sectionText2: "Manager",
      url1: "https://flipkart.com",
      url2: "https://facebook.com",
      url3: "https://facebook.com",
      url4: "https://facebook.com",
    },
  ],
}
TeamsV11.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  items: arrayOf(object),
  socials: arrayOf(object)
}
export default withData(TeamsV11);
