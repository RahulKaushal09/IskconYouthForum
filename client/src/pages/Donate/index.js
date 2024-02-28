
import "../Home/sections/main.css"
import donate from "../../assets/images/donate.jpg"


function Donate() {

    return (
        <div className="donation-container">

            <div class="center-box">
                <img class="qr-code" src={donate} alt="QR Code"></img>
            </div>
        </div>
    );
}

export default Donate;