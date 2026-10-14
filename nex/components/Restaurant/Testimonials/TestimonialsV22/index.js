import withData from '@nex-core-ui/HOC/withData';
import NexImage from '@nex-core-ui/NexImage';
import parse from 'html-react-parser';
import get from 'lodash.get';
import { arrayOf, number, object, string } from 'prop-types';
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const TestimonialsV22 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <section className={`px-5 py-16 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      {get(props, 'subTitle', '').length !== 0 && <h1 className={`text-center uppercase text-sm font-semibold mb-3 ${get(props, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
      {get(props, 'title', '').length !== 0 && <h4 className={`nx-section-heading-font text-4xl text-center nx-text-primary mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h4>}
      {get(props, 'description', '').length !== 0 && <p className={`text-center text-sm max-w-xl mx-auto ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
      <div className='overflow-hidden pt-16 max-w-6xl mx-auto'>
        <Swiper className='!overflow-visible' breakpoints={{
          340: {
            slidesPerView: 1
          },
          640: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          },
          1440: {
            slidesPerView: `${get(props,'sectionKeyNo')}`
          }
        }} spaceBetween={20} autoplay={{
          delay: `${get(props, 'sliderDelay')}`
        }} modules={[Autoplay]}>
          {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item) => <SwiperSlide> <div className={`border p-5 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
            {get(item, 'image', '').length !== 0 && <NexImage src={get(item, 'image')} className={`-mt-14 border-2 nx-border-primary !relative !h-24 !w-auto rounded-full mx-auto mb-3 ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} />}
            {get(props, 'icon', '').length !== 0 && <div className='flex justify-center'>
              <span className={`nx-text-primary ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'icon'))}</span>
            </div>}
            {get(item, 'title', '').length !== 0 && <h2 className={`text-center uppercase font-semibold mb-3 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h2>}
            {get(item, 'subTitle', '').length !== 0 && <h1 className={`text-center text-sm mb-2 ${get(tailwindClasses, 'sectionSubTitle')}`} style={get(style, 'sectionSubTitle')}>{get(item, 'subTitle')}</h1>}
            {get(item, 'description', '').length !== 0 && <p className={`text-center max-w-[16rem] mx-auto ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(item, 'description')}</p>}
          </div>
          </SwiperSlide>)}
        </Swiper>
      </div>
    </section>
  )
}

TestimonialsV22.propTypes={
  style: object,
  tailwindClasses: object,
  sectionKeyNo: number,
  sliderDelay: number,
  subTitle: string,
  title: string,
  description: string,
  icon: string,
  items: arrayOf(object)
}

TestimonialsV22.defaultProps = {
  style:{
    container:{},
    subTitle:{},
    title:{},
    description:{},
    sectionBox:{},
    sectionImage:{},
    sectionIcon:{},
    sectionTitle:{},
    sectionSubTitle:{},
    sectionDescription:{},
  },
  tailwindClasses:{
    container:"",
    subTitle:"",
    title:"",
    description:"",
    sectionBox:"",
    sectionImage:"",
    sectionIcon:"",
    sectionTitle:"",
    sectionSubTitle:"",
    sectionDescription:"",
  },
  sectionKeyNo:3,
  sliderDelay: 3000,
  subTitle: "testimonials",
  title: "What our foody say",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo dolor aspernatur sint maiores earum beatae minima!",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
</svg>`,
  items: [
    {
      image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735724965.teams.jpg",
      title: "jessica brown",
      subTitle: "Position",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo dolor aspernatur sint maiores earum beatae minima! Necessitatibus dignissimos minima repellat asperiores.",
    },
    {
      image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735724965.teams.jpg",
      title: "john sina",
      subTitle: "Position",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo dolor aspernatur sint maiores earum beatae minima! Necessitatibus dignissimos minima repellat asperiores.",
    },
    {
      image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735724965.teams.jpg",
      title: "priyan sen",
      subTitle: "Position",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo dolor aspernatur sint maiores earum beatae minima! Necessitatibus dignissimos minima repellat asperiores.",
    },
    {
      image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735724965.teams.jpg",
      title: "priyan sen",
      subTitle: "Position",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo dolor aspernatur sint maiores earum beatae minima! Necessitatibus dignissimos minima repellat asperiores.",
    },
  ]
}

export default withData(TestimonialsV22)
