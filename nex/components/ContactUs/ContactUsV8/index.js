import parse from 'html-react-parser/lib/index';
import get from 'lodash.get';
import React from 'react';
import PropTypes from 'prop-types'

const ContactUsV8 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {})
    const style = get(props, 'style', {})
    return (
        <div className={`bg-cover bg-no-repeat ${get(tailwindClasses, 'container')}`} style={{ backgroundImage: `url('${get(props, 'bgImage')}')`, ...get(style, 'container') }}>
            <div className={`grid grid-cols-6 max-md:grid-cols-4 max-sm:grid-cols-3`}>
                <div className={`bg-emerald-700 col-start-4 max-md:col-start-2 max-sm:col-start-2 max-sm:col-span-2 col-span-2 p-16 max-lg:p-8 max-sm:p-3 ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                    {get(props, 'subTitle').length !== 0 && <h1 className={`text-gray-50 text-sm font-light ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
                    {get(props, 'title').length !== 0 && <h1 className={`text-gray-50 text-3xl font-bold mb-4 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                    <div className='flex flex-col gap-4 my-3'>
                        <div className='flex gap-2'>
                            {get(props, 'input1PlaceholderText').length !== 0 && <div className="relative">
                                {get(props, 'input1Icon').length !== 0 && <div className={`absolute right-0 inset-y-0 flex items-center pointer-events-none pr-3 text-yellow-400 ${get(tailwindClasses, 'inputIcon')}`} style={get(style, 'inputIcon')}>
                                    {parse(get(props, 'input1Icon'))}
                                </div>}
                                <input className={`pr-10 w-full p-2 rounded-md text-sm focus:outline-none bg-emerald-800 text-gray-50 ${get(tailwindClasses, 'input')}`} style={get(style, 'input')} type="text" placeholder={get(props, 'input1PlaceholderText')} />
                            </div>}
                            {get(props, 'input2PlaceholderText').length !== 0 && <div className="relative">
                                {get(props, 'input2Icon').length !== 0 && <div className={`absolute right-0 inset-y-0 flex items-center pointer-events-none pr-3 text-yellow-400 ${get(tailwindClasses, 'inputIcon')}`} style={get(style, 'inputIcon')}>
                                    {parse(get(props, 'input2Icon'))}
                                </div>}
                                <input className={`pr-10 w-full p-2 rounded-md text-sm focus:outline-none bg-emerald-800 text-gray-50 ${get(tailwindClasses, 'input')}`} style={get(style, 'input')} type="text" placeholder={get(props, 'input2PlaceholderText')} />
                            </div>}
                        </div>
                        {get(props, 'input3PlaceholderText').length !== 0 && <div className="relative">
                            {get(props, 'input3Icon').length !== 0 && <div className={`absolute right-0 inset-y-0 flex items-center pointer-events-none pr-3 text-yellow-400 ${get(tailwindClasses, 'inputIcon')}`} style={get(style, 'inputIcon')}>
                                {parse(get(props, 'input3Icon'))}
                            </div>}
                            <input className={`w-full pr-10 p-2 rounded-md text-sm focus:outline-none bg-emerald-800 text-gray-50 ${get(tailwindClasses, 'input')}`} style={get(style, 'input')} type="text" placeholder={get(props, 'input3PlaceholderText')} />
                        </div>}
                        {get(props, 'textareaPlaceholderText').length !== 0 && <div className="relative">
                            {get(props, 'textareaIcon').length !== 0 && <div className={`absolute right-0 top-2 flex items-center pointer-events-none pr-3 text-yellow-400 ${get(tailwindClasses, 'inputIcon')}`} style={get(style, 'inputIcon')}>
                                {parse(get(props, 'textareaIcon'))}
                            </div>}
                            <textarea className={`w-full resize-none h-24 pr-10 p-2 rounded-md text-sm focus:outline-none bg-emerald-800 text-gray-50 ${get(tailwindClasses, 'textArea')}`} style={get(style, 'textArea')} placeholder={get(props, 'textareaPlaceholderText')}></textarea>
                        </div>}
                    </div>
                    {get(props, 'ctaText').length !== 0 && <button className={`text-xs bg-yellow-400 text-emerald-800 hover:bg-yellow-600 px-5 py-2 rounded-full ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}><a href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</a></button>}
                </div>
            </div>
        </div>
    )
}

ContactUsV8.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        title: {},
        subTitle: {},
        input: {},
        inputIcon: {},
        textArea: {},
        cta: {},
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        title: "",
        subTitle: "",
        input: "",
        inputIcon: "",
        textArea: "",
        cta: "",
    },
    subTitle: "Start Donating Poor People",
    title: "Send Us message For Donate!",
    bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297550.1200x400 - Website banner.png",
    ctaText: "Get a Quote",
    ctaLink: "#",
    input1Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>`,
    input1PlaceholderText: "your email...",
    input2Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" /></svg>`,
    input2PlaceholderText: "your phone...",
    input3Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" /></svg>`,
    input3PlaceholderText: "your address...",
    textareaIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" /><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" /></svg>`,
    textareaPlaceholderText: "write message..."
}
ContactUsV8.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    bgImage: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
    input1Icon: PropTypes.string,
    input2Icon: PropTypes.string,
    input3Icon: PropTypes.string,
    textareaIcon: PropTypes.string,
}
export default ContactUsV8
