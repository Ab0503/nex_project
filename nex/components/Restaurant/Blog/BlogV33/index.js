import withData from '@nex-core-ui/HOC/withData';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get';
import { arrayOf, number, object } from 'prop-types';
import React from 'react';


const BlogV33 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {})
    return (
        <div className={`px-5 py-16 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${get(props,'boxKeyNo')} gap-5`}>
                {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item) => <div className={`relative rounded overflow-hidden ${get(tailwindClasses,'sectionBox')}`} style={{ ...get(style, 'sectionBox') }}>
                    <NexImage src={get(item, 'bgImage')} className={`!relative !h-auto !w-full ${get(tailwindClasses,'bgImage')}`} style={get(style,'bgImage')}/>
                    <div className='absolute top-5 left-1/2 -translate-x-1/2'>
                        <div className='flex flex-col justify-center'>
                            {get(item, 'title', '').length !== 0 && <h4 className={`bg-gray-50 text-center nx-section-heading-font min-w-80 py-2 text-xl font-bold mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(item, 'title')}</h4>}
                            {get(item, 'cta','').length !==0 &&<button className={`bg-gray-50 uppercase font-semibold text-sm px-5 py-1 mx-auto hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}><PrimaryLink href={get(item,'ctaLink')}>{get(item, 'cta')}</PrimaryLink></button>}
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

BlogV33.propTypes={
    style: object,
    tailwindClasses: object,
    boxKeyNo: number,
    items: arrayOf(object)
}

BlogV33.defaultProps = {
    style:{
        container:{},
        bgImage:{},
        title:{},
        cta:{}
    },
    tailwindClasses:{
        container:"",
        bgImage:"",
        title:"",
        cta:""
    },
    boxKeyNo: 3,
    items: [
        {
            bgImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Our Story",
            cta: "read more",
            ctaLink:"#"
        },
        {
            bgImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Deliciouses Menu",
            cta: "view menu",
            ctaLink:"#"
        },
        {
            bgImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Today's Special",
            cta: "read more",
            ctaLink:"#"
        },
    ]
}
export default withData(BlogV33)
