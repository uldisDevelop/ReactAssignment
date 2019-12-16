import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Rates.module.scss';
import Components from '../../../commons/index'
import {
    fetchRates,
    closeErrorMessgePanel
} from '../module'


const state = (store) => ({
    rates: store.rates,
});


const actions = {
    fetchRates,
    closeErrorMessgePanel
}

class Rates extends Component {
    render() {

        const { fetchRates, closeErrorMessgePanel, rates } = this.props;
        const { rateInfo, loading, errorMsgVisible, errorMsg } = rates;

        return (
            <div data-test='ratesComponent'>
                <Components.Button enabled={!loading} onClick={fetchRates}>Get Rates</Components.Button>                

                {errorMsgVisible &&
                    <Components.Alert title='Something went wrong' message={errorMsg} onClose={closeErrorMessgePanel} />
                }

                {loading &&
                    <Components.Loader />
                }

                {rateInfo !== null &&
                    <div>
                        <h3 className={styles.rateTitle}>Currency rates for {rateInfo.base} in {rateInfo.date}</h3>
                        <table className={styles.ratesTable}>
                            <thead>
                                <tr>
                                    <th>Currency code</th>
                                    <th>Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(rateInfo.rates).map(key => {
                                    return <tr key={key} data-test='rateRow'>
                                        <td className=''>{key}</td>
                                        <td className=''>{rateInfo.rates[key]}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                }

            </div>
        )
    }
}


export default connect(state, actions)(Rates);