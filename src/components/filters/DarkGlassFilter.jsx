export default function GlassFilter({
  children,
  className = '',
  blur = 'xs',
  opacity = 'xlight'
}) {
  const blurClasses = {
    xs: "backdrop-blur-[2px]",
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg"
  }

  const opacityClasses = {
    xlight: "bg-black/20",
    light: "bg-black/30",
    medium: "bg-black/50",
    dark: "bg-black/70"
  }

  return (
    (<div
      className={`
        ${blurClasses[blur]}
        ${opacityClasses[opacity]}
        ${className}
      `}>
      {children}
    </div>)
  );
}