"use client"

import { useState } from "react"

interface VideoComponentProps {
    htmlContent: string;
  }

export default function Block () {
  
const [image, setImage ] = useState(false)
const [text, setText] = useState(false)
const [video, setVideo] = useState(false)
const [select, setSelect] = useState(true)
const [PDF, setPDF ] = useState(true)
const [textContent, setTextContent] = useState("")
const [imageContent, setImageContent] = useState("")
const [videoContent, setVideoContent] = useState("")

const handleCancel = () => {
setImage(false)
setText(false)
setVideo(false)
setSelect(true)
setPDF(false)
setTextContent('')
setImageContent('')
setVideoContent('')
}

const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
}

const VideoComponent: React.FC<VideoComponentProps>  = ({ htmlContent }) => {
    // Utiliza dangerouslySetInnerHTML para renderizar HTML de manera segura
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
  };

  return (
   <form onSubmit={handleSubmit}  className="flex flex-col justify-center items-center">
    <div className="flex flex-col justify-center items-center w-[60vw] min-h-[300px] p-2 border-solid border-black border-2 rounded-lg">
    { select ?
    <>
      <div>
        <h1>Elija el tipo de contenido</h1>
      </div>
      <br /> <br />
       <div className="flex flex-row justify-between w-[50%]">
       <button onClick={()=> {setText(true), setSelect(false) }} >Texto</button> <button onClick={()=> {setImage(true), setSelect(false)}}>Imagen</button> <button onClick={()=> {setVideo(true), setSelect(false)}}>Video</button>
       <button onClick={()=> {setPDF(true), setSelect(false) }} >PDF</button> 

       </div>
       </>
      :
      image ?
      <div className="h-[80%] flex flex-col items-center justify-center">
        {
        imageContent !== '' ? 
            <img className="h-[80%]" src={imageContent} alt="" /> 
            :
    <input placeholder=" ingresar url de la imagen" className="border-solid border-black border-2 w-[400px]" type="text" value={imageContent} onChange={e => setImageContent(e.target.value)} />}
    </div>
    :
    text ?
    <textarea name="" value={textContent} onChange={e => setTextContent(e.target.value)} placeholder=" Ingresar texto aquí..." id="" cols={90} rows={10}></textarea>
    :
    PDF ?
    <div className="h-[80%] flex flex-col justify-center items-center">
    <input  type="file" />
    <br />
    </div>
    :
    video &&
    <div>
        {
            videoContent === "" ?
     <textarea name="" placeholder=" Ingresar video aquí..." id="" value={videoContent} onChange={e => setVideoContent(e.target.value)} cols={90} rows={10}></textarea>
    :
    <VideoComponent 
    htmlContent={videoContent}
    />
    }
     </div>
     }
     {
         !select &&
         <div> 
            {/* <button type="submit" >publicar</button>  */}
            <button onClick={() => {handleCancel()}}>cancelar</button> </div>       
     }
     <div></div>

    </div>
   </form>
  )
}

