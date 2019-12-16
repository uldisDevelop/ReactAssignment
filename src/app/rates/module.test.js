
import reducer, {        
    fetchRatesRequest,
    fetchRatesSuccess,
    fetchRatesError,
    closeErrorMessgePanel,
} from './module';


describe('Rates reducer', () => {

    const initState = {
        rateInfo: null,
        loading: false,
        errorMsg: null,
        errorMsgVisible: false
    }

    it('Return initial state', () => {
        const newState = reducer(undefined, {})
        expect(newState).toEqual(initState)
    });


    it('Fetch rates request', () => {
        const action = fetchRatesRequest();
        const newState = reducer(undefined, action);
        expect(newState.rateInfo).toBe(null);
        expect(newState.loading).toBe(true);
    });


    it('Fetch rates success', () => {
        const data = { rates: { CAD: 1.4712, HKD: 8.7062 }, base: 'EUR', date: '2019-12-13' };
        const action = fetchRatesSuccess({ data });
        const newState = reducer(undefined, action);
        expect(newState.rateInfo).toEqual(data);
        expect(newState.loading).toBe(false);
    });


    it('Fetch rates error', () => {
        const errorMsg = 'Test error message';
        const action = fetchRatesError({ errorMsg });
        const newState = reducer(undefined, action);
        expect(newState.rateInfo).toBe(null);
        expect(newState.errorMsg).toBe(errorMsg);
        expect(newState.loading).toBe(false);
        expect(newState.errorMsgVisible).toBe(true);
    });


    it('Close error message panel', () => {
        const action = closeErrorMessgePanel();
        const newState = reducer(undefined, action);
        expect(newState.errorMsgVisible).toBe(false);
        expect(newState.errorMsg).toBe(null);
    });

});