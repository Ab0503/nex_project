import { object, string } from "prop-types";
import get from "lodash.get";
import NexImage from '@nex-core-ui/NexImage';

const HeroSectionV5 = (props) => {
  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});

  return (
    <div className={`relative ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div className="hidden sm:mb-10 sm:flex">
                <div className={`relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>
                  {get(props, 'subTitle')}
                </div>
              </div>
              <h1 className={`text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>
                {get(props, 'title')}
              </h1>
              <p className={`mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 ${get(tailwindClasses, 'description')}`}  style={get(style, 'description')}>
                {get(props, 'description')}
              </p>
              <div className="mt-10 flex items-center gap-x-6">

                  {
                    get(props, 'cta1Text', '').length != 0 && <div class="rounded-md shadow">
                        <a href={get(props, 'cta1Link')} class={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${get(tailwindClasses, 'highlightCta')}`}  style={get(style, 'highlightCta')}>{get(props, 'cta1Text')}</a>
                    </div>
                  }
                  {
                    get(props, 'cta2Text', '').length != 0 && <div class="mt-3 sm:ml-3 sm:mt-0">
                        <a href={get(props, 'cta2Link')} class={`text-sm/6 font-semibold text-gray-900 ${get(tailwindClasses, 'cta')}`}  style={get(style, 'cta')}>{get(props, 'cta2Text')}</a>
                    </div>
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <NexImage src={get(props, 'imagePath')} className={`aspect-[3/2] object-cover h-full w-full lg:aspect-auto lg:h-full lg:w-full  ${get(tailwindClasses, 'image')}`}  style={get(style, 'image')}></NexImage>
      </div>
    </div>
  );
};

HeroSectionV5.propTypes = {
  style: object,
  title: string,
  subTitle: string,
  description: string,
  ctaText: string,
  ctaLink: string,
};

HeroSectionV5.defaultProps = {
  style: {
    container: {},
    dots: {},
    dotsBackground: {},
    title: {},
    text1: {},
    text2: {},
    description: {},
    cta: {},
    highlightCta: {},
  },
  title: "Data to enrich your online business",
  subTitle: "Data to enrich your",
  description:
    "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
    cta1Text: "Get Started",
    cta1Link: "#",
    cta2Text: "Show Demo",
    cta2Link: "#",
    imagePath:
    "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
  
};

export default HeroSectionV5;
