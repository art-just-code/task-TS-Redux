"use client";

import Link from "next/link";
import Styles from "./Menu.module.css";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Menu() {
    const pathname = usePathname();
    return (
        <section className={Styles["menu"]}>
            {pathname === "/" ? (
                <h1 className={Styles["logo"]}>
                    <img
                        className={Styles["logo__image"]}
                        src="/images/logo.svg"
                        alt="Sirius Future"
                    />
                </h1>
            ) : (
                <Link
                    href="/"
                    className={Styles["logo"]}
                >
                    <img
                        className={Styles["logo__image"]}
                        src="/images/logo.svg"
                        alt="Логотип Sirius Future"
                    />
                </Link>
            )}
            <nav className={Styles["menu__list"]}>
                <li className={Styles["menu__item"]}>
                    <Link
                        href="/"
                        className={Styles["menu__link"]}
                    >
                        <svg
                            className={Styles["menu__icon"]}
                            width="24"
                            height="24"
                            viewBox="0 0 22 21"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0.569903 7.38558C0.230566 7.62311 0.14804 8.09076 0.385576 8.4301C0.623112 8.76943 1.09076 8.85196 1.4301 8.61442L0.569903 7.38558ZM11 1L11.4301 0.385576C11.1719 0.204808 10.8281 0.204808 10.5699 0.385576L11 1ZM20.5699 8.61442C20.9092 8.85196 21.3769 8.76943 21.6144 8.4301C21.852 8.09076 21.7694 7.62311 21.4301 7.38558L20.5699 8.61442ZM13.25 19C13.25 19.4142 13.5858 19.75 14 19.75C14.4142 19.75 14.75 19.4142 14.75 19H13.25ZM7.25 19C7.25 19.4142 7.58579 19.75 8 19.75C8.41421 19.75 8.75 19.4142 8.75 19H7.25ZM2.75 8V7.25H1.25V8H2.75ZM8 20.1427H8.75V18.6427H8V20.1427ZM20.75 8V7.25H19.25V8H20.75ZM14 18.6427H13.25V20.1427H14V18.6427ZM1.4301 8.61442L11.4301 1.61442L10.5699 0.385576L0.569903 7.38558L1.4301 8.61442ZM10.5699 1.61442L20.5699 8.61442L21.4301 7.38558L11.4301 0.385576L10.5699 1.61442ZM14.75 19V13H13.25V19H14.75ZM14.75 13C14.75 11.4808 13.5192 10.25 12 10.25V11.75C12.6908 11.75 13.25 12.3092 13.25 13H14.75ZM12 10.25H10V11.75H12V10.25ZM10 10.25C8.48079 10.25 7.25 11.4808 7.25 13H8.75C8.75 12.3092 9.30921 11.75 10 11.75V10.25ZM7.25 13V19H8.75V13H7.25ZM1.25 8V17.3919H2.75V8H1.25ZM1.25 17.3919C1.25 18.9112 2.48159 20.1427 4.00083 20.1427V18.6427C3.31002 18.6427 2.75 18.0827 2.75 17.3919H1.25ZM4.00083 20.1427H8V18.6427H4.00083V20.1427ZM19.25 8V17.3919H20.75V8H19.25ZM19.25 17.3919C19.25 18.0827 18.69 18.6427 17.9992 18.6427V20.1427C19.5184 20.1427 20.75 18.9112 20.75 17.3919H19.25ZM17.9992 18.6427H14V20.1427H17.9992V18.6427Z" />
                        </svg>
                        Главная
                    </Link>
                </li>
                <li className={Styles["menu__item"]}>
                    <Link
                        href="/schedule"
                        className={Styles["menu__link"]}
                    >
                        <svg
                            className={Styles["menu__icon"]}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#434b74"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 2V6"
                                stroke="#434B74"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M8 2V6"
                                stroke="#434B74"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M3 9H21"
                                stroke="#434B74"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M19 4H5C3.895 4 3 4.895 3 6V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V6C21 4.895 20.105 4 19 4Z"
                                stroke="#434B74"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M7.01316 12.7285C6.87516 12.7285 6.76316 12.8405 6.76416 12.9785C6.76416 13.1165 6.87616 13.2285 7.01416 13.2285C7.15216 13.2285 7.26416 13.1165 7.26416 12.9785C7.26416 12.8405 7.15216 12.7285 7.01316 12.7285"
                                stroke="#434B74"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M12.0132 12.7285C11.8752 12.7285 11.7632 12.8405 11.7642 12.9785C11.7642 13.1165 11.8762 13.2285 12.0142 13.2285C12.1522 13.2285 12.2642 13.1165 12.2642 12.9785C12.2642 12.8405 12.1522 12.7285 12.0132 12.7285"
                                stroke="#434B74"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M17.0132 12.7285C16.8752 12.7285 16.7632 12.8405 16.7642 12.9785C16.7642 13.1165 16.8762 13.2285 17.0142 13.2285C17.1522 13.2285 17.2642 13.1165 17.2642 12.9785C17.2642 12.8405 17.1522 12.7285 17.0132 12.7285"
                                stroke="#434B74"
                            />
                            <path
                                d="M7.01316 16.7285C6.87516 16.7285 6.76316 16.8405 6.76416 16.9785C6.76416 17.1165 6.87616 17.2285 7.01416 17.2285C7.15216 17.2285 7.26416 17.1165 7.26416 16.9785C7.26416 16.8405 7.15216 16.7285 7.01316 16.7285"
                                stroke="#434B74"
                            />
                            <path
                                d="M12.0132 16.7285C11.8752 16.7285 11.7632 16.8405 11.7642 16.9785C11.7642 17.1165 11.8762 17.2285 12.0142 17.2285C12.1522 17.2285 12.2642 17.1165 12.2642 16.9785C12.2642 16.8405 12.1522 16.7285 12.0132 16.7285"
                                stroke="#434B74"
                            />
                        </svg>
                        Расписание
                    </Link>
                </li>
                <li className={Styles["menu__item"]}>
                    <Link
                        href="/"
                        className={Styles["menu__link"]}
                    >
                        <img
                            className={Styles["menu__icon"]}
                            src="/images/money.svg"
                            alt="Иконка кнопки"
                        />
                        Оплата
                    </Link>
                </li>
                <li className={Styles["menu__item"]}>
                    <Link
                        href="/"
                        className={Styles["menu__link"]}
                    >
                        <img
                            className={Styles["menu__icon"]}
                            src="/images/cup.svg"
                            alt="Иконка кнопки"
                        />
                        Достижения
                    </Link>
                </li>
                <li className={Styles["menu__item"]}>
                    <Link
                        href="/"
                        className={Styles["menu__link"]}
                    >
                        <img
                            className={Styles["menu__icon"]}
                            src="/images/puzzle.svg"
                            alt="Иконка кнопки"
                        />
                        Тренажеры
                    </Link>
                </li>
                <li className={Styles["menu__item"]}>
                    <Link
                        href="/"
                        className={Styles["menu__link"]}
                    >
                        <img
                            className={Styles["menu__icon"]}
                            src="/images/folder-open.svg"
                            alt="Иконка кнопки"
                        />
                        Библиотека
                    </Link>
                </li>
                <li className={Styles["menu__item"]}>
                    <Link
                        href="/"
                        className={Styles["menu__link"]}
                    >
                        <img
                            className={Styles["menu__icon"]}
                            src="/images/headphones.svg"
                            alt="Иконка кнопки"
                        />
                        Проверка связи
                    </Link>
                </li>
                <li className={Styles["menu__item"]}>
                    <Link
                        href="/"
                        className={Styles["menu__link"]}
                    >
                        <img
                            className={Styles["menu__icon"]}
                            src="/images/settings.svg"
                            alt="Иконка кнопки"
                        />
                        Настройки
                    </Link>
                </li>
                <li className={Styles["menu__item"]}>
                    <Link
                        href="/"
                        className={Styles["menu__link"]}
                    >
                        <img
                            className={Styles["menu__icon"]}
                            src="/images/circle.svg"
                            alt="Иконка кнопки"
                        />
                        Вопросы
                    </Link>
                </li>
            </nav>
            <div className={Styles["menu__banner"]}>
                <h4>Учитесь бесплатно</h4>
                <p>Приводите друзей с детьми заниматься в Sirius Future и получайте подарки!</p>
                <button>Узнать</button>
                <img
                    src="/images/gift.svg"
                    alt="gift"
                />
            </div>
        </section>
    );
}
