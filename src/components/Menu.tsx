import pizzas from "../../data/pizzaData.ts";
import PizzaItem from "./PizzaItem.tsx";

function Menu() {
  return (
    <section className="my-10 grid  grid-cols-1 gap-5 px-5 md:grid-cols-2">
      {pizzas.map((pizza) => (
        <PizzaItem {...pizza} />
      ))}
    </section>
  );
}

export default Menu;
