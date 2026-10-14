import { arrayOf, object, string } from "prop-types";
import get from "lodash.get";
  
const StatsV4 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (
      <div className={`bg-gray-900 py-24 sm:py-32 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className={`text-base/7 font-semibold text-indigo-400 ${get(tailwindClasses, 'subTitle')}`} style={{...get(style, 'subTitle')}}>{get(props, 'subTitle')}</p>
            <h1 className={`mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>
                {get(props, 'title')}
            </h1>
            <div className={`mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-300 lg:max-w-none lg:grid-cols-2 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
              <div>
                <p>
                  {get(props, 'description1')}
                </p>
                <p className="mt-8">
                    {get(props, 'description2')}
                </p>
              </div>
              <div>
                <p>
                    {get(props, 'description3')}
                </p>
                <p className="mt-8">
                    {get(props, 'description4')}
                </p>
              </div>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
              {get(props, 'stats').map((stat, statIdx) => (
                <div key={statIdx} className={`flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6 ${get(tailwindClasses, 'statBox')}`}  style={{...get(style, 'statBox')}}>
                  <dt className={`text-base/7 text-gray-300 ${get(tailwindClasses, 'statName')}`} style={{...get(style, 'statName')}}>{stat.name}</dt>
                  <dd className={`text-3xl font-semibold tracking-tight text-white ${get(tailwindClasses, 'statValue')}`} style={{...get(style, 'statValue')}}>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }

  StatsV4.propTypes = {
    style: object,
    subTitle: string,
    title: string,
    description1: string,
    description2: string,
    description3: string,
    description4: string,
    stats: arrayOf(object),
  }
  StatsV4.defaultProps = {
    style: {
        container: {},
        subTitle: {},
        title: {},
        description: {},
        statBox: {},
        statName: {},
        statValue: {},
    },
    subTitle: "Deploy faster",
    title: "A better workflow",
    description1: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.",
    description2: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.",
    description3: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.",
    description4: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.",
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

  export default StatsV4;