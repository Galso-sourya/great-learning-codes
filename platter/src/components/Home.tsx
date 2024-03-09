//it is also a function component
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice} from '@fortawesome/free-solid-svg-icons';
const Home=()=>{
    return(
        <main>
            <section className="my-5">
                <header>
                    <h1>
                    <FontAwesomeIcon
        icon={faPizzaSlice}
        rotation={270}
        className="me-2"//we are giving margin
        />
                        Platter
                    </h1>
                </header>
                <hr/>
                <p>ggggggg</p>
            </section>
        </main>
    )
};
export default Home;