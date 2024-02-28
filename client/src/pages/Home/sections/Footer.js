
import "./footer.css"
import iskconLogo from "../../../assets/images/brandWhite.jpg"
function Footer() {
    return (

        <footer class="footer">
            <div class="footer__addr">
                <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                    <img style={{ width: "20%", marginRight: "10px " }} src={iskconLogo} alt=""></img>
                    <h1 class="footer__logo">Iskcon Youth Forum</h1>
                </div>

                <p class="footerp" >ISKCON is a non-profit organization that works for social welfare. It is located in the heart of a cosmopolitan city. This center is determinedly trying to build up society’s spiritual and ethical fabric with the help of different cultural and spiritual educational programs.</p>
                {/* <h2>Visit</h2> */}

                {/* <address>
                    Hare Krishna dham, ISKCON Temple, Dakshin Marg, 36B, Sector-36B, Chandigarh, 160036

                    <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
                </address> */}
            </div>

            <ul class="footer__nav">
                <li class="nav__item">
                    <h2 class="footer__logo">Visiting times</h2>
                    <ul class="nav__ul">
                        <li>
                            Mon – Sat
                        </li>

                        <li>
                            <a>10.00am – 1.00pm
                            </a>
                        </li>

                        <li>
                            <a >4.00pm – 7.30pm</a>
                        </li>
                        <li>
                            Sun
                        </li>

                        <li>
                            <a>10.00am – 7.30pm
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav__item">
                    <h2 class="footer__logo">Contact Info</h2>
                    <address>
                        Hare Krishna dham, ISKCON Temple, Dakshin Marg, 36B, Sector-36B, Chandigarh, 160036

                        <a class="footer__btn" href="mailto:iskconyouthforum.chd@gmail.com">Email Us</a>
                        <a class="footer__btn" href="tel:+918126439168">Contact Us</a>
                    </address>
                </li>

                <li class="nav__item">
                    <h2 class="footer__logo"> Please Visit</h2>
                    <ul class="nav__ul">
                        <li>
                            <a href="#">Home</a>
                        </li>

                        <li>
                            <a href="#">About Us</a>
                        </li>

                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </li>


            </ul>

            <div class="legal" >
                <p>&copy; 2024 IYF. All rights reserved.</p>


            </div>
        </footer>

    );
}


export default Footer;