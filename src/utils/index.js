import rootReducer from '../reducer'
import { composedEnhancers } from '../store'
import { createStore } from 'redux'


export function findByTestAttr(component, attr) {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export function createTestStore() {
    const store = createStore(rootReducer, composedEnhancers);
    return store;
}

