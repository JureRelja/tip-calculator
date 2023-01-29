import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //Variable for calcualting tip
  const [tip, setTip] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState((0.0).toFixed(2));
  const [totalTip, setTotalTip] = useState((0.0).toFixed(2));
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);

  //Colored alerts for bill input
  const [billAlert, setBillAlert] = useState("hidden");
  const [billOutline, setBillOutline] = useState("#26C0AB");
  const [billBaseOutline, setBillBaseOutline] = useState("#F4FAFA");

  //Colored alerts for people input
  const [peopleAlert, setPeopleAlert] = useState("hidden");
  const [peopleOutline, setPeopleOutline] = useState("#26C0AB");
  const [PeopleBaseOutline, setPeopleBaseOutline] = useState("#F4FAFA");

  //Colored alerts for tip input
  const [tipOutline, setTipOutline] = useState("#26C0AB");
  const [tipBaseOutline, setTipBaseOutline] = useState("#F4FAFA");

  useEffect(() => {
    if (bill > 0 && people > 0) {
      setTotalTip(((bill * tip) / 100).toFixed(2));
      setTipPerPerson(((bill * tip) / 100 / people).toFixed(2));
    }
  }, [tip, bill, people]);

  return (
    <div className="bg-[#C5E4E7] flex justify-center items-center flex-col pt-20 md:pt-0 h-[100vh] md:min-h-0 min-h-[900px]">
      <img src="./src/assets/logo.svg" className="mb-12" />
      <div className="bg-white rounded-xl flex flex-col p-8 shadow-xl space-y-7 md:space-y-0 md:flex-row md:space-x-10">
        <div className="flex flex-col space-y-10 w-[300px]">
          <label className="flex flex-col items-start ">
            <div className="flex justify-between items-center w-full mb-1">
              <span className=" text-[#5E7A7D] text-[14px]">Bill</span>
              <span className={`text-[#f16e6e] text-[14px] ${billAlert} `}>
                Can't be zero
              </span>
            </div>

            <div className="flex flex-row items-center w-full">
              <img
                src="./src/assets/icon-dollar.svg"
                className="h-[16px] ml-3 absolute pointer-events-none"
              />
              <input
                type="number"
                className={`bg-[#F4FAFA] text-right text-[#00494D] h-full transition-all ease-in-out duration-75 w-full hover:outline-[${billOutline}] focus:outline-[${billOutline}] outline-[${billBaseOutline}] outline outline-1 rounded-md px-3 py-1 placeholder:text-[#7F9C9F] placeholder:text-[18px] text-[18px]`}
                placeholder="0"
                value={bill === 0 ? "" : bill}
                onChange={(e) => setBill(e.target.value)}
                onBlur={() => {
                  if (bill == 0) {
                    setBillAlert("block");
                    setBillOutline("#f16e6e");
                    setBillBaseOutline("#f16e6e");
                  }
                }}
                onFocus={() => {
                  setBillAlert("hidden");
                  setBillOutline("#26C0AB");
                  setBillBaseOutline("#F4FAFA");
                }}
              />
            </div>
          </label>
          <div className="flex flex-col">
            <span className="mb-1 text-[#5E7A7D] text-[14px]">
              Select tip %
            </span>
            <div className="grid grid-rows-2 grid-cols-2 space gap-4 mt-1 md:grid-cols-3">
              <input
                type="submit"
                value="5%"
                onClick={(e) => {
                  setTip(5);
                }}
                className="bg-[#00494D] px-6 py-2 text-center rounded-md text-white hover:bg-[#C5E4E7] hover:cursor-pointer hover:text-[#00494D] focus:bg-[#26C0AB] focus:text-[#00494D] transtion-all ease-int-out"
              />
              <input
                type="submit"
                value="10%"
                onClick={(e) => {
                  setTip(10);
                }}
                className="bg-[#00494D] px-6 py-2 text-center rounded-md text-white hover:bg-[#C5E4E7] hover:cursor-pointer hover:text-[#00494D] focus:bg-[#26C0AB] focus:text-[#00494D] transtion-all ease-int-out"
              />
              <input
                type="submit"
                value="15%"
                onClick={(e) => {
                  setTip(15);
                }}
                className="bg-[#00494D] px-6 py-2 text-center rounded-md text-white hover:bg-[#C5E4E7] hover:cursor-pointer hover:text-[#00494D] focus:bg-[#26C0AB] focus:text-[#00494D] transtion-all ease-int-out"
              />
              <input
                type="submit"
                value="20%"
                onClick={(e) => {
                  setTip(20);
                }}
                className="bg-[#00494D] px-6 py-2 text-center rounded-md text-white hover:bg-[#C5E4E7] hover:cursor-pointer hover:text-[#00494D] focus:bg-[#26C0AB] focus:text-[#00494D] transtion-all ease-int-out"
              />
              <input
                type="submit"
                value="25%"
                onClick={(e) => {
                  setTip(25);
                }}
                className="bg-[#00494D] px-6 py-2 text-center rounded-md text-white hover:bg-[#C5E4E7] hover:cursor-pointer hover:text-[#00494D] focus:bg-[#26C0AB] focus:text-[#00494D] transtion-all ease-int-out"
              />
              <input
                type="number"
                className={`bg-[#F4FAFA] rounded-md text-[#00494D] px-3 text-right placeholder:text-[#00494D] placeholder:text-center hover:outline-[${tipOutline}] focus:outline-[${tipOutline}] outline-[${tipBaseOutline}] outline outline-1 transtion-all ease-int-out `}
                placeholder="Custom"
                value={tip === 0 ? "" : tip}
                onChange={(e) => {
                  setTip(e.target.value);
                }}
                onBlur={() => {
                  if (tip == 0) {
                    setTipOutline("#f16e6e");
                    setTipBaseOutline("#f16e6e");
                  }
                }}
                onFocus={() => {
                  setTipOutline("#26C0AB");
                  setTipBaseOutline("#F4FAFA");
                }}
              />
            </div>
          </div>
          <label className="flex flex-col items-start">
            <div className="flex justify-between items-center w-full mb-1">
              <span className=" text-[#5E7A7D] text-[14px]">
                Number of people
              </span>
              <span className={`text-[#f16e6e] text-[14px] ${peopleAlert} `}>
                Can't be zero
              </span>
            </div>

            <div className="flex flex-row items-center w-full">
              <img
                src="./src/assets/icon-person.svg"
                className="h-[16px] ml-3  pointer-events-none absolute"
              />
              <input
                type="number"
                className={`peer bg-[#F4FAFA] text-right text-[18px] text-[#00494D] transition-all duration-75 h-full w-full hover:outline-[${peopleOutline}] focus:outline-[${peopleOutline}] outline-[${PeopleBaseOutline}] outline outline-1 rounded-md px-3 py-1 placeholder:text-[#7F9C9F] placeholder:text-[18px]`}
                placeholder="0"
                value={people === 0 ? "" : people}
                onChange={(e) => setPeople(e.target.value)}
                onBlur={() => {
                  if (people == 0) {
                    setPeopleAlert("block");
                    setPeopleOutline("#f16e6e");
                    setPeopleBaseOutline("#f16e6e");
                  }
                }}
                onFocus={() => {
                  setPeopleAlert("hidden");
                  setPeopleOutline("#26C0AB");
                  setPeopleBaseOutline("#F4FAFA");
                }}
              />
            </div>
          </label>
        </div>
        <div className="bg-[#00494D] rounded-lg flex flex-col space-y-2 items-center px-6 py-8 w-[300px]">
          <div className="flex flex-row basis-1/4 justify-between w-full">
            <div>
              <h2 className="text-white">Tip Amount</h2>
              <span className="text-[#5E7A7D] text-[14px]">/ person</span>
            </div>
            <h1 className="text-[#26C0AB] text-[30px]">${tipPerPerson}</h1>
          </div>
          <div className=" w-full items-start basis-1/2">
            <div className="w-full flex justify-between items-center">
              <h2 className="text-white">Total tip</h2>
              <h1 className="text-[#26C0AB] text-[30px] ">${totalTip}</h1>
            </div>
          </div>
          <input
            type="submit"
            onClick={() => {
              setBill(0.0);
              setPeople(0);
              setTip(0);
              setTipPerPerson((0.0).toFixed(2));
              setTotalTip((0.0).toFixed(2));
              setAlert("hidden");
            }}
            value="RESET"
            disabled={bill === 0.0 && people === 0 && tip === 0}
            className="bg-[#26C0AB] text-[18px] text-[#00494D] disabled:cursor-default disabled:bg-[#C5E4E7] disabled:opacity-40 rounded-md p-1 w-full hover:bg-[#C5E4E7] hover:text-[#00494D] transtion-all ease-int-out cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
