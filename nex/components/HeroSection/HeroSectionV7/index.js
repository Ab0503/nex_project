import { object, string } from "prop-types";
import get from "lodash.get";
import NexImage from '@nex-core-ui/NexImage';

const HeroSectionV7 = (props) => {
  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});

  return (
    <main>
        <div>
          {/* Hero card */}
          <div className={`relative pb-10 pt-10 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <NexImage src={get(props, 'imagePath')} className={`h-full w-full object-cover ${get(tailwindClasses, 'image')}`} style={get(style, 'image')}></NexImage>
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className={`block text-white ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(props, 'text1')}</span>
                    <span className={`block text-indigo-200 ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(props, 'text2')}</span>
                  </h1>
                  <p className={`mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>
                    {get(props, 'description')}
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      {
                        get(props, 'cta1Text', '').length != 0 && <div class="rounded-md shadow">
                            <a href={get(props, 'cta1Link')} class={`flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8 ${get(tailwindClasses, 'highlightCta')}`}  style={get(style, 'highlightCta')}>{get(props, 'cta1Text')}</a>
                        </div>
                      }
                      {
                        get(props, 'cta2Text', '').length != 0 && <div class="mt-3 sm:ml-3 sm:mt-0">
                            <a href={get(props, 'cta2Link')} class={`flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8 ${get(tailwindClasses, 'cta')}`}  style={get(style, 'cta')}>{get(props, 'cta2Text')}</a>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
};

HeroSectionV7.propTypes = {
  style: object,
  title: string,
  subTitle: string,
  description: string,
  ctaText: string,
  ctaLink: string,
};

HeroSectionV7.defaultProps = {
  style: {
    container: {},
    title: {},
    text1: {},
    text2: {},
    description: {},
    cta: {},
    highlightCta: {},
  },
  text1: "Data to enrich your",
  text2: "online business",
  description:
    "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
    cta1Text: "Get Started",
    cta1Link: "#",
    cta2Text: "Show Demo",
    cta2Link: "#",
    imagePath:
    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
  
};

export default HeroSectionV7;
