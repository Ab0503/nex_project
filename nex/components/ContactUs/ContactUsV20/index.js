import NexAnimation from '@nex-components/NexAnimation';
import parse from 'html-react-parser';
import get from 'lodash.get';
import { arrayOf, object, string } from 'prop-types';
import React from 'react';

const ContactUsV20 = (props) => {
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const style = get(props, 'style', {})
  return (
    <section className="py-24">
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="md:flex gap-x-24 clear-left md:mb-16 mb-10">
          <div className=" md:mb-0 mb-4">
            {
                get(props, 'title', "").length !== 0 &&  <h2 className={`nx-section-heading-font font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>
            }
             {
                get(props, 'description', "").length !== 0 && <p className={`text-gray-600 text-lg font-normal leading-7 mb-7 md:text-left text-center ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>
             }
              
              <div className="flex md:items-center md:justify-start justify-center">
                  {/* <button className="w-36 h-12 rounded-full bg-indigo-600 transition-all duration-700 hover:bg-indigo-800 shadow text-white text-center text-base font-semibold leading-6">Contact Us</button> */}
                  {
                    get(props, 'ctaText', "").length !== 0 &&  <button className={`relative inline-block group w-36 h-12 rounded-full  shadow text-gray-50 text-center text-base font-semibold leading-6 ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>
                    <span
                    className="relative z-10 px-3.5 py-2 overflow-hidden font-medium leading-tight flex items-centrer justify-center nx-text-primary transition-colors duration-300 ease-out border-2 nx-border-primary rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span
                      className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-indigo-600 group-hover:-rotate-180 ease"></span>
                    <span className={`relative text-base font-semibold ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>{get(props, 'ctaText')}</span>
                    </span>
                    <span
                    className="absolute bottom-0 right-0 w-full h-9 -mb-1 -mr-1 transition-all duration-200 ease-linear nx-bg-primary rounded-lg group-hover:mr-0 group-hover:mb-2"
                    data-rounded="rounded-lg"></span>
                    </button>
                  }
                  
              </div>
          </div>
          <div className="border-l-2 md:nx-border-primary border-gray-50 px-10 py-6">
              <div className="mb-8">
                {
                    get(props, 'contactText1', "").length !== 0 && <h6 className={`text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center ${get(tailwindClasses, 'contactText1')}`} style={get(style, 'contactText1')}>{get(props, 'contactText1')}</h6>
                }
                  {
                    get(props, 'textDescription1', "").length !== 0 && <h3 className={`text-black text-xl font-semibold leading-8 md:text-start text-center ${get(tailwindClasses, 'textDescription1')}`} style={get(style, 'textDescription1')}>{get(props, 'textDescription1')}</h3>
                  }
                  
              </div>
              <div>
                {
                    get(props, 'contactText2', "").length !== 0 &&  <h6 className={`text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center ${get(tailwindClasses, 'contactText2')}`} style={get(style, 'contactText2')}>{get(props, 'contactText2')}</h6>
                }
                  
                  {
                    get(props, 'textDescription2', "").length !== 0 &&  <h3 className={`text-black text-xl font-semibold leading-8 md:text-start text-center ${get(tailwindClasses, 'textDescription2')}`} style={get(style, 'textDescription2')}>{get(props, 'textDescription2')}</h3>
                  }
                 
              </div>
          </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 relative cursor-pointer overflow-hidden">
        {/* { get(props, 'items', []).map((item) =>
        {
             return get(item, 'imagePath', "").length !== 0 && <div className="h-96 relative flex justify-center">
             <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
             <img src={get(item, 'imagePath')} className={`w-full h-full object-cover group-hover:scale-110 ${get(tailwindClasses, 'imagePath')}`} style={get(style, 'imagePath')} />
             <div className="absolute bottom-0 mb-6 text-center px-6">
                 <h5 className={`text-white text-lg font-semibold leading-7 mb-2 ${get(tailwindClasses, 'Text')}`} style={get(style, 'Text')}>{get(item, 'Text')}</h5>
                 <p className={`text-white text-base font-medium leading-6 ${get(tailwindClasses, 'address')}`} style={get(style, 'address')}>{get(item, 'address')}</p>
             </div>
         </div>
        })
    } */}
        


{  get(props, 'items', []).map((item) =>
  <div
  class=" group cursor-pointer  duration-500 w-64 h-96 bg-transparent text-gray-50 p-5"
>
 <div class="">
 <div
   class="relative overflow-hidden group-hover:scale-110 w-64 h-80 duration-500"
 style={{background:`url(${get(item,"imagePath")})`}}>  
 <div
   class="absolute w-56 left-0 p-5 -bottom-8 duration-500 group-hover:-translate-y-12"
 >
   <div
     class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-green-900"
   ></div>
   <span class={`text-xl font-bold" ${get(tailwindClasses, 'Text')}`} style={get(style, 'Text')}>{get(item, 'Text')}</span>
   <p class={`group-hover:opacity-100 w-56 duration-500 opacity-0 ${get(tailwindClasses, 'address')}`} style={get(style, 'address')}>{get(item, 'address')}
   </p>
 </div>
 </div>
</div></div>)
}
 


      </div>
    </div>
  </section>
                                          
  )
}

ContactUsV20.propTypes = {
  style: object,
  tailwindClasses: object,
  container: string,
  contentContainer:string,
  title: string,
  description: string,
  ctaText: string,
  contactText1: string,
  textDescription1: string,
  contactText2: string,
  textDescription2: string,
  imagePath: string,
  Text: string,
  address: string,
  ctaLink: string,
  items: arrayOf(object)
}

ContactUsV20.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title:{},
    description:{},
    ctaText:{},
    contactText1:{},
    textDescription1:{},
    contactText2:{},
    textDescription2:{},
    imagePath:{},
    Text:{},
    address:{},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    title:"",
    description:"",
    ctaText:"",
    contactText1:"",
    textDescription1:"",
    contactText2:"",
    textDescription2:"",
    imagePath:"",
    Text:"",
    address:"",
  },
  title:"Get In Touch",
    description:"Whether you have a concern or simply want to say hello, We are here to facilitate communication with you.",
    ctaText:"Contact Us",
    contactText1:"Email Address",
    textDescription1:"nexnnova@gmail.com",
    contactText2:"Phone Number",
    textDescription2:"470-601-1911",
    imagePath1:"https://pagedone.io/asset/uploads/1696246502.png",
    
    
    
  contentAnimation: "Right-To-Left",
  formAnimation: "Right-To-Left",
  items: [
    {
        imagePath:"https://pagedone.io/asset/uploads/1696246502.png",
        Text:"United Kingdom",
        address:"123 High Street, Westminster, London",
    },
    {
        imagePath:"https://pagedone.io/asset/uploads/1696246522.png",
        Text:"Germany",
    address:"101 Unter den Linden, Mitte District, Berlin ",
    },
    {
        imagePath:"https://pagedone.io/asset/uploads/1696246551.png",
        Text:"France",
    address:"456 Rue de la Paix, 8th Arrondissement, Paris",
    },
    {
        imagePath:"https://pagedone.io/asset/uploads/1696246565.png",
    Text:"Switzerland",
    address:"987 Bahnhofstrasse, Zurich City Center, Zurich",
    },
  ]

}
export default ContactUsV20
