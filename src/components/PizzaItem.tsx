import Button from "./Button";

interface PizzaItemProps {
  name: string;
  ingredients: string;
  photoName: string;
  price: number;
  soldOut: boolean;
}

function PizzaItem(props: PizzaItemProps) {
  return (
    <article
      className={`bg-white-600 rounded-m flex flex-col lg:flex-row ${
        props.soldOut ? "opacity-50" : ""
      }`}
    >
      <img
        src={props.photoName}
        alt={props.name}
        className={`aspect-square w-full self-start rounded-md object-cover lg:w-48 ${
          props.soldOut ? "grayscale" : ""
        }`}
        loading="lazy"
      />
      <div className="flex flex-1 flex-col justify-center p-5">
        <h3 className="mb-3 text-2xl font-bold">{props.name}</h3>
        <p className="mb-3">{props.ingredients}</p>
        <p className="text-2xl font-bold">$ {props.price}</p>
        <div className="flex justify-end">
          <Button soldOut={props.soldOut}></Button>
        </div>
      </div>
    </article>
  );
}
export default PizzaItem;
