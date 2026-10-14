import { PaperClipIcon } from '@heroicons/react/20/solid'
import get from 'lodash.get';
import { object } from 'prop-types';
const DescriptionListV1 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});
    
  return (
    <div className={`p-20 max-sm:p-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="px-4 sm:px-0">
        <h3 className={`text-base/7 font-semibold text-gray-900 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h3>
        <p className={`mt-1 max-w-2xl text-sm/6 text-gray-500 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
            {
                get(props, 'items', []).map((item) => (
                    <div className={`px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ${get(tailwindClasses, 'box')}`} style={get(style, 'box')}>
                        <dt className={`text-sm/6 font-medium text-gray-900 ${get(tailwindClasses, 'key')}`}  style={get(style, 'key')}>{get(item, 'key')}</dt>
                        <dd className={`mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 ${get(tailwindClasses, 'value')}`} style={get(style, 'value')}>{get(item, 'value')}</dd>
                    </div>
                ))
            }
        </dl>
      </div>
    </div>
  )
}

DescriptionListV1.propTypes = {
    style: object,
}

DescriptionListV1.defaultProps = {
    style: {
        title: {},
        description: {},
        box: {},
        key: {},
        value: {}
    },
    tailwind: {
        title: "",
        description: "",
        box: "",
        key: "",
        value: ""
    },
    title: "Applicant Information",
    description: "Personal Details and application",
    items: [
        {key: "Full Name", value: "Sandesh"},
        {key: "Last Name", value: "Jadhav"},
        {key: "Birth Date", value: "21 June 1993"},
        {key: "Position", value: "Java Teach Lead"},
        {key: "Occupation", value: "Business"},
    ]
}

export default DescriptionListV1;