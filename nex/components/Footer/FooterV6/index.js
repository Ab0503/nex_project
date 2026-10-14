import parse from 'html-react-parser/lib/index';
import get from 'lodash.get'
import React from 'react'
import PropTypes, { object } from 'prop-types'
import NexImage from '@nex-core-ui/NexImage';
import ScrollToTop from '@nex-core-ui/ScrollToTop';

const FooterV6 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (
        <div className={`bg-gray-950 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                <div className={`flex max-md:flex-col max-md:justify-center justify-between items-center py-3 mx-32 max-xl:mx-20 max-lg:mx-10 `} >
                    {get(props, 'logoPath', "").length !== 0 && <NexImage className={`!relative !h-16 !w-32  ${get(tailwindClasses, 'logo')}`} style={get(style, 'logo')} src={get(props, 'logoPath')} alt="" />}
                    <div className='flex flex-wrap justify-center gap-10 mt-3'>
                        {props.menuItems.map((menuItem) =>
                            <div className={`flex gap-4 text-gray-300 text-sm ${get(tailwindClasses, 'menuItems')}`} style={get(style, 'menuItems')}>
                                {get(menuItem, 'menuItem').length !== 0 && <a href={get(menuItem, 'menuItemLink')}>{get(menuItem, 'menuItem')}</a>}
                            </div>)}
                        <div className="flex gap-2">
                            {get(props, 'socials', []).map((social) =>
                                <a
                                    href={get(social, "url")}
                                    className={`text-gray-400 hover:text-yellow-400 ${get(tailwindClasses, 'socialIcons')}`}
                                    style={{ ...get(style, 'socialIcons') }}
                                >
                                    <span className="sr-only">Facebook</span>
                                    {get(social, 'icon').length !== 0 && <div aria-hidden="true" className="h-6 w-6" >
                                        {parse(get(social, 'icon'))}
                                    </div>}
                                </a>)}
                        </div>
                    </div>
                </div>
                <hr className={`bg-gray-600 h-px border-none ${get(tailwindClasses, 'divider')}`} style={get(style, 'divider')} />
                <div className='grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 mx-32 max-xl:mx-20 max-lg:mx-10 my-10'>
                    <div>
                        {get(props, 'section1Title', "").length !== 0 && <h1 className={`text-gray-300 text-md font-bold mb-3 ${get(tailwindClasses, 'section1Title')}`} style={get(style, 'section1Title')}>{get(props, 'section1Title')}</h1>}
                        {get(props, 'section1Description', "").length !== 0 && <p className={`text-gray-600 text-xs mb-2 ${get(tailwindClasses, 'section1Description')}`} style={get(style, 'section1Description')}>{get(props, 'section1Description')}</p>}
                        {get(props, 'section1Email', "").length !== 0 && <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${get(props, 'section1Email')}&su=Subject&body=Your%20message%20here`} className={`text-yellow-400 text-xs mb-2 ${get(tailwindClasses, 'section1Email')}`} style={get(style, 'section1Email')}>{get(props, 'section1Email')}</a>}
                        {get(props, 'section1SubTitle', "").length !== 0 && <p className={`text-sm font-bold text-gray-300 mb-2 ${get(tailwindClasses, 'section1SubTitle')}`} style={get(style, 'section1SubTitle')}>{get(props, 'section1SubTitle')}</p>}
                        {get(props, 'section1Text1', "").length !== 0 && <p className={`text-xs mb-1 text-gray-300 ${get(tailwindClasses, 'section1Text1')}`} style={get(style, 'section1Text1')}>{get(props, 'section1Text1')}</p>}
                        {get(props, 'section1Text2', "").length !== 0 && <p className={`text-xs text-gray-300 ${get(tailwindClasses, 'section1Text2')}`} style={get(style, 'section1Text2')}>{get(props, 'section1Text2')}</p>}
                    </div>
                    <div>
                        {get(props, 'section2Title', "").length !== 0 && <h1 className={`text-gray-300 text-md font-bold mb-3 ${get(tailwindClasses, 'section2Title')}`} style={get(style, 'section2Title')}>{get(props, 'section2Title')}</h1>}
                        {props.section2Item.map((section2) => <div className='flex items-center gap-2 mb-3 my-4'>
                            {get(section2, 'imageUrl', "").length !== 0 && <NexImage className={`!relative !h-16 !w-16 rounded-full ${get(tailwindClasses, 'section2Image')}`} style={get(style, 'section2Image')} src={get(section2, 'imageUrl')} alt="" />}
                            <div>
                                {get(section2, 'subTitle', "").length !== 0 && <span className={`text-xs text-gray-600 ${get(tailwindClasses, 'section2SubTitle')}`} style={get(style, 'section2SubTitle')}>{get(section2, 'subTitle')}</span>}
                                {get(section2, 'title', "").length !== 0 && <p className={`text-sm font-medium text-gray-300 ${get(tailwindClasses, 'section2Text')}`} style={get(style, 'section2Text')}>{get(section2, 'title')}</p>}
                            </div>
                        </div>)}
                    </div>
                    <div>
                        {get(props, 'section3Title', "").length !== 0 && <h1 className={`text-gray-300 text-md font-bold mb-3 ${get(tailwindClasses, 'section3Title')}`} style={get(style, 'section3Title')}>{get(props, 'section3Title')}</h1>}
                        {props.section3Item.map((section3) => <div className='flex items-start gap-2 mb-3'>
                            {get(section3, 'icon', "").length !== 0 && <span className={`text-emerald-600 ${get(tailwindClasses, 'section3Icon')}`} style={get(style, 'section3Icon')}>{parse(get(section3, 'icon'))}</span>}
                            <div>
                                {get(section3, 'title', "").length !== 0 && <p className={`text-sm font-bold text-gray-300 mb-1 ${get(tailwindClasses, 'section3Text')}`} style={get(style, 'section3Text')}>{get(section3, 'title')}</p>}
                                {get(section3, 'description', "").length !== 0 && <p className={`text-xs text-gray-600 ${get(tailwindClasses, 'section3Description')}`} style={get(style, 'section3Description')}>{get(section3, 'description')}</p>}
                            </div>
                        </div>)}
                    </div>
                    <div>
                        {get(props, 'section4Title', "").length !== 0 && <h1 className={`text-gray-300 text-md font-bold mb-3 ${get(tailwindClasses, 'section4Title')}`} style={get(style, 'section4Title')}>{get(props, 'section4Title')}</h1>}
                        {get(props, 'section4Description', "").length !== 0 && <p className={`text-xs font-thin text-gray-300 ${get(tailwindClasses, 'section4Description')}`} style={get(style, 'section4Description')}>{get(props, 'section4Description')}</p>}
                        {get(props, 'section4InputPlaceholder', "").length !== 0 && <div className={`my-3 bg-gray-900 p-5 ${get(tailwindClasses, 'section4InputSection')}`} style={get(style, 'section4InputSection')}>
                            {<input className={`bg-gray-900 text-xs p-2 focus:outline-none text-gray-300 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} type="text" placeholder={get(props, 'section4InputPlaceholder')} />}
                            <hr className={`bg-gray-600 h-px border-none ${get(tailwindClasses, 'divider')}`} style={get(style, 'divider')} />
                            {get(props, 'section4CheckboxText', "").length !== 0 && <div class="flex items-start gap-3 mt-3">
                                <input type="checkbox" id="checkbox" className={`h-3 w-3 mt-1 text-gray-600 focus:ring-gray-500 border-gray-300 ${get(tailwindClasses, 'checkbox')}`} style={get(style, 'checkbox')} />
                                <label for="checkbox" className={`text-gray-700 text-xs ${get(tailwindClasses, 'section4CheckboxText')}`} style={get(style, 'section4CheckboxText')}>{get(props, 'section4CheckboxText')}</label>
                            </div>}
                        </div>}
                    </div>
                </div>
                {get(props, 'copyrightText', "").length !== 0 && <hr className={`bg-gray-600 h-px border-none ${get(tailwindClasses, 'divider')}`} style={get(style, 'divider')} />}
                {get(props, 'copyrightText', "").length !== 0 && <div className='text-center py-3'>
                    <p className={`text-gray-300 text-xs ${get(tailwindClasses, 'copyrightText')}`} style={get(style, 'copyrightText')}>{get(props, 'copyrightText')}</p>
                </div>}
            </div>
            <div className="fixed bottom-5 right-10 space-y-4" style={{ zIndex: "1000" }}>
                <div className='text-green-500 bg-white p-2 animate-bounce hover:bg-gray-100 hover:animate-none rounded-full'>
                    <a href={`https://api.whatsapp.com/send?phone=${get(props, 'wpContactNo')}&text=${get(props, 'wpMessage')}`}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg></a>
                </div>
                <ScrollToTop />
            </div>
        </div>
    )
}

FooterV6.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        logo: {},
        menuItems: {},
        socialIcons: {},
        divider: {},
        section1Title: {},
        section1Description: {},
        section1Email: {},
        section1SubTitle: {},
        section1Text1: {},
        section1Text2: {},
        section2Title: {},
        section2Image: {},
        section2SubTitle: {},
        section2Text: {},
        section3Title: {},
        section3Icon: {},
        section3Text: {},
        section3Description: {},
        section4Title: {},
        section4Description: {},
        section4InputSection: {},
        inputBox: {},
        section4InputPlaceholder: {},
        checkbox: {},
        section4CheckboxText: {},
        copyrightText: {}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        logo: "",
        menuItems: "",
        socialIcons: "",
        divider: "",
        section1Title: "",
        section1Description: "",
        section1Email: "",
        section1SubTitle: "",
        section1Text1: "",
        section1Text2: "",
        section2Title: "",
        section2Image: "",
        section2SubTitle: "",
        section2Text: "",
        section3Title: "",
        section3Icon: "",
        section3Text: "",
        section3Description: "",
        section4Title: "",
        section4Description: "",
        section4InputSection: "",
        inputBox: "",
        section4InputPlaceholder: "",
        checkbox: "",
        section4CheckboxText: "",
        copyrightText: ""
    },
    wpMessage: "Hi hello",
    wpContactNo: "0000000000",
    logoPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735324249.200x100.png",
    section1Title: "About Us",
    section1Description: "We believe it has power to do amazing things.",
    section1Email: "support@nexnnova.com",
    section1SubTitle: "Opening Hours",
    section1Text1: "9:30am-6:30pm",
    section1Text2: "Monday to Friday",
    section2Title: "Latest Post",
    section3Title: "Get in touch",
    section4Title: "Newsletter",
    section4Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, ut.",
    section4InputPlaceholder: "Enter Email Address",
    section4CheckboxText: "I agree to the terms and conditions",
    copyrightText: "© 2024 Nexnnova.com. All rights are Reserved",
    menuItems: [
        {
            menuItem: "Privacy Policy",
            menuItemLink: "#",
        },
        {
            menuItem: "FAQs",
            menuItemLink: "#",
        },
        {
            menuItem: "Support",
            menuItemLink: "#",
        }
    ],
    section2Item: [
        {
            imageUrl: "https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            subTitle: "24th May 2023",
            title: "This Place Really Place For Awesome"
        },
        {
            imageUrl: "https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            subTitle: "24th May 2023",
            title: "This Place Really Place For Awesome"
        },
    ],
    section3Item: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>`,
            title: "Address",
            description: "244,First floor, 11 St Roofs terrace,Los Angles"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
`,
            title: "Phone",
            description: "99999999"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
`,
            title: "Email",
            description: "info@example.com"
        },
    ],
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
}

FooterV6.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    logoPath: PropTypes.string,
    section1Title: PropTypes.string,
    section1Description: PropTypes.string,
    section1Email: PropTypes.string,
    section1SubTitle: PropTypes.string,
    section1Text1: PropTypes.string,
    section1Text2: PropTypes.string,
    section2Title: PropTypes.string,
    section3Title: PropTypes.string,
    section4Title: PropTypes.string,
    section4Description: PropTypes.string,
    section4InputPlaceholder: PropTypes.string,
    section4CheckboxText: PropTypes.string,
    copyrightText: PropTypes.string,
    menuItems: PropTypes.arrayOf(object),
    section2Item: PropTypes.arrayOf(object),
    socials: PropTypes.arrayOf(object),
}
export default FooterV6
