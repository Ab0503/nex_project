import React from 'react';
import get from 'lodash.get';
import parse from 'html-react-parser';
import { arrayOf, object, string } from 'prop-types';

const CallToActionV10 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <section className={`py-16 px-5 bg-yellow-600 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'title', '').length !== 0 && <h1 className={`text-4xl text-center font-bold mb-10 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
            <form className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
                <input type="text" placeholder="First name" className={`bg-gray-300 focus:bg-white focus:ring-0 px-10 py-3 w-full border-none outline-none placeholder-black transition-all duration-300 text-sm ${get(tailwindClasses,'inputBox')}`} style={get(style,'inputBox')} />
                <input type="text" placeholder="Phone number" className={`bg-gray-300 focus:bg-white focus:ring-0 px-8 py-3 w-full border-none outline-none placeholder-black transition-all duration-300 text-sm ${get(tailwindClasses,'inputBox')}`} style={get(style,'inputBox')}/>
                <select className={`bg-gray-300 focus:bg-white px-8 py-3 w-full focus:ring-0 border-none outline-none transition-all duration-300 text-sm ${get(tailwindClasses,'inputBox')}`} style={get(style,'inputBox')}>
                    {get(props,'options',[]).map((item)=><option>
                        {get(item,'value')}
                    </option>)}
                </select>
            </form>
            {get(props, 'ctaIcon','').length !==0 &&<button type='submit' className={`mt-6 mx-auto bg-gray-950 text-white border-[3px] border-gray-950 hover:bg-yellow-600 hover:text-gray-950 hover:border-white uppercase font-bold py-3 px-6 flex items-center gap-2 group text-sm transition-all duration-400 ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}>
                {get(props, 'ctaText')}
                <span className={`text-yellow-600 group-hover:text-gray-950 ${get(tailwindClasses,'ctaIcon')}`} style={get(style,'ctaIcon')}>{parse(get(props, 'ctaIcon'))}</span>
            </button>}
        </section>
    )
}

CallToActionV10.propTypes = {
    style: object,
    tailwindClasses: object,
    options: arrayOf(object),
    title: string,
    ctaText: string,
    ctaIcon: string
}, 

CallToActionV10.defaultProps = {
    style: {
        container:{},
        title:{},
        inputBox:{},
        cta:{},
        ctaIcon:{}
    },
    tailwindClasses: {
        container:"",
        title:"",
        inputBox:"",
        cta:"",
        ctaIcon:""
    },
    options:[
        {
            value:"Business Planning",
        },
        {
            value:"Financial Consulting",
        },
        {
            value:"Marketing Strategy",
        },
    ],
    title: "Request a call back",
    ctaText: "Submit",
    ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>`,
}
export default CallToActionV10
