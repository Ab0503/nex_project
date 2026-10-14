import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';

const CallToActionV3 = (props) => {
  const style = get(props,'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
    <section id="snippet-3" className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-20 lg:pt-20 md:pt-20 pb-16 xl:pb-20 lg:pb-20 md:pb-20 text-center">
        <div className="flex flex-wrap mx-[15px]">
          <NexAnimation  type={get(props, 'ContentAnimation', '')}>
          <div className="md:w-9/12 lg:w-7/12 xl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full mx-auto text-center">
          {
            get(props, 'icon',"").length != 0 &&
            <span className={`nx-text-primary inline-flex w-[2.6rem] h-[2.6rem] mb-2 mx-auto ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props,"icon"))}</span>
          }
          {
            get(props, 'title',"").length != 0 &&
            <h2 className={`nx-section-heading-font text-[2.3rem] font-bold xl:text-[2.4rem] leading-[1.3] mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h2>
          }
          {
            get(props, 'subTitle',"").length != 0 &&
            <p className={`lead text-[1.6rem] mb-6 xl:px-10 xxl:px-20 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</p>
          }
          {
            get(props, 'ctaText',"").length != 0 &&
            <PrimaryLink href={get(props,"ctaLink")} className={`p-3 text-gray-50 nx-btn-primary nx-btn-primary:hover focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>{get(props,"ctaText")}</PrimaryLink>
          }
          </div>
          </NexAnimation>
        </div>
      </div>
    </section>
    </div>
  )
}
CallToActionV3.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
CallToActionV3.defaultProps = {
  style: {
      container: {},
      icon: {},
      title: {},
      subTitle: {},
      ctaText: {}
  },
  tailwindClasses: {
    container: "",
    icon: "",
    title: "",
    subTitle: "",
    ctaText: ""
  },
  ContentAnimation: "",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
  </svg>`,
  title: "Join Our Community",
  subTitle: "We are trusted by over 5000+ clients. Join them by using our services and grow your business.",
  ctaText: "Join Us",
  ctaLink:"#"
}
export default CallToActionV3;