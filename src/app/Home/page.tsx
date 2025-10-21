import LandingHeader from '@/components/ui/landingHeader'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] relative">
    {/* Top Fade Grid Background */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, #e2e8f0 1px, transparent 1px),
          linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
        `,
        backgroundSize: "20px 30px",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      }}
    />
       {/* Your Content/Components */}
       <div className="pt-6 fixed top-0 left-0 right-0 z-50">
        <LandingHeader />
    </div>
  </div>
  )
}

export default page