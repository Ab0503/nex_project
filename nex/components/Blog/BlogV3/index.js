import { object, string } from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import withData from "@nex-core-ui/HOC/withData";
import PrimaryLink from "@nex-core-ui/PrimaryLink";

const BlogV3 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});
    
    return (
      <div className={`py-24 sm:py-32 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className={`nx-section-heading-font text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'title')}`}  style={get(style, 'title')}>{get(props, 'title')}</h2>
            <p className={`mt-2 text-lg/8 text-gray-600 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
            {get(props, 'items', []).map((item) => (
              <article key={item.title} className={`flex w-full flex-col items-start justify-between ${get(tailwindClasses, 'itemBox')}`} style={get(style, 'itemBox')}>
                <div className="relative w-full mb-5">
                  <NexImage  src={item.bannerImage}
                    className={`aspect-[16/9] h-full w-full !relative rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] ${get(tailwindClasses, 'itemBannerImage')}`}
                    style={get(style, 'itemBannerImage')}
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={item.datetime} className={`text-gray-500 ${get(tailwindClasses, 'itemText1')}`} style={get(style, 'itemText1')}>
                    {item.text1}
                  </time>
                  <PrimaryLink
                    href={item.href}
                    className={`relative z-10 rounded-full px-3 py-1.5 font-medium nx-btn-primary nx-btn-primary:hover text-gray-50 ${get(tailwindClasses, 'itemText2')}`}
                    style={get(style, 'itemText2')}
                  >
                    {item.text2}
                  </PrimaryLink>
                </div>
                <div className="group relative">
                  <h3 className={`mt-3 text-lg/6 font-semibold text-gray-900 nx-text-primary:hover ${get(tailwindClasses, 'itemTitle')}`} style={get(style, 'itemTitle')}>
                    <PrimaryLink href={item.href}>
                      <span className="absolute inset-0" />
                      {item.title}
                    </PrimaryLink>
                  </h3>
                  <p className={`mt-5 line-clamp-3 text-sm/6 text-gray-600 ${get(tailwindClasses, 'itemDesc')}`} style={get(style, 'itemDesc')}>{item.desc}</p>
                </div>
                {
                    get(item, 'imagePath', '').length != 0 && <div className="relative mt-8 flex items-center gap-x-4">
                        <NexImage src={item.imagePath} className={`mt-14 ! relative !w-10 !h-10 rounded-full bg-gray-50 ${get(tailwindClasses, 'itemImage')}`} style={get(style, 'itemImage')}/>
                        <div className="text-sm/6">
                            <p className={`font-semibold text-gray-900 ${get(tailwindClasses, 'itemText3')}`} style={get(style, 'itemText3')}>
                                <PrimaryLink href={item.href}>
                                    <span className="absolute inset-0" />
                                    {item.text3}
                                </PrimaryLink>
                            </p>
                            <p className={`text-gray-600 ${get(tailwindClasses, 'itemText4')}`} style={get(style, 'itemText4')}>{item.text4}</p>
                        </div>
                    </div>
                }
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }

  BlogV3.propTypes = {
    style: object,
  }

  BlogV3.defaultProps = {
    style: {
        container: {},
        title: {},
        description: {},
        itemBox: {},
        itemText1: {},
        itemText2: {},
        itemTitle: {},
        itemDesc: {},
        itemBannerImage: {},
        itemImage: {},
        itemText3: {},
        itemText4: {},
        
    },
    tailwindClasses: {
      container: "",
      title: "",
      description: "",
      itemBox: "",
      itemText1: "",
      itemText2: "",
      itemTitle: "",
      itemDesc: "",
      itemBannerImage: "",
      itemImage: "",
      itemText3: "",
      itemText4: "",
      
  },
    title: "From the blog",
    description: "Learn how to grow your business with our expert advice.",
    items: [
        {
            text1: "Mar 16, 2020",
            text2: "Marketing",
            href: "#",
            title: "Boost your conversion rate",
            desc: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
            bannerImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297613.1920x1080 - LightBox Image.png",
            imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png",
            text3: "Michael Foster",
            text4: "Co-Founder / CEO",
        },
        {
            text1: "Mar 16, 2020",
            text2: "Marketing",
            href: "#",
            title: "Boost your conversion rate",
            desc: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
            bannerImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297613.1920x1080 - LightBox Image.png",
            imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png",
            text3: "Michael Foster",
            text4: "Co-Founder / CEO",
            
        },
        {
            text1: "Mar 16, 2020",
            text2: "Marketing",
            href: "#",
            title: "Boost your conversion rate",
            desc: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
            bannerImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297613.1920x1080 - LightBox Image.png",
            imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png",
            text3: "Michael Foster",
            text4: "Co-Founder / CEO",
        }
    ]
  }

  export default withData(BlogV3);