import "./App.css";

// 1 - criando form
import MyForm from "./components/Myform";

function App() {
  return (
    <>
      <div>
        <h1>Form em react</h1>
        {/* 1 - criando form */}
        <MyForm userName="Matheus" userEmail="mwkmx@gmail.com" />
      </div>
    </>
  );
}

export default App;
