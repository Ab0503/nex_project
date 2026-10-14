import { arrayOf, object, string } from "prop-types";
import get from "lodash.get";
import withLazyLoad from '@/utils/withLazyLoad';

const FeatureSectionV8 = (props) => {
  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});

  return (
    <div
      className={`bg-white py-24 sm:py-32 ${get(tailwindClasses, "container")}`}
      style={{ ...get(style, "container") }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className={`text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(
              tailwindClasses,
              "title"
            )}`}
            style={{ ...get(style, "title") }}
          >
            {get(props, "title")}
          </h2>
          <p
            className={`mt-6 text-lg/8 text-gray-600 ${get(
              tailwindClasses,
              "description"
            )}`}
            style={{ ...get(style, "description") }}
          >
            {get(props, "description")}
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {get(props, "sections").map((section, index) => (
            <div
              key={section.name}
              className={`${get(tailwindClasses, "sectionBox")}`}
              style={{ ...get(style, "sectionBox") }}
            >
              <dt
                className={`font-semibold text-gray-900 ${get(
                  tailwindClasses,
                  "sectionTitle"
                )}`}
                style={{ ...get(style, "sectionTitle") }}
              >
                {section.heading}
              </dt>
              <dd
                className={`mt-1 text-gray-600 ${get(
                  tailwindClasses,
                  "sectionDescription"
                )}`}
                style={{ ...get(style, "sectionDescription") }}
              >
                {section.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

FeatureSectionV8.propTypes = {
  style: object,
  subTitle: string,
  title: string,
  description: string,
  sections: arrayOf(object),
};

FeatureSectionV8.defaultProps = {
  style: {
    container: {},
    title: {},
    description: {},
    sectionTitle: {},
    sectionDescription: {},
    sectionBox: {},
  },
  title: "A better workflow",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  sections: [
    {
      heading: "Push to deploy",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      heading: "SSL certificates.",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    },
    {
      heading: "Database backups.",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    },
    {
      heading: "Database backups.",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    },
    {
        heading: "Database backups.",
        description:
          "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      },
      {
        heading: "Database backups.",
        description:
          "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      },
  ],
};

export default withLazyLoad(FeatureSectionV8);
