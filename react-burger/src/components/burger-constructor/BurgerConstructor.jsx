import { Button, ConstructorElement, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import React from "react";
import OrderDetails from "../order-details/OrderDetails";
import styles from "./BurgerConstructor.module.css"
import MiddleIngredient from "./middle-ingredient/MiddleIngredient"
import OrderButton from "./order-button/OrderButton";
import PropTypes from "prop-types";

BurgerConstructor.propTypes = {
    ingredients: PropTypes.array.isRequired,
    onModalOpen: PropTypes.func.isRequired
}
function BurgerConstructor({ ingredients, onModalOpen }) {

    const bun = ingredients[0];
    const [price, setPrice] = React.useState(bun.price * 2);

    React.useEffect(() => {
        ingredients.forEach((ingredient) => {
            if (ingredient.type !== "bun") {
                setPrice(price + ingredient.price);
            }
        })
    }, [ingredients])

    function onOrderClick() {
        const node = <OrderDetails />
        onModalOpen(node);
    }

    return (
        <section className={styles.main + " pt-25"}>
                <div className="pl-8 pb-4">
                    <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={bun.price}
                    thumbnail={bun.image}
                    />
                </div>
            <div className={styles.ingredientsContainer}>
                {ingredients.map(function(ingredient) {
                    if (ingredient.type !== "bun") {
                        return <MiddleIngredient key={ingredient._id} ingredient={ingredient} />
                        }
                    }
                )}
            </div>
                <div className="pl-8 pt-4">
                        <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={bun.price}
                        thumbnail={bun.image}
                        />
                </div>
            <div className={styles.done + " pt-10"}>
                    <p className="text text_type_digits-medium">{price}</p>
                    <CurrencyIcon type="primary" />
                    <OrderButton onClick={onOrderClick} />
            </div>
        </section>
    )
}


export default BurgerConstructor