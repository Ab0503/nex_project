import { arrayOf, object, string } from "prop-types"
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
  
const StatsV3 = (props) => {
  const style = get(props,'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
      <div className="relative bg-white">
        <grid className="grid lg:grid-cols-2">
          <div>
            <NexImage src={get(props, 'imagePath')} className="!relative  bg-gray-50  md:h-96 lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2" />
          </div>
          <div>
          <div className={`grid ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
            <div className="pb-24 pt-16 sm:pb-32 sm:pt-20 lg:pt-32">
              <div className="ml-10 md:ml-20">
                <h2 className={`text-base/8 font-semibold text-indigo-600 ${get(tailwindClasses, 'subTitle')}`} style={{...get(style, 'subTitle')}}>{get(props, 'subTitle')}</h2>
                <p className={`mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>
                  {get(props, 'title')}
                </p>
                <p className={`mt-6 text-lg/8 text-gray-600 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
                  {get(props, 'description')}
                </p>
                <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                  {get(props, 'stats').map((stat) => (
                    <div key={stat.id} className={`flex flex-col gap-y-3 border-l border-gray-900/10 pl-6 ${get(tailwindClasses, 'statBox')}`} style={{...get(style, 'statBox')}}>
                      <dt className={`text-sm/6 text-gray-600 ${get(tailwindClasses, 'name')}`} style={{...get(style, 'name')}}>{get(stat, 'name')}</dt>
                      <dd className={`order-first text-3xl font-semibold tracking-tight text-gray-900 ${get(tailwindClasses, 'value')}`}  style={{...get(style, 'value')}}>{get(stat, 'value')}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          </div>
        </grid>
        
    </div>
    )
  }

  StatsV3.propTypes = {
    style: object,
    imagePath: string,
    title: string,
    description: string,
    stats: arrayOf(object),
  }

  StatsV3.defaultProps = {
    style: {
        container: {},
        title: {},
        description: {},
        statBox: {},
        name: {},
        value: {},
        image: {}
    },
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735282708.600x600.png",
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

  export default StatsV3;