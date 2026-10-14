import React from 'react';
import get from 'lodash.get';
import parse from 'html-react-parser';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import { arrayOf, object, string } from 'prop-types';

const FeatureSectionV51 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <section className={`bg-slate-800 py-10 px-5 relative z-[2] ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`flex flex-wrap max-w-6xl mx-auto ${get(tailwindClasses, 'mainBox')}`} style={get(style, 'mainBox')}>
                <div className={`w-full bg-white lg:w-8/12 p-8 ${get(tailwindClasses,'leftBox')}`} style={get(style,'leftBox')}>
                    {get(props, 'title', '').length !== 0 && <h4 className={`text-2xl font-medium mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h4>}
                    {get(props, 'description', '').length !== 0 && <p className={`text-base text-gray-500 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mt-12'>
                        {get(props, 'items', []).map((item) =>
                            <div className={`flex items-start gap-2 ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}>
                                {get(item, 'icon', '').length !== 0 && <div className={`inline-flex ${get(item, 'iconColor')} ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>
                                    {parse(get(item, 'icon'))}
                                </div>}
                                <div>
                                    {get(item, 'title', '').length !== 0 && <h1 className={`font-medium text-base relative after:block after:h-[2px] after:w-10 after:mt-2 after:bg-gray-300 mb-5 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h1>}
                                    {get(item, 'description', '').length !== 0 && <p className={`text-sm text-gray-500 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(item, 'description')}</p>}
                                </div>
                            </div>)}
                    </div>
                </div>
                <div className={`w-full lg:w-4/12 bg-white ${get(tailwindClasses,'rightBox')}`} style={get(style,'rightBox')}>
                    <div className={`p-8 bg-red-600 text-white ${get(tailwindClasses,'rightTopBox')}`}style={get(style,'rightTopBox')}>
                        {get(props, 'searchTitle', '').length !== 0 && <h1 className={`flex gap-3 text-lg uppercase font-semibold items-center pb-5 border-b border-red-700 mb-5 ${get(tailwindClasses, 'searchTitle')}`} style={get(style, 'searchTitle')}>{parse(get(props, 'searchIcon'))} {get(props, 'searchTitle')}</h1>}
                        {get(props, 'input1Placeholder', '').length !== 0 && <input className={`w-full text-gray-500 text-[12px] placeholder:text-[12px] uppercase py-3 px-5 border-none mb-4 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} type="text" placeholder={get(props, 'input1Placeholder')} />}
                        {get(props, 'input2Placeholder', '').length !== 0 && <select className={`w-full text-gray-500 text-[12px] placeholder:text-[12px] uppercase py-3 px-5 border-none mb-4 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')}>
                            <option value="" disabled selected hidden>{get(props, 'input2Placeholder')}</option>
                            {get(props, 'input2Option1', '').length !== 0 && <option>{get(props, 'input2Option1')}</option>}
                            {get(props, 'input2Option2', '').length !== 0 && <option>{get(props, 'input2Option2')}</option>}
                        </select>}
                        {get(props, 'input3Placeholder', '').length !== 0 && <select className={`w-full text-gray-500 text-[12px] placeholder:text-[12px] uppercase py-3 px-5 border-none mb-4 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')}>
                            <option value="" disabled selected hidden>{get(props, 'input3Placeholder')}</option>
                            {get(props, 'input3Option1', '').length !== 0 && <option>{get(props, 'input3Option1')}</option>}
                            {get(props, 'input3Option2', '').length !== 0 && <option>{get(props, 'input3Option2')}</option>}
                        </select>}
                        {get(props, 'input4Placeholder', '').length !== 0 && <select className={`w-full text-gray-500 text-[12px] placeholder:text-[12px] uppercase py-3 px-5 border-none ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')}>
                            <option value="" disabled selected hidden>{get(props, 'input4Placeholder')}</option>
                            {get(props, 'input4Option1', '').length !== 0 && <option>{get(props, 'input4Option1')}</option>}
                            {get(props, 'input4Option2', '').length !== 0 && <option>{get(props, 'input4Option2')}</option>}
                        </select>}
                    </div>
                    <div className={`w-full text-red-600 hidden lg:block ${get(tailwindClasses,'rightDivider')}`} style={get(style,'rightDivider')}>
                        <svg width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="0,0 100,0 50,50" fill="currentColor" />
                        </svg>
                    </div>
                    {get(props, 'ctaText', "").length !== 0 && <div className={`lg:-mt-[100px] bg-yellow-400 h-36 w-full flex justify-center items-center ${get(tailwindClasses,'rightBottomBox')}`} style={get(style,'rightBottomBox')}><button className={`relative overflow-hidden group nx-btn-primary text-[12px] uppercase font-medium py-2 px-4 rounded ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
                        <span className="absolute inset-0 nx-btn-primary:hover scale-0 group-hover:scale-150 transition-transform duration-300 ease-out rounded-full origin-center z-0"></span>
                        <PrimaryLink href={get(props, 'ctaLink')} className="relative z-10">{get(props, 'ctaText')}</PrimaryLink>
                    </button></div>}
                </div>
            </div>
        </section>
    )
}

FeatureSectionV51.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    description: string,
    items: arrayOf(object),
    searchIcon: string,
    searchTitle: string,
    input1Placeholder: string,
    input2Placeholder: string,
    input2Option1: string,
    input2Option2: string,
    input3Placeholder: string,
    input3Option1: string,
    input3Option2: string,
    input4Placeholder: string,
    input4Option1: string,
    input4Option2: string,
    ctaLink: string,
    ctaText: string,
}

FeatureSectionV51.defaultProps = {
    style: {
        container:{},
        mainBox:{},
        leftBox:{},
        title:{},
        description:{},
        sectionBox:{},
        sectionIcon:{},
        sectionTitle:{},
        sectionDescription:{},
        rightBox:{},
        rightTopBox:{},
        searchTitle:{},
        inputBox:{},
        rightDivider:{},
        rightBottomBox:{},
        cta:{}
    },
    tailwindClasses: {
        container:"",
        mainBox:"",
        leftBox:"",
        title:"",
        description:"",
        sectionBox:"",
        sectionIcon:"",
        sectionTitle:"",
        sectionDescription:"",
        rightBox:"",
        rightTopBox:"",
        searchTitle:"",
        inputBox:"",
        rightDivider:"",
        rightBottomBox:"",
        cta:""
    },
    title: "We Bring You The World’s Best Courses From All The Top Publishers, Absolutely FREE!",
    description: "Having over 9 million students worldwide and more than 50,000 online courses available.",
    items: [
        {
            iconColor: "text-sky-500",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" /></svg>`,
            title: "HIGHEST RATED",
            description: "Fusce eleifend donec sapien phase dcua sed sa pellentesque lacus vamus lorem treb lum arcu semper duiac."
        },
        {
            iconColor: "text-purple-500",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" /></svg>`,
            title: "ONLINE TRAINING",
            description: "Fusce eleifend donec sapien phase dcua sed sa pellentesque lacus vamus lorem treb lum arcu semper duiac."
        },
        {
            iconColor: "text-green-500",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" /></svg>`,
            title: "WE ARE GLOBAL",
            description: "Fusce eleifend donec sapien phase dcua sed sa pellentesque lacus vamus lorem treb lum arcu semper duiac."
        },
        {
            iconColor: "text-yellow-500",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>`,
            title: "SKILLED FACULTY",
            description: "Fusce eleifend donec sapien phase dcua sed sa pellentesque lacus vamus lorem treb lum arcu semper duiac."
        }
    ],
    searchIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>`,
    searchTitle: "Find your course",
    input1Placeholder: "Course Keyword....",
    input2Placeholder: "All categories",
    input2Option1: "Category1",
    input2Option2: "Category2",
    input3Placeholder: "Select a level",
    input3Option1: "Category1",
    input3Option2: "Category2",
    input4Placeholder: "Course Length",
    input4Option1: "Category1",
    input4Option2: "Category2",
    ctaLink: "#",
    ctaText: "Search Course",
}
export default FeatureSectionV51
