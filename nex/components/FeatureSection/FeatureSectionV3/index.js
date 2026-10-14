import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { arrayOf, object, string } from 'prop-types';
import get from 'lodash.get';
import parse from 'html-react-parser';
import withLazyLoad from '@/utils/withLazyLoad';

const FeatureSectionV3 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (
    <div className={`bg-white py-24 sm:py-32 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className={`text-base/7 font-semibold text-indigo-600 ${get(tailwindClasses, 'subTitle')}`} style={{...get(style, 'subTitle')}}>{get(props, 'subTitle')}</h2>
        <p className={`mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>
          {get(props, 'title')}
          </p>
          <p className={`mt-6 text-lg/8 text-gray-600 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
          {get(props, 'description')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {get(props, 'sections').map((section, index) => (
                  <div  key={section.heading} className={`flex flex-col ${get(tailwindClasses, 'sectionBox')}`} style={{...get(style, 'sectionBox')}}>
                    <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                      <div className={`h-5 w-5 flex-none text-indigo-600 ${get(tailwindClasses, 'icon')}`} style={{...get(style, 'icon')}}>
                      {parse(get(section, 'icon'))}
                      </div>
                      <span className={`${get(tailwindClasses, 'sectionTitle')}`} style={{...get(style, 'sectionTitle')}}>{section.heading}</span>
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                      <p className={`flex-auto  ${get(tailwindClasses, 'sectionDescription')}`} style={{...get(style, 'sectionDescription')}}>{section.description}</p>
                      {
                        section.link.length !=0 && <p className="mt-6">
                          <a href={section.link} className={`text-sm/6 font-semibold text-indigo-600 ${get(tailwindClasses, 'link')}`} style={{...get(style, 'link')}}>
                            {get(props, 'seeMoreLinkText')} <span aria-hidden="true">→</span>
                          </a>
                        </p>
                      }
                    </dd>
                  </div>
                 
          ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

FeatureSectionV3.propTypes = {
    style: object,
    subTitle: string,
    title: string,
    description: string,
    sections: arrayOf(object),
    seeMoreLinkText: string,
}

FeatureSectionV3.defaultProps = {
    style: {
        container: {},
        subTitle: {},
        title: {},
        description: {},
        sectionTitle: {},
        icon: {},
        sectionDescription: {},
        sectionBox: {},
        link: {}
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
    },
    subTitle: "Deploy faster",
    title: "A better workflow",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    seeMoreLinkText: "Read More",
    sections: [
        {heading: "Push to deploy", 
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
        link: "#",    
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."},
        {heading: "SSL certificates.", 
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
        link: "#",    
            description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."},
        {heading: "Database backups.", 
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
        link: "#",    
            description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."},
        {heading: "Database backups.", 
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
  </svg>
  `,
  link: "#",    
        description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."},
        {heading: "Database backups.", 
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
    </svg>
    `,
    link: "#",    
                description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."},

        {heading: "Database backups.", 
                  icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
      </svg>
      `,
      link: "#",    
                  description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."},
    ],
    imagePath: "https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png",
}

export default withLazyLoad(FeatureSectionV3);