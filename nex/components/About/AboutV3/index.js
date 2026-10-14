import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import CountUp from 'react-countup';
import NexImage from '@nex-core-ui/NexImage';
import NexAnimation from '@nex-components/NexAnimation';

const AboutV3 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
    <section id="snippet-3" className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="px-20 max-sm:px-5 pt-20 xl:pt-20 lg:pt-28 md:pt-28 pb-16 xl:pb-2 lg:pb-2 md:pb-[5rem]">
        <figure className="rounded-[0.4rem]">
          {
            get(props, 'imagePath',"").length != 0 &&
            <NexImage className={`rounded-[0.4rem] !relative ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props,"imagePath")}/>
          }
          </figure>
        <div className="flex flex-wrap mx-[15px]">
          {(get(props, 'items', []).length !== 0) && <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[14px] max-w-full mx-auto">
            <NexAnimation  type={get(props, 'BoxContentAnimation', '')}>
            <div className={`bg-full bg-image bg-overlay bg-overlay-400 mt-[-1.25rem] xl:mt-0 lg:mt-0  xl:-translate-y-2/4 lg:-translate-y-2/4 bg-cover bg-[center_center] bg-no-repeat relative z-0 ${get(tailwindClasses, 'box')}`} style ={{background:`url(${get(props,'bg3')})`,"backgroundRepeat":"no-repeat","backgroundSize":"cover",...get(style, 'box')}}>
              <div className="card-body p-[2.25rem] xl:p-[2.5rem]">
                <div className="flex flex-wrap justify-between mx-[15px] mt-[-20px] text-center">
                {
                  get(props, 'items', []).map((item) => (get(item, 'text1',"").length != 0 || get(item, 'text2',"").length != 0 ) &&
                  <div className="w-11/12 xl:w-3/12 lg:w-3/12 md:w-6/12 flex-[0_0_auto] px-[15px] max-w-full mt-[20px]">
                  {
                    get(item, 'text1',"").length != 0 &&  
                    <h3 className={`nx-text-primary xl:text-[2.2rem] text-[2.1rem] tracking-[normal] leading-none mb-2 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}><CountUp end={get(item,"text1")} enableScrollSpy/></h3>
                  }
                  {
                    get(item, 'text2',"").length != 0 &&
                    <p className={`text-[0.8rem] font-medium mb-0 text-gray-50 ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item,"text2")}</p>
                  }
                  </div>
                )}
                </div>
              </div>
            </div>
            </NexAnimation>
          </div>}
        </div>
      </div>
    </section>
    </div>
  )
}

AboutV3.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string
}
AboutV3.defaultProps = {
    style: {
        container: {},
        image: {},
        box: {},
        text1: {},
        text2: {},
    },
    tailwindClasses: {
        container: "",
        image: "",
        box: "",
        text1: "",
        text2: "",
    },
    BoxContentAnimation: "",
    imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735225752.1440x780.png",
    bg3:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735226051.1197x142.png",
    items:[
        {
            text1:"7518",
            text2:"Completed Projects"
        },
        {
            text1:"3472",
            text2:"Satisfied Customers"
        },
        {
            text1:"2184",
            text2:"Expert Employees"
        },
        {
            text1:"4523",
            text2:"Awards won"
        }
    ],
    
}
export default AboutV3;