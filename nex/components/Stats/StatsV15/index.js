import NexAnimation from '@nex-components/NexAnimation';
import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get'
import { number, object, string } from 'prop-types';
import React from 'react'
import CountUp from 'react-countup';

const StatsV15 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {})
    return (
        <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
                <div className={`flex flex-wrap xl:mx-20 mx-[7.5px] xl:mt-0 lg:mt-0 items-center ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                    {get(props, 'image', "").length !== 0 && <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[7.5px] xl:mt-0 lg:mt-0 max-w-full !mx-auto xl:!order-2 lg:!order-2">
                        <NexAnimation type={get(props, 'rightContentAnimation')}>
                            <figure className="m-0 p-0"><NexImage className={`!relative ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props, 'image')} alt="image" /></figure>
                        </NexAnimation>
                    </div>}
                    <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[7.5px] xl:mt-0 lg:mt-0 max-w-full mr-auto">
                        <NexAnimation type={get(props, 'leftContentAnimation')}>
                            {get(props, 'subTitle', "").length !== 0 && <h2 className={`text-[0.8rem] uppercase nx-text-primary !mb-3 !leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h2>}
                            {get(props, 'title', "").length !== 0 && <h3 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] mb-5 xxl:pr-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h3>}
                            {get(props, 'description', "").length !== 0 && <p className={`!mb-6 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                            <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-30px]">
                                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                                    {get(props, 'value1', "").length !== 0 && <h3 className={`text-[calc(1.345rem_+_1.14vw)] tracking-[normal] !leading-none xl:text-[2.2rem] !mb-1 font-bold ${get(tailwindClasses, 'value')}`} style={get(style, 'value')}><CountUp decimals={1} enableScrollSpy end={get(props, 'value1')} />%</h3>}
                                    {get(props, 'text1', "").length !== 0 && <h6 className={`text-[0.85rem] !mb-1 ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text1')}</h6>}
                                    {get(props, 'text1', "").length !== 0 && <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five"></span>}
                                </div>
                                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                                    {get(props, 'value2', "").length !== 0 && <h3 className={`text-[calc(1.345rem_+_1.14vw)] tracking-[normal] !leading-none xl:text-[2.2rem] !mb-1 font-bold ${get(tailwindClasses, 'value')}`} style={get(style, 'value')}><CountUp enableScrollSpy duration={5.2} end={get(props, 'value2')} />x</h3>}
                                    {get(props, 'text2', "").length !== 0 && <h6 className={`text-[0.85rem] !mb-1 ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text2')}</h6>}
                                    {get(props, 'text2', "").length !== 0 && <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five"></span>}
                                </div>
                            </div>
                        </NexAnimation>
                    </div>
                </div>
        </section>
    )
}

StatsV15.propTypes = {
    style: object,
    tailwindClasses: object,
    image: string,
    subTitle: string,
    title: string,
    description: string,
    value1: number,
    text1: string,
    value2: number,
    text2: string
}

StatsV15.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        subTitle: {},
        title: {},
        description: {},
        value: {},
        text: {}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        subTitle: "",
        title: "",
        description: "",
        value: "",
        text: ""
    },
    image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735808855.3d5.png",
    subTitle: "Our Solutions",
    title: "Just sit & relax while we take care of your business needs.",
    description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna.",
    value1: 99.7,
    text1: "Customer Satisfaction",
    value2: 4,
    text2: "New Visitors",
    leftContentAnimation:"",
    rightContentAnimation:""
}
export default StatsV15
