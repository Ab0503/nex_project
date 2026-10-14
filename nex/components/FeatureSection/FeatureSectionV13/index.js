import get from "lodash.get";
import { arrayOf, object, string } from "prop-types";
import withLazyLoad from '@/utils/withLazyLoad';

const FeatureSectionV13 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  
    return (
        <div className={`py-24 sm:py-32 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                    <div>
                    <h2 className={`nx-section-heading-font text-4xl font-semibold tracking-tight text-gray-900 ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>{get(props, 'title')}</h2>
                    <p className={`mt-4 text-base/7 text-gray-600 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
                        {get(props, 'description')}
                    </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                        {
                            get(props, 'items', []).map((item) => (
                                <div className={`rounded-2xl nx-bg-primary-light p-10 ${get(tailwindClasses, 'itemBox')}`} style={{...get(style, 'itemBox')}}>
                                    <h3 className={`text-base/7 font-semibold nx-text-primary ${get(tailwindClasses, 'itemTitle')}`} style={{...get(style, 'itemTitle')}}>{get(item, 'title')}</h3>
                                    <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                                    <p className={`${get(tailwindClasses, 'itemText1')}`} style={{...get(style, 'itemText1')}}>{get(item, 'text1')}</p>
                                    <p className={`${get(tailwindClasses, 'itemText2')}`} style={{...get(style, 'itemText2')}}>{get(item, 'text2')}</p>
                                    </dl>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
                </div>
            </div>
            </div>
    )
}

FeatureSectionV13.propTypes = {
    style: object,
    title: string,
    description: string,
    items: arrayOf(object)
}

FeatureSectionV13.defaultProps = {
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

export default withLazyLoad(FeatureSectionV13);