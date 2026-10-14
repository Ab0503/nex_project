import PropTypes, { object } from 'prop-types'
import get from "lodash.get";
import parse from "html-react-parser/lib/index";
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';

const HeroSectionV11 = (props) => {
  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});

  return (
    <section className={`overflow-hidden bg-gray-50 ${get(tailwindClasses, 'container')}`}style={get(style, 'container')}>
    <div className={`flex flex-wrap md:flex-nowrap md:p-12 lg:p-16 items-center ${get(tailwindClasses, 'contentcontainer')}`}style={get(style, 'contentcontainer')}>
      {get(props, 'imagePath1', '').length !== 0 &&<div className="p-5 md:w-1/2 relative space-y-80 space-x-64 transform transition-transform duration-500 hover:scale-110 "> 
        <NexImage src={get(props, 'imagePath1')} className={`!relative rounded-xl shadow-lg ${get(tailwindClasses, 'imagePath1')}`}  style={get(style, 'imagePath1')} alt=""/>
        {get(props, 'imagePath2', '').length !== 0 &&
        <div className="absolute transform transition-transform duration-500 hover:scale-110 -top-10 left-50 bg-gray-50 shadow-md rounded-lg max-sm:-top-48 max-sm:-left-32 max-md:-top-24 max-md:-left-4 max-xl:-top-32 max-xl:-left-12 max-lg:-top-32 max-lg :left-0">
        <NexImage src={get(props, 'imagePath2')} className={`!relative rounded-xl w-96 h-68 border-separate border-t-8 max-sm:border-t-4 border-l-8 max-sm:border-l-4 border-r-8 max-sm:border-r-4 border-white shadow-lg ${get(tailwindClasses, 'imagePath2')}`}  style={get(style, 'imagePath2')} alt="" />           
        </div>}
      </div>}
      
      <div className="flex flex-col items-center md:w-1/2 mt-8 md:mt-0 space-x-6">
      {
         get(props, 'title1', '').length !== 0 && <h2 className={`text-center text-3xl md:text-4xl font-bold text-gray-800 hover transition-transform duration-300 hover:scale-105 p-6 ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>
         {get(props, 'title1')} <span></span>
           <span className={`text-green-700 font-bold ${get(tailwindClasses, 'title2')} `}style={get(style, 'title2')}>{get(props, 'title2')} </span>
         </h2>
      }
       {
         get(props, 'description', '').length !== 0 && <p className={`text-center text-gray-600 relative transition-transform duration-300 hover:-translate-y-1 ${get(tailwindClasses, 'description')}`}style={get(style, 'description')}>
         {get(props, 'description')} </p>
       }
         
         {props.items.length !== 0  && <div className="grid grid-cols-2 gap-8 mb-10 p-2 mt-6 ">
          {props.items.map((item)=> {return (get(item, 'text').length!==0 && <div className="flex justify-center">
             <span className={`${get(tailwindClasses,'icon')}`} style={get(style,'icon')}>{parse(get(item,'icon'))}</span>
           <p className={`text-sm mt-2 text-gray-600 font-bold ${get(tailwindClasses, 'text')}`}style={get(style, 'text')}>{get(item, 'text')}</p>
          </div>)})}
        </div>}
        {
            get(props, 'cta', '').length !== 0 && <PrimaryLink href={get(props,'ctaLink')} className={`bg-green-700 text-gray-50 px-6 py-3 rounded-md hover:bg-green-600 hover:scale-105 transition-all duration-300 ${get(tailwindClasses, 'cta')}`}style={get(style, 'cta')}>
            {get(props, 'cta')}</PrimaryLink>
        }
        
      </div>
      </div>
    </section>
  );
};

HeroSectionV11.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  title1: PropTypes.string,
  title2: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  ctaLink: PropTypes.string,
  cta: PropTypes.string,
  imagePath1: PropTypes.string,
  imagePath2: PropTypes.string,
  items: PropTypes.arrayOf(object)
};

HeroSectionV11.defaultProps = {
  style: {
    container: {},
    contentcontainer: {},
    imagePath1:{},
    imagePath2:{},
    title1:{},
    title2:{},
    description: {},
    icon:{},
    text:{},
    cta:{},
  },
  tailwindClasses: {
    container: "",
    contentcontainer: "",
    imagePath1:"",
    imagePath2:"",
    title1:"",
    title2:"",
    description: "",
    icon:"",
    text:"",
    cta:"",
  },
  title1: "25+ Years of Experience",
  title2: "in Gardening & Landscaping",
  subTitle: "Landscpe Planting Services",
  description:
    "Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  ctaLink: "#",
  cta:"Discover More",
  imagePath1:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
    imagePath2:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
  items:[
    {
        icon:`<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-700"   fill="currentColor"   viewBox="0 0 24 24"  >
                <path d="M12 2L8.1 8.6 1.7 9.2 6.8 14.2 5.4 21.2 12 17.8 18.6 21.2 17.2 14.2 22.3 9.2 15.9 8.6z" />
              </svg>`,
        text:"Our MIssion",
    },
    {
        icon:`<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-700"   fill="currentColor"   viewBox="0 0 24 24"  >
                <path d="M12 2L8.1 8.6 1.7 9.2 6.8 14.2 5.4 21.2 12 17.8 18.6 21.2 17.2 14.2 22.3 9.2 15.9 8.6z" />
              </svg>`,
        text:"Our Vision",
    },
    {
        icon:`<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-700"   fill="currentColor"   viewBox="0 0 24 24"  >
                <path d="M12 2L8.1 8.6 1.7 9.2 6.8 14.2 5.4 21.2 12 17.8 18.6 21.2 17.2 14.2 22.3 9.2 15.9 8.6z" />
              </svg>`,
        text:"Support Team",
    },
    {
        icon:`<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-700"   fill="currentColor"   viewBox="0 0 24 24"  >
                <path d="M12 2L8.1 8.6 1.7 9.2 6.8 14.2 5.4 21.2 12 17.8 18.6 21.2 17.2 14.2 22.3 9.2 15.9 8.6z" />
              </svg>`,
        text:"Clients Trust",
    }
  ]
};

export default HeroSectionV11;