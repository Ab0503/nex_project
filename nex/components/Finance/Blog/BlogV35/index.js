import React from 'react';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { arrayOf, object, string } from 'prop-types';

const BlogV35 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <section className={`py-16 px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'title', '').length !== 0 && <h1 className={`text-center text-4xl font-bold relative nx-section-heading-font after:block after:w-10 after:h-[6px] after:bg-yellow-600 after:mt-2 after:mx-auto mb-12 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
            <div className='max-w-6xl mx-auto grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3'>
                {get(props,'items',[]).map((item) => <div className={`group ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                    {get(item, 'image', '').length !== 0 && <PrimaryLink href={get(item,'ctaLink')}><figure className='relative before:rounded-tr-3xl before:rounded-bl-3xl before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 group-hover:before:bg-[rgba(9,8,33,.75)]'>
                        <NexImage src={get(item, 'image')} className={`!relative rounded-tr-3xl rounded-bl-3xl !h-auto !w-full mb-5 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />
                        {get(item,'date','').length !==0 &&<figcaption className={`absolute -bottom-3 left-1/2 -translate-x-1/2 text-white text-center font-bold bg-gray-950 rounded-full py-1 px-4 z-[2] ${get(tailwindClasses,'date')}`} style={get(style,'date')}>{get(item,'date')}</figcaption>}
                        {get(props,'ctaText','').length !==0 &&<figcaption className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-white font-bold text-lg flex items-center gap-2 z-[2] ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}>{get(props,'ctaText')}<ArrowRightIcon strokeWidth={3} className='w-6 h-6'/></figcaption>}
                    </figure>
                    </PrimaryLink>}
                    {get(item, 'title', '').length !== 0 && <h1 className={`font-bold text-xl text-center mb-3 hover:text-yellow-600 transition-all duration-500 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}><PrimaryLink href={get(item,'ctaLink')}>{get(item, 'title')}</PrimaryLink></h1>}
                    {get(item, 'description', '').length !== 0 && <p className={`text-gray-600 text-center text-sm ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(item, 'description')}</p>}
                </div>)}
            </div>
        </section>
    )
}

BlogV35.propTypes={
    style: object,
    tailwindClasses: object,
    title: string,
    ctaText: string,
    items: arrayOf(object)   
}

BlogV35.defaultProps = {
    style: {
        container:{},
        title:{},
        image:{},
        date:{},
        cta:{},
        sectionTitle:{},
        description:{}
    },
    tailwindClasses: {
        container:"",
        title:"",
        image:"",
        date:"",
        cta:"",
        sectionTitle:"",
        description:""
    },
    title: "Latest News",
    ctaText:"Read More",
    items: [
        {
            image: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1200&h=700&fit=crop&dpr=1",
            title: "Naarow Your Focus To Prevent Overanalysis",
            description: "Franchising",
            date: "8 February",
            ctaLink:"#",
        },
        {
            image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200&h=700&fit=crop&dpr=1",
            title: "Stick with Your Concept but Do Your Homework",
            description: "Economics",
            date: "30 January",
            ctaLink:"#",
        },
        {
            image: "https://images.pexels.com/photos/6893921/pexels-photo-6893921.jpeg?auto=compress&cs=tinysrgb&w=1200&h=700&fit=crop&dpr=1",
            title: "Three Social Media Hacks for the Busy Entrepreneur",
            description: "Innovation",
            date: "21 January",
            ctaLink:"#",
        },
    ]
}
export default BlogV35
