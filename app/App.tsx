import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

export const App = (props: any) => {
    return (
        <>
            <Menu />
            <section>
                <Header />
                {props.children}
            </section>
        </>
    );
};
