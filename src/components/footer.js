import React from "react";

function Footer() {
  let footerstyle = { position: "relative", bottom: "0vh", width: "100%" };
  return (
    <div>
      <footer style={footerstyle} className="bg-dark text-light py-3 mt-3">
        <p className="text-center">
          Copyright &copy; Vaibhav Gupta's Todo's List
        </p>
      </footer>
    </div>
  );
}

export default Footer;
