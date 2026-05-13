  import logo from './logo.svg';
  import './App.css';

  function App() {
    // khai bao ham Chao1 de in ra chu "Xin chào mọi người!"
  let chao1=() =>console.log("Xin chào mọi người!");
    // khai bao ham Chao2 de in ra chu "Xin chào, tôi là một hàm arrow function!"
  let chao2=() =>console.log("Xin chào, tôi là một hàm arrow function!"); 
  let person={ name:"doannhat", id:1, age:21, address:"da nang"};
  // in thong tin của đối tượng person ra thẻ card trong react
    return (
      <div> 
    <h1>Xin chào, tôi là một hàm bình thường!</h1>
      <h1>Xin chào, tôi là một hàm arrow function!</h1>
      <button onClick={chao1}>Gọi hàm chào 1</button>
      <button onClick={chao2}>Gọi hàm chào 2</button>
      <div className="card">
        <h2>{person.name}</h2>
        <p>Tuổi: {person.age}</p>
        <p>Địa chỉ: {person.address}</p>
      </div>  
      </div>

    );
  }

  export default App;
