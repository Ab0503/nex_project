import { arrayOf, object, string } from "prop-types"
import get from "lodash.get";
  
const StatsV2 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (

      <div className={`bg-slate-100 py-24 sm:py-32 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className={`text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>
                {get(props, 'title')}
              </h2>
              <p className={`mt-4 text-lg/8 text-gray-600 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>{get(props, 'description')}</p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {get(props, 'stats').map((stat) => (
                <div key={stat.id} className={`flex flex-col bg-gray-400/5 p-8 ${get(tailwindClasses, 'statBox')}`} style={{...get(style, 'statBox')}}>
                  <dt className={`text-sm/6 font-semibold text-gray-600 ${get(tailwindClasses, 'name')}`} style={{...get(style, 'name')}}>{get(stat, 'name')}</dt>
                  <dd className={`order-first text-3xl font-semibold tracking-tight text-gray-900 ${get(tailwindClasses, 'value')}`} style={{...get(style, 'value')}}>{get(stat, 'value')}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }

  StatsV2.propTypes = {
    style: object,
    title: string,
    description: string,
    stats: arrayOf(object),
  }

  StatsV2.defaultProps = {
    style: {
        container: {},
        title: {},
        description: {},
        statBox: {},
        name: {},
        value: {}
    },
    title: "Trusted by creators worldwide",
    description: "Lorem ipsum dolor sit amet consect adipisicing possimus.",
    stats: [
        {
            name: "Transactions every 24 hours",
            value: "44 million"
        },
        {
            name: "Transactions every 24 hours",
            value: "44 million"
        },
        {
            name: "Transactions every 24 hours",
            value: "44 million"
        },
        {
          name: "Transactions every 24 hours",
          value: "44 million"
        }
    ]
  }

  export default StatsV2;