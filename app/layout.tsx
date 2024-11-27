
import "./doctheme.css";
import React from 'react';
import { ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata = {
    title: "Latte72",
    description: "Latte72's portfolio"

}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ja">
            <head>
                <meta property="og:title" content="Latte72 | Home" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://latte72r.github.io/" />
                <meta property="og:image" content="./win_icon.gif" />
                <meta property="og:description" content="Latte72's portfolio" />
                <link rel="apple-touch-icon" sizes="256x256" href="./latte_space.png" />
                <meta name="description" content="Latte72's portfolio" />
                <meta name="color-scheme" content="dark" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@Latte72R" />
                <meta name="twitter:title" content="Latte72 | Home" />
                <meta name="twitter:description" content="Latte72's portfolio" />
                <meta name="twitter:image" content="./win_icon.gif" />
                <meta name="google-site-verification" content="0utQohS0QuJgV4Kxamh6Ut6XlZ6sP-ChKltZtUiKWug" />
            </head>
            <body>{children}</body>
        </html >
    )
}
