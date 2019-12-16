import React, { Component } from 'react';
import styles from './Button.module.scss'
import PropTypes from 'prop-types'

export default class Button extends Component {

    static propTypes = {
        onClick: PropTypes.func,
        enabled: PropTypes.bool,
        children: PropTypes.node
    }

    static defaultProps = {
        onClick: () => { },
        enabled: true,
        children: ''
    }

    render() {
        var { enabled, children, onClick } = this.props;
        var btnOptions = {};

        if (typeof (enabled) !== 'undefined' && !enabled) {
            btnOptions.disabled = 'disabled';
        }

        return (
            <button {...btnOptions}
                onClick={onClick.bind(this)}
                data-test='buttonComponent'
                className={'app-button ' + styles.button}>
                {children}
            </button>
        )
    }
}