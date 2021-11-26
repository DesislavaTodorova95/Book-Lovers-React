import { Fragment } from "react/cjs/react.production.min";

const Footer = () => {
  return (
    <Fragment>
      <p className="footer">&copy; 2021</p>
      <style jsx>{`
        .footer {
   position:absolute;
   text-align: center;
   bottom:0;
   width:100%;
   
   
   color: black;
        }
      `}</style>
    </Fragment>
  );
};
export default Footer;
