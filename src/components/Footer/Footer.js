import { Fragment } from "react/cjs/react.production.min";

const Footer = () => {
  return (
    <Fragment>
      <p className="Footer">&copy; 2021</p>
      <style jsx>{`
        .Footer {
          text-align: center;
          position:fixed;bottom:0; width:100%; display:block;
        }
      `}</style>
    </Fragment>
  );
};
export default Footer;
