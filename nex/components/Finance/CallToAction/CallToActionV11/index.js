import PrimaryLink from '@nex-core-ui/PrimaryLink';
import React from 'react';
import get from 'lodash.get';
import parse from 'html-react-parser';
import { object, string } from 'prop-types';

const CallToActionV11 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});

  return (
    <section className={`bg-yellow-600 py-5 px-5 ${get(tailwindClasses,'container')}`} style={get(style,'container')}>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
            {get(props,'text','').length !==0 &&<h1 className={`text-xl font-bold ${get(tailwindClasses,'text')}`} style={get(style,'text')}>{get(props,'text')}</h1>}
            {get(props,'ctaText','').length !==0 &&<PrimaryLink className={`flex items-center gap-2 uppercase text-sm font-bold text-white bg-gray-950 border-2 border-gray-950 hover:bg-yellow-600 hover:border-white hover:text-gray-950 transition-all duration-300 px-5 py-3 rounded group ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}>
                {get(props,'ctaText')}
                {get(props,'ctaIcon','').length !==0 &&<span className={`text-yellow-600 group-hover:text-gray-950 ${get(tailwindClasses,'ctaIcon')}`} style={get(style,'ctaIcon')}>{parse(get(props,'ctaIcon'))}</span>}
            </PrimaryLink>}
        </div>
    </section>
  )
}

CallToActionV11.propTypes={
    style: object,
    tailwindClasses: object,
    text: string,
    ctaLink: string,
    ctaText: string,
    ctaIcon: string,
},

CallToActionV11.defaultProps={
    style:{
        container:{},
        text:{},
        cta:{},
        ctaIcon:{}
    },
    tailwindClasses:{
        container:"",
        text:"",
        cta:"",
        ctaIcon:""
    },
    text:"Looking for a First-Class Business Plan Consultant?",
    ctaLink:"#",
    ctaText:"Get a quote",
    ctaIcon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>`,
}
export default CallToActionV11
