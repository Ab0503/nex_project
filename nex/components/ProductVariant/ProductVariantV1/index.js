import { Component } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { arrayOf, object } from "prop-types";
import map from "lodash.map";
import uniq from "lodash.uniq";
import get from "lodash.get";
import classNames from "classnames";

class ProductVariantV1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorList: this.getUniqueColorList(),
      sizeList: this.getUniqueSizeList(),
      selectedColor: '',
      selectedSize: '',

    };
  }

  getUniqueColorList() {
    const colorList = [];
    const uniqueColorList = uniq(map(get(this.props, 'variants'), 'color'));
    for (let color of uniqueColorList) {
      colorList.push({
        name: color,
        enable: true,
      });
    }
    return colorList;
  }
  getUniqueSizeList() {
    const sizeList = [];
    const uniquesizeList = uniq(map(get(this.props, 'variants'), 'size'));
    for (let size of uniquesizeList) {
      sizeList.push({
        name: size,
        enable: true,
      });
    }
    return sizeList;
  }
  render() {
    console.log('sdfsf', this.state)
    return (
      <form>
        {/* Color picker */}
        <div>
          <h2 className="text-sm font-medium text-gray-900">Color</h2>

          <fieldset aria-label="Choose a color" className="mt-2">
            <RadioGroup
              value={this.state.selectedColor} 
              onChange={(e) => {this.setState({selectedColor: e})}}
              className="flex items-center gap-x-3"
            >
              {this.state.colorList.map((color) => {
                console.log('sdfsfs');
                return (
                <Radio
                  key={color.name}
                  value={color}
                  aria-label={color.name}
                  className={classNames(
                    this.state.selectedColor,
                    "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                  )}
                >
                  <span 
                    aria-hidden="true"
                    className={classNames(
                      color.name,
                      "size-8 rounded-full border border-black/10"
                    )}
                    style={{background: color.name}}
                  />
                </Radio>
              )
            }
              
              )}
            </RadioGroup>
          </fieldset>
        </div>

        {/* Size picker */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-900">Size</h2>
            {/* <a
              href="#"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              See sizing chart
            </a> */}
          </div>

          <fieldset aria-label="Choose a size" className="mt-2">
            <RadioGroup
              value={this.state.selectedSize}
              onChange={(e) => {this.setState({selectedSize: e})}}
              className="grid grid-cols-3 gap-3 sm:grid-cols-6"
            >
              {this.state.sizeList.map((size) => (
                <Radio
                  key={size.name}
                  value={size}
                  disabled={!size.enable}
                  className={classNames(
                    size.enable
                      ? "cursor-pointer focus:outline-none"
                      : "cursor-not-allowed opacity-25",
                    "flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-3 text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 data-[checked]:border-transparent data-[checked]:bg-indigo-600 data-[checked]:text-white data-[focus]:ring-2 data-[focus]:ring-indigo-500 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-700 sm:flex-1"
                  )}
                >
                  {size.name}
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        </div>

        <button
          type="submit"
          className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add to cart
        </button>
      </form>
    );
  }
}

ProductVariantV1.propTypes = {
  variants: arrayOf(object),
};

ProductVariantV1.defaultProps = {
  variants: [],
};

export default ProductVariantV1;
