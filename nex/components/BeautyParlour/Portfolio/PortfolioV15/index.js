import NexAnimation from '@nex-components/NexAnimation';
import withData from '@nex-core-ui/HOC/withData';
import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get'
import { arrayOf, object, string } from 'prop-types';
import React, { useState, useEffect } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const PortfolioV15 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});

  const uniqueCategories = ["All", ...new Set(Array.isArray(get(props, 'items', [])) ? (get(props, 'items', []).map(item => item.category)) : [])];

  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    if (uniqueCategories.length > 0 && !activeTab) {
      setActiveTab("All");
    }
  }, [uniqueCategories])

  return (
    <section className={`overflow-hidden bg-rose-200/20 py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="text-center">
        <div className="flex flex-wrap mx-[15px]">
          <div className="lg:w-10/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !mb-8">
            <NexAnimation type={get(props, 'topContentAnimation')}>
              {get(props, 'title', "").length !== 0 && <h2 className={`nx-section-heading-font text-[calc(1.285rem_+_0.42vw)] font-bold xl:text-[1.6rem] leading-[1.3] !mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>
                {get(props, 'title')}
              </h2>}
              {get(props, 'subTitle', "").length !== 0 && <p className={`lead !text-[1.05rem] !leading-[1.6] font-medium ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>
                {get(props, 'subTitle')}
              </p>}
            </NexAnimation>
          </div>
        </div>
        <div className="!relative z-[5] filter mb-10">
          <NexAnimation type={get(props, 'topContentAnimation')}>
            <ul className="flex flex-wrap gap-5 justify-center m-0 p-0 list-none">
              {uniqueCategories.map((tab) => <li className={`inline uppercase tracking-[0.02rem] text-sm font-bold cursor-pointer px-5 py-2 nx-bg-hover-primary hover:text-white ${activeTab === tab && "nx-btn-primary"} ${get(tailwindClasses, 'categoryText')}`} style={get(style, 'categoryText')}>
                <button className='uppercase' onClick={() => setActiveTab(tab)}>
                  {tab}
                </button>
              </li>)}
            </ul>
          </NexAnimation>
        </div>
        <div className="flex flex-wrap justify-center mx-[15px] md:mx-[15px] mt-[-30px] isotope">
          <ResponsiveMasonry className='container'
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="5px">
              {Array.isArray(get(props,'items',[])) && get(props,'items',[]).filter(item=> activeTab === "All"  || item.category === activeTab).map((item, index) => (
                <div
                  key={index}
                  className="w-full flex-[0_0_auto] px-[15px] mt-[30px]"
                >
                  <NexAnimation type={get(props, 'bottomContentAnimation')}>
                    {get(item, 'image', "").length !== 0 && <figure className="overlay overlay-1 rounded group relative before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 hover:before:bg-rose-800/60 transition-all duration-700">
                      <NexImage className={`!relative ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(item, 'image')} alt="image" />
                      {get(item, 'category', "").length !== 0 && <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center z-[5] pointer-events-none px-4 py-3 inset-0">
                        <h5 className={`text-xl font-bold from-top !mb-0 absolute w-full px-4 py-3 left-0 -bottom-7 bg-white !text-gray-950 ${get(tailwindClasses, 'category')}`} style={get(style, 'category')}>
                          {get(item, 'category')}
                        </h5>
                      </figcaption>}
                    </figure>}
                  </NexAnimation>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  )
}

PortfolioV15.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
  allText: string,
  category: arrayOf(object),
  items: arrayOf(object)
}

PortfolioV15.defaultProps = {
  style: {
    container: {},
    title: {},
    subTitle: {},
    allText: {},
    categoryText: {},
    image: {},
    category: {}
  },
  tailwindClasses: {
    container: "",
    title: "",
    subTitle: "",
    allText: "",
    categoryText: "",
    image: "",
    category: ""
  },
  title: "My Selected Shots",
  subTitle: "Photography is my passion and I love to turn ideas into beautiful things.",
  topContentAnimation: "",
  bottomContentAnimation: "",
  items: [
    {
      image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737023826.pf1.jpg",
      category: "Wedding"
    },
    {
      image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737023877.pf2.jpg",
      category: "Birthday's"
    },
    {
      image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737023901.pf3.jpg",
      category: "Corporate"
    },
    {
      image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737023924.pf4.jpg",
      category: "Engagment"
    },
    {
      image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737023944.pf5.jpg",
      category: "Corporate"
    },
    {
      image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024018.pf6.jpg",
      category: "Wedding"
    },
    {
      image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024038.pf7.jpg",
      category: "Engagment"
    },
    {
      image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024061.pf8.jpg",
      category: "Wedding"
    },
    {
      image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024079.pf9.jpg",
      category: "Engagment"
    },
    {
      image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024099.pf10.jpg",
      category: "Birthday's"
    },
    {
      image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024118.pf11.jpg",
      category: "Birthday's"
    },
    {
      image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024137.pf12.jpg",
      category: "Corporate"
    },
    {
      image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024155.pf13.jpg",
      category: "Birthday's"
    },
  ]
}
export default withData(PortfolioV15)
