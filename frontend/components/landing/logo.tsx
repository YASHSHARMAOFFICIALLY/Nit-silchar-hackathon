import Link from "next/link";
import Image from "next/image";
// export const Logo = () =>{
//     return (
//      <header className = "fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
//             <div className="container mx-auto px-4">
//                 <nav className="flex h-16 items-center justify-between">
//                     <Link href = "/" className="flex items-center space-x-1-gap-10">
//                     <div className="relative w-12 h-12">
                        
//                         </div>
//                         <span className="text-xl font-semibold tracking-tight">Yashhhh </span>

                    
//                     </Link>
//                 </nav>
                
//             </div>

//         </header>
//     )
    
// }

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-12 h-12">{/* Image here */}</div>
      <span className="text-xl font-semibold tracking-tight">Yashhhh</span>
    </Link>
  );
};