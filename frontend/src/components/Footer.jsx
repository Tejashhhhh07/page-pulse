import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-divider"></div>

      <p className="footer-credit">
        Built for{" "}
        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Digital Heroes Training Task
        </a>
      </p>

      <p className="footer-author">
        Designed & Developed by <span>Tejash Pal</span>
      </p>
    </footer>
  );
}

export default Footer;

// import "../Styles/Footer.css";

// function Footer() {
//   return (
//     <footer className="footer">
//       <p>
//         Built for{" "}
//         <a
//           href="https://digitalheroesco.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Digital Heroes Training Task
//         </a>
//       </p>
//     </footer>
//   );
// }

// export default Footer;