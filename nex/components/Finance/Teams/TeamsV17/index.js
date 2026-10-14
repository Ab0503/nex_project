import React from 'react';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import parse from 'html-react-parser';
import { arrayOf, object, string } from 'prop-types';

const TeamsV17 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <section className={`py-16 px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'title', '').length !== 0 && <h1 className={`text-center text-4xl font-bold relative nx-section-heading-font after:block after:w-10 after:h-[6px] after:bg-yellow-600 after:mt-2 after:mx-auto mb-10 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
            <div className='max-w-6xl mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2'>
                {get(props, 'items').map((item) => <div className='flex max-sm:flex-wrap lg:flex-row gap-4'>
                    {get(item, 'image', '').length !== 0 && <figure className='!w-full overflow-hidden'>
                        <PrimaryLink href={get(item, 'ctaLink')}><NexImage src={get(item, 'image')} className={`!relative hover:scale-110 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} /></PrimaryLink>
                    </figure>}
                    <div>
                        {get(item, 'name', '').length !== 0 && <h1 className={`text-2xl hover:text-yellow-600 transition-all duration-300 font-semibold ${get(tailwindClasses, 'name')}`} style={get(style, 'name')}><PrimaryLink href={get(item, 'ctaLink')}>{get(item, 'name')}</PrimaryLink></h1>}
                        {get(item, 'designation', '').length !== 0 && <p className={`text-gray-500 mb-5 ${get(tailwindClasses, 'designation')}`} style={get(style, 'designation')}>{get(item, 'designation')}</p>}
                        {get(item, 'description', '').length !== 0 && <p className={`text-gray-500 mb-5 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(item, 'description')}</p>}
                        <PrimaryLink className={`inline-flex items-center group gap-2 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')} href={get(item, 'ctaLink')}>
                            {get(props, 'ctaIcon', '').length !== 0 && <span className={`bg-yellow-600 rounded-full text-white group-hover:bg-gray-950 ${get(tailwindClasses, 'ctaIcon')}`} style={get(style, 'ctaIcon')}>{parse(get(props, 'ctaIcon'))}</span>}
                            {get(props, 'ctaText')}
                        </PrimaryLink>
                    </div>
                </div>)}
            </div>
        </section>
    )
}

TeamsV17.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    ctaText: string,
    ctaIcon: string,
    items: arrayOf(object)
}

TeamsV17.defaultProps = {
    style: {
        container: {},
        title:{},
        image:{},
        name:{},
        designation:{},
        description:{},
        cta:{},
        ctaIcon:{}
    },
    tailwindClasses: {
        container:"",
        title:"",
        image:"",
        name:"",
        designation:"",
        description:"",
        cta:"",
        ctaIcon:""
    },
    title: "Our team members",
    ctaText: "Read more",
    ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>`,
    items: [
        {
            image: "https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=440&h=410&fit=crop&crop=faces&dpr=1",
            name: "Brandon Copperfield",
            designation: "Founder & CEO",
            description: "The founder of Consulting WP, he has been the captain of this ship from the beginning and has sailed...",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/31268616/pexels-photo-31268616/free-photo-of-professional-portrait-of-a-businessman-in-studio.jpeg?auto=compress&cs=tinysrgb&w=440&h=410&fit=crop&crop=faces&dpr=1",
            name: "Clark Roberts",
            designation: "Chief Finance Officer",
            description: "Being the CFO in the Financial Industry is a tough task, thankfully he was here to man the helm and lead...",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/5240192/pexels-photo-5240192.jpeg?auto=compress&cs=tinysrgb&w=440&h=410&fit=crop&crop=faces&dpr=1",
            name: "Ashley Hardy",
            designation: "VP Sales and Marketing",
            description: "She is an accomplished business developer. Her skills at creating relationships with clients are legendary;...",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/3861954/pexels-photo-3861954.jpeg?auto=compress&cs=tinysrgb&w=440&h=410&fit=crop&crop=faces&dpr=1",
            name: "Denni Norris",
            designation: "Chief Marketing Officer",
            description: "He has helped Business WordPress Theme reach new heights and enter new markets. His skills of understanding...",
            ctaLink: "#"
        },
    ]
}
export default TeamsV17
