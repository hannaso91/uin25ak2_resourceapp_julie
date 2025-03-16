import Nav from "./Nav";
import React from "react";
import '../styles/body.scss';

export default function Layout({ children }) {
    return (
        <div id="container">
            <header>
                <Nav />
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}
