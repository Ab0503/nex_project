import withData from '@nex-core-ui/HOC/withData';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import parse from 'html-react-parser';
import get from 'lodash.get';
import { arrayOf, object, string } from 'prop-types';
import React from 'react';

const FeatureSectionV33 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});
    return (
        <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
                <div className="flex flex-wrap mx-[15px]">
                    <div className="lg:w-full xl:w-10/12 xxl:w-8/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center max-lg:mb-5">
                        {get(props,'topIcon',"").length !==0 &&<span className={`inline-flex nx-text-primary opacity-25 ${get(tailwindClasses,'topIcon')}`} style={get(style,'topIcon')}>{parse(get(props,'topIcon'))}</span>}
                        {get(props,'title',"").length !==0 &&<h2 className={`nx-section-heading-font text-[calc(1.285rem_+_0.42vw)] font-bold xl:text-[2rem] leading-[1.3] !text-center !mt-2 mb-10 max-w-3xl mx-auto ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props,'title')}</h2>}
                    </div>
                </div>
                <div className="flex flex-wrap mx-[15px] grid-view md:mx-[20px] lg:mx-[20px] xl:mx-[25px] mt-[-40px] xl:mt-0 lg:mt-0 !text-center">
                    {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item) => <div className="sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full !mx-auto md:mt-[40px] sm:mt-[40px] xsm:mt-[40px] max-sm:mb-5">
                        <div className={`rounded-xl !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] overflow-hidden relative group ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                            {get(item, 'image', "").length !== 0 && <figure className="overlay overlay-1 hover-scale before:content-[''] before:block before:absolute before:z-[2] before:w-full before:h-full before:left-0 before:top-0 hover:before:bg-[rgba(30,34,40,.5)] group">
                                <NexImage className={`!relative !max-w-full !h-auto ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(item, 'image')} alt="image" />
                                <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[10] p-2">
                                    {get(item, 'imageText', "").length !== 0 && <PrimaryLink href={get(item, 'cardLink')}><h5 className={`from-top !mb-0 !absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4 text-white font-bold text-xl ${get(tailwindClasses, 'imageText')}`} style={get(style, 'imageText')}>{get(item, 'imageText')}</h5></PrimaryLink>}
                                </figcaption>
                            </figure>}
                            <div className="card-body p-6">
                                {get(item, 'text', "").length !== 0 && <h3 className={`text-[1.3rem] !mb-0 font-semibold ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item, 'text')}</h3>}
                            </div>
                        </div>
                    </div>)}
                </div>
        </section>
    )
}

FeatureSectionV33.propTypes={
    style: object,
    tailwindClasses: object,
    topIcon: string,
    title: string,
    items: arrayOf(object)
}

FeatureSectionV33.defaultProps = {
    style:{
        container:{},
        topIcon:{},
        title:{},
        sectionBox:{},
        image:{},
        imageText:{},
        text:{}
    },
    tailwindClasses:{
        container:"",
        topIcon:"",
        title:"",
        sectionBox:"",
        image:"",
        imageText:"",
        text:""
    },
    topIcon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>`,
    title: "I absolutely love shooting weddings and couples because there are so many feelings to capture.",
    items: [
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736230712.fs1.jpg",
            cardLink: "#",
            imageText: "View Gallery",
            text: "Wedding"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736230712.fs1.jpg",
            cardLink: "#",
            imageText: "View Gallery",
            text: "Couples"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736230712.fs1.jpg",
            cardLink: "#",
            imageText: "View Gallery",
            text: "Engagement"
        },
    ]
}
export default withData(FeatureSectionV33)
