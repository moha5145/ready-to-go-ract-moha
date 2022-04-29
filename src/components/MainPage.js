const MainPage = (props) => {
  const { switch1, switch2, switch3, setSwitch1, setSwitch2, setSwitch3 } = props;
  return (
    <div className="main-container">
      <div>
        <div>
          <button
            style={{ backgroundColor: switch1 && "#5c48d3", color: switch1 && "white" }}
            onClick={() => {
              setSwitch1(true);
            }}
          >
            ON
          </button>
          <button
            style={{ backgroundColor: !switch1 && "#5c48d3", color: !switch1 && "white" }}
            onClick={() => {
              setSwitch1(false);
            }}
          >
            OFF
          </button>
        </div>
        <div>
          <button
            style={{ backgroundColor: switch2 && "#5c48d3", color: switch2 && "white" }}
            onClick={() => {
              setSwitch2(true);
            }}
          >
            ON
          </button>

          <button
            style={{ backgroundColor: !switch2 && "#5c48d3", color: !switch2 && "white" }}
            onClick={() => {
              setSwitch2(false);
            }}
          >
            OFF
          </button>
        </div>
        <div>
          <button
            style={{ backgroundColor: switch3 && "#5c48d3", color: switch3 && "white" }}
            onClick={() => {
              setSwitch3(true);
            }}
          >
            ON
          </button>

          <button
            style={{ backgroundColor: !switch3 && "#5c48d3", color: !switch3 && "white" }}
            onClick={() => {
              setSwitch3(false);
            }}
          >
            OFF
          </button>
        </div>

        <button
          className="all-off"
          style={{ backgroundColor: !switch1 & !switch2 & !switch3 ? "#5c48d3" : "white", color: !switch1 & !switch2 & !switch3 ? "white" : "#5c48d3" }}
          onClick={() => {
            setSwitch1(false);
            setSwitch2(false);
            setSwitch3(false);
          }}
        >
          ALL OFF
        </button>
      </div>

      <div className="message">
        {(switch1 === true) & (switch2 === true) & (switch3 === true) ? <div className="go">Go !</div> : <div className="no-way">No Way !</div>}
      </div>
    </div>
  );
};

export default MainPage;
