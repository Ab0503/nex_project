import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get';
import { arrayOf, object, string } from 'prop-types';
import React from 'react'

const TeamsV16 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <section className={`py-20 px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'title', '').length !== 0 && <h1 className={`text-center text-4xl font-bold relative nx-section-heading-font after:block after:w-10 after:h-[6px] after:bg-yellow-600 after:mt-2 after:mx-auto mb-4 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
            {get(props, 'description', '').length !== 0 && <p className={`text-center max-w-md mx-auto mb-12 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
            <div className={`max-w-6xl mx-auto flex flex-wrap justify-center gap-y-16`}>
                {get(props, 'items', []).map((item) => <div className={`w-full md:w-6/12 lg:w-${get(props,'sectionKeyNo')} flex items-start gap-x-5 group ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                    {get(item, 'image', '').length !== 0 && <PrimaryLink href={get(item, 'ctaLink')}><figure className='!h-32 !w-32 rounded-full overflow-hidden'><NexImage src={get(item, 'image')} className={`!relative !h-full !w-full object-cover group-hover:scale-110 transition-transform duration-400 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} /></figure></PrimaryLink>}
                    <div className='pt-2'>
                        {get(item, 'name', '').length !== 0 && <h1 className={`text-2xl font-bold hover:text-yellow-600 transition-all duration-500 mb-2 ${get(tailwindClasses,'name')}`} style={get(style,'name')}><PrimaryLink href={get(item, 'ctaLink')}>{get(item, 'name')}</PrimaryLink></h1>}
                        {get(item, 'designation', '').length !== 0 && <p className={`text-gray-500 ${get(tailwindClasses, 'designation')}`} style={get(style, 'designation')}>{get(item, 'designation')}</p>}
                    </div>
                </div>)}
            </div>
        </section>
    )
}

TeamsV16.propTypes = {
    style: object,
    tailwindClasses: object,
    sectionKeyNo: string,
    title: string,
    description: string,
    items: arrayOf(object)
}

TeamsV16.defaultProps = {
    style: {
        container:{},
        title:{},
        description:{},
        sectionBox:{},
        image:{},
        name:{},
        designation:{}
    },
    tailwindClasses: {
        container:"",
        title:"",
        description:"",
        sectionBox:"",
        image:"",
        name:"",
        designation:""
    },
    sectionKeyNo:"4/12",
    title: "Our experts",
    description: "Our team of professionals includes HR consultants,executive coaches,business professionals, and more.",
    items: [
        {
            image: "https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=faces&dpr=1",
            name: "Brandon Copperfield",
            designation: "Founder & CEO",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/31268616/pexels-photo-31268616/free-photo-of-professional-portrait-of-a-businessman-in-studio.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=faces&dpr=1",
            name: "Clark Roberts",
            designation: "Chief Finance Officer",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/5240192/pexels-photo-5240192.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=faces&dpr=1",
            name: "Ashley Hardy",
            designation: "VP Sales and Marketing",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/3861954/pexels-photo-3861954.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=faces&dpr=1",
            name: "Denni Norris",
            designation: "Chief Marketing Officer",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=faces&dpr=1",
            name: "Gina Kennedy",
            designation: "Administrator",
            ctaLink: "#"
        },
    ]
}
export default TeamsV16
