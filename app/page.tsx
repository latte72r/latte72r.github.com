
import Link from "next/link";
import MainContent from "./elements";
import React from 'react';
import Image from 'next/image';

import LatteSpaceImage from "@/public/latte_space.png";

const HomePage: React.FC = () => {
    return (
        <MainContent page="top">
            <div id="page-top">
                <p><Image id="latte-image" src={LatteSpaceImage} alt="main-image" priority/></p>
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
