
function ButtonInlineStyles(){

    const inlineStyles = {
            backgroundColor : "blue",
            color: "White",
            borderRadius: "5px",
            border: "none",
            padding: "10px 20px",
            margin: "0 5px",
            cursor: "pointer"
    }

    return(
        <>
            <button
                style={inlineStyles}>
                Inline Style
            </button>

        </>
    );
}

export default ButtonInlineStyles