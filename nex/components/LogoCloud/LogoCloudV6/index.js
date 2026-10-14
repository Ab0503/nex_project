import { arrayOf, number, object, string } from 'prop-types';
import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import withData from "@nex-core-ui/HOC/withData";

const LogoCloudV6 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div className={`py-16 overflow-hidden ${get(tailwindClasses,'container')}`} style={get(style,'container')}>
      <div className="lg:mx-32 max-sm:mx-5">
        <p className={`text-center text-xl !mb-8 nx-section-heading-font ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props,'title')}</p>
        <div className='container mx-auto'>
          <Swiper breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 15 },
          640: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 25 },
          1440: { slidesPerView:6, spaceBetween: 30 }
        }}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={get(props,'speed')}
        modules={[FreeMode, Autoplay]}
        loop={true}
       >
            {get(props, 'items', []).map((item) => <div className="swiper-wrapper ticker">
              <SwiperSlide className="swiper-slide px-5"><NexImage className={`!relative !h-12 !w-24 ${get(tailwindClasses,'image')}`} style={get(style,'image')} src={get(item, 'imagePath')} alt="image" /></SwiperSlide>
            </div>)}
          </Swiper>
        </div>
      </div>

    </div>

  )
}

LogoCloudV6.propTypes = {
  style: object,
  tailwindClasses: object,
  items: arrayOf(object),
  title: string,
  speed:number,
}

LogoCloudV6.defaultProps = {
  style: {
    container: {},
    title:{},
    image: {}
  },
  tailwindClasses:{
    container:"",
    title:"",
    image:""
  },
  title: "Trusted by over 2K+ clients across the world",
  speed: 3000,
  items: [
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1734935047.c1.png",
    },
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1734935074.c2.png",
    },
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1734935097.c3.png",
    },
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1734935120.c4.png",
    },
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1734935147.c5.png",
    },
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1734935177.c6.png",
    },
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1734935199.c7.png",
    },
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1734935231.c8.png",
    },
  ]
}

export default withData(LogoCloudV6);