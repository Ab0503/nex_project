import React from 'react';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import { arrayOf, object, string } from 'prop-types';

const BlogV38 = (props) => {
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
            <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16'>
                {get(props, 'items', []).map((item) =>
                    <div className={`bg-gray-100 flex max-sm:flex-col group ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}>
                        <div className='w-full lg:w-6/12 p-10 border-t-2 border-blue-500 group-hover:border-red-600'>
                            <div className='flex mb-5'>
                                {get(item, 'author', '').length !== 0 && <PrimaryLink href={get(item, 'ctaLink')}><p className={`pr-2 uppercase text-[12px] text-blue-500 border-r border-gray-500 hover:underline ${get(tailwindClasses, 'author')}`} style={get(style, 'author')}><span className='text-gray-950'>By</span> {get(item, 'author')}</p></PrimaryLink>}
                                {get(item, 'date', '').length !== 0 && <PrimaryLink href={get(item, 'ctaLink')}><p className={`pl-2 text-[12px] uppercase text-red-600 hover:underline ${get(tailwindClasses, 'date')}`} style={get(style, 'date')}>{get(item, 'date')}</p></PrimaryLink>}
                            </div>
                            {get(item, 'title', '').length !== 0 && <PrimaryLink href={get(item, 'ctaLink')}><h1 className={`text-lg uppercase font-semibold relative after:block after:h-[2px] after:w-10 after:mt-2 after:bg-gray-300 mb-10 hover:underline ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h1></PrimaryLink>}
                            {get(item, 'description', '').length !== 0 && <p className={`text-gray-500 text-sm ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'description')}>{get(item, 'description')}</p>}
                        </div>
                        <div className='w-full lg:w-6/12'>
                            {get(item, 'image', '').length !== 0 && <figure className='relative before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 hover:before:bg-[rgba(27,46,66,.84)] before:transition-all before:duration-700 group'>
                                <NexImage className={`!relative ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(item, 'image')} />
                                {get(props, 'ctaText', "").length !== 0 && <div className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 z-[2]`}>
                                    <button className={`relative overflow-hidden group nx-btn-primary text-[12px] uppercase font-medium py-2 px-4 rounded ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
                                        <span className="absolute inset-0 nx-btn-primary:hover scale-0 group-hover:scale-150 transition-transform duration-300 ease-out rounded-full origin-center z-0"></span>
                                        <PrimaryLink href={get(item, 'ctaLink')} className="relative z-10">{get(props, 'ctaText')}</PrimaryLink>
                                    </button></div>}
                            </figure>
                            }
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

BlogV38.propTypes = {
    style: object,
    tailwindClasses: object,
    title1: string,
    title2: string,
    description: string,
    ctaText: string,
    items: arrayOf(object)
}

BlogV38.defaultProps = {
    style: {
        container: {},
        title: {},
        description: {},
        sectionBox: {},
        author: {},
        date: {},
        sectionTitle: {},
        sectionDescription: {},
        image: {},
        cta: {}
    },
    tailwindClasses: {
        container: "",
        title: "",
        description: "",
        sectionBox: "",
        author: "",
        date: "",
        sectionTitle: "",
        sectionDescription: "",
        image: "",
        cta: ""
    },
    title1: "Most",
    title2: "Popular Courses",
    description: "Having over 9 million students worldwide and more than 50,000 online courses available.",
    ctaText: "Read more",
    items: [
        {
            image: "https://images.pexels.com/photos/1181372/pexels-photo-1181372.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&fit=crop&dpr=1",
            author: "ANS niversity",
            date: "Dec 16, 2015",
            title: "Programming for Everybody",
            description: "Esasellus luctus nibhay pulvinar biben aum aliqua ligula sapien",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&fit=crop&dpr=1",
            author: "John Milton",
            date: "Dec 16, 2015",
            title: "Introduction to Computer & MOBILE",
            description: "Esasellus luctus nibhay pulvinar biben aum aliqua ligula sapien",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&fit=crop&dpr=1",
            author: "ANS niversity",
            date: "Dec 16, 2015",
            title: "CLINICAL SUPERVISION WITH CONFIDENCE",
            description: "Esasellus luctus nibhay pulvinar biben aum aliqua ligula sapien",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&fit=crop&dpr=1",
            author: "John Milton",
            date: "Dec 16, 2015",
            title: "CHILDHOOD IN THE DIGITAL AGE: FACTS",
            description: "Esasellus luctus nibhay pulvinar biben aum aliqua ligula sapien",
            ctaLink: "#"
        },
    ]
}
export default BlogV38
