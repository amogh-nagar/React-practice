import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import {useEffect, useState} from "react";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setmeals] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState("");
  // const [error, seterror] = useState(false);
  useEffect(() => {
    const fetchmeals = async () => {
      // console.log("Setloading is true");
      setisLoading(true);
      // console.log("Inside fetch meals");

      const res = await fetch(
        "https://react-food-order-1a583-default-rtdb.firebaseio.com/meals.json"
      );
      console.log(res.ok);
      if (!res.ok) {
        throw new Error("Some thing went wrong!");
        // console.log('errror!');
        // seterror(true);
        // return;
      }
      const data = await res.json();
      const loadedmeals = [];
      for (let key in data) {
        loadedmeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: +data[key].price,
        });
      }

      setmeals(loadedmeals);

      // console.log("Setloading is false");
      // if (loadedmeals.length === 0) {
      // }
      setisLoading(false);
    };
    // console.log("Useeffect");
    //  await fetchmeals();

    fetchmeals().catch((err) => {
      setisLoading(false);
      seterror(err.message);
    });
  }, []);

  if (error) {
    return (
      <section className={styles.errorinfetching}>
        <p>{error}</p>
      </section>
    );
  }

  // console.log("isLoading: ", isLoading);
  if (isLoading && !error) {
    return (
      <section className={styles.mealsloading}>
        <p>Loading...</p>
      </section>
    );
  }

  const mealslist = meals.map((meal) => (
    <MealItem
      name={meal.name}
      key={meal.id}
      id={meal.id}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealslist}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
