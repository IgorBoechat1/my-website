
import Image from "../../node_modules/next/image";
import types from "../../node_modules/next/types";  
import { Navbar } from "./Navbar";

    export default function Layout({ children, fontFamily }: { children: React.ReactNode, fontFamily: string }) {
      return (
        <html lang="en">
              <head> 

                
           <link rel="stylesheet" href="/globals.css" />    
        </head>
          <body>
     
            {children}
          </body>
        </html>
      );
    }
    

