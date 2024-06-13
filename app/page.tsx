import Timer from "./components/Timer/Timer";
import Styles from "./page.module.css";

export default function Home() {
    const data = {
        mental: 32,
        programming: 0,
        reading: 4,
    };

    return (
        <main className={Styles["main"]}>
            <div className={Styles["home__grid"]}>
                <div className={Styles["home__banner"]}>
                    <img
                        src="/images/dog-with-gifts.png"
                        alt="Картинка собаки с подарками"
                    />
                    <h3>До 31 декабря любой курс со скидкой 20%</h3>
                    <p>
                        До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на
                        любой курс!
                    </p>
                </div>
                <div className={Styles["home__timer"]}>
                    <h3>Следующее занятие начнется через:</h3>
                    <Timer />
                    <button>Button</button>
                </div>
                <div className={Styles["home__homework"]}>
                    <p>Домашние задания</p>
                    <img
                        src="/icons/icon-homework.svg"
                        alt="Иконка домашняя работа"
                    />
                </div>
                <div className={Styles["home__report"]}>
                    <h4>Отчеты от учителей</h4>
                    <img
                        src="/icons/icon-report.svg"
                        alt="Иконка отчеты"
                    />
                </div>
                <div className={Styles["home__balance"]}>
                    <div className={Styles["table"]}>
                        <h4>Баланс занятий</h4>
                        <div className={`${Styles["table__elem"]} ${Styles["balance__table_elem"]}`}>
                            <p>Ментальная арифметика</p>
                            <span>{data.mental}</span>
                        </div>
                        <div className={`${Styles["table__elem"]} ${Styles["balance__table_elem"]}`}>
                            <p>Программирование</p>
                            <span>{data.programming}</span>
                        </div>
                        <div className={`${Styles["table__elem"]} ${Styles["balance__table_elem"]}`}>
                            <p>Скорочтение</p>
                            <span>{data.reading}</span>
                        </div>
                    </div>
                    <button className={`table__button ${Styles["home__table_button"]}`}>Button</button>
                </div>
                <div className={Styles["home__schedule"]}>
                    <div className={Styles["table"]}>
                        <h4>Ближайшие уроки</h4>
                        <div className={`${Styles["table__elem"]} ${Styles["schedule__table_elem"]}`}>
                            <div className={Styles["schedule__date"]}>
                                <p>1</p>
                                <p>мая</p>
                            </div>
                            <p>Ментальная Арифметика</p>
                            <div className={Styles["schedule__teacher"]}>
                                <p>14:00-14:25</p>
                                <div>
                                    <img
                                        src="/icons/user.svg"
                                        alt=""
                                    />
                                    <p>Белкина Инна</p>
                                </div>
                            </div>
                            <div className={Styles["schedule__buttons"]}>
                                <button disabled={true}>Button</button>
                                <button>Button</button>
                            </div>
                        </div>
                        <div className={`${Styles["table__elem"]} ${Styles["schedule__table_elem"]}`}>
                            <div className={Styles["schedule__date"]}>
                                <p>30</p>
                                <p>октября</p>
                            </div>
                            <p>Программирование</p>
                            <div className={Styles["schedule__teacher"]}>
                                <p>11:00-11:11</p>
                                <div>
                                    <img
                                        src="/icons/user.svg"
                                        alt=""
                                    />
                                    <p>Животновская Оксана</p>
                                </div>
                            </div>
                            <div className={Styles["schedule__buttons"]}>
                                <button>Button</button>
                                <button>Button</button>
                            </div>
                        </div>
                        <div className={`${Styles["table__elem"]} ${Styles["schedule__table_elem"]}`}>
                            <div className={Styles["schedule__date"]}>
                                <p>16</p>
                                <p>ноября</p>
                            </div>
                            <p>Скорочтение</p>
                            <div className={Styles["schedule__teacher"]}>
                                <p>09:00-09:45</p>
                                <div>
                                    <img
                                        src="/icons/user.svg"
                                        alt=""
                                    />
                                    <p>Мин Елена</p>
                                </div>
                            </div>
                            <div className={Styles["schedule__buttons"]}>
                                <button>Button</button>
                                <button>Button</button>
                            </div>
                        </div>
                    </div>
                    <button className={`table__button ${Styles["home__table_button"]}`}>Button</button>
                </div>
            </div>
        </main>
    );
}
