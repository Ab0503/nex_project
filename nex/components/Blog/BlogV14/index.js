import parse from 'html-react-parser/lib/index';
import get from 'lodash.get';
import React from 'react';
import PropTypes from 'prop-types'
import NexImage from '@nex-core-ui/NexImage';
import withData from "@nex-core-ui/HOC/withData";

const BlogV14 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});

    return (
        <div className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`xl:mx-32 lg:mx-24 md:mx-20 max-sm:mx-5 ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                {get(props, 'subTitle',"").length !== 0 && <h1 className={`text-center nx-text-primary font-bold text-sm mb-2  ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
                {get(props, 'title',"").length !==0 && <h1 className={`nx-section-heading-font text-center font-bold text-4xl mb-4 max-w-xl mx-auto ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                <div className='grid grid-cols-1 gap-3'>
                    <div className='grid grid-cols-3 max-md:grid-cols-1 gap-3'>
                        <div className='relative col-span-2 max-md:col-span-1 group'>
                            {get(props, 'imagePath1',"").length !==0 && <NexImage
                                className={`!relative !h-72 !w-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition duration-300 ${get(tailwindClasses, 'image1')}`} style={get(style, 'image1')}
                                src={get(props, 'imagePath1')}
                                alt=""
                            />}
                            {(get(props, 'sectionTitle',"").length !== 0 || get(props, 'sectionSubTitle',"").length !== 0) && <div className='absolute flex items-center justify-between bottom-5 left-5 bg-black bg-opacity-50 p-4 max-sm:p-2 rounded-lg gap-4 max-sm:gap-2'>
                                <div>
                                    {get(props, 'sectionTitle',"").length !== 0 && <h1 className={`font-bold text-gray-50 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'sectionTitle')}</h1>}
                                    {get(props, 'sectionSubTitle',"").length !== 0 && <p className={`text-xs font-extralight text-gray-50 ${get(tailwindClasses, 'sectionSubTitle')}`} style={get(style, 'sectionSubTitle')}>{get(props, 'sectionSubTitle')}</p>}
                                </div>
                                {get(props, 'ctaIcon',"").length !==0 &&<span className={`nx-btn-primary nx-btn-primary:hover hover:bg-yellow-600 p-2 rounded-full ${get(tailwindClasses, 'ctaIcon')}`} style={get(style, 'ctaIcon')}>
                                    <a href={get(props, 'ctaLink')}>{parse(get(props, 'ctaIcon'))}</a>
                                </span>}
                            </div>}
                        </div>
                        <div>
                            {get(props, 'imagePath2',"").length !==0 && <NexImage
                                className={`!relative !h-72 !w-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition duration-300 ${get(tailwindClasses, 'image2')}`} style={get(style, 'image2')}
                                src={get(props, 'imagePath2')}
                                alt=""
                            />}
                        </div>
                    </div>
                    <div className='grid grid-cols-3 max-md:grid-cols-1 gap-3'>
                        <div>
                            {get(props, 'imagePath3',"").length !== 0 && <NexImage
                                className={`!relative !h-72 !w-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition duration-300 ${get(tailwindClasses, 'image3')}`} style={get(style, 'image3')}
                                src={get(props, 'imagePath3')}
                                alt=""
                            />}
                        </div>
                        {get(props, 'imagePath4',"").length !== 0 &&
                        <div className='!relative !h-72 !w-full col-span-2 max-md:col-span-1'>
                         <NexImage
                                className={`!relative !h-72 !w-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition duration-300 ${get(tailwindClasses, 'image4')}`} style={get(style, 'image4')}
                                src={get(props, 'imagePath4')}
                                alt=""
                            />
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

BlogV14.defaultProps = {
    style:{
        container:{},
        contentContainer:{},
        subTitle:{},
        title:{},
        image1:{},
        sectionTitle:{},
        sectionSubTitle:{},
        ctaIcon:{},
        image2:{},
        image3:{},
        image4:{},
    },
    tailwindClasses:{
        container:"",
        contentContainer:"",
        subTitle:"",
        title:"",
        image1:"",
        sectionTitle:"",
        sectionSubTitle:"",
        ctaIcon:"",
        image2:"",
        image3:"",
        image4:"",
    },
    subTitle: "Start Donating Poor People",
    title: "Our Global Awards Winning Photo Gallery",
    sectionSubTitle: "Domestic & Transportation",
    sectionTitle: "Child trouble & care",
    ctaLink: "#",
    ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>`,
    imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
    imagePath2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735306482.720x720.png",
    imagePath3: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735306482.720x720.png",
    imagePath4: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
}

BlogV14.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    sectionSubTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    ctaLink: PropTypes.string,
    ctaIcon: PropTypes.string,
    imagePath1: PropTypes.string,
    imagePath2: PropTypes.string,
    imagePath3: PropTypes.string,
    imagePath4: PropTypes.string,
}
export default withData(BlogV14);
