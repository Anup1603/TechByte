import { createContext } from "react";

const TodaysTechContext = createContext({
  initialFacts: [],
  categories: [],
  addFact: () => {},
  showForm: () => {},
  setShowForm: () => {},
  setCurrCatogary: "",
  currCatagory: "",
  filteredFacts: [],
  updateLikes: () => {},
});

export default TodaysTechContext;
