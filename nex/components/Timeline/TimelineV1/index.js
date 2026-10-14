import { arrayOf, object, string } from "prop-types"
import get from "lodash.get";

const TimelineV1 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  
    return (
      <div className={`bg-white py-24 sm:py-32 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {get(props, 'timeline').map((item, index) => (
              <div key={index}>
                <time dateTime={item.dateTime} className={`flex items-center text-sm/6 font-semibold text-indigo-600 ${get(tailwindClasses, 'dateTime')}`} style={{...get(style, 'dateTime')}}>
                  <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 h-1 w-1 flex-none">
                    <circle r={2} cx={2} cy={2} fill="currentColor" />
                  </svg>
                  {item.dateTime}
                  <div
                    aria-hidden="true"
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  />
                </time>
                <p className={`mt-6 text-lg/8 font-semibold tracking-tight text-gray-900 ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>{get(item, 'title')}</p>
                <p className={`mt-1 text-base/7 text-gray-600 ${get(tailwindClasses, 'description')}`}  style={{...get(style, 'description')}}>{get(item, 'description')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  TimelineV1.propTypes = {
    style: object,
    timeline: arrayOf(object),
  }

  TimelineV1.defaultProps = {
    style: {
        container: {},
        dateTime: {},
        title: {},
        description: {}
    },
    timeline: [
        {
            dateTime: "Aug 2021",
            title: "Founded company",
            description: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae."   
        },
        {
            dateTime: "Aug 2021",
            title: "Founded company",
            description: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae."   
        },
        {
            dateTime: "Aug 2021",
            title: "Founded company",
            description: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae."   
        },
        {
            dateTime: "Aug 2021",
            title: "Founded company",
            description: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae."   
        }
    ]
  }

  export default TimelineV1;