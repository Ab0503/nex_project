import parse from 'html-react-parser';
import get from 'lodash.get';
import { number, object, string } from 'prop-types';
import React from 'react'
import CountUp from 'react-countup';
import NexAnimation from '@nex-components/NexAnimation';


const StatsV10 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
                <div className={`flex flex-wrap mx-[15px] xl:mx-20 lg:mx-8 items-center ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                    <div className="xl:w-6/12 lg:w-6/12 flex-[0_0_auto] xl:px-0 lg:px-0 px-[15px] max-w-full xl:!order-2 xl:!ml-[8.33333333%] lg:!order-2 lg:!ml-[8.33333333%] grid mb-10">
                        <div className="flex flex-wrap mx-[15px] xl:mx-[12.5px] lg:mx-[12.5px] md:mx-[12.5px] mt-[25px] items-center">
                            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full mt-[25px]">
                                <div className={`rounded-lg shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] ${get(tailwindClasses, 'section1Box')}`} style={get(style, 'section1Box')}>
                                    <div className="flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                                        <div className="flex lg:block xl:flex flex-row p-2">
                                            <div>
                                                {get(props, 'icon1',"").length !==0 &&<div className={`nx-text-primary nx-bg-primary-light mr-4 lg:mb-3 xl:mb-0 xl:text-[1.3rem] w-12 h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none p-0 rounded-[100%] ${get(tailwindClasses,'icon1')}`} style={get(style,'icon1')}>{parse(get(props, 'icon1'))} </div>}
                                            </div>
                                            <div>
                                                {get(props, 'value1', "").length !== 0 && <h3 className={`mb-1 xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none font-bold ${get(tailwindClasses, 'value')}`} style={get(style, 'value')}><CountUp enableScrollSpy end={get(props, 'value1')} /></h3>}
                                                {get(props, 'text1', "").length !== 0 && <p className={`mb-0 text-sm ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text1')}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full mt-[25px]">
                                <div className={`rounded-lg shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] ${get(tailwindClasses, 'section2Box')}`} style={get(style, 'section2Box')}>
                                    <div className="flex-[1_1_auto] pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                                        <div className="flex lg:block xl:flex flex-row p-2">
                                            <div>
                                                {get(props, 'icon2',"").length !==0 &&<div className={`nx-text-primary nx-bg-primary-light mx-auto mr-4 lg:mb-3 xl:mb-0 xl:text-[1.3rem] w-12 h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none p-0 rounded-[100%] ${get(tailwindClasses,'icon2')}`} style={get(style,'icon2')}> {parse(get(props, 'icon2'))} </div>}
                                            </div>
                                            <div>
                                                {get(props, 'value2', "").length !== 0 && <h3 className={`mb-1 xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] leading-none font-bold ${get(tailwindClasses, 'value')}`} style={get(style, 'value')}><CountUp enableScrollSpy end={get(props, 'value2')} /></h3>}
                                                {get(props, 'text2', "").length !== 0 && <p className={`mb-0 text-sm ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text2')}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full mt-[25px]">
                                <div className={`rounded-lg !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] ${get(tailwindClasses, 'section3Box')}`} style={get(style, 'section3Box')}>
                                    <div className="flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                                        <div className="flex lg:block xl:flex flex-row p-2">
                                            <div>
                                                {get(props, 'icon3','').length !==0 &&<div className={`nx-text-primary nx-bg-primary-light mx-auto mr-4 lg:mb-3 xl:mb-0 xl:text-[1.3rem] w-12 h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none p-0 rounded-[100%] ${get(tailwindClasses,'icon3')}`} style={get(style,'icon3')}> {parse(get(props, 'icon3'))} </div>}
                                            </div>
                                            <div>
                                            {get(props, 'value3', "").length !== 0 && <h3 className={`mb-1 xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] leading-none font-bold ${get(tailwindClasses, 'value')}`} style={get(style, 'value')}><CountUp enableScrollSpy end={get(props, 'value3')} /></h3>}
                                                {get(props, 'text3',"").length !==0 &&<p className={`mb-0 text-sm ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text3')}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full mt-[25px]">
                                <div className={`rounded-lg !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] ${get(tailwindClasses, 'section4Box')}`} style={get(style, 'section4Box')}>
                                    <div className="flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                                        <div className="flex lg:block xl:flex flex-row p-2">
                                            <div>
                                                {get(props, 'icon4','').length !==0 &&<div className={`nx-text-primary nx-bg-primary-light mx-auto mr-4 lg:mb-3 xl:mb-0 xl:text-[1.3rem] w-12 h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none p-0 rounded-[100%] ${get(tailwindClasses,'icon4')}`} style={get(style,'icon4')}> {parse(get(props, 'icon4'))} </div>}
                                            </div>
                                            <div>
                                                {get(props, 'value4',"").length !==0 &&<h3 className={`!mb-1 xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none font-bold ${get(tailwindClasses,'value')}`} style={get(style,'value')}><CountUp enableScrollSpy end={get(props, 'value4')} /></h3>}
                                                {get(props, 'text4',"").length !==0 &&<p className={`!mb-0 text-sm ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text4')}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-0 lg:px-0 px-[15px] max-w-full">
                    <NexAnimation  type={get(props, 'leftContentAnimation', '')}>
                        {get(props, 'title', "").length !== 0 && <h2 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[2.2rem] leading-[1.3] !mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
                        {get(props, 'subTitle', "").length !== 0 && <p className={`lead !text-[1.3rem] !leading-[1.6] font-medium mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</p>}
                        {get(props, 'description', "").length !== 0 && <p className={`mb-0 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                    </NexAnimation>
                    </div>
                </div>
        </section>
    )
}

StatsV10.propTypes={
        style: object,
        tailwindClasses: object,
        title: string,
        subTitle: string,
        description: string,
        icon1: string,
        value1: number,
        text1: string,
        icon2: string,
        value2: number,
        text2: string,
        icon3: string,
        value3: number,
        text3: string,
        icon4: string,
        value4: number,
        text4: string,
}
StatsV10.defaultProps = {
    style: {
        container:{},
        contentContainer:{},
        title:{},
        subTitle:{},
        description:{},
        section1Box:{},
        section2Box:{},
        section3Box:{},
        section4Box:{},
        icon1:{},
        icon2:{},
        icon3:{},
        icon4:{},
        text:{},
        value:{}
    },
    tailwindClasses: {
        container:"",
        contentContainer:"",
        title:"",
        subTitle:"",
        description:"",
        section1Box:"",
        section2Box:"",
        section3Box:"",
        section4Box:"",
        icon1:"",
        icon2:"",
        icon3:"",
        icon4:"",
        text:"",
        value:""
    },
    leftContentAnimation: "",
    title: "Join Our Community",
    subTitle: "We have considered our business solutions to support you on every stage of your growth.",
    description: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>`,
    value1: 7518,
    text1: "Projects Done",
    icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>`,
    value2: 3472,
    text2: "Happy Customers",
    icon3: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
    value3: 4537,
    text3: "Expert Employees",
    icon4: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" /></svg>`,
    value4: 2184,
    text4: "Awards Won",
}
export default StatsV10
