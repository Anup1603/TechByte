import { useContext } from "react";
import TodaysTechContext from "../stores/Todays-TechContext";

function Categories() {
  const { categories, setCurrCatogary } = useContext(TodaysTechContext);

  return (
    <>
      <aside>
        <ul>
          <li>
            <button
              className="btn btn-all-categories"
              onClick={() => setCurrCatogary("all")}
            >
              All
            </button>
          </li>

          {categories.map((item) => (
            <li key={item.name}>
              <button
                className="btn btn-category"
                style={{ backgroundColor: `${item.color}` }}
                onClick={() => {
                  setCurrCatogary(item.name);
                }}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default Categories;
