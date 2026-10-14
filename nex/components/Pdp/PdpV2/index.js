import NexImage from "@nex-core-ui/NexImage";
import parse from 'html-react-parser';
import get from "lodash.get";
import { arrayOf, object, string } from "prop-types";
const PdpV3 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <section aria-labelledby="applicant-information-title" >
      <div className={`shadow sm:rounded-lg ${get(tailwindClasses, 'container', '')}`} style={get(style,'container', {})}>
        <div className="px-4 py-5 sm:px-6">
          <h4
            className={`text-gray-900 text-3xl ${get(tailwindClasses, 'title', '')}`}
            style={get(style,'title', {})}
          >
            {get(props, 'title', '')}
          </h4>
          <p className={`mt-1 max-w-2xl text-1xl text-gray-500 ${get(tailwindClasses, 'subTitle', '')}`} 
             style={get(style, 'subTitle', {})}
          >
            {get(props, 'subTitle', '')}
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">

            <div className="sm:col-span-2">
              <dd className="mt-1">
               <NexImage className={`!relative ${get(tailwindClasses, 'image', '')}`} src={get(props, 'imagePath', '')} style={get(style, 'image', {})}></NexImage>
              </dd>
            </div>
          
            
            {
                get(props, 'attributes', []).map((attribute) => (
                <div className={`sm:col-span-1 ${get(tailwindClasses, 'attributeBox', '')}`} style={get(style, 'attributeBox', {})}> 
                    <dt className={`text-sm font-medium text-gray-500 ${get(tailwindClasses, 'attributeKey', '')}`} style={get(style, 'attributeKey', {})}>
                        {get(attribute, 'title', '')}
                    </dt>
                    <dd className={`mt-1 text-sm text-gray-900 ${get(tailwindClasses, 'attributeValue', '')}`}  style={get(style, 'attributeValue', {})}>{get(attribute, 'value', '')}</dd>
                </div>
                ))
            }

            <div className={`sm:col-span-2 ${get(tailwindClasses, 'description', '')}`} src={get(props, 'description', '')} style={get(style, 'description', {})}>
              {parse(get(props, 'description', ''))}
            </div>
          </dl>
          <div className="grid grid-cols-2 gap-4 py-5">
            {
                get(props, 'images', []).map((image) => (
                    <div>
                        <NexImage className={`!relative rounded-xl ${get(tailwindClasses, 'images', '')}`} src={get(image, 'imagePath', '')} 
                            style={get(style, 'images', {})}
                        />
                    </div>
                ))
            }
          </div>
        </div>
        
      </div>
    </section>
  );
};

PdpV3.propsTypes = {
    style: object,
    title: string,
    subTitle: string,
    imagePath: string,
    description: string,
    attributes: arrayOf(object),
    images: arrayOf(object),

};
PdpV3.defaultProps = {
    style: {
        container: {},
        title: {},
        subTitle: {},
        image: {},
        description: {},
        attributeKey: {},
        attributeValue: {},
        attributeBox: {},
        images: {},
    },
    tailwindClasses: {
        container: "",
        title: "",
        subTitle: "",
        image: "",
        description: "",
        attributeKey: "",
        attributeValue: "",
        attributeBox: "",
        images: "",
    },
    title: "Event Name Here...",
    subTitle: "Sub title here...",
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024038.pf7.jpg",
    description: "Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.",
    attributes: [
        {
            title: "title here",
            value: "value here",
        },
        {
            title: "title here",
            value: "value here",
        },
        {
            title: "title here",
            value: "value here",
        },
        {
            title: "title here",
            value: "value here",
        }
    ],
    images: [
        {
            imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024038.pf7.jpg",
        },
        {
            imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024038.pf7.jpg",
        },
        {
            imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024038.pf7.jpg",
        },
        {
            imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024038.pf7.jpg",
        }
    ]

};
export default PdpV3;
