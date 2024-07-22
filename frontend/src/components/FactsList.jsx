import { useContext } from "react";
import Fact from "./Fact";
import TodaysTechContext from "../stores/Todays-TechContext";

function FactsList() {
  const { filteredFacts } = useContext(TodaysTechContext);

  return (
    <>
      <section>
        <ul id="fact-lists">
          {filteredFacts.length === 0 && (
            <p className="loading">
              No fact from this category yet. Create the first one ...!!
            </p>
          )}

          {filteredFacts.map((item) => (
            <Fact key={item._id} item={item} />
          ))}
        </ul>
        <p style={{ margin: "20px 0 20px 0" }}>
          There are {filteredFacts.length} Facts in Database. Add Your Own !!
        </p>
      </section>
    </>
  );
}

export default FactsList;
