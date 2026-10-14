import React from 'react';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import { object, string } from 'prop-types';

const AboutV22 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`py-20 px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='flex flex-wrap max-w-6xl mx-auto'>
                <div className='w-full lg:w-9/12 flex gap-2 md:gap-6 relative'>
                    {get(props, 'title', '').length !== 0 && <h1 className={`absolute -left-5 lg:-left-8 bottom-7 uppercase font-bold font-serif text-4xl lg:text-6xl ${get(tailwindClasses, 'title')}`} style={{ writingMode: "vertical-rl", ...get(style, 'title') }}>{get(props, 'title')}</h1>}
                    {get(props, 'subTitle', '').length !== 0 && <h4 className={`nx-section-heading-font bg-rose-100 nx-text-primary text-3xl lg:text-4xl py-8 px-6 text-center ${get(tailwindClasses, 'subTitle')}`} style={{ writingMode: "vertical-rl", ...get(style, 'subTitle') }}>{get(props, 'subTitle')}</h4>}
                    {get(props, 'image', '').length !== 0 && <NexImage src={get(props, 'image')} className={`!relative !h-auto !w-full ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />}
                </div>
                <div className='w-full lg:w-3/12 flex items-end max-lg:mt-5'>
                    <div className={`lg:-ml-64 lg:-mb-5 relative bg-white p-10 shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                        {get(props, 'sectionTitle', '').length !== 0 && <h4 className={`text-4xl font-semibold font-serif mb-4 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'sectionTitle')}</h4>}
                        {get(props, 'sectionDescription', '').length !== 0 && <p className={`text-lg mb-5 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, 'sectionDescription')}</p>}
                        <button className={`nx-btn-primary nx-btn-primary:hover px-5 py-2 rounded-md font-medium hover:-translate-y-[.15rem] hover:shadow-xl`}><PrimaryLink href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</PrimaryLink></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

AboutV22.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
    image: string,
    sectionTitle: string,
    sectionDescription: string,
    ctaLink: string,
    ctaText: string
}
AboutV22.defaultProps = {
    style: {
        container: {},
        title: {},
        subTitle: {},
        image: {},
        sectionBox: {},
        sectionTitle: {},
        sectionDescription: {},
    },
    tailwindClasses: {
        container: "",
        title: "",
        subTitle: "",
        image: "",
        sectionBox: "",
        sectionTitle: "",
        sectionDescription: "",
    },
    subTitle: "Beauty Salon",
    title: "About",
    image: "https://images.pexels.com/photos/7755558/pexels-photo-7755558.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop&dpr=1",
    sectionTitle: "About Us",
    sectionDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus laborum, deserunt ipsa fugit dignissimos. Reprehenderit provident ab ducimus minima unde corporis omnis!",
    ctaLink: "#",
    ctaText: "Read More"
}
export default AboutV22
