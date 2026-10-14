import NexImage from '@nex-core-ui/NexImage'
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import parse from 'html-react-parser';
import get from 'lodash.get';
import { object, string } from 'prop-types';
import React from 'react';
import NexAnimation from '@nex-components/NexAnimation';


const FeatureSectionV20 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {})
    return (
        <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
                <div className={`flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[20px] mb-10 items-center ${get(tailwindClasses,'contentContainer')}`} style={get(style,'contentContainer')}>
                    {get(props, 'image', "").length !== 0 && 
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[50px] !relative max-lg:mb-8">
                        <div className={`shape bg-line leaf rounded-[50%] rellax !w-[7rem] !h-[7rem] !absolute z-[1] opacity-50 ${get(tailwindClasses,'shape1')}`} data-rellax-speed="1" style={{ top: "-2rem", right: "-0.6rem" ,...get(style,'shape1')}}></div>
                        <div className={`shape nx-bg-primary-light rounded-[50%] rellax !w-[7rem] !h-[7rem] !absolute z-[1] opacity-50 ${get(tailwindClasses,'shape2')}`} data-rellax-speed="1" style={{ bottom: "-2rem", left: "-0.4rem",...get(style,'shape2') }}></div>
                        <NexAnimation  type={get(props, 'imageContentAnimation', '')}>
                        <figure className="rounded-[.4rem] !mb-0"><NexImage className={`!relative !rounded-[.4rem] z-10 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props, 'image')} alt="image" /></figure>
                        </NexAnimation>
                    </div>}
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[10px]">
                    <NexAnimation  type={get(props, 'textContentAnimation', '')}>
                        {get(props, 'title', "").length !== 0 && <h3 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-4 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h3>}
                        {get(props, 'description', "").length !== 0 && <p className={`mb-5 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                        <div className="flex flex-wrap mx-[-15px] mt-[-15px]">
                            <div className="xl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[15px]">
                                <ul className="pl-0 list-none mb-0">
                                    <li className="relative pl-6">
                                        {get(props, 'icon', "").length !== 0 && <span className={`nx-text-primary text-[0.8rem] leading-none tracking-[normal] text-center table nx-bg-primary-light absolute rounded-[100%] left-0 top-[0.2rem] ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>
                                            {parse(get(props, 'icon'))}
                                        </span>}
                                        {get(props, 'text1', "").length !== 0 && <span className={`${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text1')}</span>}
                                    </li>
                                    <li className="mt-3 relative pl-6">
                                        {get(props, 'icon', "").length !== 0 && <span className={`nx-text-primary text-[0.8rem] leading-none tracking-[normal] text-center table nx-bg-primary-light absolute rounded-[100%] left-0 top-[0.2rem] ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>
                                            {parse(get(props, 'icon'))}
                                        </span>}
                                        {get(props, 'text2', "").length !== 0 && <span className={`${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text2')}</span>}
                                    </li>
                                </ul>
                            </div>
                            <div className="xl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[15px]">
                                <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                                    <li className="relative pl-6">
                                        {get(props, 'icon', "").length !== 0 && <span className={`nx-text-primary text-[0.8rem] leading-none tracking-[normal] text-center table nx-bg-primary-light absolute rounded-[100%] left-0 top-[0.2rem] ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>
                                            {parse(get(props, 'icon'))}
                                        </span>}
                                        {get(props, 'text3', "").length !== 0 && <span className={`${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text3')}</span>}
                                    </li>
                                    <li className="mt-3 relative pl-6">
                                        {get(props, 'icon', "").length !== 0 && <span className={`nx-text-primary text-[0.8rem] leading-none tracking-[normal] text-center table nx-bg-primary-light absolute rounded-[100%] left-0 top-[0.2rem] ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>
                                            {parse(get(props, 'icon'))}
                                        </span>}
                                        {get(props, 'text4', "").length !== 0 && <span className={`${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text4')}</span>}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {get(props, 'ctaText',"").length !==0 && <button className={`px-5 py-3 nx-btn-primary nx-btn-primary:hover rounded-[50rem] mt-6 mb-0 font-bold  hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}>
                            <PrimaryLink href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</PrimaryLink>
                        </button>}
                    </NexAnimation>
                    </div>
                </div>
        </section>
    )
}

FeatureSectionV20.propTypes = {
    style: object,
    tailwindClasses: object,
    image: string,
    title: string,
    description: string,
    icon: string,
    text1: string,
    text2: string,
    text3: string,
    text4: string,
    ctaLink: string,
    ctaText: string
}

FeatureSectionV20.defaultProps = {
    style: {
        container:{},
        contentContainer:{},
        image:{},
        shape1: {},
        shape2: {},
        title:{},
        description:{},
        icon:{},
        text:{},
        cta:{}
    },
    tailwindClasses: {
        container:"",
        contentContainer:"",
        image:"",
        shape1:"",
        shape2:"",
        title:"",
        description:"",
        icon:"",
        text:"",
        cta:""
    },
    imageContentAnimation: "",
    textContentAnimation: "",
    image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735884846.se3.jpg",
    title: "Package Design",
    description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>`,
    text1: "Aenean quam ornare curabitur blandit consectetur.",
    text2: "Nullam quis risus eget urna mollis ornare aenean leo.",
    text3: "Etiam porta euismod malesuada mollis nisl ornare sem.",
    text4: "Vivamus sagittis lacus augue rutrum maecenas.",
    ctaLink: "#",
    ctaText: "More Details"
}
export default FeatureSectionV20
