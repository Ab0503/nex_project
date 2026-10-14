import NexImage from "@nex-core-ui/NexImage";
import ReactPlayer from "react-player";
import get from "lodash.get";
const ImageOrVedio = (props) => {
    
    if(get(props, 'src', '').length != 0 && get(props, 'vedioSrc', '').length != 0){
        return (
            <ReactPlayer
                config={{
                    file: { attributes: { controlsList: "nodownload" } },
                }}
                onContextMenu={(e) => e.preventDefault()}
                controls={true}
                playing={true}
                light={
                    <NexImage {...props}></NexImage>
                }
                url={get(props, 'vedioSrc', '')}
                width="100%"
            />
        )
    }
    if(get(props, 'src', '').length != 0){
        return (
            <NexImage {...props}></NexImage>
        )
    }
    return null;
};

export default ImageOrVedio;
