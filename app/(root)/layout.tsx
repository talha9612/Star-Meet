
import StreamVideoProvider from "@/Providers/StreamClientProvider"
import React, {ReactNode} from "react"
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Star Meet",
    description: "Created by Star Automation",
    icons:{
      icon:'/icons/star.svg'
    } 
  };
const Rootlayout =({children} : {children : ReactNode})=>{
    return (
        <main>
           <StreamVideoProvider>
           {children}
           </StreamVideoProvider>
        </main>
    )
}

export default Rootlayout