import { Button, ConstructorElement, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import React, { useRef } from "react";
import OrderDetails from "../order-details/OrderDetails";
import styles from "./BurgerConstructor.module.css"
import MiddleIngredient from "./middle-ingredient/MiddleIngredient"
import OrderButton from "./order-button/OrderButton";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { AddIngredient, DeleteIngredient } from "../../services/actions/IngredientsConstructor";
import { BUN } from "../../utils/constants";
import { openOrderModal, closeOrderModal, makeOrder } from "../../services/actions/order";
import Modal from "../Modal/Modal";

function BurgerConstructor() {

    const dispatch = useDispatch()
    const ingredientsConstructor = useSelector( (store) => store.ingredientsConstructor )
    const order = useSelector((store) => store.order)

    const ref = useRef(null)
    const data = ingredientsConstructor.bun != null ? {
        ingredients: [...ingredientsConstructor.ingredients.map((item) => item.ingredient._id), ingredientsConstructor.bun._id, ingredientsConstructor.bun._id]
    } : null

    const [{ isHoverr }, dropRef] = useDrop({
        accept: "constructor",
        collect: (monitor) => ({
          isHoverr : monitor.isOver()
        })
      })

    const [{ isHover }, drop] = useDrop({
        accept: "ingredient",
        collect: (monitor) => ({
          isHover: monitor.isOver(),
        }),
        drop({ ingredient }) {
          if ( ingredient.type === "bun" ) {
            if (ingredientsConstructor.bun != null) {
                    dispatch(
                        DeleteIngredient(
                          ingredientsConstructor.bun,
                          ingredientsConstructor.bun._id
                        )
                      );
                }
            dispatch(AddIngredient(ingredient));
          } else {
            if (ingredientsConstructor.bun != null) {
                dispatch(AddIngredient(ingredient));
            }
          }
        },
      });

    const bun = ingredientsConstructor.ingredients.filter((it) => it.ingredient.type === BUN);
    const [price, setPrice] = React.useState(2);


    function onOrderClick() {
        dispatch(makeOrder(data))
        dispatch(openOrderModal())
    }

    return (
        <section className={styles.main + " pt-25"} ref={drop(dropRef(ref))}>
                {ingredientsConstructor.bun != null
                    &&
                    <>
                        <div className="pl-8 pb-4">
                            <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={ingredientsConstructor.bun.name + " (верх)"}
                            price={ingredientsConstructor.bun.price}
                            thumbnail={ingredientsConstructor.bun.image}
                            />
                        </div>
                        <div className={styles.ingredientsContainer}>
                            {ingredientsConstructor.ingredients.map(function(it) {
                                if (it.ingredient.type !== "bun") {
                                    return <MiddleIngredient key={it.id} ingredient={it.ingredient} id={it.id}/>
                                    }
                                }
                            )}
                        </div>
                        <div className="pl-8 pt-4">
                                <ConstructorElement
                                type="bottom"
                                isLocked={true}
                                text={ingredientsConstructor.bun.name + " (низ)"}
                                price={ingredientsConstructor.bun.price}
                                thumbnail={ingredientsConstructor.bun.image}
                                />
                        </div>
                    </>
                
                }
            <div className={styles.done + " pt-10"}>
                    {ingredientsConstructor.bun == null &&
                        <p className="text text_type_main-large">Выберите булки</p>}
                    {ingredientsConstructor.bun != null &&
                        <>
                        <p className="text text_type_digits-medium">{ingredientsConstructor.price}</p>
                        <CurrencyIcon type="primary" />
                        <OrderButton onClick={onOrderClick}  text="Оформить заказ"/>
                        </>
                        
                    }
            </div>

            {order.open_modal && order.success && 
                <Modal onClose={() => dispatch(closeOrderModal())}>
                    <OrderDetails id={order.id} status={order.status} name={order.name}/>
                 </Modal>
            }

        </section>
    )
}


export default BurgerConstructor