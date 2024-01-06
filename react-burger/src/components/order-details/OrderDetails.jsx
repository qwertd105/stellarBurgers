import doneImg from "../../images/done.png"
import styles from "./OrderDetails.module.css"

function OrderDetails({id, status, name}) {
    return (
        <>
        <p className="text text_type_digits-large pt-30">{id}</p>
        <p className={styles.name + " text text_type_main-medium pt-8"}>
            идентификатор заказа.
        </p>
        <p className={styles.name + " text text_type_main-large pt-8"}>
            {name}
        </p>
        <img src={doneImg} alt="done" className="pt-15 "/>
        <p className="text text_type_main-small pt-15">
            {status}
        </p>
        <p className="text text_type_main-default text_color_inactive pt-2 pb-30">
            Дождитесь готовности на орбитальной станции
        </p>
        </>
    )
}

export default OrderDetails