import './App.css';

function App() {
  return (
    <div>
      <div
        className="App"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <h1 className="NameProgrammer">Kuli Zhanserik</h1>
        <div
          className="buttons"
          style={{ justifyContent: 'flex-end', alignItems: 'flex-start' }}
        >
          <button style={{ marginRight: '32px' }}>About</button>
          <button style={{ marginRight: '32px' }}>Experience</button>
          <button style={{ marginRight: '32px' }}>Projects</button>
          <button style={{ marginRight: '32px' }}> Contacts</button>
        </div>
      </div>
      <div className="secondComponent">
        <div>
          <div
            style={{
              width: '1280px',
              height: '144px',
              fontFamily: 'Courier New',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '30px',
              lineHeight: '36px',
            }}
          >
            <h1>Hi, I’m Zhanserik, I build things for the web.</h1>
          </div>
          <div
            className="second_component_two"
            style={{ backgroundColor: 'purple', padding: '20px' }}
          >
            <p style={{ color: 'white' }}>
              I’m software developer and this is my portfolio.
            </p>
          </div>
          <div
            className="second_comp_button"
            style={{
              width: '200px',
              height: '50px',
              backgroundColor: 'purple',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '16px',
            }}
          >
            <button>Check out my CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
