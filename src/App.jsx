import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";

import Header from "./components/Header";
import Card from "./components/Card";

import Data from "./Api";

function App() {
    const myCards = Data.map(elements => {
      return <Card 
        key= {elements.id}
        {...elements}
      />
    })
    return (
        <div className="container">
            <Header />
            <main>
                {myCards}
            </main>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
