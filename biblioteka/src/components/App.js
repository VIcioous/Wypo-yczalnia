import React,{useState, useEffect } from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import {uuid} from 'uuidv4';
import Header from './Header'
import AddCar from './AddCar'
import CarList from './CarList'
import CarRent from './CarRent'
import api from '../api/cars'
import EditCar from "./EditCar";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
 
toast.configure();
 
function addPopUp()
{
  toast.success('Dodano nowy samochód',
  {position:toast.POSITION.BOTTOM_CENTER,
  autoClose:3000});
}
function deletePopUp()
{
  toast.error('Usunięto pojazd',
  {position:toast.POSITION.BOTTOM_CENTER,
    autoClose:3000});
}
function editPopUp()
{
  toast.info('Poprawnie zmieniono dane',
  {position:toast.POSITION.BOTTOM_CENTER,
    autoClose:3000});
}
function rentPopUp(marka,model, godziny)
{
  toast.success('Pomyślnie wypożyczono samochód: '+marka+" " +model+" na "+godziny+" h",
  {position:toast.POSITION.BOTTOM_CENTER,
    autoClose:3000});
}
function returnPopUp(marka,model, cena)
{
  toast.success('Zwrócono samochód: '+marka+" " +model+" Należność: "+cena+" zł",
  {position:toast.POSITION.BOTTOM_CENTER,
    autoClose:3000});
}
function App() {
  const [cars,setCars]= useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] =useState([]);
 
  const retrieveCars = async()=>
  {
    const response = await api.get ("/cars");
    return response.data;
  }
 
 
  const addCarHandler= async (car)=>
  {
    console.log(car);
    const request={
      id: uuid(),
      ...car
    }
    const response= await api.post("/cars",request)
    setCars([...cars,response.data]);
   addPopUp();
    
  }
  const updateCarHandler = async (car) =>
    {
      const response =await api.put(`/cars/${car.id}`,car)
      const {id,mark,model,power,yearmade,price,color,bodytype,description,rented,hours,charge} =response.data;
 
      setCars(
        cars.map((car)=>{
        return car.id=== id ? {...response.data} : car;
 
      }))
      editPopUp()
    }
    const rentCarHandler = async (car) =>
    {
      const response =await api.put(`/cars/${car.id}`,car)
      const {id,mark,model,power,yearmade,price,color,bodytype,description,rented,hours,charge} =response.data;
 
      setCars(
        cars.map((car)=>{
        return car.id=== id ? {...response.data} : car;
 
      }))
      rentPopUp(car.mark,car.model, car.hours)
    }
    
    const returnCarHandler = async (car) =>
    {
      car.rented=false
      const response =await api.put(`/cars/${car.id}`,car)
      const {id,mark,model,power,yearmade,price,color,bodytype,description,rented,hours,charge} =response.data;
      console.log(response)
      
      setCars(
        cars.map((car)=>{
        return car.id=== id ? {...response.data} : car;
 
      }))
      returnPopUp(car.mark,car.model,car.charge)
    }
  const removeCarHandler =async (id)=>
 
  {
     await api.delete(`/cars/${id}`);
    const newCarList = cars.filter((car)=>{
      return car.id !== id;
    })
    setCars (newCarList);
    deletePopUp();
    
  }
 
  const searchHandler = (searchTerm) =>{
    console.log(searchTerm);
    setSearchTerm(searchTerm);
    //jak coś wpiszemy do wyszukania
    if(searchTerm !==""){
      const newCarList = cars.filter((car)=>{
        return Object.values(car)
        .join("")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newCarList);
    }
    else{
      setSearchResults(cars);
    }
  };
 
  useEffect(()=>{
 
   const getAllCars = async ()=>
   {
     const allCars =await retrieveCars();
     if(allCars) setCars(allCars);
   }
   getAllCars();
  },[])
  useEffect(()=>{
 
  },[cars])
 return(
  
 
   <div className="ui container"  >
     <Router>
     <Header/>
 
     <Switch>
     <Route path="/add" exact
      render ={(props) => (
        <AddCar {...props}
        addCarHandler={addCarHandler}/>
      ) } 
      />
     <Route path="/" exact
     render ={(props)=>(
       <CarList {...props}
       cars={searchTerm.length < 1 ? cars : searchResults} 
       getCarId={removeCarHandler} 
       getCarIdToReturn={returnCarHandler}
       term={searchTerm}
       searchKeyword={searchHandler}
       />
     )} 
     />
 
 
     <Route path="/car/:id" render={(props)=>(<CarRent {...props} updateCarHandler={rentCarHandler}/>)}/>
     
     <Route path="/edit" exact
      render ={(props) => (
        <EditCar {...props}
        updateCarHandler={updateCarHandler}/>
      ) } 
      />
     </Switch>
 
     </Router>
     </div>
 
 );
 
  
}
 
export default App;
