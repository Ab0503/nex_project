import { arrayOf, object, string } from 'prop-types';
import get from 'lodash.get';
import withData from "@nex-core-ui/HOC/withData";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const FaqV5 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    
  return (

    <div className={`bg-white ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className={`text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>{get(props, 'title')}</h2>
        <p className={`mt-6 max-w-2xl text-base/7 text-gray-600  ${get(tailwindClasses, 'description')}`}  style={{...get(style, 'description')}}>
          {get(props, 'description')}
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {get(props, 'items', []).map((faq) => (
              <div key={faq.id} className={`${get(tailwindClasses, 'sectionBox')}`} style={{...get(style, 'sectionBox')}}>
                <dt className={`text-base/7 font-semibold text-gray-900 ${get(tailwindClasses, 'question')}`}  style={{...get(style, 'question')}}>{faq.question}</dt>
                <dd className={`mt-2 text-base/7 text-gray-600 ${get(tailwindClasses, 'answer')}`} style={{...get(style, 'answer')}}>{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

FaqV5.propTypes = {
    style: object,
}

FaqV5.defaultProps = {
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

export default withData(FaqV5);