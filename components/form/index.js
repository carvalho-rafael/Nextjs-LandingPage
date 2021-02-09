import Style from './style.module.scss'

export default function Form() {
    return (
        <div className={Style.formContainer}>
            <div className={Style.formHeader}>
                <p>Contact Us!</p>
            </div>
            <form>
                <div className={Style.formGroup}>
                    <label for='name'>Name</label>
                    <input id='name' type='text' ></input>
                </div>
                <div className={Style.formGroup}>
                    <label for='email'>Email</label>
                    <input id='email' type='email' ></input>
                </div>
                <div className={Style.formGroup}>
                    <label for='message'>Message</label>
                    <textarea id='message' type='textarea' rows='8' ></textarea>
                </div>
            </form>
        </div>
    )
}