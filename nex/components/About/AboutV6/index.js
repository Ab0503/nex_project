import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';
import NexAnimation from '@nex-components/NexAnimation';

const AboutV6 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
    <section id="snippet-6" className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-16 xl:pt-20 lg:pt-28 md:pt-28 pb-16 xl:pb-16 lg:pb-20 md:pb-20">
        <div className={`flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-50px] items-center ${get(tailwindClasses, 'contentcontainer')}`} style={get(style, 'contentcontainer')}>
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
            <NexAnimation  type={get(props, 'ImageContentAnimation', '')}>
            <figure className="m-0 p-0">
            {
                get(props, 'imagePath',"").length != 0 &&
                  <ImageOrVedio className={`!w-full !h-full !relative ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} 
                    src={get(props,"imagePath","")}  vedioSrc={get(props,"vedioPath","")} />
            }
            </figure>
            </NexAnimation>
          </div>
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[30px] max-w-full">
          <NexAnimation  type={get(props, 'TextContentAnimation', '')}>
          {
            get(props, 'title',"").length != 0 &&
            <h3 className={`nx-section-heading-font text-[2.3rem] font-bold xl:text-[2.4rem] leading-[1.3] mb-6 xxl:pr-6 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h3>
          }
               
                {
                  get(props, 'items', []).map((item) => (
                    <div className="px-4 md:px-20 grid justify-center gap-6 p-4">
                        <div>
                          <div key={get(item, 'text', '')}><span> </span>
                            <div className="flex justify-between mb-2">
                              <p className={get(tailwindClasses, 'text', '')} style={get(style, 'text', {})}>{get(item, 'text', '')}</p><span></span>
                              <p className={get(tailwindClasses, 'stat', '')} style={get(style, 'stat', {})}>{get(item, 'stat', '')}</p>
                            </div>
                            <div className="w-80 bg-gray-200 rounded-full h-2">
                              <span> <div className="bg-blue-500 h-2 rounded-full" style={{ background: get(item, 'color', 'whitesmoke'),width: `${get(item, 'percentage', '')}%` }} /> </span>
                            </div>
                          </div>
                        </div>
                    </div>
                  ))
                }
          </NexAnimation>
          </div>
        </div>    
      </div>
    </section>
    </div>
  )
}
AboutV6.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
AboutV6.defaultProps = {
  style: {
      container: {},
      contentcontainer: {},
      image: {},
      title: {},
      text: {},
      stat: {}
  },
  tailwindClasses: {
        container: "",
        contentcontainer: "",
        image: "",
        title: "",
        text: "",
        stat: "",
  },
    ImageContentAnimation: "",
    TextContentAnimation: "",
    title: "We bring rapid solutions to make the life of our customers easier.",
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735227677.730x510.png",
    vedioPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1728966855.1728152985.19420800-uhd_3840_2160_30fps.mp4",
    
    items: [
      {
        text: "Marketing",
        stat: "100%",
        percentage: "100",
        color: "blue"
      },
      {
        text: "Strategy",
        stat: "90%",
        percentage: "90",
        color: "green"
      },
      {
        text: "Development",
        stat: "80%",
        percentage: "80",
        color: "red"
      },
      {
        text: "Data Analysis",
        stat: "70%",
        percentage: "70",
        color: "yello"
      }
    ]
}
export default AboutV6;