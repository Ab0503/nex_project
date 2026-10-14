import React from 'react';
import get from 'lodash.get';
import parse from 'html-react-parser';
import { object, string } from 'prop-types';

const PencilBannerV8 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <section className={`bg-neutral-900 text-white p-3 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='max-w-6xl mx-auto flex flex-wrap gap-4 justify-between'>
                <div className='flex'>
                    {get(props, 'text1', '').length !== 0 && <div className='flex items-center gap-2 pr-4 border-r'>
                        {get(props, 'icon1', '').length !== 0 && <span className={`${get(tailwindClasses,'icon')}`} style={get(style,'icon')}>{parse(get(props, 'icon1'))}</span>}
                        <p className={`text-sm ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text1')}</p>
                    </div>}
                    {get(props, 'text2', '').length !== 0 && <div className='flex items-center gap-2 pl-4'>
                        {get(props, 'icon2', '').length !== 0 && <span className={`${get(tailwindClasses,'icon')}`} style={get(style,'icon')}>{parse(get(props, 'icon2'))}</span>}
                        <a className={`text-sm hover:underline ${get(tailwindClasses, 'text')}`} href={`mailto:${get(props, 'text2')}`}>{get(props, 'text2')}</a>
                    </div>}
                </div>
                <div className='flex items-center gap-3'>
                    {get(props, 'ctaText','').length !==0 &&<button className={`nx-btn-primary hover:text-neutral-900 uppercase transition-all duration-300 text-[10px] py-1 px-3 ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}>{get(props, 'ctaText')}</button>}
                    {get(props, 'text3', '').length !== 0 && <p className={`text-sm ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text3')}</p>}
                </div>
            </div>
        </section>
    )
}

PencilBannerV8.propTypes = {
    style: object,
    tailwindClasses: object,
    icon1: string,
    text1: string,
    icon2: string,
    text2: string,
    ctaText: string,
    text3: string
},

PencilBannerV8.defaultProps = {
    style: {
        container:{},
        icon:{},
        text:{},
        cta:{}
    },
    tailwindClasses: {
        container:"",
        icon:"",
        text:"",
        cta:""
    },
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>`,
    text1: "(123) 0800 12345",
    icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>`,
    text2: "Info@academica.com",
    ctaText:"Latest",
    text3: "We have added new courses today ..."
}
export default PencilBannerV8
