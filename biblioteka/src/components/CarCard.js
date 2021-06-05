import React from "react";
import {Link} from "react-router-dom";

const CarCard =(props)=>
{
    const {id,mark,model,power,yearmade,price,color,bodytype,description,rented,hours,charge}=props.car;
    console.log(props.car)

    if(rented==true)
    {
        return(
        
            <div className="item" style={{borderColor:" greenyellow"}} >
            <div className="content left floated" >
                
                <div className="header" style={{fontSize:"large",margin:"10px 0px",textDecoration:"underline"}}>{mark+" "}{model}</div>
                <div><b>Moc:</b> {" "+power+" "} KM</div>
                <div><b>Kolor: </b>{" "+color}</div>
                <div><b>Typ nadwozia: </b>{" "+bodytype}</div>       
                <div><b>Rok produkcji: </b>{" "+yearmade+" "}r</div>
                <div style={{fontWeight:"bold", color: "green"}}><b>Cena za godzinę :</b> {" "+price +" "}zł/h </div>
                <div><b>Opis:</b> {" "+description}</div>
                <div style={{textDecoration:"underline", color:"red",marginBottom:"10px"}}><b>Wypożyczono na</b> {" "+hours+" "}h za {" "+charge+" "} zł </div>
                
            </div>
            <div class="ui animated fade button right floated button red" onClick={()=>props.clickHandler(id)} style={{ margin:"50px 10px"}} >
  <div class="visible content">Usuń</div>
  <div class="hidden content">
    <i class="trash alternate icon"></i>
  </div>
</div>

<div class="ui animated fade button right floated button green" onClick={()=>props.returnHandler(props.car)} style={{ margin:"50px 10px"}} >
  <div class="visible content">Zwróć</div>
  <div class="hidden content">
    <i class="reply icon"></i>
  </div>
</div>

            
            
        </div>
        );
    }
    else{
        return(
        
            <div className="item" style={{borderColor:"greenyellow"}}>
            <div className="content left floated">
                
                <div className="header" style={{fontSize:"large",margin:"10px 0px",textDecoration:"underline"}}>{mark+" "}{model}</div>
                <div><b>Moc:</b> {" "+power+" "} KM</div>
                <div><b>Kolor:</b> {" "+color}</div>
                <div><b>Typ nadwozia:</b> {" "+bodytype}</div>       
                <div><b>Rok produkcji:</b> {" "+yearmade+" "}r</div>
                <div style={{fontWeight:"bold", color: "green"}}><b>Cena za godzinę :</b> {" "+price +" "}zł/h </div>
                <div><b>Opis:</b> {" "+description}</div>
                
            </div>
            
            <div class="ui animated fade button right floated button red" onClick={()=>props.clickHandler(id)} style={{ margin:"50px 10px"}} >
                <div class="visible content">Usuń</div>
                <div class="hidden content">
                    <i class="trash alternate icon"></i>
                </div>
            </div>
            <Link to ={{pathname: '/edit',state:{car:props.car}}}>
            <div class="ui animated fade button right floated button "  style={{ margin:"50px 10px"}} >
  <div class="visible content">Edytuj</div>
  <div class="hidden content">
    <i class="edit icon"></i>
  </div>
</div>
            
            </Link>
            <Link to={{pathname:`/car/${id}`,state:{car:props.car}}}>
            <div class="ui animated fade button right floated button green "  style={{ margin:"50px 10px"}} >
  <div class="visible content">Wypożycz</div>
  <div class="hidden content">
    {price +" zł/h"}
  </div>
</div>
            </Link>
        </div>
        );
    }
    
}
export default CarCard