import React from 'react';
import styles from './Alert.module.scss'
import Button from '../button/Button'
import PropTypes from 'prop-types'

const Alert = ({ message, title, onClose }) => {
    return (
        <div data-test='alert'>
            <div className={styles.background} onClick={onClose}></div>
            <div className={styles.panel}>

                <div className={styles.title} data-test='title'>
                    {title}
                </div>
                <div data-test='message'>
                    {message}
                </div>
                <div className={styles.btnContainer}>
                    <Button onClick={onClose}>Ok</Button>
                </div>

            </div>
        </div>
    )
}

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Alert;