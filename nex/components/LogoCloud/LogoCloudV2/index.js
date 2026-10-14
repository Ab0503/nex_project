import {arrayOf, object, string } from 'prop-types';
import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import withData from "@nex-core-ui/HOC/withData";

const LogoCloudV2 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    
    return (
      <div className={`bg-white py-24 sm:py-32 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {
                get(props, 'items', []).map((item, index) => {
                    return (
                        <NexImage src={get(item, 'imagePath')}  
                            className={`!relative col-span-2 !max-h-12 !w-auto lg:col-span-1 ${get(tailwindClasses, 'image')}`}
                            style={{...get(style, 'image')}}
                        />
                    )
                })
            }
          </div>

          <div className="mt-16 flex justify-center">
            <p className={`relative rounded-full bg-gray-50 px-4 py-1.5 text-sm/6 text-gray-600 ring-1 ring-inset ring-gray-900/5 ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>
              <span className="hidden md:inline">{get(props, 'title')}</span>
            </p>
          </div>
        </div>
      </div>
    )
  }

  LogoCloudV2.propTypes = {
    style: object,
    items: arrayOf(object),
    title: string,
    description: string,
  }
  LogoCloudV2.defaultProps = {
    style: {
        container: {},
        title: {},
        logoBox: {},
        image: {}
    },
    title: "Trusted by the world’s most innovative teams",
    items: [
      {
        imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1734935047.c1.png",
      },
      {
        imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1734935074.c2.png",
      },
      {
        imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1734935097.c3.png",
      },
      {
        imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1734935120.c4.png",
      },
      {
        imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1734935147.c5.png",
      },
    ]
  }

  export default withData(LogoCloudV2);