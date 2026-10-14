import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import parse from "html-react-parser";

const HeroSectionV38 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section-frame br-fix overflow-hidden">
      <div
        className="wrapper image-wrapper bg-cover bg-image bg-overlay bg-overlay-500"
        style={{
          backgroundImage: `url(${get(props, "bgImage")})`,
        }}
      >
        <div
          className={` pt-32 xl:pt-[12.5rem] lg:pt-[12.5rem] pb-28 xl:pb-36 lg:pb-36 !text-center ${get(
            tailwindClasses,
            "container"
          )}`}
          style={get(style, "container")}
        >
          <div className="flex flex-wrap">
            <div
              className="md:w-9/12  lg:w-8/12  xl:w-7/12  xxl:w-6/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto"
              data-cues="zoomIn"
              data-group="page-title"
              data-interval="-200"
              data-delay="500"
            >
              {get(props, "subTitle", "").length != 0 && (
                <h2
                  className={`nx-text-primary h6 uppercase tracking-[0.05rem] mb-5 ${get(
                    tailwindClasses,
                    "subTitle"
                  )}`}
                  style={get(style, "subTitle")}
                >
                  {get(props, "subTitle")}
                </h2>
              )}
              {get(props, "title", "").length != 0 && (
                <h3
                  className={`nx-section-heading-font font-bold leading-[1.2]  xl:text-[2.7rem] text-[calc(1.395rem_+_1.74vw)] text-black mb-7 ${get(
                    tailwindClasses,
                    "title"
                  )}`}
                  style={get(style, "title")}
                >
                  {get(props, "title")}
                </h3>
              )}

              <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-4 nx-btn-primary text-gray-50 rounded-full"
              >
                {parse(get(props, "ctaIcon", ""))}
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="divider text-gray-50 mx-[-0.5rem]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
              <path
                fill="currentColor"
                d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-full max-w-4xl">
              {" "}
              {/* Adjust the width and max-width */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-50 rounded-full absolute right-0 top-0 hidden pr-4 pt-4 sm:block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-12"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <video
                poster="https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736341030.movie2.jpg"
                src={get(props, "videoPath")}
                autoPlay
                loop
                playsInline
                muted
                width={"100%"}
                height={"auto"}
              ></video>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

HeroSectionV38.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  ctaIcon: PropTypes.string,
  ctaLink: PropTypes.string,
  videoPath: PropTypes.string,
  bgImage: PropTypes.string,
};
HeroSectionV38.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title: {},
    subTitle: {},
    ctaIcon: {},
    videoPath: {},
    bgImage: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    title: "",
    subTitle: "",
    ctaIcon: "",
    videoPath: "",
    bgImage: "",
  },
  title: "Grow your business with our marketing solutions",
  subTitle: "Hello! We are Sandbox",
  ctaIcon: `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                    clip-rule="evenodd"
                  />
                </svg>`,
  videoPath:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1736342809.SampleVideo_1280x720_20mb.mp4",
  bgImage:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736335355.bg16.png",
};
export default HeroSectionV38;
