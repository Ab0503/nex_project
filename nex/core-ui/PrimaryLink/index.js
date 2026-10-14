import get from 'lodash.get';
import Link from 'next/link';
import { object, string } from 'prop-types';

const APP_NAME = '/';
const PrimaryLink = (props) => {
    return <Link href={get(props, 'href', '')} className={get(props, "className", "")} style={get(props, 'style', {})}>
        {props.children}
    </Link>
}
PrimaryLink.propTypes = {
    href: string,
    style: object
}
PrimaryLink.defaultProps = {
    href: "",
    style: {}
}

export default PrimaryLink;