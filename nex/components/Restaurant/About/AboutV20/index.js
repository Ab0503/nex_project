import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import { object, string } from 'prop-types';
import React from 'react';

const AboutV20 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`pb-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'image', '').length !== 0 && <figure className="overlay overlay-1 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(0,0,0,.5)] rounded mb-8">
                <NexImage src={get(props, 'image')} className={`!relative !h-auto !w-full  ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />
                {get(props, 'mainTitle', '').length !== 0 && <figcaption className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white max-sm:text-2xl text-5xl nx-section-heading-font font-bold z-10 ${get(tailwindClasses, 'mainTitle')}`} style={get(style, 'mainTitle')}>{get(props, 'mainTitle')}</figcaption>}
            </figure>}
            <div className='max-w-7xl mx-auto mb-8 px-5'>
                {get(props, 'title', '').length !== 0 && <h4 className={`nx-section-heading-font text-3xl font-semibold mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h4>}
                {get(props, 'description', '').length !== 0 && <p className={`${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
            </div>
            <div className='flex flex-wrap max-w-7xl mx-auto px-5'>
                <div className='w-full md:w-6/12 md:pr-4 max-sm:mb-8'>
                    {get(props, 'leftTitle', '').length !== 0 && <h4 className={`nx-section-heading-font text-3xl font-semibold mb-5 ${get(tailwindClasses, 'leftTitle')}`} style={get(style, 'leftTitle')}>{get(props, 'leftTitle')}</h4>}
                    {get(props, 'leftDescription1', '').length !== 0 && <p className={`mb-5 ${get(tailwindClasses, 'leftDescription')}`} style={get(style, 'leftDescription')}>{get(props, 'leftDescription1')}</p>}
                    {get(props, 'leftDescription2', '').length !== 0 && <p className={`${get(tailwindClasses, 'leftDescription')}`} style={get(style, 'leftDescription')}>{get(props, 'leftDescription2')}</p>}
                </div>
                <div className='w-full md:w-6/12 md:pl-4'>
                    {get(props, 'rightTitle', '').length !== 0 && <h4 className={`nx-section-heading-font text-3xl font-semibold mb-5 ${get(tailwindClasses, 'rightTitle')}`} style={get(style, 'rightTitle')}>{get(props, 'rightTitle')}</h4>}
                    {get(props, 'rightDescription1', '').length !== 0 && <p className={`mb-5 ${get(tailwindClasses, 'rightDescription')}`} style={get(style, 'rightDescription')}>{get(props, 'rightDescription1')}</p>}
                    {get(props, 'rightDescription2', '').length !== 0 && <p className={`${get(tailwindClasses, 'rightDescription')}`} style={get(style, 'rightDescription')}>{get(props, 'rightDescription2')}</p>}
                </div>
            </div>
        </section>
    )
}

AboutV20.propTypes={
    style: object,
    tailwindClasses: object,
    image: string,
    mainTitle: string,
    title: string,
    description: string,
    leftTitle: string,
    leftDescription1: string,
    leftDescription2: string,
    rightTitle: string,
    rightDescription1: string,
    rightDescription2: string,
}

AboutV20.defaultProps = {
    style: {
        container: {},
        image: {},
        mainTitle: {},
        title: {},
        description: {},
        leftTitle: {},
        leftDescription: {},
        rightTitle: {},
        rightDescription: {}
    },
    tailwindClasses: {
        container: "",
        image: "",
        mainTitle: "",
        title: "",
        description: "",
        leftTitle: "",
        leftDescription: "",
        rightTitle: "",
        rightDescription: ""
    },
    image: "https://images.pexels.com/photos/1267321/pexels-photo-1267321.jpeg?auto=compress&cs=tinysrgb&w=2100&h=700&fit=crop&dpr=1",
    mainTitle: "Reservation Policy",
    title: "Dress code",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, repellendus! Sit adipisci vel natus ratione fuga? Enim eaque voluptate necessitatibus dolore! Error deleniti autem, totam alias ratione perspiciatis magnam porro similique at nesciunt sint debitis labore culpa sit consequatur accusamus?",
    leftTitle: "Cancellation Policy",
    leftDescription1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, repellendus! Sit adipisci vel natus ratione fuga? Enim eaque voluptate necessitatibus dolore! Error deleniti autem",
    leftDescription2: "totam alias ratione perspiciatis magnam porro similique at nesciunt sint debitis labore culpa sit consequatur accusamus?",
    rightTitle: "Credit Cards",
    rightDescription1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, repellendus! Sit adipisci vel natus ratione fuga? Enim eaque voluptate necessitatibus dolore! Error deleniti autem",
    rightDescription2: "totam alias ratione perspiciatis magnam porro similique at nesciunt sint debitis labore culpa sit consequatur accusamus?",
}
export default AboutV20
