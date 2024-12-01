
import MainContent from '../elements';
import React from 'react';
import Image from 'next/image';

import GitHubLogoWhite from '@/public/logos/github-mark-white.png';
import XLogoWhite from '@/public/logos/x-logo-white.png';
import QiitaIconWhite from '@/public/logos/qiita-white-icon.png';

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
                            <Image id="github-logo-white" src={GitHubLogoWhite} alt="" priority/>
                            @Latte72R</a>
                    </span>
                    <span className="sns-link-span">
                        <a href="https://x.com/Latte72R" className="sns-link" target="_blank">
                            <Image id="x-logo-white" src={XLogoWhite} alt="" priority/>
                            @Latte72R</a>
                    </span>
                    <span className="sns-link-span">
                        <a href="https://qiita.com/Latte72R" className="sns-link" target="_blank">
                            <Image id="qiita-icon-white" src={QiitaIconWhite} alt="" priority/>
                            @Latte72R</a>
                    </span>
                </section>
            </div>
            <div className="document">
                <h2>Skills</h2>
                <p>Python / C / C++</p>
                <p>HTML / CSS / JavaScript</p>
                <p>Visual Basic for Applications</p>
                <p>Windows / Linux / WSL</p>
            </div>
            <div className="document">
                <h2>Interests</h2>
                <p>低レイヤー / 自作OS / 自作ブラウザ</p>
                <p>LLVM / MLIR / 自作言語 / 自作コンパイラ</p>
                <p>自然言語処理 / Transformer / Deep Learning / 画像認識</p>
                <p>Webフロントエンド / React / Next.js</p>
            </div>
        </MainContent>
    );
}

export default HomePage;
