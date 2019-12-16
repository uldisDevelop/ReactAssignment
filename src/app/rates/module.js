import produce from "immer"

//types
export const FETCH_RATES_REQUEST = 'rates/fetchRatesRequest'
export const FETCH_RATES_SUCCESS = 'rates/fetchRatesSuccess'
export const FETCH_RATES_ERROR = 'rates/fetchRatesError'

export const CLOSE_ERROR_MESSAGE_PANEL = 'rates/closeAlertBox'

//inital state
const initialState = {
  rateInfo: null,
  loading: false,
  errorMsg: null,
  errorMsgVisible: false
}

//reducer
export default (state = initialState, action) => produce(state, (draft) => {

  switch (action.type) {

    case FETCH_RATES_REQUEST:
      draft.rateInfo = null;
      draft.loading = true;
      break;

    case FETCH_RATES_SUCCESS:
      draft.rateInfo = action.data;
      draft.loading = false;
      break;

    case FETCH_RATES_ERROR:
      draft.rateInfo = null;
      draft.errorMsg = action.errorMsg;
      draft.loading = false;
      draft.errorMsgVisible = true;
      break;

    case CLOSE_ERROR_MESSAGE_PANEL:
      draft.errorMsgVisible = false;
      draft.errorMsg = null;
      break;

    default:
      return draft;
  }
});

//actions
export const closeErrorMessgePanel = () => ({ type: CLOSE_ERROR_MESSAGE_PANEL })
export const fetchRatesRequest = () => ({ type: FETCH_RATES_REQUEST })
export const fetchRatesError = ({ errorMsg }) => ({ type: FETCH_RATES_ERROR, errorMsg })
export const fetchRatesSuccess = ({ data }) => ({ type: FETCH_RATES_SUCCESS, data })

export const fetchRates = () => {
  return (dispatch) => {

    dispatch(fetchRatesRequest())

    fetch('https://api.exchangeratesapi.io/latest', { method: 'GET' })
      .then((response) => {
        response.json().then((data) => {

            if (response.ok) {
              dispatch(fetchRatesSuccess({data}))
            }
            else {
              dispatch(fetchRatesError({ errorMsg: 'Could not load the currency rates...' }))
            }

          });
      })
  }
}