import React from 'react'
import { object, string } from 'prop-types';
import get from 'lodash.get';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';

const HeroSectionV46 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
    <section className={`bg-green-300 bg-gradient-reverse-primary ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="py-24 xl:py-[8rem] lg:py-[8rem] md:py-[8rem]">
        <div className="flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[30px] mb-4 items-center">
          <div
            className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[30px] max-w-full xl:order-2 lg:order-2">
            <figure className="m-0 p-0">
            {
                get(props, 'imagePath',"").length != 0 &&
                <ImageOrVedio className={`!relative !w-full ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props, "imagePath")} vediosrc={get(props, "vedioPath")}/>
            }
            </figure>
          </div>
          
          <div
            className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[30px] max-w-full">
            {
                get(props, 'subTitle',"").length != 0 &&
                <h2 className={`text-[0.8rem] tracking-[0.02rem] uppercase text-[#aab0bc] mb-3 leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}</h2>
            }
            {
                get(props, 'title',"").length != 0 &&
                <h3 className={`text-[1.8rem] font-bold xl:text-[1.9rem] leading-[1.25] mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h3>
            }
            {
                get(props, 'description',"").length != 0 &&
                <p className={`mb-7 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, "description")}</p>
            }
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-9/12 lg:w-9/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                <form action="#">
                  <div className="form-floating input-group relative inline-flex items-stretch w-full">
                    {
                        get(props, 'email',"").length != 0 &&
                        <input type="url"
                        className={`form-control relative block w-full text-12px font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-l-lg border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[#fefefe] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 pr-9 px-4 py-[0.8rem] leading-[1.7] ${get(tailwindClasses, 'emailBox')}`} style={get(style, 'emailBox')}
                        placeholder={get(props, "email")} id="seo-check"/>
                    }
                    {
                        get(props, 'ctaText',"").length != 0 &&
                        <button className={`px-4 text-center font-semibold text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:border-[#fab758] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] rounded-r-lg ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}
                        type="button">{get(props, "ctaText")}
                        </button>
                    }
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
HeroSectionV46.propTypes = {
    style: object,
    subTitle: string,
    title: string,
    description: string,
    imagePath: string,
}
HeroSectionV46.defaultProps = {
    style: {
        container: {},
        subTitle: {},
        title: {},
        description: {},
        emailBox: {},
        email: {},
        ctaText: {},
        image: {},
    },
    tailwindClasses:{
        container: "",
        subTitle: "",
        title: "",
        description: "",
        emailBox: "",
        email: "",
        ctaText: "",
        image: "",
    },
    subTitle: "Analyze Now",
    title: "Wonder how much faster your website can go? Easily check your SEO Score now.",
    description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
    email:"Enter Website URL",
    ctaText: "Check",
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736841482.dummy_626x448_ffffff_b22000.png",
    vedioPath: ""
} 
export default HeroSectionV46;