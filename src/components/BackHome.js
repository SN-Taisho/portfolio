import { Component } from "react";
import ArrowLeft from "../assets/icons/arrow-left-icon.png"

class BackHome extends Component {
    render() {

        function goHome() {
            window.location.href="/zeru-sakamoto.dev/";
        }

        return (
            <button id="backHomeBtn" onClick={goHome}>
                <img src={ArrowLeft} alt="Arrow Left Icon" height={16}/>
                <span>Back</span>
            </button>
        );
    }
}

export default BackHome;
