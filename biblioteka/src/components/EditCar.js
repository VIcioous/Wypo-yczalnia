import React from "react";

class EditCar extends React.Component
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
            hours,
            charge,
        }
    }

    update =(e) =>
    {
        e.preventDefault();
        if(this.state.mark ===""|| this.state.model===""|| this.state.power===0|| this.state.yearmade===0|| this.state.price===0
        || this.state.color===""|| this.state.bodytype===""|| this.state.description==="")
        {
            alert("Wszystkie dane muszą być uzupełnione")
            return
        }
        this.props.updateCarHandler(this.state);
        this.setState({model:"",
        mark:"",
        power:0,
        yearmade:0,
        price:0,
        bodytype:"",
        color:"",
        description:"",
        rented:false,
    hours:0,
charge:0,})
        this.props.history.push("/");
        
    }
    render()
    {
        return(
            <div className="ui main" style={{marginTop: "50px"}}>
                <h2>Edytuj Dane Samochodu</h2>
                <form className ="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label>Marka</label>
                        <input 
                        type="text"
                        name="mark"
                        placeholder="Marka"
                        value={this.state.mark}
                        onChange={(e)=>this.setState({mark: e.target.value})}/>

                    </div>
                    <div className="field">
                        <label>Model</label>
                        <input type="text" name="model" placeholder="Model"
                         value={this.state.model}
                         onChange={(e)=>this.setState({model: e.target.value})}
                        />

                    </div>
                    <div className="field">
                        <label>Kolor</label>
                        <input 
                        type="text"
                        name="color"
                        placeholder="Kolor"
                        value={this.state.color}
                        onChange={(e)=>this.setState({color: e.target.value})}/>

                    </div><div className="field">
                        <label>Typ nadwozia</label>
                        <input 
                        type="text"
                        name="bodytype"
                        placeholder="Typ nadwozia"
                        value={this.state.bodytype}
                        onChange={(e)=>this.setState({bodytype: e.target.value})}/>

                    </div>
                    <div className="field">
                        <label>Moc</label>
                        <input type="number" name="power" placeholder="Moc"
                         value={this.state.power}
                         onChange={(e)=>this.setState({power: parseInt(e.target.value)})}/> 

                    </div>
                    <div className="field">
                        <label>Rok produkcji</label>
                        <input type="number" name="yearmade" placeholder="Rok produkcji"
                         value={this.state.yearmade}
                         onChange={(e)=>this.setState({yearmade: parseInt(e.target.value)})}/>

                    </div>
                    <div className="field">
                        <label>Cena za godzinę</label>
                        <input type="number" name="price" placeholder="Cena za godzine"
                         value={this.state.price}
                         onChange={(e)=>this.setState({price: parseInt(e.target.value)})}/> 

                    </div>
                    <div className="field">
                        <label>Opis</label>
                        <input 
                        type="text"
                        name="description"
                        placeholder="Opis"
                        value={this.state.description}
                        onChange={(e)=>this.setState({description: e.target.value})}/>

                    </div>
                    <div class="ui animated fade  button blue" onClick={this.update}  >
  <div class="visible content">Zatwierdź </div>
  <div class="hidden content">
    <i class="check icon"></i>
  </div>
</div>

                </form>
            </div>
        );
    }
}
export default EditCar;