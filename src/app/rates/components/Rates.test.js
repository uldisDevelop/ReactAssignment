import React from 'react'
import Rates from './Rates'
import {shallow} from 'enzyme'
import {findByTestAttr, createTestStore} from '../../../utils'
import {fetchRatesSuccess} from '../module'

describe('Rates component', () => {
     
    let store;
    beforeEach(()=>{
        store = createTestStore();
    })

    it('Should render Rates without errors',()=>{        
        const component = shallow(<Rates store={store} />).childAt(0).dive();        
        expect(findByTestAttr(component, 'ratesComponent').length).toBe(1);
    })

    it('Should render Rates with test data',()=>{
        const data = { rates: { CAD: 1.4712, HKD: 8.7062 }, base: 'EUR', date: '2019-12-13' };
        store.dispatch(fetchRatesSuccess({ data }));        

        const component = shallow(<Rates store={store} />).childAt(0).dive();       
        expect(findByTestAttr(component, 'rateRow').length).toBe(Object.keys(data.rates).length);
    })
})