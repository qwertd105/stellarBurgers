import doneImg from "../../images/done.png"

function OrderDetails() {
    return (
        <>
        <p className="text text_type_digits-large pt-30">123456</p>
        <p className="text text_type_main-medium pt-8">
            идентификатор заказа.
        </p>
        <img src={doneImg} alt="done" className="pt-15 "/>
        <p className="text text_type_main-small pt-15">
            Ваш заказ начали готовить
        </p>
        <p className="text text_type_main-default text_color_inactive pt-2 pb-30">
            Дождитесь готовности на орбитальной станции
        </p>
        </>
    )
}

export default OrderDetails