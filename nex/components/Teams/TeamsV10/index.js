import get from 'lodash.get';
import React, { useState } from 'react';
import PropTypes, { object } from 'prop-types';
import parse from 'html-react-parser/lib/index';
import NexImage from '@nex-core-ui/NexImage';
import withData from "@nex-core-ui/HOC/withData";
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';

function TeamsV10(props) {
    const style = get(props, 'style', {})
    const tailwindClasses = get(props, 'tailwindClasses', {})
    const [showAll, setShowAll] = useState(true);
    const handleButtonClick = () => {
        setShowAll(!showAll)
    }

    const visibleMembers = !showAll ? props.items : props.items.slice(0, 3)
    return (
        <div className={`py-8 overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`mx-auto max-w-7xl px-6 text-center lg:px-8 ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                <div className={`mx-auto max-w-2xl`}>
                    <NexAnimation type={get(props, 'topContentAnimation')}>
                        {get(props, 'subTitle', "").length !== 0 && <h1 className={`nx-text-primary text-sm uppercase ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
                        {get(props, 'title', "").length !== 0 && <h2 className={`nx-section-heading-font text-balance text-4xl font-semibold tracking-tight sm:text-5xl ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
                        {get(props, 'description', "").length !== 0 && <p className={`mt-6 text-lg/8 text-gray-400 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>
                            {get(props, 'description')}
                        </p>}
                    </NexAnimation>
                </div>

                <NexAnimation type={get(props, 'bottomContentAnimation')}>
                    <ul
                        role="list"
                        className={`mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 `}
                    >
                        {visibleMembers.map((person) => (
                            <PrimaryLink href={get(person,'ctaLink')}>
                            <li key={get(person, 'name')} className={`rounded-2xl px-8 py-10 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                                {get(person, 'imageUrl', "").length !== 0 && <NexImage alt="" src={get(person, 'imageUrl')} className={`!relative bg-green-900 mx-auto !size-48 rounded-full !md:size-56 ${get(tailwindClasses, 'personImage')}`} style={get(style, 'personImage')} />}
                                {get(person, 'name', "").length !== 0 && <h3 className={`mt-6 text-base/7 font-semibold tracking-tight ${get(tailwindClasses, 'personName')}`} style={get(style, 'personName')}>{get(person, 'name')}</h3>}
                                {get(person, 'role', "").length !== 0 && <p className={`mt-3 text-sm/6 text-gray-400 ${get(tailwindClasses, 'personRole')}`} style={get(style, 'personRole')}>{get(person, 'role')}</p>}
                                <ul role="list" className="mt-3 flex justify-center gap-x-6">
                                    {get(person, 'xUrl', "").length !== 0 && <li>
                                        <PrimaryLink href={get(person, "xUrl")} className={`text-gray-400 hover:text-gray-300 ${get(tailwindClasses, 'socialIcon')}`} style={get(style, 'socialIcon')}>
                                            <span className="sr-only">X</span>
                                            {parse(get(person, 'xIcon', ''))}
                                        </PrimaryLink>
                                    </li>}
                                    {get(person, 'linkedinUrl', "").length !== 0 && <li>
                                        <PrimaryLink href={get(person, "linkedinUrl")} className={`text-gray-400 hover:text-gray-300 ${get(tailwindClasses, 'socialIcon')}`} style={get(style, 'socialIcon')}>
                                            <span className="sr-only">LinkedIn</span>
                                            {parse(get(person, 'linkedinIcon', ''))}
                                        </PrimaryLink>
                                    </li>}
                                </ul>
                            </li>
                            </PrimaryLink>
                        ))}
                    </ul>
                    {(get(props, 'showLessText', "").length !== 0 && get(props, 'showAllText', "").length !== 0) && <button onClick={handleButtonClick} className={`nx-btn-primary nx-btn-primary:hover px-5 py-2 text-sm rounded-full ${get(tailwindClasses, 'cta')} ${get(props, 'items').length < 4 && "hidden"}`} style={get(style, 'cta')}>{!showAll ? get(props, 'showLessText') : get(props, 'showAllText')}</button>}
                </NexAnimation>
            </div>
        </div>
    )
}

TeamsV10.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        subTitle: {},
        title: {},
        description: {},
        sectionBox: {},
        personImage: {},
        personName: {},
        personRole: {},
        socialIcon: {},
        cta: {}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        subTitle: "",
        title: "",
        description: "",
        sectionBox: "",
        personImage: "",
        personName: "",
        personRole: "",
        socialIcon: "",
        cta: ""
    },
    subTitle: "OUR TEAM MEMBERS",
    title: "Meet our team",
    description: "We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.",
    showLessText: "Show Less",
    showAllText: "Show All Team",
    topContentAnimation:"",
    bottomContentAnimation:"",
    items: [
        {
            name: 'Leonard Krasner',
            role: 'Senior Designer',
            imageUrl:
                'https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png',
            xUrl: '#',
            xIcon: `<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5"><path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" /></svg>`,
            linkedinUrl: '#',
            linkedinIcon: `<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5"><path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" fillRule="evenodd"/></svg>`,
            ctaLink:"#",
        },
        {
            name: 'Leonard Krasner',
            role: 'Senior Designer',
            imageUrl:
                'https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png',
            xUrl: '#',
            xIcon: `<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5"><path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" /></svg>`,
            linkedinUrl: '#',
            linkedinIcon: `<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5"><path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" fillRule="evenodd"/></svg>`,
            ctaLink:"#",
        },
        {
            name: 'Leonard Krasner',
            role: 'Senior Designer',
            imageUrl:
                'https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png',
            xUrl: '#',
            xIcon: `<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5"><path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" /></svg>`,
            linkedinUrl: '#',
            linkedinIcon: `<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5"><path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" fillRule="evenodd"/></svg>`,
            ctaLink:"#",
        },
        {
            name: 'Leonard Krasner',
            role: 'Senior Designer',
            imageUrl:
                'https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png',
            xUrl: '#',
            xIcon: `<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5"><path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" /></svg>`,
            linkedinUrl: '#',
            linkedinIcon: `<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5"><path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" fillRule="evenodd"/></svg>`,
            ctaLink:"#",
        },
        {
            name: 'Leonard Krasner',
            role: 'Senior Designer',
            imageUrl:
                'https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png',
            xUrl: '#',
            xIcon: `<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5"><path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" /></svg>`,
            linkedinUrl: '#',
            linkedinIcon: `<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5"><path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" fillRule="evenodd"/></svg>`,
            ctaLink:"#",
        },
        {
            name: 'Leonard Krasner',
            role: 'Senior Designer',
            imageUrl:
                'https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png',
            xUrl: '#',
            xIcon: `<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5"><path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" /></svg>`,
            linkedinUrl: '#',
            linkedinIcon: `<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5"><path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" fillRule="evenodd"/></svg>`,
            ctaLink:"#",
        },
    ]
}

TeamsV10.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    showLessText: PropTypes.string,
    showAllText: PropTypes.string,
    items: PropTypes.arrayOf(object)
}
export default withData(TeamsV10);