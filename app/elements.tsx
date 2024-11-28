'use client';

import "./doctheme.css";
import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';

interface Window {
    pJSDom: Array<{ pJS: { fn: { vendors: { destroypJS: () => void } } } }>;
}
declare let window: Window;

interface HeaderNavProps {
    page: string;
}

const HeaderNav = (props: HeaderNavProps) => {
    if (props.page === "top") {
        return (
            <nav>
                <p className="nav-link">Top</p>
                <div className="divider"></div>
                <Link href="/about" legacyBehavior><a className="nav-link">About</a></Link>
                <div className="divider"></div>
                <Link href="/works" legacyBehavior><a className="nav-link">Works</a></Link>
            </nav>
        );
    } else if (props.page === "about") {
        return (
            <nav>
                <Link href="/" legacyBehavior><a className="nav-link">Top</a></Link>
                <div className="divider"></div>
                <p className="nav-link">About</p>
                <div className="divider"></div>
                <Link href="/works" legacyBehavior><a className="nav-link">Works</a></Link>
            </nav>
        );
    } else if (props.page === "works") {
        return (
            <nav>
                <Link href="/" legacyBehavior><a className="nav-link">Top</a></Link>
                <div className="divider"></div>
                <Link href="/about" legacyBehavior><a className="nav-link">About</a></Link>
                <div className="divider"></div>
                <p className="nav-link">Works</p>
            </nav>
        );
    } else {
        return (
            <nav>
                <Link href="/" legacyBehavior><a className="nav-link">Top</a></Link>
                <div className="divider"></div>
                <Link href="/about" legacyBehavior><a className="nav-link">About</a></Link>
                <div className="divider"></div>
                <Link href="/works" legacyBehavior><a className="nav-link">Works</a></Link>
            </nav>
        );
    }
}

const LoadParticles = () => {
    useEffect(() => {
        import('./particles').then(particlesJS => {
            window.pJSDom.forEach(p => p.pJS.fn.vendors.destroypJS());
            window.pJSDom = [];
            particlesJS.default.load('particles-js', '/particles.json', function () {
                console.log('callback - particles.js config loaded');
            });
        });
    }, []);
    return <div id="particles-js"></div>;
}

interface MainContentProps {
    page: string;
    children: React.ReactNode;
}

const MainContent = (props: MainContentProps) => {
    return (
        <div className="main">
            <Header page={props.page} />
            <div className="blank"></div>
            <LoadParticles />
            {props.children}
            <Footer />
        </div>
    );
}
export default MainContent;

interface HeaderProps {
    page: string;
}

const Header = (props: HeaderProps) => {
    return (
        <div className="header">
            <Link href="/" legacyBehavior><a className="header-title">Latte72</a></Link>
            <HeaderNav page={props.page} />
        </div>
    );
}

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; 2024 Latte72. All rights reserved.</p>
        </div>
    );
}

const PageLinks = () => {
    return (
        <div>
            <Link href="/about" legacyBehavior><a className="link-button">About</a></Link>
            <Link href="/works" legacyBehavior><a className="link-button">Works</a></Link>
        </div>
    );
}
export { Header, Footer, PageLinks };

