import CardUI from './cmponent/CardUI'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App =() => {
  const cardInfo = [
    {   images: 'img/student-gd94402e11_1280.jpg',
        title: 'Card title',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, animi? Voluptas rem fugiat error quod eveniet numquam incidunt sed quaerat?',
    },
    {
      images: 'img/office-g19943ba37_1280.jpg',
      title: 'Card title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, animi? Voluptas rem fugiat error quod eveniet numquam incidunt sed quaerat?',
  },
  { images:'img/telework-g6e883de3b_1280.jpg',
    title: 'Card title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, animi? Voluptas rem fugiat error quod eveniet numquam incidunt sed quaerat?',
}
]
  return (
    <div className="App">
      {cardInfo.map((card, index) =>{
       return <CardUI key={index} card={card}/>
      
      })}
   
    </div>
  );
}

export default App;
