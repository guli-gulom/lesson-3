const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
const cardImg = "./images/7.jpeg"

const lorem = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, vel? Placeat, laudantium ad ipsum error aspernatur adipisci reiciendis earum unde omnis fugit nisi itaque dolores laboriosam cum, totam corporis amet.'
const Card = (key, theme, title)=>{
    let th = theme === "light" ? "light" : "dark"

return(
    React.createElement("div", {className: `card ${th}`, key: key}, [
    React.createElement("div", {className: `${key}_card-header1`}, [
            React.createElement("img", {src: cardImg,className: "card-img", key: `${key}_card-img`}, )
        ]),
        React.createElement("div",{className: `${key}_card-body`}, [
            React.createElement("h1", {}, title )
        ]),
        React.createElement("p",{}, lorem)
       
    ])
)
}
const Content = () =>{
return(
  
   React.createElement("div", { className: "flex"}, [
    Card("card1", "dark", "Card Title 1"),
    Card("card2", "light", "Card Title 2"),
    Card("card3", "dark", "Card Title 3"),
    Card("card4", "light", "Card Title 4"),
    Card("card5", "dark", "Card Title 5"),
    Card("card6", "light", "Card Title 6"),

   ])
  
)
}
root.render(Content())