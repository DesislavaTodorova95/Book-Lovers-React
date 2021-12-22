import { Fragment } from "react/cjs/react.production.min";

const Footer = () => {
  return (
    <Fragment>
      <p className="footer">&copy; 2021</p>
      <style jsx>{`
        .footer {
   position:fixed;
   text-align: center;
   bottom:0;
   width:100%;
   margin-bottom:0;
   background-color: #F5CB79;
   border-top:3px solid #551A8B;
   
   
   color: black;
        }
      `}</style>
    </Fragment>
  );
};
export default Footer;
