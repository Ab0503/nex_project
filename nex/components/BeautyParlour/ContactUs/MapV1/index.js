import React from "react";
import get from "lodash.get";
import { object, string } from "prop-types";

const MapV1 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
  return (
    <section className={`px-5 pt-5 pb-20 ${get(tailwindClasses,'container')}`} style={get(style,'container')}>
      <div className={`max-w-5xl mx-auto p-2 border rounded-lg shadow-lg ${get(tailwindClasses,'mapContainer')}`} style={get(style,'mapContainer')}>
        <iframe
          className={`w-full h-[450px] ${get(tailwindClasses,'map')}`} style={get(style,'map')}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={get(props,'mapUrl')}
        ></iframe>
      </div>
    </section>
  )
}

MapV1.propTypes={
    style: object,
    tailwindClasses: object,
    mapUrl: string
}

MapV1.defaultProps={
    style:{
        container:{},
        mapContainer:{},
        map:{}
    },
    tailwindClasses:{
        container:"",
        mapContainer:"",
        map:""
    },
    mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.840294242734!2d75.8648!3d25.2138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z25.2138!75.8648!5e0!3m2!1sen!2sin!4v1614876242880!5m2!1sen!2sin",
}
export default MapV1;
