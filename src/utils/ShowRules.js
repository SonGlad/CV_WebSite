export const ShowRules = (values, touched, errors) => {

  const getInputClass = (fieldName) => {
    return !values[fieldName]
      ? ""
      : touched && errors[fieldName]
      ? "ErrorInput"
      : "SuccessInput";
  };

  const getInputAlert = (fieldName) => {
    return !values[fieldName] ? (
      ""
    ) : touched && errors[fieldName] ? (
      <>
        <p className="ErrorText">{errors[fieldName]}</p>
        <div className="ImgError" />
      </>
    ) : (
      <>
        <p className="SuccessText">{`${fieldName} is correct`}</p>
        <div className="ImgCorrect" />
      </>
    );
  };

  return { getInputClass, getInputAlert };
};