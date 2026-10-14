import { arrayOf, object, string } from 'prop-types';
import get from 'lodash.get';
import withData from "@nex-core-ui/HOC/withData";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const FaqV3 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    
  return (

    <div className= {`bg-white ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className={`text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>{get(props, 'title')}</h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {get(props, 'items', []).map((faq) => (
            <div key={faq.id} className={`pt-8 lg:grid lg:grid-cols-12 lg:gap-8 ${get(tailwindClasses, 'sectionBox')}`} style={{...get(style, 'sectionBox')}}>
              <dt className={`text-base/7 font-semibold text-gray-900 lg:col-span-5  ${get(tailwindClasses, 'question')}`} style={{...get(style, 'question')}}>{faq.question}</dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className={`text-base/7 text-gray-600 ${get(tailwindClasses, 'answer')}`} style={{...get(style, 'answer')}}>{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

FaqV3.propTypes = {
    style: object,
}

FaqV3.defaultProps = {
    style: {
        container: {},
        title: {},
        sectionBox: {},
        question: {},
        answer: {},
        
    },
    title: "Frequently asked questions",
    items: [
        {
          question: "How do you make holy water?",
          answer:
            "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "How do you make holy water?",
            answer:
              "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "How do you make holy water?",
            answer:
              "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        }
    ]
}

export default withData(FaqV3);