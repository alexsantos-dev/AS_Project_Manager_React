import styles from "./TextArea.module.css";

function MessageInput({text, name, placeholder, value, handleOnChange}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <textarea
                required 
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
                rows={5}
                cols={50}
            />
        </div>
    );
}

export default MessageInput;