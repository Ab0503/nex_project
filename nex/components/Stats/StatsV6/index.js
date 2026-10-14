import { string, object, arrayOf } from "prop-types";
import get from "lodash.get";
const StatsV6 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (
      <div className={`bg-gray-50 pt-12 sm:pt-16 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>
                {get(props, 'title')}
            </h2>
            <p className={`mt-3 text-xl text-gray-500 sm:mt-4 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
                {get(props, 'description')}
            </p>
          </div>
        </div>
        <div className="mt-10 bg-white pb-12 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                    {get(props, 'stats').map((stat) => (
                        <div className={`flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r ${get(tailwindClasses, 'statBox')}`} style={{...get(style, 'statBox')}}>
                            <dt className={`order-2 mt-2 text-lg/6 font-medium text-gray-500 ${get(tailwindClasses, 'name')}`}  style={{...get(style, 'name')}}>{get(stat, 'name')}</dt>
                            <dd className={`order-1 text-5xl font-bold tracking-tight text-indigo-600 ${get(tailwindClasses, 'value')}`} style={{...get(style, 'value')}}>{get(stat, 'value')}</dd>
                        </div>
                    ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

StatsV6.propTypes = {
    style: object,

}
StatsV6.defaultProps = {
    style: {
        container: {},
        title: {},
        description: {},
        statName: {},
        statValue: {},
        statBox: {}
    },
    title: "Our mission",
    description: "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.",
    stats: [
        {name: "Transactions every 24 hours", value: "44 million"},
        {name: "Transactions every 24 hours", value: "44 million"},
        {name: "Transactions every 24 hours", value: "44 million"}
    ]
}

export default StatsV6;