import React from 'react';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import parse from 'html-react-parser';
import { arrayOf, object, string } from 'prop-types';

const PortfolioV16 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const reverse = "flex-row-reverse";

    return (
        <section className={`py-16 px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'title', '').length !== 0 && <h1 className={`text-center text-4xl font-bold relative nx-section-heading-font after:block after:w-10 after:h-[6px] after:bg-yellow-600 after:mt-2 after:mx-auto mb-10 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
            <div className='max-w-6xl mx-auto'>
                {get(props, 'items', []).map((item, index) => <div className={`flex flex-wrap mb-16 ${index%2 === 0 && reverse}`}>
                    <div className='w-full lg:w-1/2 max-lg:mb-8'>
                        {get(item, 'image', '').length !== 0 && <PrimaryLink href={get(item, 'ctaLink')}><figure className='!h-full !w-full overflow-hidden'><NexImage src={get(item, 'image')} className={`!relative hover:scale-125 transition-all duration-500 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} /></figure></PrimaryLink>}
                    </div>
                    <div className='w-full lg:w-1/2 lg:p-5'>
                        {get(item, 'badgeText', '').length !== 0 && <h4 className={`bg-yellow-600 text-gray-950 inline-block px-4 py-2 font-semibold rounded mb-5 ${get(tailwindClasses, 'badgeText')}`} style={get(style, 'badgeText')}>{get(item, 'badgeText')}</h4>}
                        {get(item, 'title', '').length !== 0 && <h1 className={`text-2xl font-bold mb-5 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h1>}
                        {get(item, 'description', '').length !== 0 && <p className={`text-lg text-gray-500 mb-5 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(item, 'description')}</p>}
                        {get(props, 'ctaText','').length !==0 &&<PrimaryLink className={`inline-flex items-center gap-2 hover:gap-4 transition-all duration-300 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')} href={get(item, 'ctaLink')}>
                            {get(props, 'ctaText')}
                            {parse(get(props, 'ctaIcon'))}
                        </PrimaryLink>}
                    </div>
                </div>)}
            </div>
        </section>
    )
}

PortfolioV16.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    ctaText: string,
    ctaIcon: string,
    items: arrayOf(object)
},

PortfolioV16.defaultProps = {
    style: {
        container:{},
        title:{},
        image:{},
        badgeText:{},
        sectionTitle:{},
        description:{},
        cta:{}
    },
    tailwindClasses: {
        container:"",
        title:"",
        image:"",
        badgeText:"",
        sectionTitle:"",
        description:"",
        cta:""
    },
    title: "Our work",
    ctaText: "Read more",
    ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>`,
    items: [
        {
            image: "https://images.pexels.com/photos/7698746/pexels-photo-7698746.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop&dpr=1",
            badgeText: "Financial Services",
            title: "Business Planning, Strategy & Execution",
            description: "Iceland blog af fanny pack tilde. Crucifix 90’s gochujang slow-carb hot chicken fingerstache kogi ennui, blog godard fam quinoa kitsch. Cronut put a bird on it air plant cold-pressed four loko gentrify. Normcore drinking vinegar fashion axe blog artisan meditation etsy Austin schlitz deep v forage mlkshk marfa 8-bit waistcoat.",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/7698746/pexels-photo-7698746.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop&dpr=1",
            badgeText: "Financial Services",
            title: "Business Planning, Strategy & Execution",
            description: "Iceland blog af fanny pack tilde. Crucifix 90’s gochujang slow-carb hot chicken fingerstache kogi ennui, blog godard fam quinoa kitsch. Cronut put a bird on it air plant cold-pressed four loko gentrify. Normcore drinking vinegar fashion axe blog artisan meditation etsy Austin schlitz deep v forage mlkshk marfa 8-bit waistcoat.",
            ctaLink: "#"
        },  
        {
            image: "https://images.pexels.com/photos/7698746/pexels-photo-7698746.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop&dpr=1",
            badgeText: "Financial Services",
            title: "Business Planning, Strategy & Execution",
            description: "Iceland blog af fanny pack tilde. Crucifix 90’s gochujang slow-carb hot chicken fingerstache kogi ennui, blog godard fam quinoa kitsch. Cronut put a bird on it air plant cold-pressed four loko gentrify. Normcore drinking vinegar fashion axe blog artisan meditation etsy Austin schlitz deep v forage mlkshk marfa 8-bit waistcoat.",
            ctaLink: "#"
        },
    ]
}
export default PortfolioV16
