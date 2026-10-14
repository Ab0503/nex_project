import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import parse from "html-react-parser";
import Typewriter from "typewriter-effect";

const HeroSectionV50 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});

  return (
    <section className="bg-blue-50 py-12 px-6 md:px-20 ">
      <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-24 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
        {/* Left Content */}
        <div>
            {
                get(props, 'title1', '').length !== 0 && <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-24 ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>
                {get(props, 'title1')} <span className={`text-teal-500 ${get(tailwindClasses, 'title2')}`} style={get(style, 'title2')}>{get(props, 'title2')}</span>
              </h1>
            }
          {
            get(props, 'description', '').length !== 0 && <p className={`text-gray-600 text-lg md:text-xl mb-8 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>
            {get(props, 'description')}
          </p>
          }
          
          <div className="flex space-x-4">
            {
                 get(props, 'ctaText1', '').length !== 0 &&  <button className={`bg-yellow-400 text-white font-medium py-3 px-6 rounded-lg transition ${get(tailwindClasses, 'ctaText1')}`} style={get(style, 'ctaText1')}>
                 {get(props, 'ctaText1')}
                 </button>
            }
           {
            get(props, 'ctaText2', '').length !== 0 && <button className={`text-teal-500 font-medium py-3 px-6 hover:underline ${get(tailwindClasses, 'ctaText2')}`} style={get(style, 'ctaText2')}>
                 {get(props, 'ctaText2')}
          </button>
           }
            
          </div>
          {/* Customer Testimonials */}
      <div className="max-w-xl flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6 mt-40">
        
        <div>
        {
          get(props, 'imagePath2', '').length !== 0 && <img
          className={`border-white rounded border-2 ${get(tailwindClasses, 'imagePath2')}`} style={get(style, 'imagePath2')}
          src={get(props, 'imagePath2')} // Replace with actual avatar paths
          alt="Customer 1"
          width={250}
          height={250}
          
        />
        }
    </div>
    {
      get(props, 'imagePath3', '').length !== 0 &&   <div className="flex items-center -space-x-4">
      
      <img
        className={`!relative border-white rounded-full border-2 ${get(tailwindClasses, 'imagePath3')}`} style={get(style, 'imagePath3')}
        src={get(props, 'imagePath3')} // Replace with actual avatar paths
        alt="Customer 1"
        width={50}
        height={50}
        
      />
      <img
        className={`!relative border-white rounded-full border-2 ${get(tailwindClasses, 'imagePath4')}`} style={get(style, 'imagePath4')}
        src={get(props, 'imagePath4')} // Replace with actual avatar paths
        alt="Customer 2"
        width={50}
        height={50}        
      />
      <img
        className={`!relative border-white rounded-full border-2 ${get(tailwindClasses, 'imagePath5')}`} style={get(style, 'imagePath5')}
        src={get(props, 'imagePath5')} // Replace with actual avatar paths
        alt="Customer 3"
        width={50}
        height={50}        
      />
      <img
        className={`!relative border-white rounded-full border-2 ${get(tailwindClasses, 'imagePath6')}`} style={get(style, 'imagePath6')}
        src={get(props, 'imagePath6')} // Replace with actual avatar paths
        alt="Customer 4"
        width={50}
        height={50}        
      />
      </div>
    }
     
    <div className="text-center md:text-left mt-4 md:mt-0 md:ml-6">
      {
        get(props, 'Text1', '').length !== 0 && <h3 className={`text-2xl font-semibold text-gray-800 ${get(tailwindClasses, 'Text1')}`} style={get(style, 'Text1')}>{get(props, 'Text1')}     </h3>
      }
      {
        get(props, 'Text2', '').length !== 0 &&  <p className={`text-gray-600  ${get(tailwindClasses, 'Text2')}`} style={get(style, 'Text2')}>{get(props, 'Text2')} </p>
      }
      
    </div>
  </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          {/* Spine Illustration */}
          <div className="flex justify-center">
            {/* <img
              src="https://templatekit.jegtheme.com/chirox/wp-content/uploads/sites/372/2023/05/Human-Spine-2-BEEVEM3.png" // Replace with your image path
              alt="Spine illustration"
              width={200}
              height={600}
              className="object-contain"
            /> */}
            <NexImage
              src={get(props, 'imagePath1')} // Replace with your image path
              alt="Spine illustration"
              width={400}
              height={200}
              className={`!relative object-contain ${get(tailwindClasses, 'imagePath1')}`} style={get(style, 'imagePath1')}
            />
          </div>

          {/* Spine Labels */}
          {/* <div className="absolute top-64 left-0 transform -translate-x-1/2 -translate-y-1/2">
            <span className="bg-teal-500 text-white py-1 px-2 rounded-lg text-sm shadow-md">
              Back Pain
            </span>
          </div>
          <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 translate-y-1/2">
            <span className="bg-teal-500 text-white py-1 px-2 rounded-lg text-sm shadow-md">
              Low Back Pain
            </span>
          </div> */}
        </div>
      </div>

      
    </section>
);
};

HeroSectionV50.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title1: PropTypes.string,
  title2: PropTypes.string,
  description: PropTypes.string,
  ctaLink1: PropTypes.string,
  ctaText1: PropTypes.string,  
  ctaLink2: PropTypes.string,
  ctaText2: PropTypes.string,
  imagePath1: PropTypes.string,
  imagePath2: PropTypes.string,
  imagePath3: PropTypes.string,
  imagePath4: PropTypes.string,
  imagePath5: PropTypes.string,
  imagePath6: PropTypes.string,
  Text1: PropTypes.string,
  Text2: PropTypes.string,
};

HeroSectionV50.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title1: {},
    title2: {},
    description: {},
    ctaText1: {},
    ctaText2: {},
    imagePath1: {},
    imagePath2: {},
    imagePath3: {},
    imagePath4: {},
    imagePath5: {},
    imagePath6: {},
    Text1:{},
    Text2:{},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    title1: "",
    title2: "",
    description: "",
    ctaText1: "",
    ctaText2: "",
    imagePath1: "",
    imagePath2: "",
    imagePath3: "",
    imagePath4: "",
    imagePath5: "",
    imagePath6: "",
    Text1:"",
    Text2:"",
  },

  title1: "Say Goodbye to",
  title2: "Back Pain",
  description:
    "Chiropractic is a form of alternative medicine that focuses on diagnosing and treating mechanical disorders of the musculoskeletal system, particularly the spine.",
  ctaText1: "Get Started",
  ctaLink1: "#",
  ctaText2: "Learn More",
  ctaLink2: "#",
  Text1:"13K+",
  Text2:"Satisfied Customers",
  imagePath1:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736948855.vecteezy_cute-doctor-women-compassionate-and-skilled-models-for_22484658-removebg-preview.png",
  imagePath2:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736416392.t-5.jpg",
  imagePath3:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736416392.t-5.jpg",
  imagePath4:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736416356.t-2.jpg",
  imagePath5:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736416382.t-4.jpg",
  imagePath6:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736416356.t-2.jpg",
};
export default HeroSectionV50;
