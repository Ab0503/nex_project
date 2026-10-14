import NexAnimation from '@nex-components/NexAnimation';
import get from 'lodash.get';
import { arrayOf, object, string } from 'prop-types';
import React from 'react'
import CountUp from 'react-countup';

const StatsV12 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {})
    return (
        <section className={`bg-auto !text-center bg-[center_center] bg-no-repeat !bg-scroll relative z-[0] ${get(tailwindClasses, 'container')}`} style={{ backgroundImage: `url(${get(props, 'bgImage')})`, ...get(style, 'container') }}>
            <div className="py-20 xl:pt-28 lg:pt-28 md:pt-28 xl:pb-32 lg:pb-32 md:pb-32">
                <div className="flex flex-wrap mx-[15px] xl:pt-14 lg:pt-14 md:pt-14">
                    <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                        <NexAnimation type={get(props, 'topContentAnimation')}>
                            {get(props, 'subTitle', "").length !== 0 && <h2 className={`text-[.75rem] uppercase nx-text-primary !mb-3 tracking-[0.02rem] leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h2>}
                            {get(props, 'title', '').length !== 0 && <h3 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] !mb-8 lg:!px-14 xl:!px-14 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h3>}
                        </NexAnimation>
                    </div>
                </div>
                <div className="flex flex-wrap mx-[15px] xl:pb-14 lg:pb-14 md:pb-14">
                    <div className="md:w-10/12 lg:w-9/12 xl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                        <div className="flex flex-wrap mx-[15px] items-center counter-wrapper mt-[-20px] xl:mt-0 lg:mt-0 md:mt-0">
                            {get(props, 'items', []).map((item) =><div className={`xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full !text-center mt-[20px] xl:mt-0 lg:mt-0 md:mt-0 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                            <NexAnimation type={get(props, 'bottomContentAnimation')}>
                                {get(item, 'value', '').length !== 0 && <h3 className={`text-[calc(1.345rem_+_1.14vw)] tracking-[normal] !leading-none mb-2 xl:text-[2.2rem] nx-text-primary font-bold ${get(tailwindClasses, 'value')}`} style={get(style, 'value')}><CountUp enableScrollSpy end={get(item, 'value')} /></h3>}
                                {get(item, 'text', '').length !== 0 && <p className={`text-[0.8rem] font-medium mb-0 text-gray-600 ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item, 'text')}</p>}
                                </NexAnimation>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

StatsV12.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
    bgImage: string,
    items: arrayOf(object)
}

StatsV12.defaultProps = {
    style: {
        container: {},
        subTitle: {},
        title: {},
        sectionBox: {},
        value: {},
        text: {}
    },
    tailwindClasses: {
        container: "",
        subTitle: "",
        title: "",
        sectionBox: "",
        value: "",
        text: ""
    },
    subTitle: "Join Our Community",
    title: "We are trusted by over 5000+ clients. Join them now and grow your business.",
    bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735795487.map.png",
    topContentAnimation:"",
    bottomContentAnimation:"",
    items: [
        {
            value: 7518,
            text: "Completed Projects"
        },
        {
            value: 5472,
            text: "Satisfied Customers"
        },
        {
            value: 2184,
            text: "Expert Employees"
        }
    ]
}
export default StatsV12