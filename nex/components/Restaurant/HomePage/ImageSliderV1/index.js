import withData from '@nex-core-ui/HOC/withData';
import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import { arrayOf, object } from 'prop-types';
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ImageSliderV1 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {})
    return (
        <div className={`${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <Swiper breakpoints={{
                340: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                1024: {
                    slidesPerView: 4
                },
                1280: {
                    slidesPerView: `${get(props,'boxKeyNo')}`
                }
            }} autoplay={{
                delay: `${get(props, 'sliderDelay')}`,
            }} modules={[Autoplay]}>
                {Array.isArray(get(props,'items',[])) && get(props, 'items', []).map((item) => <SwiperSlide>
                    <NexImage src={get(item, 'image')} className={`!relative !h-40 !w-full ${get(tailwindClasses,'image')}`} style={get(style,'image')} />
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
}

ImageSliderV1.propTypes={
    style: object,
    tailwindClasses: object,
    items: arrayOf(object)
}

ImageSliderV1.defaultProps = {
    style:{
        container:{},
        image:{}
    },
    tailwindClasses:{
        container:"",
        image:""
    },
    sliderDelay: 1000,
    boxKeyNo: 5,
    items: [
        {
            image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&dpr=1",
        },
        {
            image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&dpr=1",
        },
        {
            image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&dpr=1",
        },
        {
            image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&dpr=1",
        },
        {
            image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&dpr=1",
        },
        {
            image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&dpr=1",
        },
        {
            image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&dpr=1",
        },
    ]
}
export default withData(ImageSliderV1)
