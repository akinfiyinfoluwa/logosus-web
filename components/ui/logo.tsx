import Image from 'next/image'

interface LogoProps {
  src: string
  alt: string
}

export function Logo({ src, alt }: LogoProps) {
  return (
    <div className="w-40 h-20 mx-6 flex items-center justify-center">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={160}
        height={80}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  )
}

