import get from "lodash.get";
import { object, string } from "prop-types";

const TestV2 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (
        <div className={`${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>Test v2 component - {get(props, 'title')}</div>
    )
}
TestV2.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string
}
TestV2.defaultProps = {
    style: {
        title: {}
    },
    tailwindClasses: {
        title: ""
    },
    title: "xys",
    
}
export default TestV2;