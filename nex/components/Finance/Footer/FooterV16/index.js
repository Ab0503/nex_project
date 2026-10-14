import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import React from 'react';
import get from 'lodash.get';
import parse from 'html-react-parser';
import { arrayOf, object, string } from 'prop-types';
import ScrollToTop from '@nex-core-ui/ScrollToTop';

const FooterV16 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <footer className={`bg-gray-950 pt-20 text-white px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='max-w-6xl mx-auto grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4 pb-10 border-b border-gray-500'>
                <div>
                    {get(props, 'logo', '').length !== 0 && <PrimaryLink href={get(props, 'logoLink')}>
                        <NexImage src={get(props, 'logo')} className={`!relative !h-16 !w-auto mb-8 ${get(tailwindClasses, 'logo')}`} style={get(style, 'logo')} />
                    </PrimaryLink>}
                    {get(props, 'description', '').length !== 0 && <p className={`text-gray-500 text-sm mb-8 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                    <div className='flex gap-2'>
                        {get(props, 'socials', []).map((social) => <PrimaryLink className={`text-gray-950 bg-gray-400 hover:bg-white transition-all duration-300 rounded-full p-1 size-7 ${get(tailwindClasses, 'socialIcon')}`} style={get(style, 'socialIcon')} href={get(social, 'url')}>
                            {parse(get(social, 'icon'))}
                        </PrimaryLink>)}
                    </div>
                </div>
                <div>
                    {get(props, 'title1', '').length !== 0 && <h1 className={`text-2xl font-normal pb-4 border-b border-gray-500 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title1')}</h1>}
                    <div className='grid grid-cols-2 gap-x-24 gap-y-3 pt-8'>
                        {get(props, 'menus', []).map((item) => <PrimaryLink className={`text-sm font-light text-yellow-600 hover:underline ${get(tailwindClasses, 'menu')}`} style={get(style, 'menu')} href={get(item, 'link')}>
                            {get(item, 'menu')}
                        </PrimaryLink>)}
                    </div>
                </div>
                <div>
                    {get(props, 'title2', '').length !== 0 && <h1 className={`text-2xl font-normal pb-4 border-b border-gray-500 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title2')}</h1>}
                    <div className='pt-8 space-y-2'>
                        {get(props, 'items', []).map((item) => <div>
                            <h1 className={`font-semibold hover:text-yellow-600 transition-all duration-300 mb-2 ${get(tailwindClasses, 'newsTitle')}`} style={get(style, 'newsTitle')}><PrimaryLink href={get(item, 'newsLink1')}>{get(item, 'newsTitle')}</PrimaryLink></h1>
                            {get(item, 'date', '').length !== 0 && <div className='flex items-center gap-2'>
                                {get(props, 'clockIcon', '').length !== 0 && <span className={`h-5 w-5 text-yellow-600 ${get(tailwindClasses, 'clockIcon')}`} style={get(style, 'clockIcon')}>{parse(get(props, 'clockIcon'))}</span>}
                                <span className={`text-sm text-gray-400 ${get(tailwindClasses, 'date')}`} style={get(style, 'date')}>{get(item, 'date')}</span>
                            </div>}
                        </div>)}
                    </div>
                </div>
                <div>
                    {get(props, 'title3', '').length !== 0 && <h1 className={`text-2xl font-normal pb-4 border-b border-gray-500 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title3')}</h1>}
                    <div className='pt-8'>
                        <div className='relative mb-3'>
                            <input type="text" placeholder='Enter Your Email' className={`bg-white pl-4 py-2 pr-14 text-sm w-full text-gray-400 focus:ring-yellow-600 focus:border-yellow-600 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} />
                            {get(props, 'ctaIcon', '').length !== 0 && <button className={`absolute bg-yellow-600 text-gray-950 h-[38px] w-[40px] p-2 right-0 ${get(tailwindClasses, 'ctaIcon')}`} style={get(style, 'ctaIcon')}>
                                {parse(get(props, 'ctaIcon'))}
                            </button>}
                        </div>
                        {get(props, 'text', '').length !== 0 && <p className={`text-sm text-gray-500 ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text')}</p>}
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto flex justify-between py-4'>
                {get(props, 'copyrightText', '').length !== 0 && <p className={`text-sm text-gray-500 text-center ${get(tailwindClasses, 'copyrightText')}`} style={get(style, 'copyrightText')}>{get(props, 'copyrightText')}</p>}
                {get(props, 'bottomText', '').length !== 0 && <p className={`text-sm text-gray-500 text-center ${get(tailwindClasses, 'bottomText')}`} style={get(style, 'bottomText')}>{parse(get(props, 'bottomText'))}</p>}
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

FooterV16.propTypes = {
    style: object,
    tailwindClasses: object,
    wpMessage: string,
    wpContactNo: string,
    logo: string,
    logoLink: string,
    description: string,
    bottomText: string,
    socials: arrayOf(object),
    title1: string,
    items: arrayOf(object),
    title2: string,
    clockIcon: string,
    newsTitle1: string,
    newsLink1: string,
    date1: string,
    newsTitle2: string,
    newsLink2: string,
    date2: string,
    title3: string,
    ctaIcon: string,
    text: string,
    copyrightText: string,
}

FooterV16.defaultProps = {
    style: {
        container: {},
        logo: {},
        description: {},
        socialIcon: {},
        title: {},
        menu: {},
        newsTitle: {},
        clockIcon: {},
        date: {},
        inputBox: {},
        ctaIcon: {},
        text: {},
        copyrightText: {},
        bottomText: {}
    },
    tailwindClasses: {
        container: "",
        logo: "",
        description: "",
        socialIcon: "",
        title: "",
        menu: "",
        newsTitle: "",
        clockIcon: "",
        date: "",
        inputBox: "",
        ctaIcon: "",
        text: "",
        copyrightText: "",
        bottomText: ""
    },
    wpMessage: "Hi hello",
    wpContactNo: "0000000000",
    logo: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1728362518.inline_logo.png",
    logoLink: "#",
    description: "Fusce interdum ipsum egestas urna amet fringilla, et placerat ex venenatis. Aliquet luctus pharetra. Proin sed fringilla lectus... ar sit amet tellus in mollis.",
    bottomText: `Product designed & developed by <a href="https://nexnnova.com" target="_blank">Nexnnova IT Solutions</a>`,
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
    title1: "Extra Links",
    menus: [
        {
            menu: "About",
            link: "#"
        },
        {
            menu: "News",
            link: "#"
        },
        {
            menu: "Contacts",
            link: "#"
        },
        {
            menu: "Testimonials",
            link: "#"
        },
        {
            menu: "Typography",
            link: "#"
        },
        {
            menu: "Services",
            link: "#"
        },
        {
            menu: "Careers",
            link: "#"
        },
        {
            menu: "Our team",
            link: "#"
        },
        {
            menu: "Shop",
            link: "#"
        },
        {
            menu: "Our approach",
            link: "#"
        },
    ],
    title2: "Recent News",
    clockIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" /></svg>`,
    items: [
        {
            newsTitle: "Narrow Your Focus to Prevent Overanalysis",
            newsLink: "#",
            date: "February 8, 2025",
        },
        {
            newsTitle: "Stick with Your Concept but Do Your Homework",
            newsLink: "#",
            date: "January 30, 2025",
        }
    ],
    title3: "Newsletter",
    ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>`,
    text: "Get latest updates and news",
    copyrightText: "© 2025 Consulting All rights reserved.",

}
export default FooterV16
