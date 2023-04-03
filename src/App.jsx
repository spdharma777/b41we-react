import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Welcome
        name=" amma"
        pic="https://i.pinimg.com/550x/0f/e5/9e/0fe59ed2803bcca39895a25d1579a353.jpg"/>


     <Welcome
        name="appa"
        pic="https://images.foxtv.com/static.fox5ny.com/www.fox5ny.com/content/uploads/2023/03/1280/720/Dad-jokes.jpg?ve=1&tl=1" />
    
     <Welcome
        name=" dharma"
        pic="https://previews.123rf.com/images/photopiano/photopiano1210/photopiano121000054/15782930-image-of-cute-baby-boy-covered-green-towel-isolated-on-white-background.jpg" />
    </div>    
  );
}
//object destructuring
function Welcome({pic,name}){//2nd method of code reducing
  //const {pic,name} = props; 1st method of code reducing 
  return (
    <div>
      <img className="user-img" src={pic} alt={name}/>
      <h1>
        Hello, <span className="name">{name}</span> 😍{" "}
      </h1>
    </div>
  );
}

