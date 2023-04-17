import React from "react";

const Layout=({children}) =>
{
    return (
        <div class="main-container">
            <header>
                <h1>Filmsøk</h1>
            </header>
            {children}
        </div>
    );
};

export default Layout;