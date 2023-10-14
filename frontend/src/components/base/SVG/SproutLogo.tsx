import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const SproutLogo = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "180"}
      height={height || "55"}
      viewBox="0 0 180 55"
      fill="none"
    >
      <g clip-path="url(#clip0_1056_17422)">
        <path
          d="M17.0314 42.9882C14.4674 42.9882 12.1331 42.6715 10.024 42.0421C7.91502 41.4128 6.04199 40.4859 4.40708 39.2634C2.77004 38.041 1.30308 36.5634 0.00195312 34.8285L5.56151 28.5015C7.49194 31.1824 9.41387 33.0065 11.3273 33.9718C13.2386 34.9391 15.32 35.4196 17.5672 35.4196C18.7896 35.4196 19.8824 35.2516 20.8498 34.9178C21.815 34.584 22.574 34.0993 23.1267 33.47C23.6774 32.8407 23.9538 32.0902 23.9538 31.2228C23.9538 30.5935 23.8156 30.011 23.5392 29.4773C23.2628 28.9458 22.8674 28.4717 22.3571 28.0571C21.8447 27.6426 21.2324 27.2684 20.5245 26.9325C19.8144 26.5987 19.0256 26.3032 18.1582 26.0459C17.2908 25.7908 16.3447 25.5825 15.32 25.4251C13.111 24.9128 11.1806 24.292 9.52442 23.5627C7.86825 22.8335 6.48846 21.9278 5.38505 20.8414C4.28164 19.7571 3.46312 18.5262 2.93162 17.1464C2.40011 15.7666 2.13436 14.2103 2.13436 12.4755C2.13436 10.7407 2.52767 9.05685 3.31643 7.53675C4.10518 6.01876 5.19796 4.70913 6.59901 3.6036C7.99794 2.50019 9.61584 1.6519 11.4485 1.06087C13.2811 0.469834 15.2222 0.174316 17.2738 0.174316C19.7974 0.174316 22.0042 0.46133 23.8964 1.0311C25.7885 1.60301 27.4341 2.42153 28.8351 3.48454C30.234 4.54968 31.4076 5.85081 32.3537 7.38792L26.7367 12.8284C25.9097 11.725 25.0125 10.7981 24.0452 10.0497C23.0778 9.30135 22.034 8.74008 20.9114 8.36377C19.7868 7.98959 18.6344 7.8025 17.4524 7.8025C16.1512 7.8025 15.0287 7.97045 14.0805 8.30424C13.1344 8.64015 12.3946 9.12276 11.8631 9.75206C11.3315 10.3835 11.0658 11.151 11.0658 12.0588C11.0658 12.7689 11.2423 13.4003 11.5973 13.951C11.9523 14.5037 12.4647 14.9863 13.1344 15.3988C13.8041 15.8134 14.612 16.1769 15.5581 16.4937C16.5042 16.8105 17.548 17.0847 18.6918 17.3207C20.8604 17.7544 22.8121 18.3263 24.5469 19.0364C26.2818 19.7465 27.77 20.6033 29.0116 21.6089C30.2532 22.6145 31.2078 23.7966 31.8796 25.1572C32.5493 26.5179 32.8852 28.0465 32.8852 29.741C32.8852 32.5409 32.2134 34.9263 30.874 36.8972C29.5325 38.868 27.6807 40.3775 25.3144 41.4213C22.9482 42.4652 20.1886 42.9882 17.0357 42.9882H17.0314Z"
          fill="#57CB62"
        />
        <path
          d="M84.5903 11.4507C82.5408 12.3224 81.0483 13.6809 80.0512 14.8503L79.9407 11.1127H71.8384V42.3972H80.2957V26.1926C80.2957 25.2082 80.4637 24.3004 80.7975 23.4713C81.1312 22.6443 81.5968 21.9235 82.1879 21.3134C82.7789 20.7032 83.4784 20.2291 84.2884 19.8932C85.0963 19.5594 85.9743 19.3914 86.9204 19.3914C87.6305 19.3914 88.3193 19.4807 88.9912 19.6572C89.6609 19.8337 90.2328 20.042 90.7069 20.278L92.9541 11.0532C92.9541 11.0532 88.8253 9.65212 84.5924 11.4507H84.5903Z"
          fill="#57CB62"
        />
        <path
          d="M108.032 42.9882C104.839 42.9882 101.99 42.2888 99.4876 40.8877C96.9831 39.4888 95.0123 37.5669 93.573 35.1219C92.1336 32.677 91.415 29.8792 91.415 26.7241C91.415 23.5691 92.1336 20.7819 93.573 18.3561C95.0123 15.9324 96.9831 14.0105 99.4876 12.5903C101.99 11.1701 104.839 10.4622 108.032 10.4622C111.225 10.4622 114.015 11.1723 116.519 12.5903C119.021 14.0105 120.984 15.9324 122.404 18.3561C123.824 20.7798 124.532 23.5712 124.532 26.7241C124.532 29.877 123.822 32.677 122.404 35.1219C120.984 37.5669 119.024 39.4888 116.519 40.8877C114.015 42.2866 111.187 42.9882 108.032 42.9882ZM108.032 35.6556C109.569 35.6556 110.949 35.2708 112.171 34.5033C113.394 33.7336 114.348 32.6706 115.039 31.31C115.728 29.9493 116.075 28.4228 116.075 26.7263C116.075 25.0297 115.728 23.4437 115.039 22.083C114.348 20.7224 113.392 19.6593 112.171 18.8897C110.949 18.1201 109.569 17.7374 108.032 17.7374C106.495 17.7374 105.056 18.1329 103.833 18.9195C102.611 19.7082 101.645 20.7734 100.935 22.1128C100.225 23.4543 99.8894 24.9914 99.9298 26.7263C99.8894 28.4228 100.225 29.9493 100.935 31.31C101.645 32.6706 102.611 33.7336 103.833 34.5033C105.056 35.2729 106.455 35.6556 108.032 35.6556Z"
          fill="#57CB62"
        />
        <path
          d="M148.303 11.1128V29.8601C148.303 30.7275 148.146 31.5354 147.829 32.2838C147.512 33.0321 147.081 33.6827 146.528 34.2355C145.975 34.7882 145.306 35.2113 144.517 35.5068C143.728 35.8023 142.88 35.9512 141.974 35.9512C140.711 35.9512 139.648 35.6769 138.781 35.1241C137.913 34.5735 137.244 33.7741 136.77 32.7281C136.298 31.6842 136.059 30.4511 136.059 29.0331V11.1128H127.662V30.3916C127.662 33.0342 128.106 35.29 128.993 37.163C129.879 39.036 131.14 40.4753 132.777 41.4809C134.412 42.4866 136.374 42.9883 138.662 42.9883C138.662 42.9883 142.95 43.2711 146.411 41.5405C147.334 41.0154 148.046 40.4434 148.599 39.8652L148.716 42.3951H156.699V11.1128H148.301H148.303Z"
          fill="#57CB62"
        />
        <path
          d="M180 11.1127H173.614V0H165.216V11.1127H159.363V18.624H165.216V42.3972H173.614V18.624H180V11.1127Z"
          fill="#57CB62"
        />
        <path
          d="M43.3072 35.934V35.849H43.2222L43.3072 35.934Z"
          fill="#57CB62"
        />
        <path
          d="M68.2796 15.1224C68.2796 13.1728 66.6978 11.5911 64.7482 11.5911H51.7774C42.712 11.5911 35.3623 18.9407 35.3623 28.0061C35.3623 28.055 35.3666 28.1039 35.3666 28.1528V27.9317L51.9389 44.419C60.9299 44.3319 68.1945 37.0183 68.1945 28.0082C68.1945 27.9785 68.1945 27.9487 68.1924 27.9211L68.2817 28.0082V15.1245L68.2796 15.1224ZM60.6705 27.9763C60.6705 27.9891 60.6705 28.0019 60.6705 28.0146C60.6705 32.8194 56.7756 36.7164 51.9687 36.7164C51.367 36.7164 50.7781 36.6548 50.2105 36.5379V32.1816C50.2105 31.1548 49.3792 30.3235 48.3523 30.3235H43.5794C43.3774 29.5879 43.2669 28.814 43.2669 28.0146C43.2669 23.2098 47.1617 19.3128 51.9687 19.3128C52.1707 19.3128 52.3705 19.3213 52.5704 19.3362H58.8124C59.8392 19.3362 60.6705 20.1675 60.6705 21.1943V27.9742V27.9763Z"
          fill="#57CB62"
        />
        <path
          d="M43.3073 36.5229H35.3708V35.849H35.3644H35.3623V54.1052H43.3073V44.4211V42.0698V36.5229Z"
          fill="#57CB62"
        />
        <path
          d="M51.9386 44.4191L35.3662 27.9318V35.8491H35.3705V36.523H43.309V44.4212H51.9428H51.9407L51.9386 44.4191ZM43.3069 35.9362L43.2197 35.8491H43.3069V35.9362Z"
          fill="#009175"
        />
      </g>
      <defs>
        <clipPath id="clip0_1056_17422">
          <rect width="180" height="54.1052" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SproutLogo;
