import { arrayOf, object, string } from "prop-types"
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";

const StatsV8 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  return (

    <div className="relative bg-white">
      <div className={`mx-auto grid max-w-7xl ${get(tailwindClasses, 'container')}`} style={{ ...get(style, 'container') }}>
        <div className="flex flex-wrap justify-center px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32 gap-10">
          <NexImage src={get(props, 'imagePath')} className="!relative !h-[96] !w-[500px] bg-gray-50 object-cover" />
          <div className="max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 className={`text-base/8 font-semibold text-indigo-600 ${get(tailwindClasses, 'subTitle')}`} style={{ ...get(style, 'subTitle') }}>{get(props, 'subTitle')}</h2>
            <p className={`mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'title')}`} style={{ ...get(style, 'title') }}>
              {get(props, 'title')}
            </p>
            <p className={`mt-6 text-lg/8 text-gray-600 ${get(tailwindClasses, 'description')}`} style={{ ...get(style, 'description') }}>
              {get(props, 'description')}
            </p>
            <div className="mt-8 overflow-hidden">
              <dl className="-mx-8 -mt-8 flex flex-wrap">
                {get(props, 'stats').map((stat) => (
                  <div className={`flex flex-col px-8 pt-8 ${get(tailwindClasses, 'statBox')}`} style={{ ...get(style, 'statBox') }}>
                    <dt className={`order-2 text-base font-medium text-gray-500 ${get(tailwindClasses, 'name')}`} style={{ ...get(style, 'name') }}>{get(stat, 'name')}</dt>
                    <dd className={`order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight ${get(tailwindClasses, 'value')}`} style={{ ...get(style, 'value') }}>{get(stat, 'value')}</dd>
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

StatsV8.propTypes = {
  style: object,
  imagePath: string,
  title: string,
  description: string,
  stats: arrayOf(object),
}

StatsV8.defaultProps = {
  style: {
    container: {},
    title: {},
    description: {},
    statBox: {},
    name: {},
    value: {},
    image: {}
  },
  imagePath: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80",
  title: "Trusted by creators worldwide",
  description: "Lorem ipsum dolor sit amet consect adipisicing possimus.",
  stats: [
    {
      name: "Delivery ",
      value: "24/7"
    },
    {
      name: "Pepperoni",
      value: "99.9%"
    },
    {
      name: "Calories",
      value: "100k+"
    }
  ]
}

export default StatsV8;