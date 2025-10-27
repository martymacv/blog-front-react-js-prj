function ActionButton({ children, variant = "primary", ...props }) {
    const baseStyles = "w-fit h-fit py-2 px-4 rounded-md font-roboto text-[12px] font-normal"

    const variants = {
        primary: "bg-[#3137c9ff] text-[#ffffffff]"
    }

    return (
        <button 
            className={`${baseStyles} ${variants[variant]}`}
            type="submit"
            { ...props }>
                {children}
        </button>
    )
}

export default ActionButton
