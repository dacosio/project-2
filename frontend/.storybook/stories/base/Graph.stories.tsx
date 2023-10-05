import React, { useEffect, useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Graph from "../../../src/components/base/Graph";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Graph> = {
  title: "Base/Graph",
  component: () => {
    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setWidth(Math.floor(entry.contentRect.width / 9));
        }
      });

      if (divRef.current) {
        resizeObserver.observe(divRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    const [width, setWidth] = useState<number>(100);
    const height = 100;

    const humidities = [50, 65, 78, 72, 70, 56, 60, 66, 80, 50];
    interface Point {
      start: number;
      end: number;
    }
    const points: Point[] = [];
    for (let i = 0; i < humidities.length - 1; i++) {
      points.push({ start: humidities[i], end: humidities[i + 1] });
    }

    return (
      <>
        <div
          ref={divRef}
          style={{
            display: "flex",
            justifyContent: "center",
            border: "1px solid #E5E9F5",
          }}
        >
          {points.map((point, index) => (
            <Graph
              width={width}
              height={height}
              start={point.start}
              end={point.end}
              key={index}
            />
          ))}
        </div>
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
