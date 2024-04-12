import { cn } from "@/lib/shadcn-ui/utils";
import React from "react";

type StarProps = {
  colorArray: [number, number][];
  fillId: string;
};

export default function Star(props: StarProps) {
  const { colorArray, fillId } = props;

  return (
    <span className={cn(`inline-block w-5 text-yellow-500`)}>
      <svg viewBox="0 0 576 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M316.901 18C311.601 7 300.401 0 288.101 0C275.801 0 264.701 7 259.301 18L195.001 150.3L51.401 171.5C39.401 173.3 29.401 181.7 25.701 193.2C22.001 204.7 25.001 217.4 33.601 225.9L137.801 329L113.201 474.7C111.201 486.7 116.201 498.9 126.101 506C136.001 513.1 149.101 514 159.901 508.3L288.201 439.8L416.501 508.3C427.301 514 440.401 513.2 450.301 506C460.201 498.8 465.201 486.7 463.201 474.7L438.501 329L542.701 225.9C551.301 217.4 554.401 204.7 550.601 193.2C546.801 181.7 536.901 173.3 524.901 171.5L381.201 150.3L316.901 18Z"
          fill="#787878"
        />
        <path
          d="M316.901 18C311.601 7 300.401 0 288.101 0C275.801 0 264.701 7 259.301 18L195.001 150.3L51.401 171.5C39.401 173.3 29.401 181.7 25.701 193.2C22.001 204.7 25.001 217.4 33.601 225.9L137.801 329L113.201 474.7C111.201 486.7 116.201 498.9 126.101 506C136.001 513.1 149.101 514 159.901 508.3L288.201 439.8L416.501 508.3C427.301 514 440.401 513.2 450.301 506C460.201 498.8 465.201 486.7 463.201 474.7L438.501 329L542.701 225.9C551.301 217.4 554.401 204.7 550.601 193.2C546.801 181.7 536.901 173.3 524.901 171.5L381.201 150.3L316.901 18Z"
          fill={`url(#fill-id-${fillId})`}
        />
        <defs>
          <linearGradient
            id={`fill-id-${fillId}`}
            x1="24.1445"
            y1="256.029"
            x2="552.201"
            y2="256.029"
            gradientUnits="userSpaceOnUse"
          >
            {colorArray.map((eachArray, index) => {
              return (
                <stop
                  key={index}
                  offset={eachArray[0]}
                  stopOpacity={eachArray[1]}
                  stopColor="currentColor"
                />
              );
            })}
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
}
