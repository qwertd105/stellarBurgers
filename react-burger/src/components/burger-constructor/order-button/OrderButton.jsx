import { Button } from "@ya.praktikum/react-developer-burger-ui-components"

import PropTypes from "prop-types";

OrderButton.propTypes = {
    onClick: PropTypes.func.isRequired
}
function OrderButton({ onClick }) {
    return (
        <div className="pl-10">
            <Button htmlType="button" type="primary" size="medium" onClick={onClick}>
            Оформить заказ
            </Button>
        </div>
    )
}

export default OrderButton