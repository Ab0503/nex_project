import { VARIANTS } from "./constants";
import get from "lodash.get";

export const getVariantStyle = (props)  => {
    let containerBorderStyle = {};
    let rowCellBorderStyle = {};
    switch(get(props, 'variant', VARIANTS.VARIANT_1)){
        case VARIANTS.VARIANT_1:
            containerBorderStyle = {
                borderWidth: get(props, 'borderSize'), borderStyle: get(props, 'borderStyle'), borderColor: get(props, 'borderColor'), borderBottom: 0, borderRightWidth: 0
            };
            rowCellBorderStyle = {
                borderBottomWidth: get(props, 'borderSize'),borderRightWidth: get(props, 'borderSize'),borderStyle: get(props, 'borderStyle'),borderColor: get(props, 'borderColor'),borderTopWidth: 0,borderLeftWidth: 0,
            }
            break;
        case VARIANTS.VARIANT_2:
            containerBorderStyle = {
                borderWidth: get(props, 'borderSize'), borderStyle: get(props, 'borderStyle'), borderColor: get(props, 'borderColor'), borderBottom: 0
            };
            rowCellBorderStyle = {
                borderBottomWidth: get(props, 'borderSize'), borderStyle: get(props, 'borderStyle'),borderColor: get(props, 'borderColor'),borderTopWidth: 0,borderLeftWidth: 0,borderRightWidth: 0
            }
            break;
        case VARIANTS.VARIANT_3:
            containerBorderStyle = {
            };
            rowCellBorderStyle = {
                borderWidth: 0
            }
            break;
        case VARIANTS.VARIANT_4:
            containerBorderStyle = {
                borderWidth: get(props, 'borderSize'), borderStyle: get(props, 'borderStyle'), borderColor: get(props, 'borderColor'), borderBottom: 0,
                borderTopLeftRadius: 15, borderTopRightRadius: 15,
                
            };
            rowCellBorderStyle = {
                borderBottomWidth: get(props, 'borderSize'), borderStyle: get(props, 'borderStyle'),borderColor: get(props, 'borderColor'),borderTopWidth: 0,borderLeftWidth: 0,borderRightWidth: 0
            }
            break;
        case VARIANTS.VARIANT_5:
            containerBorderStyle = {
                borderWidth: get(props, 'borderSize'), borderStyle: get(props, 'borderStyle'), borderColor: get(props, 'borderColor'),
                borderTopLeftRadius: 15, borderTopRightRadius: 15,
                
            };
            rowCellBorderStyle = {
                borderWidth: 0
                // borderBottomWidth: get(props, 'borderSize'), borderStyle: get(props, 'borderStyle'),borderColor: get(props, 'borderColor'),borderTopWidth: 0,borderLeftWidth: 0,borderRightWidth: 0
            }
            break;
        case VARIANTS.VARIANT_6:
            // containerBorderStyle = {
            //     borderWidth: get(props, 'borderSize'), borderStyle: get(props, 'borderStyle'), borderColor: get(props, 'borderColor'), borderBottom: 0
            // };
            // rowCellBorderStyle = {
            //     borderBottomWidth: get(props, 'borderSize'), borderStyle: get(props, 'borderStyle'),borderColor: get(props, 'borderColor'),borderTopWidth: 0,borderLeftWidth: 0,borderRightWidth: 0
            // }
            break;
        default:
    }
    return {
        containerBorderStyle,
        rowCellBorderStyle
    }
}