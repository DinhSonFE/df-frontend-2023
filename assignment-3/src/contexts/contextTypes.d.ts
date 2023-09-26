type TDataContextValue = {
    state: typeof initialState;
    dispatch: Dispatch<TAction>;
};