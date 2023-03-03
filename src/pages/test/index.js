// import Image from "next/image";
// import { useEffect } from "react";

// export default function Index(){



//     useEffect(() => {
//         const updatePosition = () => {
//             const img1 = document.getElementById('image1')
//             img1.style.height = `max(100vh - ${window.pageYOffset}px, 0vh)`
//             const img2 = document.getElementById('image2')
//             img2.style.height = `min(200vh - ${window.pageYOffset}px, 100vh)`
//         }
//         window.addEventListener("scroll", updatePosition);
//         updatePosition();
//         return () => window.removeEventListener("scroll", updatePosition);
//       }, []);

//     return (
//         <div>

//             <div 
//                 id='image3'
//                 style={{
//                     position:'fixed',
//                     top:'0px',
//                     height:'100vh',
//                     width:'100vw',
//                     overflow:'hidden',
//                     zIndex:1,
//                 }}
//             >
//                 <img
//                     src={'/new choc choc 2.png'}
//                     style={{
//                         height:'100vh',
//                         width:'100vw',
//                         objectFit:'cover',
//                         zIndex:1,
//                         filter: "saturate(120%)",
//                     }}
//                 />
    
//             </div>

//             <div 
//                 id='image2'
//                 style={{
//                     position:'fixed',
//                     top:'0px',
//                     height:'100vh',
//                     width:'100vw',
//                     overflow:'hidden',
//                     zIndex:2,
//                 }}
//             >
//                 <img
//                     src={'/new choc foil 4.png'}
//                     style={{
//                         height:'100vh',
//                         width:'100vw',
//                         objectFit:'cover',
//                         zIndex:2,
//                         filter: "saturate(120%)",
//                     }}
//                 />
    
//             </div>

//             <div 
//                 id='image1'
//                 style={{
//                     position:'fixed',
//                     top:'0px',
//                     height:'100vh',
//                     width:'100vw',
//                     overflow:'hidden',
//                     zIndex:3,
//                 }}
//             >
//                 <img
//                     src={'/new choc label.png'}
//                     style={{
//                         height:'100vh',
//                         width:'100vw',
//                         objectFit:'cover',
//                         zIndex:3,
//                         filter: "saturate(120%)",
//                     }}
//                 />
    
//             </div>
            
//             <div>
//                 {new Array(100).fill('fake content').map(t=>{
//                     return <p
//                         style={{
//                             position: 'relative',
//                             zIndex:100,
//                             fontSize: '24px',
//                         }}
//                     >{t}</p>
//                 })}
//             </div>
//         </div>
//     )
// }