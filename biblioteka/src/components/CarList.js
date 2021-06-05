import React from "react";
import {Link} from "react-router-dom";
import CarCard from "./CarCard";

const CarList =(props) =>
{
    
    const deleteCarHandler  = (id)=>
    {
        props.getCarId(id);

    }
    const returnCarHandler =(id)=>
    {
        props.getCarIdToReturn(id);
    }
    const renderCarList =props.cars.map((car)=>{
        return(
            <CarCard car={car} clickHandler ={deleteCarHandler} returnHandler={returnCarHandler} key ={car}></CarCard>
        );
    })
    return(
        <div className="main" >
        <h2 style={{marginTop: "35px"}}>Lista Samochodów
        
        <Link to="/add"><div class="ui animated fade button right floated button blue"   >
  <div class="visible content">Dodaj Pojazd</div>
  <div class="hidden content">
    <i class="plus icon"></i>
  </div>
</div>
</Link>
</h2>
        <div className="ui celled list" >
            {renderCarList}
        </div>
        </div>
    )
}
export default CarList;