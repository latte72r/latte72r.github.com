
import MainContent from '../elements';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <MainContent page="about">
            <div className="document">
                <section id="about-me">
                    <h2>About Me</h2>
                    <h3>はじめまして、Latte72 です。</h3>
                    <p>主に Python、C/C++、JavaScript を使って開発しています。</p>
                    <p>最近は自作OSや自作コンパイラの開発と Deep Learning に興味があります。</p>
                    <h3>所属</h3>
                    <p>慶應義塾大学理工学部</p>
                    <p>慶應義塾大学公認サークル Computer Society</p>
                    <h3>SNS Links</h3>
                    <span className="sns-link-span">
                        <a href="https://github.com/Latte72R" className="sns-link" target="_blank">
                            <img id="github-logo-white" src="./logos/github-mark-white.png" alt="" />
                            @Latte72R</a>
                    </span>
                    <span className="sns-link-span">
                        <a href="https://x.com/Latte72R" className="sns-link" target="_blank">
                            <img id="x-logo-white" src="./logos/x-logo-white.png" alt="" />
                            @Latte72R</a>
                    </span>
                    <span className="sns-link-span">
                        <a href="https://qiita.com/Latte72R" className="sns-link" target="_blank">
                            <img id="qiita-icon-white" src="./logos/qiita-white-icon.png" alt="" />
                            @Latte72R</a>
                    </span>
                </section>
            </div>
            <div className="document">
                <h2>Skills</h2>
                <ul>
                    <li>
                        <p>Python / C / C++</p>
                    </li>
                    <li>
                        <p>HTML / CSS / JavaScript</p>
                    </li>
                    <li>
                        <p>Visual Basic for Applications</p>
                    </li>
                    <li>
                        <p>Windows / Linux / WSL</p>
                    </li>
                </ul>
            </div>
            <div className="document">
                <h2>Interests</h2>
                <ul>
                    <li>
                        <p>自作OS / 自作コンパイラ / 自作ブラウザ</p>
                    </li>
                    <li>
                        <p>自然言語処理 / Transformer / Deep Learning / 画像認識</p>
                    </li>
                    <li>
                        <p>Webフロントエンド / React / Next.js</p>
                    </li>
                </ul>
            </div>
        </MainContent>
    );
}

export default HomePage;
