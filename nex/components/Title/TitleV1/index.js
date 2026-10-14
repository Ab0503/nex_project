const { string } = require("prop-types")
import get from "lodash.get"
const TitleV1 = (props) => {
    return (
        <div className="border-b border-gray-200 pt-5 pb-5 pl-10">
            <h3 className="text-base font-semibold text-gray-900">{get(props, 'title', 'Title here...')}</h3>
        </div>
    )
}

TitleV1.propTypes={
    title: string
}

TitleV1.defaultProps = {
    title: "Title here..."
}

export default TitleV1;