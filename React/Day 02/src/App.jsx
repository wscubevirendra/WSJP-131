import Card from "./Card"

function App(){
  return(
    <div className="container">
     <Card name="John Doe" email="john.doe@example.com" age={30} />
     <Card name="Jane Smith" email="jane.smith@example.com" age={25} />
     <Card name="Bob Johnson" email="bob.johnson@example.com" age={35} />
     <Card name="Alice Williams" email="alice.williams@example.com" age={28} />
     <Card name="Charlie Brown" email="charlie.brown@example.com" age={32} />
     <Card  name="rohit" email="rohit@example.com" age={25} />
     <Card  name="rohit" email="rohit@example.com" age={25} />
     <Card  name="rohit" email="rohit@example.com" age={25} />
     <Card  name="rohit" email="rohit@example.com" age={25} />
     <Card  name="rohit" email="rohit@example.com" age={25} />
     <Card  name="rohit" email="rohit@example.com" age={25} />
    </div>
  )
}


export default App;