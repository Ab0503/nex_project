import NexAnimation from '@nex-components/NexAnimation';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get'
import { object, string } from 'prop-types';
import React from 'react'


const ContactUsV12 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {})
    return (
        <div className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] items-center ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                <div className="xl:w-7/12 lg:w-7/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full xl:!order-2 lg:!order-2 !relative">
                    <NexAnimation type={get(props, 'rightContentAnimation')}>
                        {get(props, 'imagePath', "").length !== 0 && <figure className="m-0 p-0"><NexImage className={`!relative !w-auto ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props, 'imagePath')} alt="image" /></figure>}
                    </NexAnimation>
                </div>
                <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full">
                    <NexAnimation type={get(props, 'leftContentAnimation')}>
                        {get(props, 'title', "").length !== 0 && <h2 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-4xl leading-[1.3] !mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
                        {get(props, 'subTitle1', "").length !== 0 && <p className={`lead !text-2xl text-gray-600 !leading-[1.6] font-medium ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle1')} <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]">{get(props, 'subTitle2')} </span>{get(props, 'subTitle3')}</p>}
                        {get(props, 'description', "").length !== 0 && <p className={`text-lg text-gray-600 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                        {get(props, 'cta', "").length !== 0 && <button className={`text-lg font-bold nx-btn-primary nx-btn-primary:hover hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-2 rounded-full !mt-3 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}><PrimaryLink href={get(props, 'ctaLink')}>{get(props, 'cta')}</PrimaryLink></button>}
                    </NexAnimation>
                </div>
            </div>
        </div>
    )
}

ContactUsV12.propTypes = {
    style: object,
    tailwindClasses: object,
    imagePath: string,
    title: string,
    subTitle1: string,
    subTitle2: string,
    subTitle3: string,
    description: string,
    ctaLink: string
}

ContactUsV12.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        image: {},
        title: {},
        subTitle: {},
        description: {},
        cta: {}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        image: "",
        title: "",
        subTitle: "",
        description: "",
        cta: ""
    },
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735221213.i14@2x.png",
    title: "Let’s Talk",
    subTitle1: "Let's make something great together. We are",
    subTitle2: "trusted by",
    subTitle3: "over 5000+ clients. Join them by using our services and grow your business.",
    description: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    ctaLink: "#",
    cta: "Join Us",
    leftContentAnimation: "",
    rightContentAnimation: "",
}

export default ContactUsV12
