import PrimaryLink from '@nex-core-ui/PrimaryLink';
import parse from 'html-react-parser';
import get from 'lodash.get';
import { arrayOf, number, object, string } from 'prop-types';
import React from 'react';

const FeatureSectionV40 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`py-8 px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'subTitle', '').length !== 0 && <h1 className={`text-center text-sm uppercase mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
            {get(props, 'title', '').length !== 0 && <h4 className={`text-center nx-section-heading-font nx-text-primary text-4xl font-bold mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h4>}
            {get(props, 'description', '').length !== 0 && <p className={`text-center max-w-xl mx-auto mb-5 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${get(props, 'sectionKeyNo')}`}>
                {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item) => <div className={`mx-auto ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                    {get(item, 'icon','').length !==0 &&<div className='flex justify-center mb-3'>
                        <span className={`nx-text-primary border nx-border-primary inline-flex items-center justify-center hover:text-white nx-bg-hover-primary rounded-full p-2 ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(item, 'icon'))}</span>
                    </div>}
                    {get(item, 'title','').length !==0 &&<div className='flex justify-center mb-3'>
                        <h4 className={`text-xl font-semibold nx-section-heading-font text-center justify-center border-b-2 nx-border-primary w-1/2 pb-2 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h4>
                    </div>}
                    {get(item, 'description','').length !==0 &&<p className={`text-center max-w-xs mb-5 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(item, 'description')}</p>}
                    {get(item, 'ctaText','').length !==0 &&<div className='flex justify-center'>
                        <button className={`uppercase nx-border-primary hover:border-b-2 text-sm pb-1 ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}><PrimaryLink href={get(item, 'ctaLink')}>{get(item, 'ctaText')}</PrimaryLink></button>
                    </div>}
                </div>)}
            </div>
        </section>
    )
}

FeatureSectionV40.propTypes={
    style: object,
    tailwindClasses: object,
    sectionKeyNo: number,
    subTitle: string,
    title: string,
    description: string,
    items: arrayOf(object)
}

FeatureSectionV40.defaultProps = {
    style:{
        container:{},
        subTitle:{},
        title:{},
        description:{},
        sectionBox:{},
        sectionIcon:{},
        sectionTitle:{},
        sectionDescription:{},
        sectionCta:{},
    },
    tailwindClasses:{
        container:"",
        subTitle:"",
        title:"",
        description:"",
        sectionBox:"",
        sectionIcon:"",
        sectionTitle:"",
        sectionDescription:"",
        sectionCta:"",
    },
    sectionKeyNo: 3,
    subTitle: "our story",
    title: "About Restora",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dicta aspernatur ipsam esse consequatur ut incidunt maiores sit tempore eum?",
    items: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="size-20" fill="currentColor"><path d="M32 10a22 22 0 0 0-22 22h44A22 22 0 0 0 32 10zM32 14a18 18 0 0 1 18 18H14a18 18 0 0 1 18-18z" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="8" y="36" width="48" height="6" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M26 6c0 3-2 4-2 6s2 3 2 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M38 6c0 3-2 4-2 6s2 3 2 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/><rect x="6" y="42" width="52" height="4" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>`,
            title: "Today's Specials",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus vel, illo saepe aspernatur quas sapiente.",
            ctaLink: "#",
            ctaText: "Read more",
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="size-20"  fill="currentColor"><rect x="10" y="10" width="44" height="44" rx="4" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="32" y1="10" x2="32" y2="54" stroke="currentColor" stroke-width="1.5" /><line x1="18" y1="18" x2="18" y2="32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="14" y1="18" x2="14" y2="26" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="22" y1="18" x2="22" y2="26" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="26" cy="20" r="4" fill="currentColor"/><line x1="26" y1="24" x2="26" y2="32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><rect x="38" y="18" width="14" height="2" fill="currentColor"/><rect x="38" y="24" width="12" height="2" fill="currentColor"/><rect x="38" y="30" width="10" height="2" fill="currentColor"/><rect x="38" y="36" width="14" height="2" fill="currentColor"/><rect x="38" y="42" width="12" height="2" fill="currentColor"/></svg>`,
            title: "Our Menu",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus vel, illo saepe aspernatur quas sapiente.",
            ctaLink: "#",
            ctaText: "Read more",
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="size-20"  fill="currentColor"><path d="M12 10h40l-20 24z" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="32" y1="34" x2="32" y2="50" stroke="currentColor" stroke-width="1.5"/><line x1="24" y1="50" x2="40" y2="50" stroke="currentColor" stroke-width="1.5"/><circle cx="44" cy="14" r="5" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="22" y1="16" x2="46" y2="10" stroke="currentColor" stroke-width="1.5"/></svg>`,
            title: "Our Bar",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus vel, illo saepe aspernatur quas sapiente.",
            ctaLink: "#",
            ctaText: "Read more",
        },
    ]
}
export default FeatureSectionV40
