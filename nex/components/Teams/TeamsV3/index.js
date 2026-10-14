import {arrayOf, object, string } from 'prop-types';
import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import withData from "@nex-core-ui/HOC/withData";

const TeamsV3 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    
    return (

      <div className={`bg-white py-24 sm:py-32 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className={`text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>{get(props, 'title')}</h2>
            <p className={`mt-6 text-lg/8 text-gray-600 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
              {get(props, 'description')}
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {get(props, 'items',[]).map((item) => (
              <li key={item.name} className={`${get(tailwindClasses, 'itemBox')}`} style={{...get(style, 'itemBox')}}>
                <NexImage src={item.imageUrl} className={`mx-auto !relative !h-24 !w-24 rounded-full ${get(tailwindClasses, 'image')}`} style={{...get(style, 'image')}}></NexImage>
                <h3 className={`mt-6 text-base/7 font-semibold tracking-tight text-gray-900  ${get(tailwindClasses, 'itemTitle')}`} style={{...get(style, 'itemTitle')}}>{item.title}</h3>
                <p className={`text-sm/6 text-gray-600 ${get(tailwindClasses, 'itemSubTitle')}`} style={{...get(style, 'itemSubTitle')}}>{item.subTitle}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  TeamsV3.propTypes = {
    style: object,
    items: arrayOf(object),
    title: string,
    description: string,
  }
  TeamsV3.defaultProps = {
    style: {
        container: {},
        title: {},
        description: {},
        itemBox: {},
        image: {},
        itemTitle: {},
        subTitle: {},
        icon: {}
    },
    title: "Trusted by the world’s most innovative teams",
    description: "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.",
    items: [
        {
            title: 'Leslie Alexander',
            subTitle: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
          
        },
        {
            title: 'Leslie Alexander',
            subTitle: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        },
        {
            title: 'Leslie Alexander',
            subTitle: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        },
        
        {
            title: 'Leslie Alexander',
            subTitle: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        },
        {
            title: 'Leslie Alexander',
            subTitle: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        },
        {
            title: 'Leslie Alexander',
            subTitle: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        },
        {
          title: 'Leslie Alexander',
          subTitle: 'Co-Founder / CEO',
          imageUrl:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      },
      {
        title: 'Leslie Alexander',
        subTitle: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      },
      {
        title: 'Leslie Alexander',
        subTitle: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      },
      {
          title: 'Leslie Alexander',
          subTitle: 'Co-Founder / CEO',
          imageUrl:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      },
      {
        title: 'Leslie Alexander',
        subTitle: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      },
      {
        title: 'Leslie Alexander',
        subTitle: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      }
        
    ]
  }

  export default withData(TeamsV3);