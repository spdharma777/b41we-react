import "./App.css";

export default function App() {

  const names=["amma","appa","dharma","pavi","keerthana"];
 const users=[
        {
        name:"amma",
        pic:"https://i.pinimg.com/originals/dd/11/77/dd1177c4ae29909086cbbef9233644b3.jpg",
        },
        {
          name:"appa",
          pic:"https://images.foxtv.com/static.fox5ny.com/www.fox5ny.com/content/uploads/2023/03/1280/720/Dad-jokes.jpg?ve=1&tl=1",
          },
          {
            name:"dharma",
            pic:"https://images.unsplash.com/photo-1630304565761-d6f8d5a0facd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3V0ZSUyMGJhYnl8ZW58MHx8MHx8&w=1000&q=80",
            },
            {
              name:"pavi",
              pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqCc7BwvA9uTECkJm6lim519cV1OECRyNOA&usqp=CAU",
              },
        {
        name:"keerthu",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyojGS_oRqAj5lYXfddmdybeQ6_yR5CdpYWg&usqp=CAU",
                }
        ]
   return (/* return in-sider  is an jsx*/
    <div className="App">

      {users.map((usr)=>(
        <Welcome
        name={usr.name}
        pic={usr.pic}/>
     ))}
      {/* <Welcome
        name="amma"
        pic="https://i.pinimg.com/550x/0f/e5/9e/0fe59ed2803bcca39895a25d1579a353.jpg"/>


     <Welcome
        name="appa"
        pic="https://images.foxtv.com/static.fox5ny.com/www.fox5ny.com/content/uploads/2023/03/1280/720/Dad-jokes.jpg?ve=1&tl=1" />
    
     <Welcome
        name=" dharma"
        pic="https://previews.123rf.com/images/photopiano/photopiano1210/photopiano121000054/15782930-image-of-cute-baby-boy-covered-green-towel-isolated-on-white-background.jpg" />
    */}
    {/* object destructuring */}
    {/* <Msg name="amma"/>
    <Msg name="appa"/>
    <Msg name="dharma"/>
     */}
        { /* 3types of destructuring */ }
     {/* {names.map((nm)=>(
     <Msg name={nm}/>
     ))} */}

     
     {/* 2nd type{names.map((nm)=><Msg name={nm}/> )}  */}

    
     {/* 3rd type{names.map((nm)=>{return<Msg name={nm}/> })}  */}

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
        Hello, <span className="name">{name}</span> 😍💗💗💗{" "}
      </h1>
    </div>
  );
}

// function Msg({name}){//2nd method of code reducing
//   //const {pic,name} = props; 1st method of code reducing 
//   return (
//     <div>
//       {/* <img className="user-img" src={pic} alt={name}/> */}
//       <h1>
//         Hello, <span className="name">{name}</span> 😍💗{" "}
//       </h1>
//     </div>
//   );
// }
