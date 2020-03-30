import React, { useContext, useReducer, createContext } from "react";

const gameContext = createContext({
    score: 0,
    isClicked: false,
    gameOver: true
});

const { Provider } = gameContext;

const reducer = (state, action) => {
    switch (action.type) {
        case "Score-Check":
            return [
                ...state,
                {
                    isChecked: false,
                    gameOver: true,
                    score: 0
                }];
        case "score":
            return [
                ...state,
                {
                    isChecked: true,
                    gameOver: false,
                    score: action.score += 1
                }];
        default: return state;
    }
};
function ScoreProvider({ value = [], ...props }) {

    const [state, dispatch] = useReducer(reducer, []);

    return <Provider value={[state, dispatch]} {...props} />;
}
function useScoreContext() {
    return useContext(gameContext);
}
export default { ScoreProvider, useScoreContext };