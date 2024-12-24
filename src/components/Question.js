import InputText from "./InputText";

import InputOptions from "./InputOptions";
export default function Question({
  children,
  placeholder,
  options = [],
  number,
  setNumber,
  personIndex,
  ratingArr,
  setRatingArr,
}) {
  return (
    <div className="row">
      <label className="question">{children}</label>
      {options.length !== 0 ? (
        <InputOptions
          personIndex={personIndex}
          ratingArr={ratingArr}
          setRatingArr={setRatingArr}
          options={options}
        />
      ) : (
        <InputText number={number} setNumber={setNumber}>
          {placeholder}
        </InputText>
      )}
    </div>
  );
}
