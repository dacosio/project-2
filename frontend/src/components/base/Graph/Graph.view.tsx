import React, { useEffect, useRef } from "react";
import { GraphProps } from "./Graph.props";
import { Canvas } from "./Graph.style";
import { useTheme } from "../../../utils/Theme";

const Graph = (props: GraphProps): JSX.Element => {
  const { width, height, start, end } = props;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const theme = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext("2d");

      if (context) {
        context.lineWidth = 3;
        context.strokeStyle = theme.brand.accent;
        context.lineJoin = "round";
        context.lineCap = "round";

        let radius = 0;
        let x = 0;
        let y = (100 - start) * (height / 100);

        const points = [{ x: 0, y: y }];

        var angle = Math.PI / width;
        for (let i = 0; i <= width; i++) {
          x = i;
          y =
            height / 2 -
            (Math.abs(end - start) / 100) *
              (start < end ? -Math.cos(radius) : Math.cos(radius)) *
              (height / 2) +
            (100 - (50 + (end - start) / 2) - start) * (height / 100);
          radius += angle;

          points.push({ x: x, y: y });
        }

        context.beginPath();
        for (let i = 0; i < points.length; i += 10) {
          context.lineTo(points[i].x, points[i].y);
        }
        context.lineTo(
          points[points.length - 1].x,
          points[points.length - 1].y
        );
        context.stroke();
      }
    }
  }, [width, height, start, end]);

  return <Canvas ref={canvasRef} width={width} height={height} />;
};

export default React.memo(Graph);
