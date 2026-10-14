import NexImage from "@nex-core-ui/NexImage";
import { object } from "prop-types";
import get from "lodash.get";
import withData from "@nex-core-ui/HOC/withData";

const BlogV2 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});
    
    return (
        <div className={`py-24 sm:py-32 bg-gray-50 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className={`text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>
                        {get(props, 'title')}
                    </h2>
                    <p className={`mt-2 text-lg/8 text-gray-600 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {get(props, 'items', []).map((item) => (
                    <article
                    key={item.title}
                    className={`relative isolate flex flex-col justify-end rounded-2xl ${get(tailwindClasses, 'itemBox')}`}
                    style={get(style, 'itemBox')}
                    >
                    <NexImage  src={item.bannerImage} className={`!relative !h-64 inset-0 opacity-45 ${get(tailwindClasses, 'itemBannerImage')}`}  style={get(style, 'itemBannerImage')}/>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    <div className="absolute ml-5 mb-5">
                        <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-white">
                            <time dateTime={item.text1} className={`mr-8 ${get(tailwindClasses, 'itemText1')}`} style={get(style, 'itemText1')}>
                            {item.text1}
                            </time>
                            <div className="-ml-4 flex items-center gap-x-4">
                            <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50">
                                <circle r={1} cx={1} cy={1} />
                            </svg>
                            <div className="flex gap-x-2.5">
                                {
                                    item.imagePath != "" && <NexImage src={item.imagePath} className={`!h-6 !w-6 flex-none rounded-full bg-white/10 ${get(tailwindClasses, 'itemImage')}`} style={get(style, 'itemImage')}></NexImage>
                                }
                                <span className={`text-white ${get(tailwindClasses, 'itemText2')}`} style={get(style, 'itemText2')}>
                                    {item.text2}
                                </span>
                                
                            </div>
                            </div>
                        </div>
                        <h3 className="mt-3 text-lg/6 font-semibold text-white">
                            <a href={item.href}>
                            <span className={`absolute inset-0 ${get(tailwindClasses, 'itemTitle')}`} style={get(style, 'itemTitle')}/>
                            {item.title}
                            </a>
                        </h3>
                    </div>
                    
                    </article>
                ))}
                </div>
            </div>
        </div>
    )
}

BlogV2.propTypes = {
    style: object,
}

BlogV2.defaultProps = {
    style: {
        container: {},
        title: {},
        description: {},
        itemBox: {},
        itemText1: {},
        itemText2: {},
        itemTitle: {},
        itemBannerImage: {},
        itemImage: {},
    },
    tailwindClasses: {
        container: "",
        title: "",
        description: "",
        itemBox: "",
        itemText1: "",
        itemText2: "",
        itemTitle: "",
        itemBannerImage: "",
        itemImage: "",
    },
    title: "From the blog",
    description: "Learn how to grow your business with our expert advice.",
    items: [
        {
            text1: "Mar 16, 2020",
            text2: "Marketing",
            href: "#",
            title: "Boost your conversion rate",
            bannerImage: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
            imagePath: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            text1: "Mar 16, 2020",
            text2: "Strategy",
            href: "#",
            title: "Boost your conversion rate",
            bannerImage: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
            imagePath: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            text1: "Mar 16, 2020",
            text2: "Marketing",
            href: "#",
            title: "Boost your conversion rate",
            bannerImage: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
            imagePath: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        }
    ]
}

export default withData(BlogV2);