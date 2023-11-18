import React, { FunctionComponent } from 'react';
import styles from './ModalOverlay.module.css';
import PropTypes from "prop-types";

ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired
}

function ModalOverlay({onClick}) {

    return (
        <div className={styles.overlay} onClick={onClick}>
        </div>
    )
}

export default ModalOverlay;