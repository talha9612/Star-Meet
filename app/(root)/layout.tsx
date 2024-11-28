
import StreamVideoProvider from "@/Providers/StreamClientProvider"
import React, {ReactNode} from "react"
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