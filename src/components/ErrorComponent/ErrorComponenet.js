import React, { useContext } from "react";
import errorIcon from "./static/error.png";
import { useEffect } from "react/cjs/react.development";
import ErrorsContext from "../contexts/ErrorContext";
import "./ErrorComponent.css";
const ErrorComponent = () => {
  const [ value, setValue ] = useContext(ErrorsContext);

  let valueList = [];
  if (value && value.length > 1) {
    Object.values(value).map((x) => valueList.push(x));
    valueList = valueList.join("");
  }
  useEffect(() => {
    setTimeout(() => {
      console.log('setted', value)
      setValue('');
    }, 6000);
  }, [setValue, value]);

  return (
    <article id="errorArticle" style={{ display: value ? "inline" : "none" }}>
      <div>
        <span className="errorSpan">
          <span className="errorImg">
            <img src={errorIcon} alt="ErrorIcon"></img>
          </span>
          <p className="errorText">{valueList || value}</p>
        </span>
      </div>
    </article>
  );
};

export default ErrorComponent;
