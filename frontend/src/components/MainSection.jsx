import { useContext } from "react";
import Categories from "./Categories";
import FactsList from "./FactsList";
import TodaysTechContext from "../stores/Todays-TechContext";
import Loader from "./Loader";

function MainSection() {
  const { fetching } = useContext(TodaysTechContext);

  return (
    <>
      <main className="main">
        <Categories />
        {fetching ? <Loader /> : <FactsList />}
      </main>
    </>
  );
}

export default MainSection;
