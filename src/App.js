import "./styles.css";
import Question from "./components/Question";
import { useState } from "react";
import Message from "./components/Message";

const options = [
  { content: "Ugh, better not to say! 0%", value: 0 },
  { content: "not bad! 5%", value: 5 },
  { content: "it was good! 10%", value: 10 },
  { content: "absolutely amazing! 20%", value: 20 },
];

const MAX_PEOPLE = 10;

export default function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [number, setNumber] = useState(1);
  const [ratingArr, setRatingArr] = useState([0]);

  if (ratingArr.length < number && number <= MAX_PEOPLE) {
    setRatingArr((prevArr) =>
      gimmeArray(number, false).map((value, i) =>
        i < prevArr.length ? prevArr[i] : value
      )
    );
  }
  if (ratingArr.length > number) {
    setRatingArr((prevArr) => {
      const updatedArr = [...prevArr];
      updatedArr.length = number;
      return updatedArr;
    });
  }

  let tip;

  function calculateTip() {
    const numberOfPeople = number;
    const ratings = ratingArr;

    console.log(ratings);
    const avg =
      ratings.reduce((acc, value) => (acc += value), 0) / numberOfPeople;
    return Math.round((avg / 100) * billAmount);
  }

  return (
    <div className="App">
      <h1 className="title">Tipulator</h1>
      <Question
        placeholder="369$"
        number={billAmount}
        setNumber={setBillAmount}
      >
        How much was the bill?
      </Question>

      <Question placeholder="Were you 3?" number={number} setNumber={setNumber}>
        How many were you?
      </Question>

      {number !== 0 && number <= MAX_PEOPLE ? (
        gimmeArray(number).map((i) => (
          <Question
            personIndex={i}
            options={options}
            ratingArr={ratingArr}
            setRatingArr={setRatingArr}
            key={i}
          >
            how did person {i + 1} like the service?
          </Question>
        ))
      ) : number > MAX_PEOPLE ? (
        <Message>Whoooh!! That's too much — to handle🥵!</Message>
      ) : (
        <Message>You need to be at least SOLO</Message>
      )}

      {number > 0 && number <= MAX_PEOPLE && (
        <Message>
          You pay ${billAmount + calculateTip()} (${billAmount} + $
          {calculateTip()} tip)
        </Message>
      )}

      {ratingArr.filter((value) => value !== 0).length > 0 && (
        <button
          onClick={() => setRatingArr((prevArr) => prevArr.map((_) => 0))}
        >
          Reset rating
        </button>
      )}
    </div>
  );
}

function gimmeArray(arrLength, inc = true) {
  return inc
    ? Array.from({ length: arrLength }, (_, i) => i)
    : Array.from({ length: arrLength }).fill(0);
}
