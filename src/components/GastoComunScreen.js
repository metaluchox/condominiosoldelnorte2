import React from 'react'
import './GastoComunScreen.css';

export const GastoComunScreen = () => {

const urlGastoComun = "https://docs.google.com/spreadsheets/d/1EXWre6qoL4pAdKF4X-PMuGVVsxQg7MmjCEo7r2Q1Hck/edit#gid=1797199210";
    return (
        <div className="containergc">
            <h1>Gastos comun</h1>
            <iframe  title="Gasto Comun" className="responsive-iframe" src={urlGastoComun} />         
        </div>
    )
}
