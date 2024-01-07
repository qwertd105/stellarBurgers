import { Button } from "@ya.praktikum/react-developer-burger-ui-components"
import PropTypes from "prop-types";

OrderButton.propTypes = {
    onClick: PropTypes.func.isRequired
}
function OrderButton({ onClick, text }) {
    return (
        <div className="pl-10">
            <Button htmlType="button" type="primary" size="medium" onClick={onClick}>
            {text}
            </Button>
        </div>
    )
}

export default OrderButton