import NexImage from "@nex-core-ui/NexImage";
import { Fragment } from "react";
import parse from "html-react-parser";
import get from "lodash.get";
import { arrayOf, object, string } from "prop-types";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { StarIcon } from "@heroicons/react/20/solid";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import { classNames } from "@/utils/common";

const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      date: "July 16, 2021",
      datetime: "2021-07-16",
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
      date: "July 12, 2021",
      datetime: "2021-07-12",
      author: "Hector Gibbons",
      avatarSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    // More reviews...
  ],
};
const faqs = [
  {
    question: "What format are these icons?",
    answer:
      "The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.",
  },
  {
    question: "Can I use the icons at different sizes?",
    answer:
      "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
  },
  // More FAQs...
];
const license = {
  href: "#",
  summary:
    "For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.",
  content: `
    <h4>Overview</h4>
    
    <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>
    
    <ul role="list">
    <li>You\'re allowed to use the icons in unlimited projects.</li>
    <li>Attribution is not required to use the icons.</li>
    </ul>
    
    <h4>What you can do with it</h4>
    
    <ul role="list">
    <li>Use them freely in your personal and professional work.</li>
    <li>Make them your own. Change the colors to suit your project or brand.</li>
    </ul>
    
    <h4>What you can\'t do with it</h4>
    
    <ul role="list">
    <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
    <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
    </ul>
  `,
};
const PdpV2 = (props) => {
  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});
  return (
    <section aria-labelledby="applicant-information-title">
      <div
        className={`shadow sm:rounded-lg ${get(
          tailwindClasses,
          "container",
          ""
        )}`}
        style={get(style, "container", {})}
      >
        <div className="grid md:grid-cols-2 gap-4 px-4 py-5 sm:px-6">
          <div>
            <NexImage
              className={`!relative ${get(tailwindClasses, "image", "")}`}
              src={get(props, "imagePath", "")}
              style={get(style, "image", {})}
            ></NexImage>
          </div>
          <div>
            <div>
              <div className="">
                <h4
                  className={`text-gray-900 text-3xl ${get(
                    tailwindClasses,
                    "title",
                    ""
                  )}`}
                  style={get(style, "title", {})}
                >
                  {get(props, "title", "")}
                </h4>
                <p
                  className={`mt-1 max-w-2xl text-1xl text-gray-500 ${get(
                    tailwindClasses,
                    "subTitle",
                    ""
                  )}`}
                  style={get(style, "subTitle", {})}
                >
                  {get(props, "subTitle", "")}
                </p>
              </div>
              <div
                className={`mt-5 sm:col-span-2 text-base text-gray-500 ${get(
                  tailwindClasses,
                  "description",
                  ""
                )}`}
                src={get(props, "description", "")}
                style={get(style, "description", {})}
              >
                {parse(get(props, "description", ""))}
              </div>
              <div className="mt-5  grid grid-cols-2 gap-4">
                {get(props, "attributes", []).map((attribute) => (
                  <div
                    className={`sm:col-span-1 ${get(
                      tailwindClasses,
                      "attributeBox",
                      ""
                    )}`}
                    style={get(style, "attributeBox", {})}
                  >
                    <dt
                      className={`text-sm font-medium text-gray-500 ${get(
                        tailwindClasses,
                        "attributeKey",
                        ""
                      )}`}
                      style={get(style, "attributeKey", {})}
                    >
                      {get(attribute, "title", "")}
                    </dt>
                    <dd
                      className={`mt-1 text-sm text-gray-900 ${get(
                        tailwindClasses,
                        "attributeValue",
                        ""
                      )}`}
                      style={get(style, "attributeValue", {})}
                    >
                      {get(attribute, "value", "")}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="m-10">
          <TabGroup>
            <div className="border-b border-gray-200">
              <TabList className="-mb-px flex space-x-8">
                <Tab className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-800 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600">
                  Customer Reviews
                </Tab>
                <Tab className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-800 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600">
                  FAQ
                </Tab>
                <Tab className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-800 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600">
                  License
                </Tab>
              </TabList>
            </div>
            <TabPanels as={Fragment}>
              <TabPanel className="-mb-10">
                <h3 className="sr-only">Customer Reviews</h3>

                {reviews.featured.map((review, reviewIdx) => (
                  <div
                    key={review.id}
                    className="flex space-x-4 text-sm text-gray-500"
                  >
                    <div className="flex-none py-10">
                      <img
                        alt=""
                        src={review.avatarSrc}
                        className="size-10 rounded-full bg-gray-100"
                      />
                    </div>
                    <div
                      className={classNames(
                        reviewIdx === 0 ? "" : "border-t border-gray-200",
                        "py-10"
                      )}
                    >
                      <h3 className="font-medium text-gray-900">
                        {review.author}
                      </h3>
                      <p>
                        <time dateTime={review.datetime}>{review.date}</time>
                      </p>

                      <div className="mt-4 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            aria-hidden="true"
                            className={classNames(
                              review.rating > rating
                                ? "text-yellow-400"
                                : "text-gray-300",
                              "size-5 shrink-0"
                            )}
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} out of 5 stars</p>

                      <div
                        dangerouslySetInnerHTML={{ __html: review.content }}
                        className="mt-4 text-sm/6 text-gray-500"
                      />
                    </div>
                  </div>
                ))}
              </TabPanel>

              <TabPanel className="text-sm text-gray-500">
                <h3 className="sr-only">Frequently Asked Questions</h3>

                <dl>
                  {faqs.map((faq) => (
                    <Fragment key={faq.question}>
                      <dt className="mt-10 font-medium text-gray-900">
                        {faq.question}
                      </dt>
                      <dd className="mt-2 text-sm/6 text-gray-500">
                        <p>{faq.answer}</p>
                      </dd>
                    </Fragment>
                  ))}
                </dl>
              </TabPanel>

              <TabPanel className="pt-10">
                <h3 className="sr-only">License</h3>

                <div
                  dangerouslySetInnerHTML={{ __html: license.content }}
                  className="text-sm text-gray-500 [&>:first-child]:mt-0 [&_h4]:mt-5 [&_h4]:font-medium [&_h4]:text-gray-900 [&_li::marker]:text-gray-300 [&_li]:pl-2 [&_p]:my-2 [&_p]:text-sm/6 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_ul]:text-sm/6"
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
};

PdpV2.propsTypes = {
  style: object,
  title: string,
  subTitle: string,
  imagePath: string,
  description: string,
  attributes: arrayOf(object),
  images: arrayOf(object),
};
PdpV2.defaultProps = {
  style: {
    container: {},
    title: {},
    subTitle: {},
    image: {},
    description: {},
    attributeKey: {},
    attributeValue: {},
    attributeBox: {},
    images: {},
  },
  tailwindClasses: {
    container: "",
    title: "",
    subTitle: "",
    image: "",
    description: "",
    attributeKey: "",
    attributeValue: "",
    attributeBox: "",
    images: "",
  },
  title: "Event Name Here...",
  subTitle: "Sub title here...",
  imagePath:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024038.pf7.jpg",
  description:
    "Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.",
  attributes: [
    {
      title: "title here",
      value: "value here",
    },
    {
      title: "title here",
      value: "value here",
    },
    {
      title: "title here",
      value: "value here",
    },
    {
      title: "title here",
      value: "value here",
    },
    {
      title: "title here",
      value: "value here",
    },
    {
      title: "title here",
      value: "value here",
    },
    {
      title: "title here",
      value: "value here",
    },
    {
      title: "title here",
      value: "value here",
    },
  ],
  images: [
    {
      imagePath:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024038.pf7.jpg",
    },
    {
      imagePath:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024038.pf7.jpg",
    },
    {
      imagePath:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024038.pf7.jpg",
    },
    {
      imagePath:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024038.pf7.jpg",
    },
  ],
};
export default PdpV2;
