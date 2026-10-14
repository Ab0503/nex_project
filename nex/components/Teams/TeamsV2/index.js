import { arrayOf, object, string } from 'prop-types';
import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import withData from "@nex-core-ui/HOC/withData";
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';

const TeamsV2 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});

  return (
    <div className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={{ ...get(style, 'container') }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <NexAnimation type={get(props, 'topContentAnimation')}>
            <h2 className={`text-pretty text-4xl font-semibold tracking-tight sm:text-5xl nx-section-heading-font ${get(tailwindClasses, 'title')}`} style={{ ...get(style, 'title') }}>{get(props, 'title')}</h2>
            <p className={`mt-6 text-lg/8 ${get(tailwindClasses, 'description')}`} style={{ ...get(style, 'description') }}>
              {get(props, 'description')}
            </p>
          </NexAnimation>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {get(props, 'items').map((item) => (
            <NexAnimation type={get(props, 'bottomContentAnimation')}>
              <PrimaryLink href={get(item, 'ctaLink')}>
                <li key={item.name} className={`${get(tailwindClasses, 'itemBox')}`} style={{ ...get(style, 'itemBox') }}>
                  <NexImage alt="" src={item.imageUrl} className={`aspect-[3/2] w-full !h-60  !relative rounded-2xl object-cover ${get(tailwindClasses, 'image')}`} style={{ ...get(style, 'image') }} />
                  <h3 className={`mt-6 text-lg/8 font-semibold tracking-tight ${get(tailwindClasses, 'itemTitle')}`} style={{ ...get(style, 'itemTitle') }}>{item.title}</h3>
                  <p className={`text-base/7 nx-text-primary ${get(tailwindClasses, 'itemSubTitle')}`} style={{ ...get(style, 'itemSubTitle') }}>{item.subTitle}</p>
                  <ul role="list" className="mt-6 flex gap-x-6">
                    <li>
                      <PrimaryLink href={item.xUrl} className="nx-text-hover-primary">
                        <span className="sr-only">X</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className={`h-5 w-5 ${get(tailwindClasses, 'icon')}`} style={{ ...get(style, 'icon') }}>
                          <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                        </svg>
                      </PrimaryLink>
                    </li>
                    <li>
                      <PrimaryLink href={item.linkedinUrl} className="nx-text-hover-primary">
                        <span className="sr-only">LinkedIn</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className={`h-5 w-5 ${get(tailwindClasses, 'icon')}`} style={{ ...get(style, 'icon') }}>
                          <path
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </PrimaryLink>
                    </li>
                  </ul>
                </li>
              </PrimaryLink>
            </NexAnimation>
          ))}
        </ul>
      </div>
    </div>
  )
}

TeamsV2.propTypes = {
  style: object,
  items: arrayOf(object),
  title: string,
  description: string,
}
TeamsV2.defaultProps = {
  style: {
    container: {},
    title: {},
    description: {},
    itemBox: {},
    image: {},
    itemTitle: {},
    itemSubTitle: {},
    icon: {}
  },
  title: "Trusted by the world’s most innovative teams",
  description: "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.",
  topContentAnimation:"",
  bottomContentAnimation:"",
  items: [
    {
      title: 'Leslie Alexander',
      subTitle: 'Co-Founder / CEO',
      imageUrl:
        'https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png',

      xUrl: '#',
      linkedinUrl: '#',
      ctaLink: "#"
    },
    {
      title: 'Leslie Alexander',
      subTitle: 'Co-Founder / CEO',
      imageUrl:
        'https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png',

      xUrl: '#',
      linkedinUrl: '#',
      ctaLink: "#"
    },
    {
      title: 'Leslie Alexander',
      subTitle: 'Co-Founder / CEO',
      imageUrl:
        'https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png',
      xUrl: '#',
      linkedinUrl: '#',
      ctaLink: "#"
    },

    {
      title: 'Leslie Alexander',
      subTitle: 'Co-Founder / CEO',
      imageUrl:
        'https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png',
      xUrl: '#',
      linkedinUrl: '#',
      ctaLink: "#"
    },
    {
      title: 'Leslie Alexander',
      subTitle: 'Co-Founder / CEO',
      imageUrl:
        'https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png',
      xUrl: '#',
      linkedinUrl: '#',
      ctaLink: "#"
    },
    {
      title: 'Leslie Alexander',
      subTitle: 'Co-Founder / CEO',
      imageUrl:
        'https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png',
      xUrl: '#',
      linkedinUrl: '#',
      ctaLink: "#"
    },

  ]
}

export default withData(TeamsV2);