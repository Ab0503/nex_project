import {arrayOf, object, string } from 'prop-types';
import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import withData from "@nex-core-ui/HOC/withData";

const LogoCloudV5 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    
    return (

      <div className={`bg-indigo-200 bg-opacity-25 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <h2 className={`mx-auto max-w-md text-pretty text-center text-3xl font-bold tracking-tight text-indigo-900 lg:max-w-xl lg:text-left ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>
            {get(props, 'title')}
          </h2>
          <div className="mt-8 flow-root self-center lg:mt-0">
            <div className="-ml-8 -mt-4 flex flex-wrap justify-between lg:-ml-4">
              {
                  get(props, 'items', []).map((item, index) => {
                      return (
                        <div className="ml-8 mt-4 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                          <NexImage src={get(item, 'imagePath')}  
                              className={`!relative !h-12 ${get(tailwindClasses, 'image')}`}
                              style={{...get(style, 'image')}}
                          />
                        </div>
                      )
                  })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

  LogoCloudV5.propTypes = {
    style: object,
    items: arrayOf(object),
    title: string,
    description: string,
  }

  LogoCloudV5.defaultProps = {
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
    ]
  }

  export default withData(LogoCloudV5);