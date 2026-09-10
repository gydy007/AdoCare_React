import useScrollReveal from '../hooks/useScrollReveal'

/**
 * variant: 'up' | 'left' | 'right' | 'bottom' | 'fade'
 * Renders `as` (default div) with the matching reveal-* class from index.css.
 */
export default function Reveal({ as: Tag = 'div', variant = 'up', className = '', children, ...props }) {
  const ref = useScrollReveal()
  return (
    <Tag ref={ref} className={`reveal-${variant} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
