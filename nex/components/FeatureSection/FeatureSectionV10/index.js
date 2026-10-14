import { arrayOf, object, string } from "prop-types";
import get from "lodash.get";
import parse from "html-react-parser";
import withLazyLoad from '@/utils/withLazyLoad';

const FeatureSectionV10 = (props) => {
  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});

  return (
    <div className={`bg-indigo-700 ${get(tailwindClasses, "container")}`} style={{ ...get(style, "container") }}>
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:max-w-7xl lg:px-8 lg:py-40">
        <h2 className={`text-4xl font-bold tracking-tight text-white ${get(tailwindClasses, 'subTitle')}`} style={{...get(style, 'subTitle')}}>{get(props, 'subTitle')}</h2>
        <p className={`mt-6 max-w-3xl text-lg/8 text-indigo-200 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
            {get(props, 'description')}
        </p>
        <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {get(props, 'sections').map((section, index) => (
            <div  key={section.heading} className={`${get(tailwindClasses, 'sectionBox')}`} style={{...get(style, 'sectionBox')}}>
              <div>
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white bg-opacity-10 text-white ${get(tailwindClasses, 'icon')}`} style={{...get(style, 'icon')}}>
                  {parse(get(section, 'icon'))}
                </span>
              </div>
              <div className="mt-6">
                <h3 className={`text-lg/8 font-semibold text-white ${get(tailwindClasses, 'sectionTitle')}`} style={{...get(style, 'sectionTitle')}}>{section.heading}</h3>
                <p className={`mt-2 text-base/7 text-indigo-200 ${get(tailwindClasses, 'sectionDescription')}`} style={{...get(style, 'sectionDescription')}}>{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FeatureSectionV10.propTypes = {
  style: object,
  subTitle: string,
  title: string,
  description: string,
  sections: arrayOf(object),
};

FeatureSectionV10.defaultProps = {
  style: {
    container: {},
    title: {},
    description: {},
    sectionTitle: {},
    icon: {},
    sectionDescription: {},
    image: {},
    sectionBox: {},
  },
  subTitle: "subtitle",
  title: "A better workflow",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  sections: [
    {
      heading: "Push to deploy",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      heading: "SSL certificates.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    },
    {
      heading: "Database backups.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    },
    {
      heading: "Database backups.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
    </svg>
    `,
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    },
  ],
};

export default withLazyLoad(FeatureSectionV10);
