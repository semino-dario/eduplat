"use client"

import { useState } from "react"

export default function Title () {

const [titulo, setTitulo ] = useState("")

    return(
        <div className="w-[60vw] min-h-[75px] p-2 border-solid border-black border-2 rounded-lg">
       <input className="text-[20px] w-[100%]" placeholder=" Ingrese tíulo aquí..." type="text" value={titulo} onChange={e => setTitulo(e.target.value)} />
       </div>
    )
}