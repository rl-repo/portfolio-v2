import cssClass from "./NavButton.module.css";

function NavButton(props) {
  function handleClick() {
    let e = document.getElementById(props.sectionId);
    e.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  }

  return (
    <div className={cssClass.sti_container}>
      <button className={cssClass.btn} onClick={handleClick}>
        <span className={cssClass["btn-icon"]}>
          <i>{props.icon}</i>
        </span>
        <span className={cssClass["btn-text"]}>&nbsp;{props.text}</span>
      </button>
    </div>
  );
}

export default NavButton;
