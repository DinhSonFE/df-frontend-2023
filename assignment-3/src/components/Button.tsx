import "../assets/styles/button.css";

interface TPropButton {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    title?: string;
    variant?: "btn-primary" | "btn-secondary";
    type: "button" | "submit" | "reset" | undefined;
}
function Button({ onClick, title, variant, type }: TPropButton) {
    return (
        <button type={type} onClick={onClick} className={`btn ${variant}`}>
            {title}
        </button>
    );
}

export default Button;
