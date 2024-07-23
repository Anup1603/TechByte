import { useContext } from "react";
import TodaysTechContext from "../stores/Todays-TechContext";

function Header() {
  const { showForm, setShowForm } = useContext(TodaysTechContext);

  const openCloseForm = () => {
    setShowForm((show) => !show);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <h1 className="title">@Tech-Byte</h1>
        </div>
        <button className="btn btn-large" id="shareBtn" onClick={openCloseForm}>
          {showForm ? "CLOSE" : "SHARE A FACT"}
        </button>
      </header>
    </>
  );
}

export default Header;
