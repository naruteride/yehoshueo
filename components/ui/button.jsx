/**
 * @typedef {Object} ButtonProps
 * @property {React.ReactNode} children
 * @property {'primary' | 'secondary'} [variant]
 * @property {string} [className]
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement>} [props]
 */

/**
 * @param {ButtonProps} props
 * @returns {JSX.Element}
 */
export default function Button({ children, variant = 'primary', className = '', ...props }) {
    const baseStyle = 'px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-offset-2'
    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500'
    }

    return (
        <button
            className={`${baseStyle} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}