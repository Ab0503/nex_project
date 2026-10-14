import React from 'react';
import get from 'lodash.get';
import parse from 'html-react-parser';
import { arrayOf, object, string } from 'prop-types';
import PrimaryLink from '@nex-core-ui/PrimaryLink';

const ContactUsV25 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});

    return (
        <section className={`py-16 px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='max-w-6xl mx-auto flex flex-wrap max-lg:flex-col'>
                <div className='w-full lg:w-4/12 max-lg:mb-10'>
                    {get(props, 'description', '').length !== 0 && <p className={`border-b-[3px] text-lg font-normal text-gray-700 border-gray-950 pb-8 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                    {get(props, 'title', '').length !== 0 && <h1 className={`text-2xl font-semibold pt-8 mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                    <div className='flex items-start gap-2 mb-3'>
                        {get(props, 'icon1', '').length !== 0 && <span className={`pt-1 text-yellow-600 ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon1'))}</span>}
                        {get(props, 'text1', '').length !== 0 && <p className={`max-w-[16rem] text-gray-950 ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text1')}</p>}
                    </div>
                    <div className='flex items-start gap-2 mb-3'>
                        {get(props, 'icon2', '').length !== 0 && <span className={`pt-1 text-yellow-600 ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon2'))}</span>}
                        {get(props, 'text2', '').length !== 0 && <p className={`max-w-[16rem] text-gray-950 ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text2')}</p>}
                    </div>
                    <div className='flex items-start gap-2 mb-5'>
                        {get(props, 'icon3', '').length !== 0 && <span className={`pt-1 text-yellow-600 ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon3'))}</span>}
                        {get(props, 'text3', '').length !== 0 && <p className={`max-w-[16rem] text-gray-950 ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text3')}</p>}
                    </div>
                    <div className='flex gap-3'>
                        {get(props, 'socials', []).map((social) => <PrimaryLink className={`text-white bg-gray-400 hover:bg-yellow-600 transition-all duration-300 rounded-full p-1 size-7 ${get(tailwindClasses, 'socialIcon')}`} style={get(style, 'socialIcon')} href={get(social, 'url')}>
                            {parse(get(social, 'icon'))}
                        </PrimaryLink>)}
                    </div>
                </div>
                <div className='w-full lg:w-8/12 lg:pl-8'>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                            <input type="text" placeholder="First name" className={`bg-gray-300 focus:bg-white px-10 py-3 w-full border-none outline-none placeholder-black focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-300 text-sm max-sm:col-span-2 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} />
                            <input type="text" placeholder="Last name" className={`bg-gray-300 focus:bg-white px-10 py-3 w-full border-none outline-none placeholder-black focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-300 text-sm max-sm:col-span-2 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} />
                            <input type="text" placeholder="Title" className={`bg-gray-300 focus:bg-white px-10 py-3 w-full border-none outline-none placeholder-black focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-300 text-sm max-sm:col-span-2 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} />
                            <input type="text" placeholder="Subject" className={`bg-gray-300 focus:bg-white px-10 py-3 w-full border-none outline-none placeholder-black focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-300 text-sm max-sm:col-span-2 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} />
                            <input type="text" placeholder="Phone number" className={`bg-gray-300 focus:bg-white px-10 py-3 w-full border-none outline-none placeholder-black focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-300 text-sm max-sm:col-span-2 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} />
                            <input type="text" placeholder="E-mail" className={`bg-gray-300 focus:bg-white px-10 py-3 w-full border-none outline-none placeholder-black focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-300 text-sm max-sm:col-span-2 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} />
                            <input type="text" placeholder="Company/Position" className={`bg-gray-300 focus:bg-white px-10 py-3 w-full border-none outline-none placeholder-black focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-300 text-sm max-sm:col-span-2 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} />
                            <select placeholder='Area of Interest' className={`bg-gray-300 focus:bg-white px-10 py-3 w-full border-none outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-300 text-sm max-sm:col-span-2 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')}>
                                {get(props, 'options', []).map((item) => <option>
                                    {get(item, 'value')}
                                </option>)}
                            </select>
                            <textarea rows={3} placeholder='message' className={`col-span-2 bg-gray-300 focus:bg-white px-10 py-3 w-full border-none outline-none focus:ring-2 placeholder-black focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-300 text-sm ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')}></textarea>
                        </div>
                        {get(props, 'ctaText', '').length !== 0 && <button type='submit' className={`mt-6 bg-gray-950 text-white border-[3px] border-gray-950 hover:bg-yellow-600 hover:text-gray-950 hover:border-white uppercase font-bold py-3 px-6 flex items-center gap-2 group text-sm transition-all duration-400 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
                            {get(props, 'ctaText')}
                            <span className={`text-yellow-600 group-hover:text-gray-950 ${get(tailwindClasses, 'ctaIcon')}`} style={get(style, 'ctaIcon')}>{parse(get(props, 'ctaIcon'))}</span>
                        </button>}
                    </form>
                </div>
            </div>
        </section>
    )
}

ContactUsV25.propTypes = {
    style: object,
    tailwindClasses: object,
    description: string,
    title: string,
    icon1: string,
    text1: string,
    icon2: string,
    text2: string,
    icon3: string,
    text3: string,
    ctaText: string,
    ctaIcon: string,
    socials: arrayOf(object),
    options: arrayOf(object)
}

ContactUsV25.defaultProps = {
    style: {
        container:{},
        description:{},
        title:{},
        icon:{},
        text:{},
        inputBox:{},
        cta:{},
        ctaIcon:{},
        socialIcon:{}
    },
    tailwindClasses: {
        container:"",
        description:"",
        title:"",
        icon:"",
        text:"",
        inputBox:"",
        cta:"",
        ctaIcon:"",
        socialIcon:""
    },
    description: "Please let us know if you have a question, want to leave a comment, or would like further information about Consulting WP.",
    title: "Contact details",
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" /></svg>`,
    text1: `1010 Avenue of the Moon New York, NY 10018 US.`,
    icon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" /></svg>`,
    text2: `+1 628 123 4000`,
    icon3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" /><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" /></svg>`,
    text3: `1010 Avenue of the Moon New York, NY 10018 US.`,
    ctaText:"Submit",
    ctaIcon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" /></svg>`,
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
    options: [
        {
            value: "Area of Interest"
        },
        {
            value: "Value1"
        },
        {
            value: "Value2"
        },
    ]
}
export default ContactUsV25