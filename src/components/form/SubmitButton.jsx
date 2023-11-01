import styles from "./SubmitButton.module.css"



function SubmitButton({text, icon}){
    return(
        <div>
            <button className={styles.btn}>{text}{icon}</button>
        </div>
    )
}

export default SubmitButton