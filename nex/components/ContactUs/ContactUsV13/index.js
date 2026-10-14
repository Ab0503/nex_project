import NexAnimation from '@nex-components/NexAnimation';
import NexImage from '@nex-core-ui/NexImage';
import parse from 'html-react-parser';
import get from 'lodash.get';
import { arrayOf, object, string } from 'prop-types';
import React from 'react';

const ContactUsV13 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {})
    return (
        <div className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`flex flex-wrap mx-[15px] md:mx-[20px] lg:mx-[20px] xl:mx-[35px] items-center justify-center ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                <div className="md:w-8/12 lg:w-6/12 xl:w-5/12 lg:!ml-0 xl:!ml-[8.33333333%] w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full !relative">
                    <NexAnimation type={get(props, 'leftContentAnimation')}>
                        <div className="shape bg-dot !w-[7rem] !h-[12.5rem] !bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50" data-rellax-speed="1" style={{ top: "-2rem", left: "-1.4rem" }}></div>
                        {get(props, 'imagePath1', "").length !== 0 && <figure className="!rounded-[.4rem] relative z-[2]"><NexImage className={`!relative !rounded-[.4rem] w-full max-w-full !h-auto ${get(tailwindClasses, 'image1')}`} style={get(style, 'image1')} src={get(props, 'imagePath1')} alt="image" /></figure>}
                    </NexAnimation>
                </div>
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
                    <NexAnimation type={get(props, 'rightContentAnimation')}>
                        <NexImage src={get(props, 'imagePath2')} className={`!relative !w-[2.6rem] !h-[2.6rem] mb-4 ${get(tailwindClasses, 'image2')}`} style={get(style, 'image2')} alt="image" />
                        <h2 className={`nx-section-heading-font font-bold xl:text-4xl leading-[1.3] !mb-8 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>
                        {get(props, 'items', []).map((item) => <div className="flex flex-row">
                            <div>
                                {get(item, 'icon', '').length !== 0 && <div className={`nx-text-primary  xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] mr-6 mt-1 ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(item, 'icon'))}
                                </div>}
                            </div>
                            <div>
                                {get(item, 'title', '').length !== 0 && <h5 className={`!mb-1 text-xl font-medium ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h5>}
                                {get(item, 'description', '').length !== 0 && <p className={`not-italic leading-[inherit] mb-4 text-lg text-gray-600 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(item, 'description')}</p>}
                            </div>
                        </div>)}
                    </NexAnimation>
                </div>
            </div>
        </div>
    )
}

ContactUsV13.propTypes = {
    style: object,
    tailwindClasses: object,
    imagePath1: string,
    title: string,
    imagePath2: string,
    items: arrayOf(object)
}
ContactUsV13.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        image1: {},
        image2: {},
        sectionIcon: {},
        sectionTitle: {},
        sectionDescription: {}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        image1: "",
        image2: "",
        sectionIcon: "",
        sectionTitle: "",
        sectionDescription: ""
    },
    imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735225523.about4.jpg",
    title: "Convinced yet? Let's make something great together.",
    imagePath2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735225464.telemarketer.svg",
    leftContentAnimation:"",
    rightContentAnimation:"",
    items: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>`,
            title: "Address",
            description: "Moonshine St. 14/05 Light City, London, United Kingdom"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>`,
            title: "Phone",
            description: "00 (123) 456 78 90"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>`,
            title: "E-mail",
            description: "sandbox@email.com"
        },
    ]
}
export default ContactUsV13
