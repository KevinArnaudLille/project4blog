const INITIAL_STATE = {
    scrollYValue:0
}

window.addEventListener("scroll", () => INITIAL_STATE.scrollYValue=window.scrollY)

function scrollYStoreReducer(state = INITIAL_STATE) {

  return state

}

export default scrollYStoreReducer;