import LandingHeader from '@/components/ui/landingHeader'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="min-h-screen w-full bg-white relative">
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "#ffffff",
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
    />
    <div className="pt-6 fixed top-0 left-0 right-0 z-50">
        <LandingHeader />
    </div>
  </div>
  )
}

export default page