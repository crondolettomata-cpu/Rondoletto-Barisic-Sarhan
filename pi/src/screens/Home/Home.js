import React from "react";

function Home() {
    return(
        <div>
            <Header/>
            <Buscador/>
            <main>
                <Peliculas/>
                <Series/>
            </main>
        </div>
    )
}

export default Home;