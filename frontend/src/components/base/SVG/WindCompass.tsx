import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const WindCompass = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="122"
      height="136"
      fill="none"
      viewBox="0 0 122 136"
    >
      <path
        fill="#7C7C81"
        d="M68.004 4.818V15h-1.859l-4.43-6.408h-.074V15h-2.153V4.818h1.89l4.394 6.404h.09V4.818h2.142zM65.254 128.198c-.04-.401-.21-.713-.512-.935-.302-.222-.711-.333-1.228-.333-.351 0-.648.05-.89.149-.242.096-.428.23-.557.403a.968.968 0 00-.189.586.84.84 0 00.115.478c.086.136.203.253.353.353.149.096.321.18.517.253.195.07.404.129.626.179l.915.219c.444.099.852.232 1.223.398.371.165.693.369.964.611.272.242.483.527.632.855.152.328.23.705.234 1.129-.004.623-.163 1.163-.478 1.621-.311.454-.762.807-1.352 1.058-.587.249-1.294.373-2.123.373-.822 0-1.538-.126-2.148-.377-.606-.252-1.08-.625-1.422-1.119-.338-.497-.515-1.112-.531-1.845h2.083c.023.342.12.627.293.856.176.225.41.396.7.512.296.112.629.169 1 .169.365 0 .681-.053.95-.159.272-.106.482-.254.631-.443.15-.189.224-.406.224-.651a.847.847 0 00-.204-.577c-.132-.156-.328-.288-.587-.398a6.062 6.062 0 00-.94-.298l-1.108-.278c-.858-.209-1.536-.536-2.033-.98-.497-.444-.744-1.042-.741-1.794-.003-.617.16-1.156.492-1.616.335-.461.794-.821 1.377-1.079.584-.259 1.246-.388 1.989-.388.756 0 1.415.129 1.979.388.566.258 1.007.618 1.322 1.079.315.46.477.994.487 1.601h-2.063zM3.695 77.893L.782 67.71h2.351l1.685 7.074h.085l1.86-7.074h2.013l1.854 7.09h.09l1.685-7.09h2.352l-2.914 10.182H9.745l-1.939-6.657h-.08l-1.933 6.657H3.695zM115.057 77.893V67.71h6.861v1.775h-4.708v2.426h4.355v1.775h-4.355v2.43h4.728v1.776h-6.881z"
      ></path>
      <path
        stroke="#7C7C81"
        strokeDasharray="1 6"
        strokeWidth="5"
        d="M111.383 63.105c.24 1.96.373 3.955.392 5.979l-2.5.023c.002.16.002.319.002.478 0 .16 0 .32-.002.479l2.5.023a53.287 53.287 0 01-.392 5.979l-2.481-.304c-.039.314-.08.628-.124.94l2.475.352c-.284 1.999-.679 3.96-1.179 5.874l-2.419-.632c-.08.307-.164.613-.249.917l2.406.679a51.566 51.566 0 01-1.958 5.66l-2.311-.953c-.121.294-.245.585-.371.876l2.292.998a51.217 51.217 0 01-2.709 5.341l-2.16-1.26c-.159.274-.322.546-.487.816l2.134 1.303a50.168 50.168 0 01-3.418 4.918l-1.964-1.547c-.196.249-.394.496-.595.74l1.933 1.586a49.277 49.277 0 01-4.071 4.392l-1.727-1.807c-.229.218-.46.434-.693.648l1.69 1.842a48.2 48.2 0 01-4.657 3.767l-1.448-2.037c-.257.182-.516.362-.777.54l1.405 2.067a46.986 46.986 0 01-5.157 3.046l-1.131-2.229c-.281.142-.563.282-.847.418l1.083 2.253a45.979 45.979 0 01-5.556 2.239l-.781-2.375c-.299.098-.598.193-.9.284l.73 2.392a45.387 45.387 0 01-5.834 1.364l-.407-2.467c-.31.051-.62.099-.931.144l.353 2.475a45.79 45.79 0 01-5.972.455l-.028-2.5a37.496 37.496 0 01-.949 0l-.027 2.5a45.792 45.792 0 01-5.972-.455l.353-2.475a47.391 47.391 0 01-.931-.144l-.408 2.467a45.39 45.39 0 01-5.833-1.364l.729-2.392c-.301-.091-.6-.186-.9-.284l-.78 2.375a45.979 45.979 0 01-5.556-2.239l1.083-2.253a44.042 44.042 0 01-.847-.418l-1.131 2.229a46.995 46.995 0 01-5.158-3.046l1.406-2.067c-.261-.178-.52-.358-.778-.54l-1.448 2.037a48.225 48.225 0 01-4.656-3.767l1.69-1.842c-.234-.214-.465-.43-.693-.648l-1.727 1.807a49.277 49.277 0 01-4.071-4.392l1.932-1.586c-.2-.244-.399-.491-.595-.74l-1.964 1.547a50.392 50.392 0 01-3.418-4.918l2.134-1.303c-.165-.27-.327-.542-.487-.816l-2.159 1.26a51.004 51.004 0 01-2.71-5.341l2.293-.998a48.74 48.74 0 01-.371-.876l-2.311.954a51.532 51.532 0 01-1.958-5.661l2.406-.679c-.086-.304-.169-.61-.25-.917l-2.418.632a52.197 52.197 0 01-1.18-5.874l2.476-.351a49.975 49.975 0 01-.124-.941l-2.482.304a53.24 53.24 0 01-.391-5.979l2.5-.023a50.82 50.82 0 010-.957l-2.5-.023c.019-2.024.151-4.02.391-5.979l2.482.304c.038-.315.08-.628.124-.941l-2.475-.351a52.2 52.2 0 011.18-5.874l2.418.632c.08-.307.163-.613.25-.917l-2.407-.68a51.525 51.525 0 011.958-5.66l2.31.953c.122-.293.246-.585.372-.875l-2.292-.998a51.005 51.005 0 012.709-5.342l2.16 1.26c.16-.273.321-.545.486-.816l-2.134-1.302a50.33 50.33 0 013.418-4.918l1.965 1.547c.195-.25.394-.496.594-.74L27.938 36.8a49.408 49.408 0 014.071-4.393l1.727 1.808c.229-.218.46-.434.692-.648l-1.69-1.842a48.271 48.271 0 014.657-3.768l1.448 2.038c.258-.183.517-.363.778-.54l-1.406-2.068a47.025 47.025 0 015.158-3.046l1.13 2.23c.282-.142.564-.282.848-.418L44.268 23.9a45.959 45.959 0 015.556-2.238l.78 2.375c.3-.098.599-.193.9-.285l-.729-2.391a45.408 45.408 0 015.833-1.364l.408 2.466c.31-.05.62-.099.931-.143l-.353-2.475a45.757 45.757 0 015.972-.456l.027 2.5a44.111 44.111 0 01.95 0l.026-2.5c2.024.022 4.017.177 5.973.456l-.353 2.475c.311.044.622.092.931.143l.407-2.466c1.988.328 3.935.786 5.833 1.364l-.728 2.391c.3.092.6.187.899.285l.78-2.375a45.959 45.959 0 015.557 2.238l-1.083 2.254c.284.136.566.276.847.418l1.13-2.23a47.016 47.016 0 015.158 3.046l-1.405 2.068c.26.177.52.357.777.54l1.448-2.038a48.26 48.26 0 014.657 3.767l-1.69 1.843c.233.214.464.43.693.648l1.727-1.808a49.408 49.408 0 014.071 4.393l-1.933 1.585c.2.245.4.492.595.74l1.964-1.546a50.089 50.089 0 013.418 4.918l-2.134 1.302c.165.27.328.543.487.817l2.16-1.26c1 1.715 1.906 3.498 2.709 5.34l-2.292.999c.126.29.25.582.371.875l2.311-.953a51.568 51.568 0 011.958 5.66l-2.406.68c.085.304.169.61.249.917l2.419-.633c.5 1.915.895 3.876 1.179 5.875l-2.475.35c.044.314.085.627.124.942l2.481-.304z"
      ></path>
      <ellipse
        cx="64.069"
        cy="69.588"
        fill="#F0F5D2"
        rx="33.078"
        ry="34.804"
      ></ellipse>
      <path
        fill="#5B5B60"
        d="M64.068 18.717l2.204 4.016h-4.408l2.204-4.016z"
      ></path>
    </svg>
  );
};

export default WindCompass;
