function Input({ variant = "primary", ...props }) {
    const baseStyles = 'font-roboto text-[#d2d2d2ff] text-[14px] font-normal w-full'
    const focusStyle = 'focus:border-[#107effff] focus:outline-none'
    const placeholderStyle = 'placeholder:text-[#ffffff37]'

    const variants = {
        primary: 'border-b-1 border-[#3f3f3fff] pb-1'
    }

    return (
        <>
        <input { ...props }
            className={`${baseStyles} ${focusStyle} ${placeholderStyle} ${variants[variant]}`}/>
        </>
    )
}

export default Input
