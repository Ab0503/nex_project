import {arrayOf, object, string } from 'prop-types';
import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import withData from "@nex-core-ui/HOC/withData";

const TeamsV7 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    
    return (
      <div className={`bg-white py-24 sm:py-32 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className={`text-34l text-balance font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>
            {get(props, 'title')}
          </h2>
          <p className={`mt-6 text-lg/8 text-gray-600 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
            {get(props, 'description')}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {get(props, 'items',[]).map((item) => (
            <li key={item.name} className={`flex flex-col gap-6 xl:flex-row ${get(tailwindClasses, 'itemBox')}`} style={{...get(style, 'itemBox')}}>
              <NexImage src={item.imageUrl} className={`aspect-[4/5] !relative !w-52 !h-64 flex-none rounded-2xl object-cover max-sm:m-auto ${get(tailwindClasses, 'image')}`} style={{...get(style, 'image')}}></NexImage>
              <div className="flex-auto">
                <h3 className={`text-lg/8 font-semibold tracking-tight text-gray-900 max-sm:text-center ${get(tailwindClasses, 'itemTitle')}`} style={{...get(style, 'itemTitle')}}>{item.title}</h3>
                <p className={`text-base/7 text-gray-600 max-sm:text-center ${get(tailwindClasses, 'itemSubTitle')}`} style={{...get(style, 'itemSubTitle')}}>{item.subTitle}</p>
                <p className={`mt-6 text-base/7 text-gray-600  max-sm:text-center ${get(tailwindClasses, 'itemDescription')}`}  style={{...get(style, 'itemDescription')}}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
  }

  TeamsV7.propTypes = {
    style: object,
    items: arrayOf(object),
    title: string,
    description: string,
  }
  TeamsV7.defaultProps = {
    style: {
        container: {},
        title: {},
        itemBox: {},
        image: {},
        itemTitle: {},
        itemSubTitle: {},
        itemDescription: {},
        icon: {}
    },
    title: "Trusted by the world’s most innovative teams",
    description: "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.",
    items: [
        {
            title: 'Leslie Alexander',
            subTitle: 'Co-Founder / CEO',
            description: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
            imageUrl:
                'https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735309911.500x750.png',
            
            xUrl: '#',
            linkedinUrl: '#',
            
        },
        {
            title: 'Leslie Alexander',
            subTitle: 'Co-Founder / CEO',
            description: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
            imageUrl:
                'https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735309911.500x750.png',
        
            xUrl: '#',
            linkedinUrl: '#',
        },
        {
            title: 'Leslie Alexander',
            subTitle: 'Co-Founder / CEO',
            description: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
            imageUrl:
                'https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735309911.500x750.png',
            xUrl: '#',
            linkedinUrl: '#',
        },
        
        {
            title: 'Leslie Alexander',
            subTitle: 'Co-Founder / CEO',
            description: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
            imageUrl:
                'https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735309911.500x750.png',
            xUrl: '#',
            linkedinUrl: '#',
        }
        
    ]
  }

  export default withData(TeamsV7);