function Container({
    children,
    className = '',
    props
}) {
 

    return (
        <div
            className={`p-0
                position-relative
                overflow-hidden
                ${className}`
            }
            {...props}
        >
            {children}
        </div>
    );
}


function SubContainer({
    children,
    className = '',
    props }) {
    return (
        <div
            className={`
           w-100
           mx-auto
           global-padding
           position-relative
           max-w-1280
           ${className}

            `}
            {...props}
        >
            {children}
        </div>
    )
}







export { Container, SubContainer }