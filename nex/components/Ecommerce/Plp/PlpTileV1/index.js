import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import get from "lodash.get";
import PrimaryLink from "@nex-core-ui/PrimaryLink";
import NexImage from "@nex-core-ui/NexImage";
import { object, string } from "prop-types";
import withData from "@nex-core-ui/HOC/withData";

const PlpTileV1 = (props) => {

    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});


    return (
        <div
            key={get(props, "id")}
            className={`overflow-hidden border p-4 relative group ${get(tailwindClasses, "sectionBox")}`}
            style={get(style, "sectionBox")}
        >
            <figure className="relative">
                {get(props, "image", "").length !== 0 && (
                    <NexImage
                        src={get(props, "image")}
                        alt={get(props, "name")}
                        className={`!relative !w-full !h-40 object-cover rounded ${get(tailwindClasses, "image")}`}
                        style={get(style, "image")}
                    />
                )}
                <button
                    onClick={() => props.openQuickViewModal()}
                    className={`absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 nx-btn-primary nx-btn-primary:hover p-2 rounded-full opacity-0 group-hover:opacity-100 ${get(tailwindClasses, "previewIcon")}`}
                    style={get(style, "previewIcon")}
                >
                    <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
            </figure>
            {get(props, "discount", "").length !== 0 && (
                <span
                    className={`absolute top-2 right-2 text-[.75rem] nx-btn-primary px-3 py-3 rounded-full ${get(
                        tailwindClasses,
                        "badgeText"
                    )}`}
                    style={get(style, "badgeText")}
                >
                    {get(props, "discount")}
                </span>
            )}
            {get(props, "name", "").length !== 0 && (
                <PrimaryLink href={`${get(props, 'link')}/${get(props, 'name')}/${get(props, 'id')}`}>
                    <h3 className={`mt-2 text-[.75rem] font-semibold text-center ${get(tailwindClasses, "productName")}`} style={get(style, "productName")}>
                        {get(props, "name")}
                    </h3>
                </PrimaryLink>
            )}
            <div className="flex justify-center propss-center gap-1 my-4">
                {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon
                        key={i}
                        className={`w-4 h-4 ${i < get(props, "rating") ? "text-yellow-400" : "text-gray-300"}`}
                    />
                ))}
            </div>
            {get(props, "price", "").length !== 0 && (
                <p className={`text-base text-center font-bold nx-text-primary ${get(tailwindClasses, "priceText")}`} style={get(style, "priceText")}>
                    {get(props, "currencySign")}
                    {get(props, "price")}{" "}
                    <span className={`line-through text-gray-500 ${get(tailwindClasses, "oldPrice")}`} style={get(style, "oldPrice")}>
                        {get(props, "currencySign")}
                        {get(props, "oldPrice")}
                    </span>
                </p>
            )}
            <div className="absolute bg-white bottom-0 left-0 w-full flex justify-center propss-center gap-2 py-2 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {
                    <button
                        className={`text-[.75rem] nx-btn-primary nx-btn-primary:hover px-4 py-2 rounded flex propss-center gap-2 ${get(
                            tailwindClasses,
                            "cta"
                        )}`}
                        style={get(style, "cta")}
                    >
                        Add to cart
                    </button>
                }
                <button className={`nx-text-hover-primary bg-gray-200 p-2 rounded-full ${get(tailwindClasses, "wishlistIcon")}`} style={get(style, "wishlistIcon")}>
                    <HeartIcon className="w-5 h-5" />
                </button>
                {get(props, 'page', '') === "Wishlist" && <button onClick={() => props.removeItem(get(props, 'id'))} className={`nx-text-hover-primary bg-gray-200 p-2 rounded-full ${get(tailwindClasses, 'deleteIcon')}`} style={get(style, 'deleteIcon')}>
                    <XMarkIcon className="w-5 h-5" />
                </button>}
            </div>
        </div>
    );
};

PlpTileV1.propTypes = {
    props: object.isRequired,
    style: object,
    tailwindClasses: object,
    ctaText: string,
    closedIcon: string,
};

export default withData(PlpTileV1);
