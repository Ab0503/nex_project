import React from 'react';
import get from 'lodash.get';
import NexProgressBar from '@nex-core-ui/NexProgressBar';
import { arrayOf, object, string } from 'prop-types';

const AboutV24 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});
    return (
        <section className={`py-16 px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 items-center'>
                <div className='w-full lg:w-1/2 max-lg:mb-8'>
                    {get(props, 'title', '').length !== 0 && <h1 className={`text-4xl font-bold relative after:block after:h-[6px] after:w-12 after:mt-3 after:bg-yellow-600 mb-5 nx-section-heading-font ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                    {get(props, 'description1','').length !==0 &&<p className={`text-xl font-light text-gray-500 mb-5 ${get(tailwindClasses, 'description1')}`} style={get(style, 'description1')}>{get(props, 'description1')}</p>}
                    {get(props, 'description2','').length !==0 &&<p className={`text-gray-500 ${get(tailwindClasses,'description2')}`} style={get(style,'description2')}>{get(props, 'description2')}</p>}
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex max-sm:flex-col gap-4'>
                        {get(props, 'items', []).map((item) =>
                            <div className='relative'>
                                {get(item, 'percent','').length !==0 &&<NexProgressBar percent={get(item, 'percent')} percentTextStyle={{ color: "black", fontSize: "30px", fontWeight: 400, paddingBottom: "50px" }} strokeColor={get(item,'color')} strokeWidth={3} trailWidth={3} />}
                                {get(item, 'text','').length !==0 &&<div className='absolute left-14 max-sm:left-1/2 max-sm:-translate-x-1/2 -translate-x-8 top-[64%] -translate-y-[64%]'>
                                    <p className={`text-center text-xl sm:text-sm ${get(tailwindClasses,'text')}`} style={get(style,'text')}>{get(item, 'text')}</p>
                                </div>}
                            </div>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

AboutV24.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    description1: string,
    description2: string,
    items: arrayOf(object)
},

AboutV24.defaultProps = {
    style: {
        container:{},
        title:{},
        description1:{},
        description2:{},
        text:{}
    },
    tailwindClasses: {
        container:"",
        title:"",
        description1:"",
        description2:"",
        text:""
    },
    title: "Our Clients",
    description1: "We are driven to do the best job possible. We pride ourselves on cultivating lasting client relationships built on trust and mutual respect.",
    description2: "Our clients include many of the world’s best-performing and most admired companies, law firms, and industry organizations as well as United States and international regulatory and government agencies.",
    items: [
        {
            percent: 80,
            text: "of AM LAW 100 Firms",
            color:"#ca8a04",
        },
        {
            percent: 50,
            text: "of Fortune 100 Companies",
            color:"#ca8a04",
        },
        {
            percent: 25,
            text: "of Fortune 500 Companies",
            color:"#ca8a04",
        },
    ]
}
export default AboutV24
