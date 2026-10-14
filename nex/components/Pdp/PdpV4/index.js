import NexAnimation from '@nex-components/NexAnimation'
import NexImage from '@nex-core-ui/NexImage'
import PrimaryLink from '@nex-core-ui/PrimaryLink'
import parse from 'html-react-parser'
import get from 'lodash.get'
import React from 'react'

const PdpV4 = (props) => {
    const style = get(props, 'style', {})
    const tailwindClasses = get(props, 'tailwindClasses', {})
    return (
        <section className={`py-8 overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`mx-[15px] md:mx-[20px] lg:mx-[20px] xl:mx-[25px] flex max-md:flex-col flex-row gap-6 ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                <div className="w-full md:w-1/3 flex flex-col items-center">
                    <NexAnimation type={get(props, 'leftTopContentAnimation')}>
                        {get(props, 'image', "").length !== 0 && <NexImage className={`!relative !h-auto ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props, 'image')} alt="Teacher" />}
                    </NexAnimation>
                        <div className="mt-2 w-full text-center">
                        <NexAnimation type={get(props, 'leftBottomContentAnimation')}>
                            {get(props, 'value1', "").length !== 0 && <div className={`nx-bg-primary-light p-3 rounded-md mt-2 ${get(tailwindClasses, 'textBox')}`} style={get(style, 'textBox')}> <strong>{get(props, 'text1')}</strong> {get(props, 'value1')} </div>}
                            {get(props, 'value2', "").length !== 0 && <div className={`nx-bg-primary-light p-3 rounded-md mt-2 ${get(tailwindClasses, 'textBox')}`} style={get(style, 'textBox')}> <strong>{get(props, 'text2')}</strong> {get(props, 'value2')} </div>}
                            {get(props, 'value3', "").length !== 0 && <div className={`nx-bg-primary-light p-3 rounded-md mt-2 ${get(tailwindClasses, 'textBox')}`} style={get(style, 'textBox')}> <strong>{get(props, 'text3')}</strong> {get(props, 'value3')} </div>}
                            {get(props, 'value4', "").length !== 0 && <div className={`nx-bg-primary-light p-3 rounded-md mt-2 ${get(tailwindClasses, 'textBox')}`} style={get(style, 'textBox')}> <strong>{get(props, 'text4')}</strong> {get(props, 'value4')} </div>}
                            {get(props, 'value5', "").length !== 0 && <div className={`nx-bg-primary-light p-3 rounded-md mt-2 ${get(tailwindClasses, 'textBox')}`} style={get(style, 'textBox')}> <strong>{get(props, 'text5')}</strong> {get(props, 'value5')} </div>}
                            {get(props, 'value6', "").length !== 0 && <div className={`nx-bg-primary-light p-3 rounded-md mt-2 ${get(tailwindClasses, 'textBox')}`} style={get(style, 'textBox')}> <strong>{get(props, 'text6')}</strong> {get(props, 'value6')} </div>}
                            </NexAnimation>
                        </div>
                </div>
                <div className="w-full md:w-2/3">
                    <NexAnimation type={get(props, 'rightTopContentAnimation')}>
                        {get(props, 'title', "").length !== 0 && <h1 className={`text-4xl font-bold nx-section-heading-font mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                        {get(props, 'subTitle', "").length !== 0 && <p className={`nx-text-primary font-medium mb-3 text-xl ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</p>}
                        <div className="flex gap-3 mb-3">
                            {get(props, 'icon1', "").length !== 0 && <PrimaryLink href={get(props, 'icon1Link')} className={`nx-bg-primary text-white p-2 rounded ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon1'))}</PrimaryLink>}
                            {get(props, 'icon2', "").length !== 0 && <PrimaryLink href={get(props, 'icon2Link')} className={`nx-bg-primary text-white p-2 rounded ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon2'))}</PrimaryLink>}
                            {get(props, 'icon3', "").length !== 0 && <PrimaryLink href={get(props, 'icon3Link')} className={`nx-bg-primary text-white p-2 rounded ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon3'))}</PrimaryLink>}
                        </div>
                        {get(props, 'description1', "").length !== 0 && <p className={`text-gray-700 mb-5 text-lg ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description1')}</p>}
                        {get(props, 'description2', "").length !== 0 && <p className={`text-gray-700 mb-5 text-lg ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description2')}</p>}
                    </NexAnimation>
                    <div className={`grid lg:grid-cols-${get(props, 'columnKeyNo')} items-center`}>
                        {get(props, 'attributes', []).map((attribute) =>
                            <NexAnimation type={get(props, 'rightBottomContentAnimation')}>
                                <div className={`${get(tailwindClasses, 'attributeBox')}`} style={get(style, 'attributeBox')}>
                                    {get(attribute, 'title', "").length !== 0 && <h2 className={`nx-section-heading-font text-2xl font-semibold mt-6 mb-3 ${get(tailwindClasses, 'attributeTitle')}`} style={get(style, 'attributeTitle')}>{get(attribute, 'title')}</h2>}
                                    {get(attribute, 'value', "").length !== 0 && <p className={`text-gray-700 text-lg ${get(tailwindClasses, 'attributeValue')}`} style={get(style, 'attributeValue')}>{get(attribute, 'value')}</p>}
                                </div>
                            </NexAnimation>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

PdpV4.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        image: {},
        textBox: {},
        title: {},
        subTitle: {},
        icon: {},
        description: {},
        attributeBox: {},
        attributeTitle: {},
        attributeValue: {},
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        image: "",
        textBox: "",
        title: "",
        subTitle: "",
        icon: "",
        description: "",
        attributeBox: "",
        attributeTitle: "",
        attributeValue: "",
    },
    image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024155.pf13.jpg",
    text1: "Expert In:",
    value1: "Teacher",
    text2: "Experience:",
    value2: "4 Years",
    text3: "Phone:",
    value3: "+012-345-6789",
    text4: "Email:",
    value4: "info@example.com",
    text5: "",
    value5: "",
    text6: "",
    value6: "",
    title: "Aneurin Crane",
    subTitle: "Instructor",
    description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
    description2: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
    icon1Link: "#",
    icon1: `<svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="size-5"><path fillRule="evenodd"d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/></svg>`,
    icon2Link: "#",
    icon2: `<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5"><path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" fillRule="evenodd"/></svg>`,
    icon3Link: "#",
    icon3: `<svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="size-5"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/></svg>`,
    columnKeyNo: "2",
    leftTopContentAnimation:"",
    leftBottomContentAnimation:"",
    rightTopContentAnimation:"",
    rightBottomContentAnimation:"",
    attributes: [
        {
            title: "Experiences",
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        },
        {
            title: "Education",
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        },
    ]
}
export default PdpV4
