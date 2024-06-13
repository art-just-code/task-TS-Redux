import Styles from "./Header.module.css";

const name: string = "Михаил";

export default function Header() {
    return (
        <header className={Styles["header"]}>
            <p className={Styles["header__title"]}>
                Добро пожаловать, <span>{name}</span>!
            </p>
            <div className={Styles["header__chat"]}>
                <img src="/images/chat-icon.svg" />
                <div className={Styles["header__avatar"]}>
                    <img src="/images/avatar.svg" />
                    <img src="/images/arrow.svg" />
                </div>
            </div>
        </header>
    );
}
