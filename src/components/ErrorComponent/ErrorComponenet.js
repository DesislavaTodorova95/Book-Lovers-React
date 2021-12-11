import { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import ErrorsContext from "../contexts/ErrorContext";

const  ErrorComponent=()=> {
  const { value,  setValue } = useContext(ErrorsContext);
 
  let valueList = []
 if (value && value.length > 1){
 
   Object.values(value).map((x)=> valueList.push(x) );
   valueList = valueList.join(' ')
 }
 useEffect(()=>{setTimeout(() => {
   setValue(null)

 }, 6000);},[setValue, value])
 
 
     return( 
      <article id="errorArticle" style={{display: value ? 'inline' : "none"}}>
        <div className="alert">
            <p className="errorParag">{valueList || value}</p>
            <style jsx>{`
              .errorParag {
                margin: 2px;
                padding: 2px;
                background-color: #ff6c37;
                font-size: 12px;
                color: white;
                height: 30px;
                width: 100px;
                left: 50px;

                display: flex;

                text-align: center;
                border: 3px solid #eb2224;
                border-radius: 3px;
              }
              ,
              .errorParag {
                background-color: #eb2224;
                border: 3px solid black;
                border-radius: 2px;
              }
             
            `}</style>
          </div>
          </article>
           
           
        )
      
  
}

export default ErrorComponent;
