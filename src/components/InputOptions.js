export default function InputOptions({
  personIndex,
  options,
  ratingArr,
  setRatingArr,
}) {
  const handleChange = (e) => {
    console.log(personIndex);
    setRatingArr((prevArr) => {
      const updatedArray = [...prevArr];
      updatedArray[personIndex] = Number(e.target.value);
      return updatedArray;
    });
  };

  return (
    <select
      value={ratingArr[personIndex]}
      onChange={handleChange}
      className="input--option"
    >
      {options.map(({ content, value }) => (
        <option value={value} key={value}>
          {content}
        </option>
      ))}
    </select>
  );
}
