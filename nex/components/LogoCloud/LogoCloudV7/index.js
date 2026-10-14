import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get'
import { arrayOf, object, string } from 'prop-types';
import React from 'react';
import withData from "@nex-core-ui/HOC/withData";
import NexAnimation from '@nex-components/NexAnimation';


const LogoCloudV7 = (props) => {
    const style = get(props,'style',{});
    const tailwindClasses =get(props,'tailwindClasses',{})
    return (
            <div className={`overflow-hidden ${get(tailwindClasses,'container')}`} style={get(style,'container')}>
                <div className="pt-12 pb-16">
                    {get(props,'subTitle').length !==0 && <h2 className={`text-base nx-text-primary font-bold uppercase text-center tracking-[0.02rem] leading-[1.35] ${get(tailwindClasses,'subTitle')}`} style={get(style,'subTitle')}>{get(props,'subTitle')}</h2>}
                    <div className="flex flex-wrap mx-[15px] xl:mx-[20px] lg:mx-[20px] mb-10 mt-[25px]">
                        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[20px] px-[15px] max-w-full">
                            {get(props,'title',"").length !==0 && <h3 className={`nx-section-heading-font text-4xl font-bold leading-[1.3] mb-0 ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props,'title')}</h3>}
                        </div>
                        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[20px] px-[15px] max-w-full">
                            {get(props,'description',"").length !==0 && <p className={`text-xl !mb-0 ${get(tailwindClasses,'description')}`} style={get(style,'description')}>{get(props,'description')}</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-[-15px] row-cols-2 row-cols-md-3 row-cols-xl-5 xl:mx-[15px] lg:mx-[15px] mt-[30px] justify-center">
                        {get(props,'items',[]).map((item)=> get(item,'imagePath','').length !==0 &&<div className="xl:w-1/5 lg:w-4/12 md:w-4/12 w-6/12 flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                            <NexAnimation type={get(props, 'boxAnimation', '')}>
                            <div className={`shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !h-full items-center ${get(tailwindClasses,'box')}`} style={get(style,"box")}>
                                <div className="items-center flex px-3 py-6 xl:p-8 lg:p-8 md:p-8">
                                    <figure className="md:px-3 xl:px-0 xxl:px-3 mb-0"><NexImage className={`!relative ${get(tailwindClasses,'image')}`} style={get(style,"image")} src={get(item,'imagePath')} alt="image" /></figure>
                                </div>
                            </div>
                            </NexAnimation>
                        </div>)}
                    </div>
                </div>
            </div>
    )
}

LogoCloudV7.propTypes={
    style:object,
    tailwindClasses:object,
    subTitle:string,
    title:string,
    description:string,
    items:arrayOf(object)
}

LogoCloudV7.defaultProps={
    style:{
        container:{},
        subTitle:{},
        title:{},
        description:{},
        box: {},
        image:{}
    },
    tailwindClasses:{
        container:"",
        subTitle:"",
        title:"",
        description:"",
        box: "",
        image:""
    },
    subTitle:"Our Clients",
    title:"We are trusted by over 300+ clients. Join them by using our services and grow your business.",
    description:"Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Maecenas faucibus mollis interdum. Cras justo odio mollis.",
    items:[
        {
            imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735137844.z1.png",
        },
        {
            imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735137876.z2.png",
        },
        {
            imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735137935.z3.png",
        },
        {
            imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735137963.z4.png",
        },
        {
            imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735137992.z5.png",
        },
    ],
    boxAnimation: ""
}   

export default withData(LogoCloudV7);
