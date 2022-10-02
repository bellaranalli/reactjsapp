import React from 'react';
import ItemListContainer from '../../itemlistcontainer/ItemListContainer';
import Vinoteca from '../../itemlistcontainer/Vinoteca';

const Home = () => {
return <div>
    <h1>
    <Vinoteca greeting={"VINOS"}/>
    </h1>
    <ItemListContainer/>
    </div>

}
 export default Home;