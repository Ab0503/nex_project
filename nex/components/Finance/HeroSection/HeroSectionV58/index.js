import React from 'react';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { object, string } from 'prop-types';

const HeroSectionV58 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});

    return (
        <section className={`px-5 py-10 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`py-10 px-5 max-w-6xl mx-auto sm:p-20 bg-yellow-600 text-white ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                <div className='flex flex-wrap gap-10 items-center justify-center'>
                    <div className='w-full lg:w-5/12'>
                        {get(props, 'title', '').length !== 0 && <h1 className={`text-4xl font-extrabold leading-tight mb-5 max-w-sm ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                        {get(props, 'description', '').length !== 0 && <p className={`max-w-md text-lg opacity-90 mb-5 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                        {get(props, 'breadCrumb1', '').length !== 0 && <div className='flex items-center gap-2 text-lg font-medium'>
                            <PrimaryLink className={`hover:text-gray-900 transition-colors duration-300 ${get(tailwindClasses, 'breadCrumb')}`} style={get(style, 'breadCrumb')} href={get(props, 'breadCrumb1Link')} >{get(props, 'breadCrumb1')}</PrimaryLink>
                            <ChevronRightIcon strokeWidth={2} className={`h-5 w-5 ${get(tailwindClasses,'breadCrumbIcon')}`} style={get(style,'breadCrumbIcon')} />
                            {get(props, 'breadCrumb2', '').length !== 0 && <span className={`${get(tailwindClasses, 'breadCrumb')}`} style={get(style, 'breadCrumb')}>{get(props, 'breadCrumb2')}</span>}
                        </div>}
                    </div>
                    <div className='w-full lg:w-6/12 flex justify-end'>
                        {get(props, 'image', '').length !== 0 && <NexImage src={get(props, 'image')} className={`!relative !h-auto ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />}
                    </div>
                </div>
            </div>
        </section>
    )
}

HeroSectionV58.propTypes={
    style: object,
    tailwindClasses: object,
    title: string,
    description: string,
    image: string,
    homeText: string,
    breadCrumb: string
}

HeroSectionV58.defaultProps = {
    style: {
        container:{},
        contentContainer:{},
        title:{},
        description:{},
        breadCrumb:{},
        breadCrumbIcon:{},
        image:{}
    },
    tailwindClasses: {
        container:"",
        contentContainer:"",
        title:"",
        description:"",
        breadCrumb:"",
        breadCrumbIcon:"",
        image:""
    },
    title: "Consulting WP cTrader platform",
    description: "Fast order entry, ultra-fast execution speeds, direct order entry via charts and Level II pricing are just some of the reasons why many traders today choose cTrader as their go-to platform.",
    image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/prod/web/1/1/img/1743073851.services_slider-1.png",
    breadCrumb1: "Home",
    breadCrumb1Link:"/finance/home",
    breadCrumb2: "Service"
}

export default HeroSectionV58;
