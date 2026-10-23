import { useState } from 'react'

// Shows the photo. If the file is missing, shows a styled placeholder (or `fallback`).
export default function Photo({ src, alt, className = '', fallback = null }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return fallback ?? (
      <div className={'ph ' + className} role="img" aria-label={alt}><span>{alt}</span></div>
    )
  }
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
}