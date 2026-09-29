// Troque por <img src={seuSvg} alt="..." /> quando tiver o asset
export default function Placeholder({ label, width = '100%', height = 120, className = '' }) {
  return (
    <div className={`placeholder ${className}`} style={{ width, height }}>
      {label}
    </div>
  )
}
