import NexAnimation from '@nex-components/NexAnimation';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get';
import { number, object, string } from 'prop-types';
import React from 'react';
import CountUp from 'react-countup';

const ContactUsV14 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});

    return (
        <div className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="">
                <div className={`flex flex-wrap mx-[15px] xl:mx-[50px] lg:mx-[20px] items-center ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                    <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full max-sm:mb-5">
                    <NexAnimation type={get(props, 'leftContentAnimation')}>
                        <div className="flex flex-wrap mx-[15px] xl:mx-[12.5px] lg:mx-[12.5px] md:mx-[12.5px] relative">
                                <div className="shape bg-dot primary rellax !w-[8rem] !h-[8rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50" data-rellax-speed="1" style={{ top: 0, left: "-1.4rem", zIndex: 0 }}></div>
                                {get(props, 'imagePath1', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] mt-[25px] max-w-full">
                                    <figure className="!rounded-[.4rem] xl:!mt-10 lg:!mt-10 md:!mt-10 !relative"><NexImage className={`!rounded-[.4rem] !relative ${get(tailwindClasses, 'image1')}`} style={get(style, "image1")} src={get(props, 'imagePath1')} alt="image" /></figure>
                                </div>}
                                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] max-w-full">
                                    <div className="flex flex-wrap mx-[15px] xl:mx-[12.5px] lg:mx-[12.5px] md:mx-[12.5px]">
                                        {get(props, 'imagePath2', "").length !== 0 && <div className="w-full flex-[0_0_auto] px-[12.5px] mt-[25px] max-w-full xl:!order-2 lg:!order-2 md:!order-2">
                                            <figure className="rounded-[0.4rem]"><NexImage className={`rounded-[0.4rem] !relative ${get(tailwindClasses, 'image2')}`} style={get(style, 'image2')} src={get(props, 'imagePath2')} alt="image" /></figure>
                                        </div>}
                                        <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full max-lg:mt-10">
                                            <div className={`nx-bg-primary-light !text-center rounded-lg ${get(tailwindClasses, 'counterBox')}`} style={get(style, 'counterBox')}>
                                                <div className=" !py-12 !px-12 counter-wrapper">
                                                    {get(props, 'counterNum', "").length !== 0 && <h3 className={`!whitespace-nowrap text-4xl font-bold tracking-[normal] !leading-none mb-2 ${get(tailwindClasses, 'counterNum')}`} style={get(style, 'counterNum')}><CountUp end={get(props, 'counterNum')} duration={3} enableScrollSpy></CountUp>+</h3>}
                                                    {get(props, 'counterText', "").length !== 0 && <p className={`!mb-0 text-[0.8rem] font-medium ${get(tailwindClasses, 'counterText')}`} style={get(style, 'counterText')}>{get(props, 'counterText')}</p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        </NexAnimation>
                    </div>
                    <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full">
                    <NexAnimation type={get(props,'rightContentAnimation')}>
                            {get(props, 'title', "").length !== 0 && <h2 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-4xl leading-[1.3] !mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
                            {get(props, 'subTitle1', "").length !== 0 && <p className={`lead text-xl !leading-[1.6] font-medium ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle1')} <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]">{get(props, 'subTitle2')} </span>{get(props, 'subTitle3')}</p>}
                            {get(props, 'description', "").length !== 0 && <p className={`text-lg ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                            {get(props, 'cta', "").length !== 0 && <button className={`text-lg font-bold nx-btn-primary nx-btn-primary:hover hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-2 rounded-full !mt-3 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}><PrimaryLink href={get(props, 'ctaLink')}>{get(props, 'cta')}</PrimaryLink></button>}
                            </NexAnimation>
                    </div>
                </div>
            </div>
        </div>

    )
}
ContactUsV14.propTypes = {
    style: object,
    tailwindClasses: object,
    imagePath1: string,
    imagePath2: string,
    title: string,
    subTitle1: string,
    subTitle2: string,
    subTitle3: string,
    description: string,
    counterNum: number,
    counterText: string,
    ctaLink: string,
    cta: string
}

ContactUsV14.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        image1: {},
        image2: {},
        counterBox: {},
        counterNum: {},
        counterText: {},
        title: {},
        subTitle: {},
        description: {},
        cta: {}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        image1: "",
        image2: "",
        counterBox: "",
        counterNum: "",
        counterText: "",
        title: "",
        subTitle: "",
        description: "",
        cta: ""
    },
    imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735231242.g5.jpg",
    imagePath2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735231283.g6.jpg",
    title: "Let’s Talk",
    subTitle1: "Let's make something great together. We are",
    subTitle2: "trusted by",
    subTitle3: "over 5000+ clients. Join them by using our services and grow your business.",
    description: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    counterNum: 5000,
    counterText: "Satisfied Customers",
    ctaLink: "#",
    cta: "Join Us",
    leftContentAnimation: "",
    rightContentAnimation: "",
}
export default ContactUsV14
