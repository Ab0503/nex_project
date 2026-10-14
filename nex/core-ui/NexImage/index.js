import get from 'lodash.get';
import Image from 'next/image';

const NexImage = (props) => {
    return (
            <Image src={get(props, 'src')} style={get(props, 'style', {})} fill className={`${get(props, 'className')}`} />
    )
}

export default NexImage;