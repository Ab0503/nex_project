import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get';
import { React, useState, useEffect } from 'react';
import withData from '@nex-core-ui/HOC/withData';
import { arrayOf, object, string } from 'prop-types';

const ProductListHomeV3 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});

  const uniqueCategories = [...new Set(Array.isArray(get(props, 'items', [])) ? (get(props, 'items', []).map(item => item.category)) : [])];

  const [activeTab, setActiveTab] = useState(uniqueCategories[0]);

  useEffect(() => {
    if (uniqueCategories.length > 0 && !activeTab) {
      setActiveTab(uniqueCategories[0]);
    }
  }, [uniqueCategories])

  return (
    <div className={`px-4 py-20 relative opacity-90 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)] ${get(tailwindClasses, 'container')}`} style={{ backgroundImage: `url(${get(props, 'bgImage')})`, backgroundSize: "cover", ...get(style, 'container') }}>
      <div className={`relative text-white z-10 ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
        {get(props, 'subTitle', '').length !== 0 && <h1 className={`text-center mb-3 nx-text-primary ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle', '')}</h1>}
        {get(props, 'title', '').length !== 0 && <h4 className={`nx-section-heading-font text-center text-4xl mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h4>}
        {get(props, 'description', '').length !== 0 && <p className={`text-center max-w-xl mx-auto ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
        <div className="w-full max-w-6xl mx-auto p-4">
          <div className="flex justify-center space-x-6 pb-2">
            {uniqueCategories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`nx-section-heading-font text-xl font-semibold pb-1 border-b-4 transition-all duration-300  ${activeTab === tab ? "nx-border-primary" : "border-transparent"
                  } ${get(tailwindClasses, 'tabs')}`} style={get(style, 'tabs')}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap space-x-4">
            <figure className='w-10/12 md:w-4/12 mx-auto max-sm:mb-5'>
              {Array.isArray(get(props, 'items', [])) &&
                get(props, 'items', []).some(item => item.category === activeTab) && (
                  <NexImage src={get(get(props, 'items', []).find(item => item.category === activeTab),'categoryImage','')} className={`!relative ${get(tailwindClasses, 'sliderImage')}`} style={get(style, 'sliderImage')}/>)}
            </figure>
            <div className='w-full md:w-7/12'>
              {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).filter(item => item.category === activeTab).map((item, index) => (
                <div key={index} className="flex justify-between items-center p-2 pb-4 border-b border-dashed border-white">
                  <div>
                    {get(item, 'name', '').length !== 0 && <h3 className={`font-medium text-lg ${get(tailwindClasses, 'productName')}`} style={get(style, 'productName')}>{get(item, 'name')}</h3>}
                    {get(item, 'description', '').length !== 0 && <p className={`text-sm  ${get(tailwindClasses, 'productDescription')}`} style={get(style, 'productDescription')}>{get(item, 'description')}</p>}
                  </div>
                  {get(item, 'price', '').length !== 0 && <span className={`font-semibold text-lg ${get(tailwindClasses, 'productPrice')}`} style={get(style, 'productPrice')}>{get(item, 'price')}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
        {get(props, 'ctaText', '').length !== 0 && <div className="flex justify-center">
          <button className={`px-5 py-2 nx-btn-primary nx-btn-primary:hover rounded-lg ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
            <PrimaryLink href={get(props, 'ctaLink')}>
              {get(props, 'ctaText')}
            </PrimaryLink>
          </button>
        </div>}
      </div>
    </div>
  )
}

ProductListHomeV3.propTypes = {
  style: object,
  tailwindClasses: object,
  bgImage: string,
  subTitle: string,
  title: string,
  description: string,
  ctaLink: string,
  ctaText: string,
  images: arrayOf(object),
  items: arrayOf(object)
}

ProductListHomeV3.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    subTitle: {},
    title: {},
    description: {},
    tabs: {},
    sliderImage: {},
    productName: {},
    productDescription: {},
    productPrice: {},
    cta: {}
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    subTitle: "",
    title: "",
    description: "",
    tabs: "",
    sliderImage: "",
    productName: "",
    productDescription: "",
    productPrice: "",
    cta: ""
  },
  bgImage: "https://images.pexels.com/photos/30869948/pexels-photo-30869948/free-photo-of-delicious-breakfast-spread-with-coffee-and-pastries.jpeg?auto=compress&cs=tinysrgb&w=2100&h=1400&fit=crop&dpr=1",
  subTitle: "Our menu",
  title: "Delicious Food Day",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eaque sequi ipsa aliquid vero sed.",
  ctaLink: "#",
  ctaText: "View All",
  items: [
    {
      category: "Breakfast",
      categoryImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
      name: "Pancakes",
      description: "Fluffy pancakes with syrup",
      price: "$8.5"
    },
    {
      category: "Breakfast",
      categoryImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
      name: "Omelette",
      description: "Cheese and veggie omelette",
      price: "$7.0"
    },
    {
      category: "Lunch",
      categoryImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
      name: "Grilled Chicken Sandwich",
      description: "Served with fries",
      price: "$12.0"
    },
    {
      category: "Lunch",
      categoryImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
      name: "Caesar Salad",
      description: "Fresh lettuce with dressing",
      price: "$10.5"
    },
    {
      category: "Dinner",
      categoryImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
      name: "Baked Potato Pizza",
      description: "Potato / Bread / Cheese",
      price: "$20.9"
    },
    {
      category: "Dinner",
      categoryImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
      name: "Fresh Crab With Lemon",
      description: "Potato / Bread / Cheese",
      price: "$21.0"
    },
    {
      category: "Dinner",
      categoryImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
      name: "Grilled Salmon Sushi",
      description: "Potato / Bread / Cheese",
      price: "$12.3"
    },
  ]
}
export default withData(ProductListHomeV3)