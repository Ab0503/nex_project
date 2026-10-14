import React from 'react';
import parse from 'html-react-parser';
import get from 'lodash.get';
import { object, string } from 'prop-types';

const CallToActionV12 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <section className={`py-16 px-5 bg-fuchsia-600 text-white ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='max-w-5xl mx-auto flex flex-wrap'>
                <div className='w-full md:w-6/12 max-sm:mb-5'>
                    <div className='flex items-start gap-3 relative'>
                        <div className='max-sm:hidden absolute -left-5 w-16 h-16'>
                            <div className=' inset-0 opacity-40 scale-[1.8]'>
                                {parse(get(props, 'icon'))}
                            </div>
                        </div>
                        {get(props, 'icon','').length !==0 &&<div  className={`inline-flex ${get(tailwindClasses,'icon')}`} style={get(style,'icon')}>
                            {parse(get(props, 'icon'))}
                        </div>}
                        <div>
                            {get(props, 'title', '').length !== 0 && <h1 className={`text-lg font-medium uppercase ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                            {get(props, 'description', '').length !== 0 && <p className={`text-sm text-gray-200 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-6/12 relative'>
                    {get(props, 'inputPlaceholder', '').length !== 0 && <input className={`w-full py-3 px-4 pr-32 placeholder:text-sm uppercase text-black ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} type="text" placeholder={get(props, 'inputPlaceholder')} />}
                    {get(props, 'ctaText', "").length !== 0 &&
                        <button className={`absolute top-0 right-0 h-full px-6 nx-btn-primary text-[12px] uppercase font-medium group overflow-hidden z-[1] ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
                            <span className="absolute inset-0 scale-0 nx-btn-primary:hover group-hover:scale-150 transition-transform duration-300 ease-out rounded-full origin-center z-0"></span>
                            <span className="relative z-10">{get(props, 'ctaText')}</span>
                        </button>}
                </div>
            </div>
        </section>
    )
}

CallToActionV12.propTypes = {
    style: object,
    tailwindClasses: object,
    icon: string,
    title: string,
    description: string,
    inputPlaceholder: string,
    ctaText: string
}

CallToActionV12.defaultProps = {
    style: {
        container: {},
        icon: {},
        title: {},
        description: {},
        inputBox: {},
        cta: {}
    },
    tailwindClasses: {
        container: "",
        icon: "",
        title: "",
        description: "",
        inputBox: "",
        cta: ""
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" /></svg>`,
    title: "STAY UPDATED WITH ACADEMICA",
    description: "Nulla feugiat nibh placerat fermentum rutrum ante risus euismod",
    inputPlaceholder: "Your Email Address...",
    ctaText: "Subscribe"
}
export default CallToActionV12
