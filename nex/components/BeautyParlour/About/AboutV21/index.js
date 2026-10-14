import React from 'react';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import { object, string } from 'prop-types';

const AboutV21 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`py-24 px-5 bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)] ${get(tailwindClasses, 'container')}`} style={{ background: `url(${get(props, 'bgImage')})`, ...get(style, 'container') }}>
            <div className='relative z-10 text-white'>
                {get(props,'image','').length !==0 && <NexImage src={get(props,'image')} className={`!relative !h-24 !w-24 rounded-full mx-auto border-4 border-white mb-5 ${get(tailwindClasses,'image')}`} style={get(style,'image')} />}
                {get(props, 'name', '').length !== 0 && <h4 className={`text-center text-4xl font-bold nx-section-heading-font font-serif mb-3 ${get(tailwindClasses, 'name')}`} style={get(style, 'name')}>{get(props, 'name')}</h4>}
                {get(props, 'designation', '').length !== 0 && <h1 className={`text-center nx-section-heading-font text-lg mb-3 ${get(tailwindClasses, 'designation')}`} style={get(style, 'designation')}>{get(props, 'designation')}</h1>}
                {get(props, 'description', '').length !== 0 && <p className={`text-center mx-auto max-w-lg mb-5 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                {/* {get(props, 'name', '').length !== 0 && <h4 className={`text-center text-4xl font-bold mb-3 ${get(tailwindClasses, 'name')}`} style={get(style, 'name')}>{get(props, 'name')}</h4>} */}
            </div>
        </section>
    )
}

AboutV21.propTypes={
    style: object,
    tailwindClasses: object,
    bgImage: string,
    image: string,
    name: string,
    designation: string,
    description: string,
}
AboutV21.defaultProps={
    style:{
        container:{},
        image:{},
        name:{},
        designation:{},
        description:{}
    },
    tailwindClasses:{
        container:"",
        image:"",
        name:"",
        designation:"",
        description:""
    },
    bgImage:"https://images.pexels.com/photos/7526011/pexels-photo-7526011.jpeg?auto=compress&cs=tinysrgb&w=2100&h=700&fit=crop&dpr=1",
    image:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Jonathan Blair",
    designation:"Salon Owner",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A vitae repellendus magnam doloremque consequuntur nihil laboriosam eligendi ex eveniet optio.",
}
export default AboutV21
