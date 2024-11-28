
import MainContent, { PageLinks } from "./elements";
import React from 'react';
import Image from 'next/image';

import LatteSpaceImage from "@/public/latte_space.png";

const HomePage: React.FC = () => {
    return (
        <MainContent page="top">
            <div id="page-top">
                <p><Image id="latte-image" src={LatteSpaceImage} alt="main-image" priority/></p>
                <h1 id="title-top">Latte72</h1>
                <PageLinks />
            </div>
        </MainContent>
    );
};

export default HomePage;
