import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get';
import { object, string } from 'prop-types';
import React from 'react';

const FeatureSectionV41 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`py-8 px-5 lg:px-20 flex flex-wrap ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='w-full flex flex-col items-center md:w-3/12'>
                {get(props, 'image1','').length !==0 &&<figure className="overlay overlay-1 hover-scale before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 hover:before:bg-[rgba(255,255,255,.5)] group rounded !mb-5"> <NexImage className={` !h-64 !w-full transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105 !relative ${get(tailwindClasses, 'image1')}`} style={get(style, 'image1')} src={get(props, 'image1')} alt="image" />
                    {get(props, 'img1Text', "").length !== 0 && <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5]  p-2">
                        <h5 className={`!text-black text-xl font-semibold from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4 ${get(tailwindClasses, 'imgText')}`} style={get(style, 'imgText')}>{get(props, 'img1Text')}</h5>
                    </figcaption>}
                </figure>}
                {get(props, 'image2','').length !==0 &&<figure className="overlay overlay-1 hover-scale before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 hover:before:bg-[rgba(255,255,255,.5)] group rounded !mb-5"> <NexImage className={` !h-64 !w-full transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105 !relative ${get(tailwindClasses, 'image2')}`} style={get(style, 'image2')} src={get(props, 'image2')} alt="image" />
                    {get(props, 'img2Text', "").length !== 0 && <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5]  p-2">
                        <h5 className={`!text-black text-xl font-semibold from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4 ${get(tailwindClasses, 'imgText')}`} style={get(style, 'imgText')}>{get(props, 'img2Text')}</h5>
                    </figcaption>}
                </figure>}
            </div>
            <div className='w-full md:w-6/12 flex flex-col justify-center'>
                {get(props, 'subTitle','').length !==0  && <h1 className={`uppercase text-sm font-semibold text-center mb-3  ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
                {get(props, 'title','').length !==0 &&<h4 className={`nx-section-heading-font nx-text-primary text-4xl text-center mb-5  ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h4>}
                {get(props, 'description','').length !==0 &&<p className={`max-w-lg text-center mx-auto mb-5 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                {get(props, 'ctaText','').length !==0 &&<div className='flex justify-center'>
                    <button className={`uppercase nx-border-primary hover:border-b-2 text-sm pb-1 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}><PrimaryLink href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</PrimaryLink></button>
                </div>}
            </div>
            <div className='w-full md:w-3/12 flex flex-col items-center'>
            {get(props, 'image3','').length !==0 &&<figure className="overlay overlay-1 hover-scale before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 hover:before:bg-[rgba(255,255,255,.5)] group rounded !mb-5"> <NexImage className={` !h-64 !w-full transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105 !relative ${get(tailwindClasses, 'image3')}`} style={get(style, 'image3')} src={get(props, 'image3')} alt="image" />
                    {get(props, 'img3Text', "").length !== 0 && <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] p-2">
                        <h5 className={`!text-black text-xl font-semibold from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4 ${get(tailwindClasses, 'imgText')}`} style={get(style, 'imgText')}>{get(props, 'img3Text')}</h5>
                    </figcaption>}
                </figure>}
                {get(props, 'image4','').length !==0 &&<figure className="overlay overlay-1 hover-scale before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 hover:before:bg-[rgba(255,255,255,.5)] group rounded !mb-5"> <NexImage className={` !h-64 !w-full transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105 !relative ${get(tailwindClasses, 'image4')}`} style={get(style, 'image4')} src={get(props, 'image4')} alt="image" />
                    {get(props, 'img2Text', "").length !== 0 && <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5]  p-2">
                        <h5 className={`!text-black text-xl font-semibold from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4 ${get(tailwindClasses, 'imgText')}`} style={get(style, 'imgText')}>{get(props, 'img4Text')}</h5>
                    </figcaption>}
                </figure>}
            </div>
        </section>
    )
}

FeatureSectionV41.propTypes={
    style:object,
    tailwindClasses: object,
    image1: string,
    img1Text: string,
    image2: string,
    img2Text: string,
    image3: string,
    img3Text: string,
    image4: string,
    img4Text: string,
    subTitle: string,
    title: string,
    description: string,
    ctaLink: string,
    ctaText: string
}
FeatureSectionV41.defaultProps = {
    style:{
        container:{},
        image1:{},
        image2:{},
        image3:{},
        image4:{},
        imgText:{},
        subTitle:{},
        title:{},
        description:{},
        cta:{}
    },
    tailwindClasses:{
        container:"",
        image1:"",
        image2:"",
        image3:"",
        image4:"",
        imgText:"",
        subTitle:"",
        title:"",
        description:"",
        cta:""
    },
    image1: "https://images.pexels.com/photos/5031943/pexels-photo-5031943.jpeg?auto=compress&cs=tinysrgb&w=300&h=360&fit=crop&dpr=1",
    img1Text: "Starter",
    image2: "https://images.pexels.com/photos/14132112/pexels-photo-14132112.jpeg?auto=compress&cs=tinysrgb&w=300&h=360&fit=crop&dpr=1",
    img2Text: "Main course",
    image3: "https://images.pexels.com/photos/7449105/pexels-photo-7449105.jpeg?auto=compress&cs=tinysrgb&w=300&h=360&fit=crop&dpr=1",
    img3Text: "Dessert",
    image4: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=300&h=360&fit=crop&dpr=1",
    img4Text: "Drinks",
    subTitle: "Dining with season",
    title: "Our Menus",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et excepturi voluptatem non beatae quia itaque aperiam quis architecto exercitationem? Ullam, labore similique! Asperiores non rem blanditiis minima cum impedit est optio tenetur assumenda, dicta dolorum officiis quam sunt obcaecati illo, corrupti voluptas odio perferendis? A.illo, corrupti voluptas odio.",
    ctaLink: "#",
    ctaText: "view the menu"
}
export default FeatureSectionV41
