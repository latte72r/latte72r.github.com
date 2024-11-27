
import Link from "next/link";
import MainContent from "./elements";
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <MainContent page="top">
            <div id="page-top">
                <p><img id="latte-image" src="./latte_space.png" alt="main-image" /></p>
                <h1 id="title-top">Latte72</h1>
                <div>
                    <Link href="./about" legacyBehavior><button className="link-button">About</button></Link>
                    <Link href="./works" legacyBehavior><button className="link-button">Works</button></Link>
                </div>
            </div>
        </MainContent>
    );
};

export default HomePage;
