import * as React from "react"

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props"

const Thermometer = (props: SVGProps): JSX.Element => {
    const theme = useTheme();
    const { width, height, fill } = props;
    return (
        <svg width={width || 48} height={height || 85}>
            <path
                d="M23.6 10.536c-4.343 0-7.867 3.54-7.867 7.902v27.08c0 2.847-1.163 5.251-2.507 6.996a13.155 13.155 0 0 0-2.737 8.066c0 7.277 5.867 13.17 13.111 13.17 7.244 0 13.111-5.893 13.111-13.17 0-3.045-1.016-5.827-2.737-8.05-1.344-1.745-2.507-4.148-2.507-6.996V18.438c0-4.363-3.524-7.902-7.867-7.902ZM5.244 18.438C5.244 8.264 13.455 0 23.6 0c10.145 0 18.356 8.247 18.356 18.438v27.08c0 .016.016.049.032.098.033.1.131.264.279.461A23.68 23.68 0 0 1 47.2 60.58c0 13.088-10.57 23.706-23.6 23.706C10.57 84.286 0 73.668 0 60.58c0-5.465 1.836-10.502 4.933-14.503.148-.197.246-.362.279-.46.016-.05.032-.083.032-.1v-27.08ZM31.467 60.58c0 4.363-3.524 7.902-7.867 7.902s-7.867-3.54-7.867-7.902a7.92 7.92 0 0 1 5.245-7.457V23.705a2.636 2.636 0 0 1 2.622-2.634 2.636 2.636 0 0 1 2.622 2.634v29.418a7.92 7.92 0 0 1 5.245 7.457Z"
                fill="#51E899"
            />
        </svg>
    );
};
export default Thermometer