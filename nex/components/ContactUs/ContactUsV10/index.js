import{ PropTypes,object} from 'prop-types'
import get from "lodash.get";

const ContactUsV10 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});

    return (
        <div className={`py-8 overflow-hidden ${get(tailwindClasses,'container')}`} style={get(style,'container')}>
        <div className={`container mx-auto px-4 sm:px-2 lg:px-8 mx-sm:10 `}>
            {
                get(props, 'items').map((item) => (
                    <div class="px-32 mb-10 max-sm:px-5 ">
                    {
                        get(item, 'title', '').length !== 0 && <h2 class={`nx-section-heading-font text-3xl font-bold mb-4 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(item, 'title')}</h2>
                    }
                    {
                        get(item, 'description1', '').length !== 0 && <p class={`text-gray-600 leading-relaxed ${get(tailwindClasses, 'description1')}`} style={get(style, 'description1')}>{get(item, 'description1')}
                    </p>
                    }
                    {
                        get(item, 'description2', '').length !== 0 && <p class={`text-gray-600 leading-relaxed mt-4 ${get(tailwindClasses, 'description2')}`} style={get(style, 'description2')}>{get(item, 'description2')}</p>
                    }      
                </div>
                ))
            }
            
        </div>
        </div>
    )
}
ContactUsV10.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    items: PropTypes.arrayOf(object)
};

ContactUsV10.defaultProps = {
    style: {
        container: {},
        title: {},
        description1: {},
        description2: {},
    },
    tailwindClasses: {
        container: "",
        title: "",
        description1:"",
        description2:"",
        },
    items: [
        {
            title: "Mission",
            description1: "Tailwind UI is a collection of beautiful, fully responsive UI components, designed and developed by us, the creators of Tailwind CSS. It's got hundreds of ready-to-use examples to choose from, and is guaranteed to help you find the perfect starting point for what you want to build.",
            description2: "Basic coloring can be done by setting two attributes on the node: fill and stroke. Using fill sets the color inside the object and stroke sets the color of the line drawn around the object. You can use the same CSS color naming schemes that you use in HTML, whether that's color names (like red), rgb values (like rgb(255 0 0)), hex values, etc. ",
        },
        {
            title: "Vision",
            description1: "Tailwind UI is a collection of beautiful, fully responsive UI components, designed and developed by us, the creators of Tailwind CSS. It's got hundreds of ready-to-use examples to choose from, and is guaranteed to help you find the perfect starting point for what you want to build.",
            description2: "Basic coloring can be done by setting two attributes on the node: fill and stroke. Using fill sets the color inside the object and stroke sets the color of the line drawn around the object. You can use the same CSS color naming schemes that you use in HTML, whether that's color names (like red), rgb values (like rgb(255 0 0)), hex values, etc. ",
        },
        {
            title: "Goal",
            description1: "Tailwind UI is a collection of beautiful, fully responsive UI components, designed and developed by us, the creators of Tailwind CSS. It's got hundreds of ready-to-use examples to choose from, and is guaranteed to help you find the perfect starting point for what you want to build.",
            description2: "Basic coloring can be done by setting two attributes on the node: fill and stroke. Using fill sets the color inside the object and stroke sets the color of the line drawn around the object. You can use the same CSS color naming schemes that you use in HTML, whether that's color names (like red), rgb values (like rgb(255 0 0)), hex values, etc. ",
        },
        
    ],
    
};

export default ContactUsV10;