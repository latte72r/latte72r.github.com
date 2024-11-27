
import React from 'react';
import "./doctheme.css";
import MainContent from "./elements";
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
    return (
        <MainContent page="">
            <div className="not-found">
                <h1 className="not-found-h1">404 Not Found</h1>
                <div>
                    <Link href="./about" legacyBehavior><button className="link-button">About</button></Link>
                    <Link href="./works" legacyBehavior><button className="link-button">Works</button></Link>
                </div>
            </div>
        </MainContent>
    );
}
export default NotFoundPage;

