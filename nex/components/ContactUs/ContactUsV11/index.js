import parse from 'html-react-parser';
import get from 'lodash.get';
import PropTypes, { object } from 'prop-types'
import React from 'react';


const ContactUsV11 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {})
    const style = get(props, 'style', {})
    return (
        <div className={`relative py-12 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`absolute w-[600px] h-[650px] max-sm:w-[280px] bg-blue-50 rounded-full rounded-l-none ${get(tailwindClasses,'shape')}`} style={get(style,'shape')}></div>
            <div className={`lg:mx-32 max-sm:mx-5 md:mx-5`}>
                <div className={`relative flex max-sm:flex-col gap-10 ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                    <div className='container'>
                        {get(props, 'title',"").length !== 0 && <h1 className={`text-5xl max-sm:text-center font-bold mb-5 p-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                        {get(props, 'items',[]).map((item) => <div className={`p-3 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                            {get(item, 'sectionTitle',"").length !== 0 && <h1 className={`text-2xl font-semibold mb-4 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'sectionTitle')}</h1>}
                            <div className={`flex max-sm:flex-col justify-between mb-4`}>
                                {get(item, 'text1',"").length !== 0 && <div className={`flex max-sm:mb-4 gap-2`}>
                                    {get(item, 'icon1',"").length !== 0 && <span className={`text-sky-500 ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(item, 'icon1'))}</span>}
                                    <span className={`${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(item, 'text1')}</span>
                                </div>}
                                {get(item, 'text2',"").length !== 0 && <div className={`flex gap-2`}>
                                    {get(item, 'icon2',"").length !== 0 && <span className={`text-sky-500 ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(item, 'icon2'))}</span>}
                                    <span className={`${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(item, 'text2')}</span>
                                </div>}
                            </div>
                            {get(item, 'text3',"").length !== 0 && <div className={`flex gap-2`}>
                                {get(item, 'icon3',"").length !== 0 && <span className={`text-sky-500 ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(item, 'icon3'))}</span>}
                                <span className={`${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(item, 'text3')}</span>
                            </div>}
                        </div>)}
                    </div>
                    {get(props, 'mapPath',"").length !== 0 && <div className="container">
                        <iframe
                            className={`w-full h-full border-0 ${get(tailwindClasses, "mapBox")}`}
                            src={get(props, 'mapPath')}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map Location"
                            style={get(style, 'mapBox')}
                        ></iframe>
                    </div>}
                </div>
            </div>
        </div>
    )
}

ContactUsV11.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    mapPath: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.arrayOf(object)
}
ContactUsV11.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        shape:{},
        title: {},
        sectionBox: {},
        sectionTitle: {},
        sectionIcon: {},
        sectionText: {},
        mapBox: {}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        shape:"",
        title: "",
        sectionBox: "",
        sectionTitle: "",
        sectionIcon: "",
        sectionText: "",
        mapBox: ""
    },
    mapPath: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.3755706088714!2d72.90087283896635!3d19.09423377943457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7d640637815%3A0x6e4c422ab37e5404!2sJhambul%20Pada!5e0!3m2!1sen!2sin!4v1733381939820!5m2!1sen!2sin",
    title: "Our Clinics",
    items: [
        {
            sectionTitle: "Dental Clinic",
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" /></svg>`,
            text1: "+123 456 78 91",
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" /><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" /></svg>`,
            text2: "Hello@Nexnnova.com",
            icon3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" /></svg>`,
            text3: "Lorem ipsum street no.14 Block A",
        },
        {
            sectionTitle: "Dental Clinic",
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" /></svg>`,
            text1: "+123 456 78 91",
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" /><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" /></svg>`,
            text2: "Hello@Nexnnova.com",
            icon3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" /></svg>`,
            text3: "Lorem ipsum street no.14 Block A",
        },
        {
            sectionTitle: "Dental Clinic",
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" /></svg>`,
            text1: "+123 456 78 91",
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" /><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" /></svg>`,
            text2: "Hello@Nexnnova.com",
            icon3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" /></svg>`,
            text3: "Lorem ipsum street no.14 Block A",
        },
        {
            sectionTitle: "Dental Clinic",
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" /></svg>`,
            text1: "+123 456 78 91",
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" /><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" /></svg>`,
            text2: "Hello@Nexnnova.com",
            icon3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" /></svg>`,
            text3: "Lorem ipsum street no.14 Block A",
        },
    ]
}
export default ContactUsV11
