import { arrayOf, object, string } from 'prop-types';
import get from 'lodash.get';
import parse from 'html-react-parser';
import withLazyLoad from '@/utils/withLazyLoad';
import NexImage from '@nex-core-ui/NexImage';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';

const FeatureSectionV2 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (


      <div className={`bg-white py-24 sm:py-32 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className={`text-base/7 font-semibold text-indigo-600 ${get(tailwindClasses, 'subTitle')}`} style={{...get(style, 'subTitle')}}>{get(props, 'subTitle')}</h2>
        <p className={`mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>
          {get(props, 'title')}
          </p>
          <p className={`mt-6 text-lg/8 text-gray-600 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
          {get(props, 'description')}
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div>
            <ImageOrVedio alt="App screenshot"
              src={get(props, 'imagePath')}
              vedioSrc={get(props, 'vedioPath', '')}
              style={{...get(style, 'image')}}
              className={`!h-[1442] w-full mb-[-12%] !relative rounded-xl shadow-2xl ring-1 ring-gray-900/10 ${get(tailwindClasses, 'image')}`}
              />
          </div>
          
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {get(props, 'sections').map((section, index) => (
                  <div key={section.heading} className={`relative pl-9 ${get(tailwindClasses, 'sectionBox')}`} style={{...get(style, 'sectionBox')}}>
                    <dt className="inline font-semibold text-gray-900">
                        <div className={`absolute left-1 top-1 h-5 w-5 text-indigo-600 ${get(tailwindClasses, 'icon')}`} style={{...get(style, 'icon')}}>
                            {parse(get(section, 'icon'))}
                        </div>
                      <span className={`${get(tailwindClasses, 'sectionTitle')}`} style={{...get(style, 'sectionTitle')}}>{section.heading}</span>
                    </dt>{' '}
                    <dd className={`inline ${get(tailwindClasses, 'sectionDescription')}`} style={{...get(style, 'sectionDescription')}}>{section.description}</dd>
                  </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

FeatureSectionV2.propTypes = {
    style: object,
    subTitle: string,
    title: string,
    description: string,
    sections: arrayOf(object),
    imagePath: string,

}

FeatureSectionV2.defaultProps = {
    style: {
        container: {},
        subTitle: {},
        title: {},
        description: {},
        sectionTitle: {},
        icon: {},
        sectionDescription: {},
        sectionBox: {},
        image: {},

    },
    tailwindClasses:{
      container: "",
        subTitle: "",
        title: "",
        description: "",
        sectionTitle: "",
        icon: "",
        sectionDescription: "",
        link: "",
        sectionBox: "",
        image: "",
    },
    subTitle: "Deploy faster",
    title: "A better workflow",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    sections: [
        {heading: "Push to deploy", 
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."},
        {heading: "SSL certificates.", 
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
            description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."},
        {heading: "Database backups.", 
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
            description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."},
        {heading: "Database backups.", 
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
  </svg>
  `,
              description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."},
        {heading: "Database backups.", 
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
    </svg>
    `,
                description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."},

        {heading: "Database backups.", 
                  icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
      </svg>
      `,
                  description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."},
    ],
    imagePath: "https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png",
    vedioPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1728966855.1728152985.19420800-uhd_3840_2160_30fps.mp4",
    
}

export default withLazyLoad(FeatureSectionV2);