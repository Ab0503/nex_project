import {arrayOf, object, string } from 'prop-types';
import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import withData from "@nex-core-ui/HOC/withData";

const TeamsV1 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    
    return (
      <div className={`bg-white py-24 sm:py-32 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className={`text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>
                {get(props, 'title')}
            </h2>
            <p className={`mt-6 text-lg/8 text-gray-600 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
                {get(props, 'description')}
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {get(props, 'items').map((item) => (
              <li key={item.name}>
                <div className={`flex items-center gap-x-6 ${get(tailwindClasses, 'itemBox')}`} style={{...get(style, 'itemBox')}}>
                  <NexImage src={item.imageUrl} className={`!h-16 !w-16 !relative rounded-full ${get(tailwindClasses, 'image')}`} style={{...get(style, 'image')}}/>
                  <div>
                    <h3 className={`text-base/7 font-semibold tracking-tight text-gray-900 ${get(tailwindClasses, 'itemTitle')}`} style={{...get(style, 'itemTitle')}}>{item.title}</h3>
                    <p className={`text-sm/6 font-semibold text-indigo-600 ${get(tailwindClasses, 'itemSubTitle')}`} style={{...get(style, 'itemSubTitle')}}>{item.subTitle}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  TeamsV1.propTypes = {
    style: object,
    items: arrayOf(object),
    title: string,
    description: string,
  }
  TeamsV1.defaultProps = {
    style: {
        container: {},
        title: {},
        description: {},
        itemBox: {},
        image: {},
        itemTitle: {},
        itemSubTitle: {}
    },
    title: "Trusted by the worlds most innovative teams",
    description: "Were a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.",
    items: [
        {
            title: 'Leslie Alexander',
            subTitle: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            
        },
        {
            title: 'Leslie Alexander',
            subTitle: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            
        },
        {
            title: 'Leslie Alexander',
            subTitle: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            
        },
        
        {
            title: 'Leslie Alexander',
            subTitle: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            
        },
        {
            title: 'Leslie Alexander',
            subTitle: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            
        },
        {
            title: 'Leslie Alexander',
            subTitle: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            
        },
        
    ]
  }

  export default withData(TeamsV1);