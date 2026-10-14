import parse from 'html-react-parser';
import get from 'lodash.get';
import { arrayOf, object, string } from 'prop-types';
import React from 'react'
import CountUp from 'react-countup';

const StatsV11 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {})
    return (
        <section className={`py-16 overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
                <div className={`flex flex-wrap xl:mx-20 mx-[15px] justify-center ${get(tailwindClasses,'contentContainer')}`} style={get(style,'contentContainer')}>
                    <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full max-lg:text-center">
                        {get(props, 'subTitle',"").length !==0 && <h2 className={`text-[.75rem] uppercase nx-text-primary tracking-[0.02rem] leading-[1.35] !mb-3 ${get(tailwindClasses,'subTitle')}`} style={get(style,'subTitle')}>{get(props, 'subTitle')}</h2>}
                        {get(props, 'title',"").length !==0 && <h3 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] xl:pr-20 ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props, 'title')}</h3>}
                    </div>
                    <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-30px] !text-center">
                            {get(props,'items',[]).map((item)=><div className={`xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px] ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}>
                                {get(item,'icon',"").length !==0 &&<span className={`inline-flex nx-text-primary !mb-3 m-[0_auto] ${get(tailwindClasses,'icon')}`} style={get(style,'icon')}>{parse(get(item,'icon'))}</span>}
                                {get(item,'value',"").length !==0 &&<h3 className={`xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2 font-bold ${get(tailwindClasses,'value')}`} style={get(style,'value')}><CountUp end={get(item,'value')} enableScrollSpy/></h3>}
                                {get(item,'text',"").length !==0 &&<p className={`!mb-0 ${get(tailwindClasses,'text')}`} style={get(style,'text')}>{get(item,'text')}</p>}
                            </div>)}
                        </div>
                    </div>
                </div>
        </section>
    )
}

StatsV11.propTypes={
        style: object,
        tailwindClasses: object,
        subTitle: string,
        title: string,
        items: arrayOf(object)
}

StatsV11.defaultProps = {
    style: {
        container:{},
        contentContainer:{},
        subTitle:{},
        title:{},
        sectionBox:{},
        icon:{},
        value:{},
        text:{}
    },
    tailwindClasses: {
        container:"",
        contentContainer:"",
        subTitle:"",
        title:"",
        sectionBox:"",
        icon:"",
        value:"",
        text:""
    },
    subTitle: "Company Facts",
    title: "We are proud of our works",
    items: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" /></svg>`,
            value: 7518,
            text: "Completed Projects"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
</svg>
`,
            value: 3472,
            text: "Happy Customers"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
  <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
  <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
</svg>
`,
            value: 2184,
            text: "Expert Employees"
        }
    ]
}
export default StatsV11
