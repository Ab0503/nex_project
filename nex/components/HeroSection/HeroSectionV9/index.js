import { object, string } from "prop-types";
import get from "lodash.get";
import ImageOrVedio from "@nex-core-ui/ImageOrVedio";
import PrimaryLink from "@nex-core-ui/PrimaryLink";
import NexAnimation from '@nex-components/NexAnimation';


const HeroSectionV9 = (props) => {
  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});

  return (
    <main>
        <div className={`relative isolate overflow-hidden nx-bg-primary bg-gradient-to-b from-indigo-100/20 ${get(tailwindClasses, 'container')}`}  style={get(style, 'container')}>
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-gray-50 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <NexAnimation  type={get(props, 'leftContentAnimation', '')}>
              <div>
                  <h1 className={`nx-section-heading-font max-w-2xl text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:col-span-2 xl:col-auto mb-4 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>
                  {get(props, 'title')}
                </h1>
                <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                  <p className={`text-pretty text-sm font-medium text-gray-500 sm:text-xl/6 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>
                    {get(props, 'description')}
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    {
                        get(props, 'cta1Text', '').length != 0 && <div className="rounded-md shadow">
                            <PrimaryLink href={get(props, 'cta1Link')} className={`rounded-md nx-btn-primary nx-btn-primary:hover px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${get(tailwindClasses, 'highlightCta')}`}  style={get(style, 'highlightCta')}>{get(props, 'cta1Text')}</PrimaryLink>
                        </div>
                      }
                      {
                        get(props, 'cta2Text', '').length != 0 && <div className="mt-3 sm:ml-3 sm:mt-0">
                            <PrimaryLink href={get(props, 'cta2Link')} className={`nx-text-primary nx-btn-primary:hover nx-text-primary bg-gray-50 text-sm/6 font-semibold ${get(tailwindClasses, 'cta')}`}  style={get(style, 'cta')}>{get(props, 'cta2Text')}</PrimaryLink>
                        </div>
                      }
                  </div>
                </div>
              </div>
              </NexAnimation>
              <div>
                <NexAnimation type={get(props, 'imageContentAnimation', '')}>
                <ImageOrVedio 
                  src={get(props, 'imagePath')} 
                  vedioSrc={get(props, "vedioPath", "")}
                  className={`!relative mt-10 rounded-2xl sm:mt-16 lg:mt-0  xl:row-span-2 xl:row-end-2  ${get(tailwindClasses, 'image')}`}  style={get(style, 'image')}
                />
                </NexAnimation>
              </div>
            </div>
            
            
            {/* <NexImage src={get(props, 'imagePath')} 
              vedioSrc={get(props, "vedioPath", "")}
              className={`!relative mt-10 rounded-2xl sm:mt-16 lg:mt-0  xl:row-span-2 xl:row-end-2  ${get(tailwindClasses, 'image')}`}  style={get(style, 'image')}
            /> */}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </main>
  );
};

HeroSectionV9.propTypes = {
  style: object,
  title: string,
  subTitle: string,
  description: string,
  ctaText: string,
  ctaLink: string,
};

HeroSectionV9.defaultProps = {
  style: {
    container: {},
    title: {},
    description: {},
    cta: {},
    highlightCta: {},
  },
  leftContentAnimation: "",
  imageContentAnimation: "",
  title: "Data to enrich your Anim aute id magna aliqua",
  description:
    "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
    cta1Text: "Get Started",
    cta1Link: "#",
    cta2Text: "Show Demo",
    cta2Link: "#",
    imagePath:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
    vedioPath: "https://cdn.pixabay.com/video/2022/11/18/139550-772542748_tiny.mp4",
};

export default HeroSectionV9;
