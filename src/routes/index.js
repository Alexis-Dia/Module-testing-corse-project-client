import CoreLayout from '../layouts/pageLayout/PageLayout'
import Home from './home'

export const createRoutes = (store) => ({
        childRoutes: [
            {
                path: '/',
                component: CoreLayout,
                indexRoute: Home,
                childRoutes: []
            },
        ]
    }
);

export default createRoutes
