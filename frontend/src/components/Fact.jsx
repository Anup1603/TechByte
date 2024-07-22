import { useContext, useState } from "react";
import TodaysTechContext from "../stores/Todays-TechContext";

function Fact({ item }) {
  const [interest, setInterest] = useState(0);
  const [mindblow, setMindblow] = useState(0);
  const [wronginfo, setWronginfo] = useState(0);

  const { categories } = useContext(TodaysTechContext);

  return (
    <>
      <li className="fact">
        <p>
          {item.text}
          <a className="source" href={item.source} target="_blank">
            (Source)
          </a>
        </p>
        <span
          className="tag"
          style={{
            backgroundColor: categories.find(
              (cate) => cate.name === item.category
            ).color,
          }}
        >
          #{item.category}#{" "}
        </span>
        <div className="vote-buttons">
          <button onClick={() => setInterest(interest + 1)}>
            👍🏻 {item.votesInteresting + interest}
          </button>
          <button onClick={() => setMindblow(mindblow + 1)}>
            🤯 {item.votesMindblowing + mindblow}
          </button>
          <button onClick={() => setWronginfo(wronginfo + 1)}>
            ❌ {item.votesFalse + wronginfo}
          </button>
        </div>
      </li>
    </>
  );
}

export default Fact;
