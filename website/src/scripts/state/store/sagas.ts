import { appInitOperations } from '../ducks/app-init';

export const sagas = [
    appInitOperations.watchInitialiseApplication
]