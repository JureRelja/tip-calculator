import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tip, setTip] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState((0.0).toFixed(2));
  const [totalTip, setTotalTip] = useState((0.0).toFixed(2));
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);

  useEffect(() => {
    if (bill > 0 && people > 0) {
      setTotalTip(Math.round((bill * tip) / 100).toFixed(2));
      setTipPerPerson(Math.round((bill * tip) / 100 / people).toFixed(2));
    }
  }, [tip, bill, people]);

  return (
    <div className="bg-[#C5E4E7] h-[100vh] flex justify-center items-center flex-col">
      <img src="./src/assets/logo.svg" className="mb-12" />
      <div className="bg-white rounded-xl flex flex-row p-8 shadow-xl space-x-10">
        <div className="flex flex-col space-y-10 w-[300px]">
          <label className="flex flex-col items-start ">
            <span className="mb-1 text-[#5E7A7D] text-[14px]">Bill</span>
            <div className="flex flex-row items-center w-full">
              <img
                src="./src/assets/icon-dollar.svg"
                className="h-[16px] ml-3 absolute pointer-events-none"
              />
              <input
                type="number"
                className="bg-[#F4FAFA] text-right text-[#00494D] h-full transition-all ease-in-out  w-full hover:outline focus:outline outline-[#26C0AB] outline-1 rounded-md px-3 py-1 placeholder:text-[#7F9C9F] placeholder:text-[18px] text-[18px]"
                placeholder="0"
                value={bill === 0 ? "" : bill}
                onChange={(e) => setBill(e.target.value)}
              />
            </div>
          </label>
          <div className="flex flex-col">
            <span className="mb-1 text-[#5E7A7D] text-[14px]">
              Select tip %
            </span>
            <div className="grid grid-rows-2 grid-cols-3 space gap-4 mt-1">
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
                className="bg-[#F4FAFA] rounded-md text-[#00494D] px-3 text-right placeholder:text-[#00494D] placeholder:text-center hover:outline focus:outline outline-1 outline-[#26C0AB] transtion-all ease-int-out"
                placeholder="Custom"
                value={tip === 0 ? "" : tip}
                onChange={(e) => {
                  setTip(e.target.value);
                }}
              />
            </div>
          </div>
          <label className="flex flex-col items-start">
            <span className="mb-1 text-[#5E7A7D] text-[14px]">
              Number of people
            </span>
            <div className="flex flex-row items-center w-full">
              <img
                src="./src/assets/icon-person.svg"
                className="h-[16px] ml-3 absolute pointer-events-none"
              />
              <input
                type="number"
                className={`peer bg-[#F4FAFA] text-right text-[18px] text-[#00494D] h-full transition-all ease-in-out w-full hover:outline focus:outline outline-[#26C0AB] outline-1 rounded-md px-3 py-1 placeholder:text-[#7F9C9F] placeholder:text-[18px]`}
                placeholder="0"
                value={people === 0 ? "" : people}
                onChange={(e) => setPeople(e.target.value)}
              />
            </div>
          </label>
        </div>
        <div className="bg-[#00494D] rounded-lg w-[300px] flex flex-col space-y-2 items-center h-full px-6 py-8">
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
            }}
            value="RESET"
            disabled={bill === 0.0 && people === 0 && tip === 0}
            className="bg-[#26C0AB] text-[18px] text-[#00494D] disabled:cursor-default  disabled:bg-[#C5E4E7] disabled:opacity-40 rounded-md p-1 w-full hover:bg-[#C5E4E7] hover:text-[#00494D] transtion-all ease-int-out cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
