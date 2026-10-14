import { arrayOf, object, string } from 'prop-types';
import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import withData from "@nex-core-ui/HOC/withData";
import PrimaryLink from '@nex-core-ui/PrimaryLink';


const LogoCloudV3 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});

  return (
    <div className={`${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="container xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[50px] xl:mt-0 lg:mt-0">
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full  xl:!mt-5 lg:!mt-2">
            {get(props, 'subTitle',"").length !==0 && <h2 className={`!text-base uppercase text-[#aab0bc] !mb-3 tracking-[0.02rem] leading-[1.35] font-bold ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h2>}
            {get(props, 'title',"").length !==0 && <h3 className={`text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-4xl !leading-[1.3] mb-3 xxl:pr-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h3>}
            {get(props, 'description',"").length !==0 && <p className={`text-2xl mb-3 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
            {get(props,'cta',"").length !==0 && <button className={`bg-green-400 hover:bg-green-700 px-5 py-2 text-gray-50 font-bold rounded-lg ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}><PrimaryLink href={get(props,'ctaLink')}>{get(props,'cta')}</PrimaryLink></button>}
          </div>
          <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[50px] xl:mt-0 lg:mt-0">
            <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] xl:mx-[-35px] mt-[-70px]">
              {get(props, 'items', []).map((item) => get(item, 'imagePath',"").length !==0 && <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[70px]">
                <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2"><NexImage className={`!relative ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(item, 'imagePath')} alt="image" /></figure>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

LogoCloudV3.propTypes = {
  style: object,
  tailwindClasses:object,
  subTitle: string,
  title: string,
  description: string,
  cta: string,
  ctaLink: string,
  items: arrayOf(object),
}
LogoCloudV3.defaultProps = {
  style: {
    container: {},
    subTitle: {},
    title: {},
    description: {},
    image: {}
  },
  tailwindClasses: {
    container: "",
    subTitle: "",
    title: "",
    description: "",
    image: ""
  },
  subTitle: "Our Clients",
  title: "Trusted by over 300+ clients",
  description: "We bring solutions to make life easier for our customers.",
  cta: "Create Account",
  ctaLink: "#",
  items: [
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735137844.z1.png",
    },
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735137876.z2.png",
    },
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735137935.z3.png",
    },
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735137963.z4.png",
    },
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735137992.z5.png",
    },
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735138045.z6.png",
    },
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735138054.z7.png",
    },
    {
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735138063.z8.png",
    },
  ]
}

export default withData(LogoCloudV3);