import React from 'react';
import get from 'lodash.get';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import parse from 'html-react-parser';
import NexImage from '@nex-core-ui/NexImage';
import { arrayOf, object, string } from 'prop-types';

const BlogV39 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <section className={`py-16 px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'title1', '').length !== 0 && <h1 className={`text-2xl text-center mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title1')} <strong>{get(props, 'title2')}</strong></h1>}
            {get(props, 'description', '').length !== 0 && <p className={`text-center text-gray-500 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
            <div class="flex items-center justify-center my-8">
                <div class="w-64 h-px bg-gray-200"></div>
                <div class="w-3 h-3 rounded-full border border-gray-300 bg-white mx-2"></div>
                <div class="w-64 h-px bg-gray-200"></div>
            </div>
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-x-8 gap-y-16'>
                {get(props, 'items', []).map((item) =>
                    <div className={`bg-gray-100 group ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                        <div className='border-b-2 border-blue-500 group-hover:border-red-600'>
                            {get(item, 'image', '').length !== 0 &&
                                <NexImage className={`!relative ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(item, 'image')} />
                            }
                        </div>
                        <div className='p-10'>
                            <div className='flex items-start gap-3 mb-5'>
                                {get(item, 'author', '').length !== 0 && <PrimaryLink href={get(item, 'ctaLink')}><p className={`pr-2 uppercase text-[12px] text-blue-500 hover:underline relative after:block after:h-[1px] after:w-10 after:mt-2 after:bg-gray-300 ${get(tailwindClasses, 'author')}`} style={get(style, 'author')}><span className='text-gray-950'>By</span> {get(item, 'author')}</p></PrimaryLink>}
                                {get(item, 'date', '').length !== 0 &&
                                    <div className='flex items-center'>
                                        {get(props, 'dateIcon','').length !==0 &&<span className={`inline-flex text-purple-600 ${get(tailwindClasses,'dateIcon')}`} style={get(style,'dateIcon')}>{parse(get(props, 'dateIcon'))}</span>}
                                        <p className={`pl-2 text-[12px] uppercase ${get(tailwindClasses, 'date')}`} style={get(style, 'date')}>{get(item, 'date')}</p>
                                    </div>}
                            </div>
                            {get(item, 'title', '').length !== 0 && <PrimaryLink href={get(item, 'ctaLink')}><h1 className={`text-lg uppercase font-semibold mb-5 hover:underline ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h1></PrimaryLink>}
                            {get(item, 'description', '').length !== 0 && <p className={`text-gray-500 text-sm mb-5 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'description')}>{get(item, 'description')}</p>}
                            {get(props, 'ctaText', "").length !== 0 && <div className={`flex justify-start`}>
                                <button className={`relative overflow-hidden group nx-btn-primary text-[12px] uppercase font-medium py-2 px-4 rounded ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
                                    <span className="absolute inset-0 nx-btn-primary:hover scale-0 group-hover:scale-150 transition-transform duration-300 ease-out rounded-full origin-center z-0"></span>
                                    <PrimaryLink href={get(item, 'ctaLink')} className="relative z-10">{get(props, 'ctaText')}</PrimaryLink>
                                </button></div>}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

BlogV39.propTypes = {
    style: object,
    tailwindClasses: object,
    title1: string,
    title2: string,
    description: string,
    ctaText: string,
    dateIcon: string,
    items: arrayOf(object)
}

BlogV39.defaultProps = {
    style: {
        container:{},
        title:{},
        description:{},
        sectionBox:{},
        author:{},
        date:{},
        dateIcon:{},
        sectionTitle:{},
        sectionDescription:{},
        cta:{}
    },
    tailwindClasses: {
        container:"",
        title:"",
        description:"",
        sectionBox:"",
        author:"",
        date:"",
        dateIcon:"",
        sectionTitle:"",
        sectionDescription:"",
        cta:""
    },
    title1: "Online",
    title2: "Education News",
    description: "Having over 9 million students worldwide and more than 50,000 online courses available.",
    ctaText: "read more",
    dateIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" /></svg>`,
    items: [
        {
            image: "https://images.pexels.com/photos/5212686/pexels-photo-5212686.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop&dpr=1",
            author: "University of LIMS",
            date: "August 25, 2015",
            title: "Maecenas vehicula magna quis nulla ut facilise",
            description: "Phasellus luctus nibhay pulvinar sed bibendum aliqua ligula sapien condimentum magna lorem ipsum dolor sit amet consect adipisic sed eiusmod",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/5212331/pexels-photo-5212331.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop&dpr=1",
            author: "University of LIMS",
            date: "August 25, 2015",
            title: "Nulla cursus lorem gravida ac massa sed ipsum",
            description: "Phasellus luctus nibhay pulvinar sed bibendum aliqua ligula sapien condimentum magna lorem ipsum dolor sit amet consect adipisic sed eiusmod",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop&dpr=1",
            author: "University of LIMS",
            date: "August 25, 2015",
            title: "Vitae neque dictum sem fringilla rhoncus aliquam",
            description: "Phasellus luctus nibhay pulvinar sed bibendum aliqua ligula sapien condimentum magna lorem ipsum dolor sit amet consect adipisic sed eiusmod",
            ctaLink: "#"
        },
    ]
}
export default BlogV39
