import c from "../pages/TestingPage.module.css";

// function NavButton(props) {
//   return (
//     <a href="#" className={c.button}>
//       <span className={c.icon}>{props.icon}</span>
//       <span className={c.text}>{props.text}</span>
//     </a>
//   );
// }

function NavButton(props) {
  return (
    <div className={c.sti_container}>
      <button className={c.btn}>
        <span className={c["btn-icon"]}>
          <i>{props.icon}</i>
        </span>
        <span className={c["btn-text"]}>&nbsp;{props.text}</span>
      </button>
    </div>
  );
}

export default NavButton;
