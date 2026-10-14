import { arrayOf, object, string } from "prop-types"
import get from "lodash.get";

const StatsV1 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (
      <div className={`bg-slate-100 py-24 sm:py-32 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {get(props, 'stats').map((stat) => (
              <div key={stat.name} className={`mx-auto flex max-w-xs flex-col gap-y-4 ${get(tailwindClasses, 'statBox')}`} style={{...get(style, 'statBox')}}>
                <dt className={`text-base/7 text-gray-600 ${get(tailwindClasses, 'name')}`} style={{...get(style, 'name')}}>{get(stat, 'name')}</dt>
                <dd className={`order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'value')}`} style={{...get(style, 'value')}}>
                {get(stat, 'value')}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }

  StatsV1.propTypes = {
    style: object,
    stats: arrayOf(object),
  }

  StatsV1.defaultProps = {
    style: {
        container: {},
        statBox: {},
        name: {},
        value: {}
    },
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
        }
    ]
  }

  export default StatsV1;