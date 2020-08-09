import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations"; 
const state = {
    moduleHomeName: "About页面",
};
export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
}