"use client";

import { Card, Select, SelectItem, Slider } from "@heroui/react";

import Canvas from "@/components/Canvas";
import { useState, useRef } from "react";

const julia = [
  { key: " −0.4 + 0.6i", value: [-0.4, 0.6] },
  { key: " 0.285 + 0.01i", value: [0.285, 0.01] },
  { key: " −0.835 − 0.2321i", value: [-0.835, -0.2321] },
  { key: " −0.70176 − 0.3842i", value: [-0.70176, -0.3842] },
  { key: " −0.7269 + 0.1889i", value: [-0.7269, 0.1889] },
  { key: " 0.4 + 0.4i", value: [0.4, 0.4] },
  { key: " −0.8 + 0.156i", value: [-0.8, 0.156] },
  { key: " 0.8i", value: [0, 0.8] },
];

const fractals = [
  { key: "Mandelbrot", label: "Mandelbrot Set" },
  { key: "Julia", label: "Julia Set" },
  { key: "Newton's", label: "Newton's Fractal" },
];

export default function Home() {
  const [scale, setScale] = useState(1.3);
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [fractal, setFractal] = useState<any>("Julia");
  const [Julia, setJulia] = useState<any>(julia[1]);
  const RenderControl = () => {
    return (
      <Card className="my-6">
        <div className="flex py-3 justify-evenly items-center">
          <Select
            size="sm"
            className="w-[200px]"
            label="Fractal"
            selectedKeys={[fractal]}
            defaultSelectedKeys={[fractal]}
            onSelectionChange={(e) => {
              setFractal(e.anchorKey);
            }}
          >
            {fractals.map((fr) => (
              <SelectItem key={fr.key}>{fr.label}</SelectItem>
            ))}
          </Select>
          {fractal == "Julia" && (
            <Select
              size="sm"
              className="w-[200px]"
              label="c"
              selectedKeys={[Julia.key]}
              defaultSelectedKeys={[Julia.key]}
              onSelectionChange={(e) => {
                setJulia(julia.find((item) => item.key == e.anchorKey));
              }}
            >
              {julia.map((fr) => (
                <SelectItem key={fr.key}>{fr.key}</SelectItem>
              ))}
            </Select>
          )}
        </div>
      </Card>
    );
  };
  return (
    <>
      <RenderControl />
      <Canvas
        scale={scale}
        setScale={setScale}
        xOffset={xOffset}
        setXOffset={setXOffset}
        yOffset={yOffset}
        setYOffset={setYOffset}
        c={Julia.value}
        fractal={fractal}
      />
    </>
  );
}
