import { arrayOf, object } from "prop-types"
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import NexAnimation from "@nex-components/NexAnimation";
import PrimaryLink from "@nex-core-ui/PrimaryLink";
import withData from "@nex-core-ui/HOC/withData";

const GridListV1 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    
    return (
        <div className={`overflow-hidden max-sm:p-5 p-12 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
            <ul role="list" className={`grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8`}>
                {Array.isArray(get(props, 'items',[])) && get(props, 'items',[]).map((item) => (
                <li key={item.title} className="relative">
                    <NexAnimation type={get(props, 'boxAnimation', '')}>
                    <PrimaryLink href={get(item, 'href')} target="_blank">
                        <div className="h-48 group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <NexImage src={get(item, 'imagePath')}  
                                        className={`!h-48 w-full pointer-events-none object-cover group-hover:opacity-75 ${get(tailwindClasses, 'image')}`}
                                        style={{...get(style, 'image')}}
                                    />
                        </div>
                        <p className={`pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 ${get(tailwindClasses, 'text1')}`} style={{...get(style, 'text1')}}>{get(item, 'text1')}</p>
                        <p className={`pointer-events-none block text-sm font-medium text-gray-500 ${get(tailwindClasses, 'text2')}`} style={{...get(style, 'text2')}}>{get(item, 'text2')}</p>
                    </PrimaryLink>
                    </NexAnimation>
                </li>
                ))}
            </ul>
        </div>
    )
  }

  GridListV1.propTypes = {
    style: object,
    items: arrayOf(object)
  }

  GridListV1.defaultProps = {
    style: {
        container: {},
        image: {},
        text1: {},
        text2: {}
    },
    items: [
        {
            href: "#",
            imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
            text1: 'text1',
            text2: 'text2'
        },
        {
            href: "#",
            imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
            text1: 'text1',
            text2: 'text2'
        },
        {
            href: "#",
            imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
            text1: 'text1',
            text2: 'text2'
        },
        {
            href: "#",
            imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
            text1: 'text1',
            text2: 'text2'
        },
        {
            href: "#",
            imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
            text1: 'text1',
            text2: 'text2'
        },
        {
            href: "#",
            imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
            text1: 'text1',
            text2: 'text2'
        },
        {
            href: "#",
            imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
            text1: 'text1',
            text2: 'text2'
        },
        {
            href: "#",
            imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
            text1: 'text1',
            text2: 'text2'
        },
        
    ],
    boxAnimation: ""
  }

  export default withData(GridListV1);