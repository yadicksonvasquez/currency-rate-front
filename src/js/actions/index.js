/***
 * Action creators objets
 * @author yadicksonvasquez@gmail.com
 */

import { REFRESH_DOLAR_QUOTATION, REFRESH_EURO_QUOTATION, REFRESH_REAL_QUOTATION } from "../constants/action-types";

export function loadDolarRate(message) {
    return { type: REFRESH_DOLAR_QUOTATION, message }
};

export function loadEuroRate(message) {
    return { type: REFRESH_EURO_QUOTATION, message }
};

export function loadRealRate(message) {
    return { type: REFRESH_REAL_QUOTATION, message }
};
