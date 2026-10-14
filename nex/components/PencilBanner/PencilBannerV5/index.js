import PrimaryLink from '@nex-core-ui/PrimaryLink'
import parse from 'html-react-parser'
import get from 'lodash.get'
import React from 'react'
import { object, string } from 'prop-types'

const PencilBannerV5 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (
        <div className={`nx-bg-primary text-white font-bold text-sm max-sm:px-5 ${get(tailwindClasses,'container')}`} style={get(style,'container')}>
            <div className="py-2 xl:flex lg:flex md:flex xl:flex-row lg:flex-row md:flex-row">
                <div className="flex flex-row items-center">
                    {get(props, 'icon1',"").length !==0 &&<div className={`text-white mt-[.25rem] mr-[.5rem] ${get(tailwindClasses,'icon1')}`} style={get(style,'icon1')}>
                        {parse(get(props, 'icon1'))}
                    </div>}
                    {get(props, 'text1',"").length !==0 &&<address className={`mb-0 not-italic leading-[inherit] block ${get(tailwindClasses,'text1')}`} style={get(style,'text1')}>{get(props, 'text1')}</address>}
                </div>
                <div className="flex flex-row items-center me-6 ms-auto">
                    {get(props, 'icon2',"").length !==0 &&<div className={`text-white text-[1.1rem] mt-[.25rem] mr-[.5rem] ${get(tailwindClasses,'icon2')}`} style={get(style,'icon2')}>
                        {parse(get(props, 'icon2'))}
                    </div>}
                    {get(props, 'text2',"").length !==0 &&<p className={`mb-0 ${get(tailwindClasses,'text2')}`} style={get(style,'text2')}>{get(props, 'text2')}</p>}
                </div>
                <div className="flex flex-row items-center">
                    {get(props, 'icon3',"").length !==0 &&<div className={`text-white text-[1.1rem] mt-[.25rem] mr-[.5rem] ${get(tailwindClasses,'icon3')}`} style={get(style,'icon3')}>
                        {parse(get(props, 'icon3'))}
                    </div>}
                    {get(props, 'text3',"").length !==0 &&<p className={`mb-0 text-white hover:text-gray-300 ${get(tailwindClasses,'text3')}`} style={get(style,'text3')}><PrimaryLink href={`mailto:${get(props, 'text3')}`}>{get(props, 'text3')}</PrimaryLink></p>}
                </div>
            </div>
        </div>
    )
}
PencilBannerV5.propTypes={
    style: object,
    tailwindClasses:object,
    icon1: string,
    text1: string,
    icon2: string,
    text2: string,
    icon3: string,
    emailLink: string,
    text3: string,
}

PencilBannerV5.defaultProps = {
    style:{
        container:{},
        icon1:{},
        text1:{},
        icon2:{},
        text2:{},
        icon3:{},
        text3:{},
    },
    tailwindClasses:{
        container:"",
        icon1:"",
        text1:"",
        icon2:"",
        text2:"",
        icon3:"",
        text3:"",
    },
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>`,
    text1: "Moonshine St. 14/05 Light City",
    icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>`,
    text2: "00 (123) 456 78 90",
    icon3: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>`,
    text3: "sandbox@email.com",
}
export default PencilBannerV5
