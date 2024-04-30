import "./style.css";
import data from "./data";
import { useState } from "react";

// Types of accordian
// single selection
// Multiple selction

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    // reset multiple selected
    setMultiple([]);

    setSelected(getCurrentId === selected ? null : getCurrentId);
    console.log(getCurrentId);
  }

  function handleMultipleSelection(getCurrentId) {
    // clear the single selected state
    setSelected(null);

    // copy the state so we don't mutate directly
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    // indexOf returns -1 if the postion is not found in the array
    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
      // setSelected(null);
    } else if (cpyMultiple.includes(getCurrentId)) {
      // ! Method 1
      // cpyMultiple = cpyMultiple.splice(getCurrentId, 1);
      // setMultiple(cpyMultiple);

      // ! Method 2
      cpyMultiple = cpyMultiple.filter((item) => item !== getCurrentId);
      // setSelected(null);
    }
    setMultiple(cpyMultiple);
  }

  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          Enable Multiple Selection
        </button>
        <div className="accordian">
          {/* since we are receiving the data from an endpoint always check if the API returns a data back */}
          {data && data.length > 0 ? (
            data.map((dataItem, index) => {
              return (
                <div className="item" key={index}>
                  <div
                    onClick={() => {
                      enableMultiSelection
                        ? handleMultipleSelection(dataItem.id)
                        : handleSingleSelection(dataItem.id);
                    }}
                    className="title"
                  >
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>


                  {/* Method 1 Single render  and Multiple render */}
                  {selected === dataItem.id ||
                  multiple.indexOf(dataItem.id) !== -1 ? (
                    <div className="content">{dataItem.answer}</div>
                  ) : null}

                  {/* Method 2 multiple render and single render  */}
                  {/* {enableMultiSelection && multiple.includes(dataItem.id) ? (
                    <>
                      <div className="content">{dataItem.answer}</div>
                    </>
                  ) : (
                    selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  )} */}
                </div>
              );
            })
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordian;
