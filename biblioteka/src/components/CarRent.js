import React from "react";



class CarRent extends React.Component
{
    constructor(props)
    {
        super(props)
        const {id,mark,model,power,yearmade,price,color,bodytype,description,rented,hours,charge} =props.location.state.car;
        this.state={
            id,
            mark,
            model,
            power,
            yearmade,
            price,
            color,
            bodytype,
            description,
            rented,
            hours:0,
            charge:0,
        }
    }

    rent=(e) =>
    {


        e.preventDefault();
        if(this.state.hours <=0)
        {
            alert("Podaj poprawną liczbę godzin ")
            return
        }
        this.props.updateCarHandler(this.state);
        console.log(this.state)
        this.props.history.push("/");
    }

    render()
    {

    
    return(
        
        
     <div className="main" style={{marginTop:"30px"}}>
         <div className="ui card centered">
             <div className="content">
                 <div className="header">
                    {this.state.mark}
                 </div>
                    <div className="header">
                     {this.state.model}
                    </div>
                    <div className="description">
                     Moc: {this.state.power+" "}KM
                    </div>
                    <div className="description">
                     Kolor: {this.state.color+" "}
                    </div>
                    <div className="description">
                     Typ nadwozia: {this.state.bodytype+" "}
                    </div>
                    <div className="description">
                     Opis: {this.state.description+" "}
                    </div>
                    <div className="description">
                    Rok produkcji: {this.state.yearmade}r
                    </div>
                    <div className="description" style={{color: "green"}}>
                    Cena: {this.state.price+ " "} zł/h
                    </div>

             </div>
             <div className="center-div" style={{textAlign:"center"}}>
             <form className ="ui form" onSubmit={this.rent}>
                    <div className="field">
                        <label>Ilość godzin</label>
                        <input 
                        type="number"
                        name="hours"
                        value={this.state.hours}
                        onChange={(e)=>this.setState({hours: parseInt(e.target.value),
                        charge: this.state.price *parseInt(e.target.value),rented:true}) }/>

                    </div>
                    <div className="description" style={{color: "green"}}>
                    Do zapłaty: {this.state.price *this.state.hours+ " "} zł
                    </div>
                    <div class="ui animated fade  button green" onClick={this.rent} style={{margin:"10px"}}   >
  <div class="visible content">Wypożycz </div>
  <div class="hidden content">
    <i class="check icon"></i>
  </div>
</div>
            
              
            </form>
            </div>
         </div>
         
     </div>
 
    );
}
}
export default CarRent