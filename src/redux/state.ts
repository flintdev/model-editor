// redux/state.ts

export interface StoreState {
    schemaTree: {
        nodeSelected: object | null,
    }
}

export const initState: StoreState = {
    schemaTree: {
        nodeSelected: null,
    }
};