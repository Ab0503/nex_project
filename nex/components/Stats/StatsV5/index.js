import { arrayOf, object, string } from "prop-types";
import get from "lodash.get";

  
const StatsV5 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (
      <div className={`bg-white py-32 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className={`text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'title')}`}  style={{...get(style, 'title')}}>
                {get(props, 'title')}
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className={`text-xl/8 text-gray-600 ${get(tailwindClasses, 'description1')}`} style={{...get(style, 'description1')}}>
                    {get(props, 'description1')}
                </p>
                <p className={`mt-10 max-w-xl text-base/7 text-gray-700 ${get(tailwindClasses, 'description2')}`} style={{...get(style, 'description2')}}>
                    {get(props, 'description1')}
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {get(props, 'stats').map((stat, index) => (
                    <div key={index} className={`flex flex-col-reverse gap-y-4 ${get(tailwindClasses, 'statBox')}`} style={{...get(style, 'statBox')}}>
                      <dt className={`text-base/7 text-gray-600 ${get(tailwindClasses, 'name')}`} style={{...get(style, 'name')}}>{stat.name}</dt>
                      <dd className={`text-5xl font-semibold tracking-tight text-gray-900 ${get(tailwindClasses, 'value')}`} style={{...get(style, 'value')}}>{stat.value}</dd>
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

StatsV5.propTypes = {
    style: object,
    title: string,
    description1: string,
    description2: string,
    stats: arrayOf(object)

}
StatsV5.defaultProps = {
    style: {
        container: {},
        description1: {},
        description2: {},
        statName: {},
        statValue: {},
        statBox: {}
    },
    title: "Our mission",
    description1: "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.",
    description2: "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.",
    stats: [
        {name: "Transactions every 24 hours", value: "44 million"},
        {name: "Transactions every 24 hours", value: "44 million"},
        {name: "Transactions every 24 hours", value: "44 million"}
    ]
    
}
export default StatsV5;