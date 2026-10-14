import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { arrayOf, object, string } from 'prop-types';
import get from 'lodash.get';
import parse from 'html-react-parser';
import withLazyLoad from '@/utils/withLazyLoad';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';
import NexAnimation from '@nex-components/NexAnimation';

const FeatureSectionV4 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (
    <div className={`overflow-hidden nx-bg-primary-light py-16 max-sm:py-32 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <NexAnimation  type={get(props, 'ContentAnimation', '')}>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className={`text-base/7 font-semibold nx-text-primary ${get(tailwindClasses, 'subTitle')}`} style={{...get(style, 'subTitle')}}>{get(props, 'subTitle')}</h2>
              <p className={`nx-section-heading-font mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-800 sm:text-5xl ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>
                {get(props, 'title')}
              </p>
              <p className={`mt-6 text-lg/8 text-gray-600 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
                {get(props, 'description')}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {get(props, 'sections').map((section, index) => (
                  <div key={section.heading} className={`relative pl-9 ${get(tailwindClasses, 'sectionBox')}`} style={{...get(style, 'sectionBox')}}>
                    <dt className="inline font-semibold text-gray-200">
                        <div className={`absolute left-1 top-1 h-5 w-5 nx-text-primary ${get(tailwindClasses, 'icon')}`} style={{...get(style, 'icon')}}>
                            {parse(get(section, 'icon'))}
                        </div>
                      <span className={`nx-text-primary ${get(tailwindClasses, 'sectionTitle')}`} style={{...get(style, 'sectionTitle')}}>{section.heading}</span>
                    </dt>{' '}
                    <dd className={`inline ${get(tailwindClasses, 'sectionDescription')}`} style={{...get(style, 'sectionDescription')}}>{section.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <ImageOrVedio 
              alt="Product screenshot"
              src={get(props, 'imagePath', '')}
              vedioSrc={get(props, 'vedioPath', '')}
              style={{...get(style, 'image')}}
              className={`!relative !w-[48rem] !max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 !sm:w-[57rem] ${get(tailwindClasses, 'image')}`}
            />
          </div>
          
        </div>
        </NexAnimation>
      </div>
    </div>
  )
}

FeatureSectionV4.propTypes = {
    style: object,
    subTitle: string,
    title: string,
    description: string,
    sections: arrayOf(object),
    imagePath: string,

}

FeatureSectionV4.defaultProps = {
    style: {
        container: {},
        subTitle: {},
        title: {},
        description: {},
        sectionTitle: {},
        icon: {},
        sectionDescription: {},
        image: {},
        sectionBox: {},
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
    ContentAnimation: "",
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
    ],
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297592.1280x720 - Hero Image.png",
    vedioPath: "",
}

export default withLazyLoad(FeatureSectionV4);