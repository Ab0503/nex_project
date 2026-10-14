import { arrayOf, object, string } from 'prop-types';
import get from 'lodash.get';
import parse from 'html-react-parser';
import withLazyLoad from '@/utils/withLazyLoad';
import NexAnimation from '@nex-components/NexAnimation';

const FeatureSectionV11 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});

  return (
    <div className={`relative overflow-hidden ${get(tailwindClasses, 'container')}`} style={{ ...get(style, 'container') }}>
      <div className="mx-auto max-w-md px-6 py-10 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <NexAnimation type={get(props, 'topContentAnimation')}>
          <h2 className={`text-lg font-semibold nx-text-primary ${get(tailwindClasses, 'subTitle')}`} style={{ ...get(style, 'subTitle') }}>{get(props, 'subTitle')}</h2>
          <p className={`nx-section-heading-font mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ${get(tailwindClasses, 'title')}`} style={{ ...get(style, 'title') }}>
            {get(props, 'title')}
          </p>
          <p className={`mx-auto mt-5 max-w-prose text-xl text-gray-500 ${get(tailwindClasses, 'description')}`} style={{ ...get(style, 'description') }}>
            {get(props, 'description')}
          </p>
        </NexAnimation>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {get(props, 'sections').map((section, index) => (
              <NexAnimation type={get(props, 'bottomContentAnimation')}>
                <div key={section.heading} className="pt-6">
                  <div className={`flow-root rounded-lg bg-gray-50 px-6 pb-8 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                    <div className="-mt-6">
                      <div>
                        <span className={`inline-flex items-center justify-center rounded-xl nx-bg-primary p-3 shadow-lg text-gray-50 ${get(tailwindClasses, 'icon')}`} style={{ ...get(style, 'icon') }}>

                          {parse(get(section, 'icon'))}

                        </span>
                      </div>
                      <h3 className={`mt-8 text-lg/8 font-semibold tracking-tight text-gray-900 ${get(tailwindClasses, 'sectionTitle')}`} style={{ ...get(style, 'sectionTitle') }}>{section.heading}</h3>
                      <p className={`mt-5 text-base/7 text-gray-600 ${get(tailwindClasses, 'sectionDescription')}`} style={{ ...get(style, 'sectionDescription') }}>{section.description}</p>
                    </div>
                  </div>
                </div>
              </NexAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

FeatureSectionV11.propTypes = {
  style: object,
  subTitle: string,
  title: string,
  description: string,
  sections: arrayOf(object),
  seeMoreLinkText: string,
}

FeatureSectionV11.defaultProps = {
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
  tailwindClasses: {
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
  topContentAnimation:"",
  bottomContentAnimation:"",
  sections: [
    {
      heading: "Push to deploy",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
      link: "#",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
    },
    {
      heading: "SSL certificates.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
      link: "#",
      description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."
    },
    {
      heading: "Database backups.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
      link: "#",
      description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
    },
    {
      heading: "Database backups.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
  </svg>
  `,
      link: "#",
      description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
    },
    {
      heading: "Database backups.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
    </svg>
    `,
      link: "#",
      description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
    },

    {
      heading: "Database backups.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
      </svg>
      `,
      link: "#",
      description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
    },
  ],
  imagePath: "https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png",
}

export default withLazyLoad(FeatureSectionV11);