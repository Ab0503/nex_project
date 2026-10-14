import get from "lodash.get";
import { arrayOf, object, string } from "prop-types";
import withLazyLoad from '@/utils/withLazyLoad';

const FeatureSectionV12 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  
    return (
        <div className={`py-24 sm:py-32 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className={`text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>{get(props, 'title')}</h2>
                <p className={`mt-6 text-lg/8 text-gray-600 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
                    {get(props, 'description')}
                </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {
                    get(props, 'items', []).map((item) => (
                        <div className={`${get(tailwindClasses, 'itemBox')}`} style={{...get(style, 'itemBox')}}>
                            <h3 className={`border-l border-indigo-600 pl-6 font-semibold text-gray-900 ${get(tailwindClasses, 'itemTitle')}`} style={{...get(style, 'itemTitle')}}>{get(item, 'title')}</h3>
                            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                            <p className={`${get(tailwindClasses, 'itemText1')}`} style={{...get(style, 'itemText1')}}>{get(item, 'text1')}</p>
                            <p className={`${get(tailwindClasses, 'itemText2')}`} style={{...get(style, 'itemText2')}}>{get(item, 'text2')}</p>
                            </address>
                        </div>
                    ))
                }
                </div>
            </div>
            </div>
    )
}

FeatureSectionV12.propTypes = {
    style: object,
    title: string,
    description: string,
    items: arrayOf(object)
}

FeatureSectionV12.defaultProps = {
    style: {
        container: {},
        title: {},
        description: {},
        itemBox: {},
        itemTitle: {},
        itemText1: {},
        itemText2: {}
    },
    title: "Our offices",
    description: "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    items: [
        {
            title: "Los Angeles",
            text1: "4556 Brendan Ferry",
            text2: "Los Angeles, CA 90210"
        },
        {
            title: "Los Angeles",
            text1: "4556 Brendan Ferry",
            text2: "Los Angeles, CA 90210"
        },
        {
            title: "Los Angeles",
            text1: "4556 Brendan Ferry",
            text2: "Los Angeles, CA 90210"
        },
        {
            title: "Los Angeles",
            text1: "4556 Brendan Ferry",
            text2: "Los Angeles, CA 90210"
        }
    ]
}

export default withLazyLoad(FeatureSectionV12);