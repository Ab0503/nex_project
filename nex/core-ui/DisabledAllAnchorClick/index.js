import { Helmet } from "react-helmet";

const DisabledAllAnchorClick = (props) => {
    return (
        <Helmet style={[{"cssText": `
                                        .pageeditor a {
                                            pointer-events: none;
                                        }
                                    `
                }]}/>
    )
}

export default DisabledAllAnchorClick;