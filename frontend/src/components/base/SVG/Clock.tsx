import * as React from "react"

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props"

const Clock = (props: SVGProps): JSX.Element => {
    const theme = useTheme();
    const { width, height, fill } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || 63}
            height={height || 63}
            fill="none"
            {...props}
        >
            <path
                fill="#51E899"
                d="M57.094 31.5a25.593 25.593 0 1 1-51.187 0 25.593 25.593 0 0 1 51.187 0ZM0 31.5a31.5 31.5 0 1 0 63 0 31.5 31.5 0 0 0-63 0Zm28.547-16.734V31.5c0 .984.492 1.907 1.316 2.46l11.813 7.876a2.946 2.946 0 0 0 4.097-.825 2.943 2.943 0 0 0-.824-4.097l-10.496-6.989v-15.16a2.946 2.946 0 0 0-2.953-2.953 2.946 2.946 0 0 0-2.953 2.954Z"
            />
        </svg>
    );
};
export default Clock

