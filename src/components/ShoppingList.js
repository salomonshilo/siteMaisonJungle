import React from 'react'
import { plantList } from '../data/plantLists'

	const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

 
  

const myPlantList = plantList.map((plant)=>(<li key= {plant.id}> {plant.name} </li>))


function ShoppingList() {
    return (
        <div>
            <ul>{categories.map((cat) => (<li key={cat} > {cat} </li>))} </ul>
            <ul>{myPlantList} </ul>
        </div>
    );
}

export default ShoppingList