import { arrayOf, object, string } from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
  
const metrics = [
    { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
    { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
    { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
    { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
  ]
  
const StatsV9 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (
      <div className={`relative bg-gray-900 ${get(tailwindClasses, 'container')}`}  style={{...get(style, 'container')}}>
        <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
                <NexImage src={get(props, 'imagePath')} className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"></NexImage>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
          <div className="relative pb-64 pt-12 sm:pb-64 sm:pt-24 xl:col-start-1 xl:pb-24">
            <h2 className={`text-base font-semibold text-indigo-300 ${get(tailwindClasses, 'subTitle')}`} style={{...get(style, 'subTitle')}}>{get(props, 'subTitle')}</h2>
            <p className={`mt-3 text-pretty text-3xl font-bold tracking-tight text-white ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>
                {get(props, 'title')}
            </p>
            <p className={`mt-5 text-lg text-gray-300 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
                {get(props, 'description')}
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
              {get(props, 'stats').map((stat, index) => (
                <p key={index} className={`${get(tailwindClasses, 'statBox')}`} style={{...get(style, 'statBox')}}>
                  <span className={`block text-2xl font-bold text-white ${get(tailwindClasses, 'statName')}`} style={{...get(style, 'statName')}}>{stat.name}</span>
                  <span className={`mt-1 block text-base text-gray-300 ${get(tailwindClasses, 'statValue')}`} style={{...get(style, 'statValue')}}>
                    <span className="font-medium">{stat.value}</span>
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  StatsV9.propTypes = {
    style: object,
    subTitle: string,
    title: string,
    description: string,
    imagePath: string,
    stats: arrayOf(object),
  }

  StatsV9.defaultProps = {
    style: {
        container: {},
        subTitle: {},
        title: {},
        description: {},
        statBox: {},
        statName: {},
        statValue: {},
    },
    imagePath: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
    subTitle: "Deploy faster",
    title: "A better workflow",
    description: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.",
    stats: [
        {
            name: "Transactions ",
            value: "44 million"
        },
        {
            name: "Transactions",
            value: "44 million"
        },
        {
            name: "Transactions ",
            value: "44 million"
        },
        {
          name: "Transactions",
          value: "44 million"
        }
    ]
  }
  export default StatsV9;