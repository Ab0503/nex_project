import React from 'react';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import { arrayOf, number, object } from 'prop-types';
import PrimaryLink from '@nex-core-ui/PrimaryLink';

const BlogV34 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (
        <section className={`py-16 px-5 lg:px-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='max-w-6xl mx-auto'>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-${get(props, 'sectionKeyNo')}`}>
                    {get(props, 'items').map((item) => <div className='rounded shadow-xl hover:-translate-y-4 hover:transition-all hover:duration-700'>
                        {get(item,'image','').length !==0 &&<PrimaryLink href={get(item,'ctaLink')}><NexImage src={get(item,'image')} className={`!relative !h-auto !w-full ${get(tailwindClasses,'image')}`} style={get(style,'image')}/></PrimaryLink>}
                        <div className={`p-6 ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}>
                        {get(item,'subTitle','').length !==0 &&<h4 className={`text-base text-gray-500 mb-3 ${get(tailwindClasses,'subTitle')}`} style={get(style,'subTitle')}>{get(item,'subTitle')}</h4>}
                        {get(item,'title','').length !==0 &&<h1 className={`text-xl font-semibold nx-text-hover-primary ${get(tailwindClasses,'title')}`} style={get(style,'title')}><PrimaryLink href={get(item,'ctaLink')}>{get(item,'title')}</PrimaryLink></h1>}
                    </div>
                    </div>)}
                </div>
            </div>
        </section>
    )
}

BlogV34.propTypes = {
    style: object,
    tailwindClasses: object,
    sectionKeyNo: number,
    items: arrayOf(object)
}

BlogV34.defaultProps = {
    style: {
        container:{},
        sectionBox:{},
        image:{},
        subTitle:{},
        title:{}
    },
    tailwindClasses: {
        container:"",
        sectionBox:"",
        image:"",
        subTitle:"",
        title:""
    },
    sectionKeyNo: 3,
    items: [
        {
            image: "https://images.pexels.com/photos/5793890/pexels-photo-5793890.jpeg?auto=compress&cs=tinysrgb&w=600",
            subTitle: "Beauty",
            title: "Beauty Spa Is So Famous, But Why?",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/6186765/pexels-photo-6186765.jpeg?auto=compress&cs=tinysrgb&w=600",
            subTitle: "Beauty",
            title: "Five Mind Numbing Facts About Beauty Spa.",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/7984976/pexels-photo-7984976.jpeg?auto=compress&cs=tinysrgb&w=600",
            subTitle: "Makeup",
            title: "Five Easy Ways To Facilitate Beauty Spa.",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/2263142/pexels-photo-2263142.jpeg?auto=compress&cs=tinysrgb&w=600",
            subTitle: "Hair Makeup",
            title: "How Beauty Spa Can Increase Your Profit!",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/29692108/pexels-photo-29692108/free-photo-of-beauty-professional-applying-makeup-in-salon.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop&dpr=1",
            subTitle: "Spa",
            title: "Five Quick Tips For Beauty Spa.",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/3757657/pexels-photo-3757657.jpeg?auto=compress&cs=tinysrgb&w=600",
            subTitle: "Massage",
            title: "10 Things To Avoid In Beauty Spa.",
            ctaLink: "#"
        },
    ]
}
export default BlogV34
