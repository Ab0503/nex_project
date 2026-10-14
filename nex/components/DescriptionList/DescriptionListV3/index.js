import { PaperClipIcon } from '@heroicons/react/20/solid'
import get from 'lodash.get';
import { object } from 'prop-types';
import { CalendarDaysIcon, CreditCardIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import parse from 'html-react-parser';

const DescriptionListV3 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});
    
  return (
    <div className={`lg:col-start-3 lg:row-end-1 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <h2 className="sr-only">Summary</h2>
      <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
        <dl className="flex flex-wrap">


          <div className="flex-auto pl-6 pt-6">
            <dt className={`text-sm/6 font-semibold text-gray-900  ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</dt>
            <dd className={`mt-1 text-base font-semibold text-gray-900 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</dd>
          </div>
          {
                get(props, 'items', []).map((item) => (
                  <div className={`mt-4 flex w-full flex-none gap-x-4 px-6 ${get(tailwindClasses, 'box')}`} style={get(style, 'box')}>
                    <dt className="flex-none">
                      <span className={`h-6 w-5 text-gray-400 ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>
                        {parse(get(item, 'icon', ''))}
                      </span>
                     
                    </dt>
                    <dd className={`text-sm/6 text-gray-500 ${get(tailwindClasses, 'value')}`} style={get(style, 'value')}>
                      {get(item, 'value')}
                    </dd>
                  </div>
                ))
            }
        </dl>
      </div>
    </div>
  )
}

DescriptionListV3.propTypes = {
    style: object,
}

DescriptionListV3.defaultProps = {
    style: {
        container: {},
        title: {},
        description: {},
        box: {},
        icon: {},
        value: {}
    },
    title: "Applicant Information",
    description: "Personal Details and application",
    items: [
        {icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
          </svg>`, 
          value: "Sandesh"},
        {icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
        </svg>`,  value: "Jadhav"},
        {icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
        </svg>`,  value: "21 June 1993"},
        {icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
        </svg>`,  value: "Java Teach Lead"},
        {icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
        </svg>`,  value: "Business"},
    ]
}

export default DescriptionListV3;