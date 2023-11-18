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
            setPrice(price + ingredient.price);
        })
    }, [ingredients])

    function onOrderClick() {
        const node = <OrderDetails />
        onModalOpen(node);
    }

    return (
        <section className={styles.main + " pt-25"}>
            <div className={styles.ingredientsContainer}>
                <div className="pl-8">
                    <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={bun.price}
                    thumbnail={bun.image}
                    />
                </div>
                {ingredients.map((ingredient) => (
                    <div key={ingredient._id}>
                        <MiddleIngredient ingredient={ingredient} />
                    </div>
                    )
                )}
                <div className="pl-8">
                    <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={bun.price}
                    thumbnail={bun.image}
                    />
                </div>
            </div>
            <div className={styles.done}>
                    <p className="text text_type_digits-medium">{price}</p>
                    <CurrencyIcon type="primary" />
                    <OrderButton onClick={onOrderClick} />
            </div>
        </section>
    )
}


export default BurgerConstructor