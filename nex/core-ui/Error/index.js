
import get from "lodash.get";
import Image from "next/image";
import Logo from "@nex-editor/common/Logo";



function Error(props) {
  return (
    <div className="mx-auto max-w-md sm:max-w-3xl">
      <div>
        <div className="text-center">
          <Logo />

          <h2 className="mt-2 text-base font-semibold leading-6 text-gray-900">
            {get(props, "title", "")}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            {get(props, "description", "description")}
          </p>
          <Image src={get(props, "image_url", "")} height="300" width="400" />
        </div>
      </div>
    </div>
  );
}
export default Error;
