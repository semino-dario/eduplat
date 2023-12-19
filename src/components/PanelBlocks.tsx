"use client"

import Block from "@/components/Block";
import Title from "./Title";
import Divider from "./Divider";
import { animateScroll } from "react-scroll";


import { useRef, useState } from "react";
type ComponentType = "Block" | "Title";


 const PanelBlocks:React.FC = () => {

const [titulo, setTitulo ] = useState('')
const [components, setComponents] = useState<React.ReactNode[]>([])
useState<ComponentType>("Block");
const containerRef = useRef<HTMLDivElement>(null);

const scrollToBottom = () => {
    animateScroll.scrollToBottom();
  };

const addBlock = () => {
    const newBlock = <Block key={components.length} />;
    setComponents([...components, newBlock]);
    scrollToBottom()
    
  };

  const addTitle = () => {
    const newTitle = <Title key={components.length} />;
    setComponents([...components, newTitle]);
    scrollToBottom()
  };

const addDivider = () => {
    const newDivider = <Divider key={components.length} />
    setComponents([...components, newDivider])
    scrollToBottom()
}

  const eliminateComponent = (index:number) => {
    const updatedComponents = components.filter((_, i) => i !== index)
    setComponents(updatedComponents)
  }



  const moveBlock = (currentIndex: number, direction: "up" | "down") => {

    const newIndex =
      direction === "up" ? currentIndex - 1 : currentIndex + 1;
    if (newIndex >= 0 && newIndex < components.length) {
      const updatedBlocks = [...components];
      const temp = updatedBlocks[currentIndex];
      updatedBlocks[currentIndex] = updatedBlocks[newIndex];
      updatedBlocks[newIndex] = temp;
      setComponents(updatedBlocks);
    }
  };


  return(
    <div>
    <div className="flex flex-row " >
        <div className="flex flex-col fixed ml-[-100px] gap-2 mt-[160px]">
      <button className=" boder-solid border-2 border-black p-1 rounded-lg" onClick={addBlock}>bloque</button>
      <button className=" boder-solid border-2 border-black p-1 rounded-lg" onClick={addTitle}>título</button>
      <button className=" boder-solid border-2 border-black p-1 rounded-lg" onClick={addDivider}>separador</button>
      </div>
      <div className="w-[60vw] ">
        <textarea className="w-[100%] text-[30px]" placeholder=" Ingrese título principal aquí..." value={titulo} onChange={e => setTitulo(e.target.value)}/>
      </div>
      </div>
      <br />
    <div>
      {components.map( (block, index) => (
        <div key={index}>
          {block}
          <div className="flex flex-row gap-[10px]">
          <button onClick={() => {eliminateComponent(index)}}>eliminar</button>
          {components.length === 1 && index === 0 ?
          <></>
          :
          components.length > 1 && index === 0 ?
            <button onClick={() => moveBlock(index, "down")}>bajar</button>
            :
          index === components.length - 1
          ?
          <button onClick={() => moveBlock(index, "up")}>subir</button>
            :
            <div className="flex flex-row gap-2">
            <button onClick={() => moveBlock(index, "up")}>subir</button>
            <button onClick={() => moveBlock(index, "down")}>bajar</button>
            </div>

            }
            </div>
        </div>
      ))
}  </div>    
   </div>
  )
}

export default PanelBlocks