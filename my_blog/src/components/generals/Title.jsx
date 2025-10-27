function Title({ children, variant = "primary", ...props }) {
    const baseStyles = "font-roboto text-white font-normal"

    const variants = {
        primary: "text-[21px] leading-[21px] my-7"
    }

    return (
        <h1
            className={`${baseStyles} ${variants[variant]}`}
            { ...props }
            >
            {children}
        </h1>
    )
}

export default Title
