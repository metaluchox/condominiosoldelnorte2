import React from 'react'

export const FooterScreen = () => {

    // const casas = 17;
    // const turno = 1;
    const getCurrentDate = () => {

        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
    }

    return (
        <>
            <footer className="text-muted py-5 text-white-50 bg-primary">
                <div className="container">
                    <p className="mb-1">pagos@condominiosoldelnorte2.cl</p>
                    <p className="mb-0">{getCurrentDate()}</p>
                </div>
            </footer>
        </>
    )
}
