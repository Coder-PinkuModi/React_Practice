import Header from "./Header"
import UseEffectTitleChange from "./UseEffectPractice"
import DigitalClock from "./DigitalClock"
// import Card from "./Card" 
// import Student from "./PropStudents"
import ListRender from "./ListRenderFunction"
import ColorPicker from "./colorPicker";
import ObjectUseState from "./ObjectUseState"
import FruitArrayUseState from "./ArrayUseState"
import ArrayObjectsCars from "./ArrayObjects"
import FormComponenet from "./FormOnChangeEventAndStateUse";
import UseContextExample from "./UseContext/UseContext"
import BoxUseContextExample from "./UseContextAnotherExample/UseContextSecondExample"
import StopWatch from "./stopWatch"
import Footer from "./Footer"

function App() {

// list1 & list 2 for rendering
 const list1 = [
                  { name: "Banana", calories: 125, categories: "fruit" },
                  { name: "Orange", calories: 105, categories: "fruit" },
                  { name: "Mango", calories: 95, categories: "fruit" },
              ];

 const list2 = [
                  { name: "Cabbage", calories: 85, categories: "vegetables" },
                  { name: "Carrot", calories: 15, categories: "vegetables" },
                  { name: "Ginger", calories: 54, categories: "vegetables" },
              ];


  return (
    <>
      <Header></Header>
      
      <DigitalClock />

      {/* <Card/> */}

      {/* <Student name="Pinku Modi" age={21} isStudent={true}/> 
       <Student name="Prince Raj" age={21} isStudent={true}/>
      <Student name="Krishna Burnwal" age={42} isStudent= {false}/> 
       <Student /> */}

        <UseEffectTitleChange />

         {/* For rendering purposes */}
        <ol>
          <ListRender items={list1} category={"Fruits"}/>
        </ol>

        <ol>
          <ListRender items={list2} category={"Vegetables"}/>
        </ol>

        <ColorPicker />

        <ObjectUseState />

        <FormComponenet />


        <FruitArrayUseState />

        <ArrayObjectsCars />

        <UseContextExample />

        <BoxUseContextExample />

        <StopWatch />
        
      <Footer /> {/*We can also open and close the imported component like this*/}
    </>
  )
}

export default App
