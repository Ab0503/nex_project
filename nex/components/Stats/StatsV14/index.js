import NexAnimation from '@nex-components/NexAnimation';
import parse from 'html-react-parser';
import get from 'lodash.get'
import { arrayOf, object } from 'prop-types';
import React from 'react'
import CountUp from 'react-countup';

const StatsV14 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {})
    return (
        <section className={`overflow-hidden py-8 ${get(tailwindClasses,'container')}`} style={get(style,'container')}>
            <div className="">
                <div className="flex flex-wrap mx-[15px]">
                    <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                        <div className="flex flex-wrap mx-[15px] items-center mt-[-30px] !text-center">
                            {get(props,'items',[]).map((item)=>
                            
                            <div className={`xl:w-3/12 lg:w-3/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px] ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}>
                                <NexAnimation type={get(props, 'boxAnimation', '')}>
                                {get(item, 'icon', "").length !== 0 && <span className={`inline-flex nx-text-primary !mb-3 m-[0_auto] ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(item, 'icon'))}</span>}
                                {get(item,'value',"").length !==0 &&<h3 className={`xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2 font-bold ${get(tailwindClasses,'value')}`} style={get(style,'value')}><CountUp end={get(item,'value')} enableScrollSpy/></h3>}
                                {get(item,'text',"").length !==0 &&<p className={`!mb-0 ${get(tailwindClasses,'text')}`} style={get(style,'text')}>{get(item,'text')}</p>}
                                </NexAnimation>
                            </div>
                            
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

StatsV14.propTypes={
    style: object,
    tailwindClasses: object,
    items: arrayOf(object)
}
StatsV14.defaultProps = {
    style:{
        container:{},
        sectionBox:{},
        icon:{},
        value:{},
        text:{}
    },
    tailwindClasses:{
        container:"",
        sectionBox:"",
        icon:"",
        value:"",
        text:""
    },
    items: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" /></svg>`,
            value: 7518,
            text: "Completed Projects"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" /></svg>`,
            value: 3472,
            text: "Happy Customers"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path fill-rule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" /><path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" /></svg>`,
            value: 2184,
            text: "Expert Employees"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path fill-rule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clip-rule="evenodd" /></svg>`,
            value: 4523,
            text: "Awards Won"
        }
    ],
    boxAnimation: ''
}
export default StatsV14
