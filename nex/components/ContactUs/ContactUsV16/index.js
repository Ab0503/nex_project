import NexAnimation from '@nex-components/NexAnimation';
import parse from 'html-react-parser';
import get from 'lodash.get'
import { arrayOf, string, object } from 'prop-types';
import React from 'react'


const ContactUsV16 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="flex flex-wrap mx-[15px]">
                <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                    <NexAnimation type={get(props, 'contentAnimation')}>
                        <div className={`rounded-lg border overflow-hidden shadow-xl nx-bg-primary-light ${get(tailwindClasses, 'mainSection')}`} style={get(style, 'mainSection')}>
                            <div className={`flex flex-wrap mx-0 ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                                {get(props, 'mapPath', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !self-stretch">
                                    <div className="map map-full rounded-t-[0.4rem] rounded-lg-start h-full min-h-[15rem]">
                                        <iframe src={get(props, 'mapPath')} className={`${get(tailwindClasses, 'map')}`} style={{ width: "100%", height: "100%", border: "0", ...get(style, 'map') }} allowfullscreen></iframe>
                                    </div>
                                </div>}
                                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
                                    <div className="p-10 max-sm:p-3 xl:!p-[4.5rem] lg:!p-[4.5rem] md:!p-12">
                                        {get(props, 'items', []).map((item) => <div className={`flex flex-row ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                                            <div>
                                                {get(item, 'icon', '').length !== 0 && <div className={`nx-text-primary xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] mr-6 mt-1 ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(item, 'icon'))}
                                                </div>}
                                            </div>
                                            <div>
                                                {get(item, 'title', '').length !== 0 && <h5 className={`!mb-1 text-xl font-medium nx-section-heading-font ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h5>}
                                                {get(item, 'description1', '').length !== 0 && <p className={`not-italic leading-[inherit] mb-2 text-lg text-gray-600 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(item, 'description1')}</p>}
                                                {get(item, 'description2', '').length !== 0 && <p className={`not-italic leading-[inherit] mb-4 text-lg text-gray-600 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(item, 'description2')}</p>}
                                            </div>
                                        </div>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NexAnimation>
                </div>
            </div>
        </section>
    )
}

ContactUsV16.propTypes = {
    style: object,
    tailwindClasses: object,
    mapPath: string,
    items: arrayOf(object)
}
ContactUsV16.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        mainSection: {},
        map: {},
        sectionBox: {},
        sectionIcon: {},
        sectionTitle: {},
        sectionDescription: {},
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        mainSection: "",
        map: "",
        sectionBox: "",
        sectionIcon: "",
        sectionTitle:"",
        sectionDescription:""
    },
    mapPath: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25387.23478654725!2d-122.06115399490332!3d37.309248660190086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2C%20USA!5e0!3m2!1sen!2str!4v1645437305701!5m2!1sen!2str",
    contentAnimation: "",
    items: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>`,
            title: "Address",
            description1: "Moonshine St. 14/05 Light City, London, United Kingdom",
            description2: ""
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>`,
            title: "Phone",
            description1: "00 (123) 456 78 90",
            description2: "00 (123) 456 78 90"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>`,
            title: "E-mail",
            description1: "sandbox@email.com",
            description2: "sandbox@email.com",
        },
    ]
}
export default ContactUsV16
