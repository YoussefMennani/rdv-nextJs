import Header from "@/components/Header";
import Image from "next/image";
import Rdv from "./rdv";




export default function Home() {
  return (
    <>
      <Header />
      <div className="w-9/12 m-auto p-5 bg-slate-500">


        <img

          src="/images/cabinet1.jpg" // Path to your image inside the public directory
          alt="Your Image Alt Text"
          // Specify the width of the image
          // Specify the height of the image
          className="m-auto w-full"
        />

        <div className="flex">
          <div className="bg-slate-300 p-5 rounded-md m-2 flex-1">
            <h1>HELLO</h1>
          </div>
          <div className="bg-slate-300 p-5 rounded-md flex-1  m-2">
            <h1>HELLO</h1>
          </div>

          <div className="bg-slate-300 p-5 rounded-md flex-1  m-2">
            <h1>HELLO</h1>
          </div>
        </div>

          <Rdv/>
    

      </div>
      
    </>
  )
}
