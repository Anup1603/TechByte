import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import TodaysTechContext from "./stores/Todays-TechContext";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];
/*
const dummyFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "science",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

*/

function App() {
  const [initialFacts, setInitialFacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currCatagory, setCurrCatogary] = useState("all");
  const [fetching, setFetching] = useState(false);

  const getNews = async () => {
    setFetching(true);

    const res = await fetch("https://techbyte-api.onrender.com/api/all");
    const data = await res.json();

    if (res.ok) {
      setInitialFacts(data);
      setFetching(false);
    }
  };

  const addFact = async (text, source, category) => {
    const newNews = { text, source, category };

    const res = await fetch("https://techbyte-api.onrender.com/api/all", {
      method: "POST",
      body: JSON.stringify(newNews),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("ERROR: Insertion not happen");
    }

    if (res.ok) {
      setInitialFacts(data);
      getNews();
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const filteredFacts =
    currCatagory === "all"
      ? initialFacts
      : initialFacts.filter((fact) => fact.category === currCatagory);

  return (
    <TodaysTechContext.Provider
      value={{
        initialFacts,
        categories: CATEGORIES,
        addFact,
        showForm,
        setShowForm,
        currCatagory,
        setCurrCatogary,
        filteredFacts,
        fetching,
        setFetching,
      }}
    >
      <div className="container">
        <Header />
        {showForm ? <Form /> : null}
        <MainSection />
      </div>
    </TodaysTechContext.Provider>
  );
}

export default App;
