import React, { useContext } from "react";
import errorIcon from './static/error.png'
import  { useEffect } from "react/cjs/react.development";
import ErrorsContext from "../contexts/ErrorContext";

const  ErrorComponent=()=> {
  const { value,  setValue } = useContext(ErrorsContext);
 
  let valueList = []
 if (value && value.length > 1){
 
   Object.values(value).map((x)=> valueList.push(x) );
   valueList = valueList.join('')
 }
 useEffect(()=>{setTimeout(() => {
   setValue(null)

 }, 6000);},[setValue, value])
 
 
     return( 
      <article id="errorArticle" style={{display: value ? 'inline' : "none"}}>
        <div>
            <span className="errorSpan">
              <span className="errorImg"><img  src={errorIcon} alt="ErrorIcon"></img></span>
              <p className="errorText">{valueList || value}</p>
              </span>
            <style jsx>{`
              .errorSpan {
                 position:fixed;
                margin: 120px 2px 2px 2px;
                padding: 2px;
                background-color: #FFE4C4;
                font-size: 20px;
                color: #3D1C0B;
                height: auto;
                width: 200px;
                left: 50px;

                display: flex;

                text-align: center;
                border: 5px solid #FF0000;
                border-radius: 8px;
              },
              .errorText{margin:10px},
              .errorImg{
                float: left;
                height: 50px;
                width: 50px;
                margin-top:1px;
                margin-left: 1px;
              },
              
              .errorSpan {
                background-color: #eb2224;
                border: 3px solid black;
                border-radius: 2px;
                font-family:'Helvetica', sans-serif;
              }
             
            `}</style>
          </div>
          </article>
           
           
        )
      
  
}

export default ErrorComponent;
