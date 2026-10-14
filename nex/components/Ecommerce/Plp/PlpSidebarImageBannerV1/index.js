import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import React from 'react';


const PlpSidebarImageBannerV1 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (
        <div className={`'py-8 px-4 ${get(tailwindClasses,'container')}`} style={get(style,'container')}>
            <div className="relative border shadow-lg w-full before:content-[''] before:block before:absolute hover:before:z-[1] hover:before:w-full hover:before:h-full before:right-[-100%] hover:before:right-0 hover:before:top-0 hover:before:bg-white/40 hover:before:transition-all hover:before:duration-400 hover:before:ease-in">
                {get(props, 'image','').length !==0 &&<NexImage src={get(props, 'image')}
                    alt="AOSP Project Update"
                    className={`!relative w-full ${get(tailwindClasses, 'image')}`} style={get(style, 'image')}
                />}
            </div>
        </div>
    )
}

PlpSidebarImageBannerV1.defaultProps={
    style:{
        container:{},
        image:{}
    },
    tailwindClasses:{
        container:"",
        image:""
    },
    image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1739452019.dummy_209x285_000000_f9c9a7.png"
}
export default PlpSidebarImageBannerV1