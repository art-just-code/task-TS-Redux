import Styles from "./Timer.module.css";

export default function Timer() {
    const days: number = new Date().getDate();
    const hours: number = new Date().getHours();
    const seconds: number = new Date().getSeconds();
    return (
        <div className={Styles["timer"]}>
            <p>
                <span>{days}</span>д
            </p>

            <p>
                <span>{hours}</span>ч
            </p>

            <p>
                <span>{seconds}</span>мин
            </p>
        </div>
    );
}
