import "./Home.css";
import restaurantLogo from "../../don-chile-logo.png";
import { Link } from "react-router"

const Home = () => {

    // class is large if screen size is greater than 1000px
    const getScreenWidth = () => {
        width = window.width;
        console.log("width:", width);
        return width;
    }

    const isLargeScreen = () => {
        return getScreenWidth() > 1000;
    }

    return (
        <main className="container">
            <div className="container">
                <h1 className="business-name">Don Chile Mexican Restaurant</h1>
                <section className={`menu-contact-logo${isLargeScreen && " large"}`}>
                    <article className="menu">
                        <h2 className="menu">
                            <Link className="menu" to="/menu">Menu</Link>
                        </h2>
                    </article>
                    <article className="logo">
                        <img className="logo" src={restaurantLogo} alt="logo of don chile restaurant" />
                    </article>
                    <article className="contact">
                        <h2 className="contact">Contact</h2>
                        <p>801 Southern Blvd</p>
                        <p>Bronx, NY 10459</p>
                        <p>(718) 576-6462</p>
                    </article>  
                </section>
            </div>
        </main>
    )
}

export default Home;