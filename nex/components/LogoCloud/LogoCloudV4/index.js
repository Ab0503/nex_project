import {arrayOf, object, string } from 'prop-types';
import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import withData from "@nex-core-ui/HOC/withData";

const LogoCloudV4 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    
    return (
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          {
                get(props, 'items', []).map((item, index) => {
                    return (
                      <div className={`bg-gray-400/5 p-8 sm:p-10 ${get(tailwindClasses, 'imageBox')}`} style={{...get(style, 'imageBox')}}>
                         <NexImage src={get(item, 'imagePath')}  
                            className={`!relative !max-h-12 w-full object-contain ${get(tailwindClasses, 'image')}`}
                            style={{...get(style, 'image')}}
                        />
                      </div>
                    )
                })
            }
        </div>
      </div>
    </div>
    )
  }

  LogoCloudV4.propTypes = {
    style: object,
    items: arrayOf(object),
  }
  LogoCloudV4.defaultProps = {
    style: {
        container: {},
        title: {},
        imageBox: {},
        image: {}
    },
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
      {
        imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1734935177.c6.png",
      },
    ]
  }

  export default withData(LogoCloudV4);