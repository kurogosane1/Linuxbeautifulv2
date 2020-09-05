import React, { createContext, useState } from "react";

export const LaptopContext = createContext();

export default function LaptopStore(props) {
  const [Processor, setProcessor] = useState([
    { id: "pro-1", name: "Core i7 8 core 3.0 ghz", cost: 200 },
    { id: "pro-2", name: "Core i9 10 core 2.7ghz", cost: 320 },
    { id: "pro-3", name: "Core i7 10 core 3.2 ghz", cost: 360 },
    { id: "pro-2", name: "Core i9 14 core 3.0ghz", cost: 500 },
  ]);
  const [RAM, setRAM] = useState([
    { id: "ram-1", name: "16gb 2333Mhz RAM", cost: 100 },
    { id: "ram-2", name: "32gb 2333Mhz RAM", cost: 260 },
    { id: "ram-3", name: "64gb 2333Mhz RAM", cost: 320 },
    { id: "ram-4", name: "128gb 2333Mhz RAM", cost: 400 },
  ]);
  const [GPU, setGPU] = useState([
    {
      id: "gpu-1",
      name: "Nvidia RTX 3050 with 6GB of GDDR8 memory",
      cost: 250,
    },
    {
      id: "gpu-2",
      name: "Nvidia RTX 3060 with 8GB of GDDR8 memory",
      cost: 300,
    },
    {
      id: "gpu-3",
      name: "Nvidia RTX 3060 Super with 8GB of GDDR8 memory",
      cost: 400,
    },
    {
      id: "gpu-4",
      name: "Nvidia RTX 3070 with 8GB of GDDR8 memory",
      cost: 700,
    },
    {
      id: "gpu-5",
      name: "Nvidia RTX 3080 with 8GB of GDDR8 memory",
      cost: 850,
    },
  ]);
  const [storage, setStorage] = useState([
    { id: "st-01", name: "512GB SSD", cost: 110 },
    { id: "st-02", name: "1TB SSD", cost: 200 },
    { id: "st-03", name: "2TB SSD", cost: 350 },
    { id: "st-04", name: "4TB SSD", cost: 500 },
  ]);

  return (
    <LaptopContext.Provider
      value={{
        Processor,
        RAM,
        GPU,
        storage,
        setProcessor,
        setRAM,
        setGPU,
        setStorage,
      }}
    >
      {props.children}
    </LaptopContext.Provider>
  );
}
