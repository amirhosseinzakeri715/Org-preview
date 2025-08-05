// "use client"

// import type React from "react"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { useState } from "react"

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//   })

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//   }

//   return (
//     <section className="bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 py-20 px-4">
//       <div className="max-w-md mx-auto">
//         <div className="bg-white rounded-lg shadow-lg p-8">
//           <div className="text-center mb-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Us</h2>
//             <p className="text-gray-600 text-sm">We will get back to you asap!</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <Input
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//               <div>
//                 <Input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             <div>
//               <Input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             <div>
//               <Input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             <Button
//               type="submit"
//               className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 px-6 rounded-md font-medium"
//             >
//               Send
//             </Button>
//           </form>

//           <p className="text-center text-xs text-gray-500 mt-6">You may also call us at 333-33-33</p>
//         </div>
//       </div>
//     </section>
//   )
// }



// import { MapPin, Phone, Mail } from "lucide-react"

// export default function ContactSection() {
//   return (
//     <section className="bg-orange-50 py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <p className="text-teal-600 text-sm font-medium mb-4">How can we help you?</p>

//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact us</h2>

//             <p className="text-lg text-gray-700 mb-12 leading-relaxed">
//               {"We're here to help and answer any questions you"}
//               <br />
//               might have. We look forward to hearing from you!
//             </p>

//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
//                 <span className="text-gray-700">Søren Frichs Vej 42B, 8230 Åbyhøj</span>
//               </div>

//               <div className="flex items-center gap-4">
//                 <Phone className="w-5 h-5 text-gray-600 flex-shrink-0" />
//                 <span className="text-gray-700">+45 71 99 77 07</span>
//               </div>

//               <div className="flex items-center gap-4">
//                 <Mail className="w-5 h-5 text-gray-600 flex-shrink-0" />
//                 <a href="mailto:mail@sleeknote.com" className="text-blue-500 hover:text-blue-600">
//                   mail@sleeknote.com
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-center lg:justify-end">
//             <div className="w-80 h-80 relative">
//               <svg viewBox="0 0 320 320" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 {/* Person illustration */}
//                 <g stroke="#000" strokeWidth="2" fill="none">
//                   {/* Head */}
//                   <circle cx="160" cy="80" r="25" fill="#fef3e2" />

//                   {/* Cap */}
//                   <path d="M135 65 Q160 55 185 65 L185 75 Q160 65 135 75 Z" fill="#f3f4f6" />
//                   <circle cx="160" cy="60" r="3" fill="#fbbf24" />

//                   {/* Face */}
//                   <circle cx="152" cy="78" r="2" fill="#fbbf24" />
//                   <circle cx="168" cy="78" r="2" fill="#fbbf24" />
//                   <path d="M155 85 Q160 88 165 85" stroke="#000" strokeWidth="1.5" />

//                   {/* Body */}
//                   <ellipse cx="160" cy="140" rx="35" ry="45" fill="#fef3e2" />

//                   {/* Shirt pattern */}
//                   <g stroke="#fbbf24" strokeWidth="1">
//                     <path d="M140 120 L145 125 M150 115 L155 120 M160 120 L165 125 M170 115 L175 120" />
//                     <path d="M135 135 L140 140 M145 130 L150 135 M155 135 L160 140 M165 130 L170 135 M175 135 L180 140" />
//                     <path d="M140 150 L145 155 M150 145 L155 150 M160 150 L165 155 M170 145 L175 150" />
//                   </g>

//                   {/* Arms */}
//                   <path d="M125 130 Q110 140 115 160 Q120 170 140 165" stroke="#000" strokeWidth="2" fill="#fef3e2" />
//                   <path d="M195 130 Q210 140 205 160 Q200 170 180 165" stroke="#000" strokeWidth="2" fill="#fef3e2" />
//                 </g>

//                 {/* Speech bubble */}
//                 <g>
//                   <rect x="220" y="100" width="80" height="40" rx="8" fill="white" stroke="#000" strokeWidth="2" />
//                   <path d="M220 125 L210 135 L225 130 Z" fill="white" stroke="#000" strokeWidth="2" />
//                   <text x="260" y="125" textAnchor="middle" className="text-sm font-bold" fill="#000">
//                     HELLO
//                   </text>
//                 </g>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




// import { Button } from "@/components/ui/button"
// import Image from "next/image"

// export default function HeroSection() {
//   return (
//     <section className="bg-gray-100 py-24 px-4">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//           Try Sleeknote on Your Site <span className="inline-block">👋</span>
//         </h1>

//         <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
//           Start a no-commitment 14-day free trial and enjoy all Sleeknote
//           <br />
//           features on your website. (No credit card needed.)
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-base font-medium rounded-md">
//             Start your free trial
//           </Button>

//           <Button
//             variant="outline"
//             className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 px-6 py-3 text-base font-medium rounded-md flex items-center gap-3"
//           >
//             <div className="w-8 h-8 rounded-full overflow-hidden">
//               <Image
//                 src="/placeholder.svg?height=32&width=32"
//                 alt="Sofie"
//                 width={32}
//                 height={32}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             Book a demo with Sofie
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }
