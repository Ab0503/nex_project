import { arrayOf, object, string } from 'prop-types';
import get from 'lodash.get';
import withData from "@nex-core-ui/HOC/withData";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon} from '@heroicons/react/24/outline'

const FaqV2 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    
  return (

    <div className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className={`text-4xl font-semibold tracking-tight sm:text-5xl nx-section-heading-font ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>
            {get(props, 'title')}
          </h2>
          <dl className="mt-5 space-y-6 divide-y divide-gray-900/10">
            {get(props, 'items', []).map((faq) => (
              <Disclosure key={faq.question} as="div" className={`pt-6 ${get(tailwindClasses, 'sectionBox')}`} style={{...get(style, 'sectionBox')}}>
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className={`text-base/7 font-semibold ${get(tailwindClasses, 'question')}`} style={{...get(style, 'question')}}>{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusIcon aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                      <MinusIcon aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className={`text-base/7 text-gray-600 ${get(tailwindClasses, 'answer')}`} style={{...get(style, 'answer')}}>{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

FaqV2.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    items: arrayOf(object)
}

FaqV2.defaultProps = {
    style: {
        container: {},
        title: {},
        sectionBox: {},
        question: {},
        answer: {},  
    },
    tailwindClasses: {
      container: "",
      title: "",
      sectionBox: "",
      question: "",
      answer: "",  
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

export default withData(FaqV2);