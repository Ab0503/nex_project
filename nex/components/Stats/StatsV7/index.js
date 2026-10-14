import { string, object, arrayOf } from "prop-types";
import get from "lodash.get";
const StatsV7 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (

      <div className={`bg-indigo-800 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className={`text-3xl font-bold tracking-tight text-white sm:text-4xl ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>
              {get(props, 'title')}
            </h2>
            <p className={`mt-3 text-xl text-indigo-200 sm:mt-4 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
              {get(props, 'description')}
            </p>
          </div>
          <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
            {get(props, 'stats').map((stat) => (
                <div className={`flex flex-col ${get(tailwindClasses, 'statBox')}`} style={{...get(style, 'statBox')}}>
                  <dt className={`order-2 mt-2 text-lg/6 font-medium text-indigo-200 ${get(tailwindClasses, 'name')}`}   style={{...get(style, 'name')}}>{get(stat, 'name')}</dt>
                  <dd className={`order-1 text-5xl font-bold tracking-tight text-white ${get(tailwindClasses, 'value')}`} style={{...get(style, 'value')}}>{get(stat, 'value')}</dd>
                </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }

StatsV7.propTypes = {
    style: object,

}
StatsV7.defaultProps = {
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

export default StatsV7;