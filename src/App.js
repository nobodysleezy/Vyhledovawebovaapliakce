import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="overlay-filter"></div>
            <nav className="App-navbar">
                <div className="App-navbar-brand">
                    <h1>Jako radoby homepage jestli rozumis</h1>
                </div>
            </nav>
            <header className="App-header">
                <p>Vítejte na mé domovské stránce vytvořené v React!</p>
            </header>
            <section className="App-section">
                <h2>Sekce 1</h2>
                <p>
                    Toto je první sekce mé domovské stránky. Můžete sem přidat text, obrázky nebo další obsah podle svého uvážení.
                </p>
            </section>
            <section className="App-section">
                <h2>Sekce 2</h2>
                <p>
                    Druhá sekce s dalším obsahem. Můžete vložit třeba seznam nebo obrázky podle potřeby.
                </p>
            </section>
            <section className="App-section">
                <h2>Sekce 3</h2>
                <p>
                    Poslední sekce na domovské stránce. Zde můžete prezentovat další informace nebo kontaktní formulář.
                </p>
            </section>
            <footer className="App-footer">
                <p>&copy; 2023 Moje Homepage</p>
            </footer>
        </div>
    );
}

export default App;
