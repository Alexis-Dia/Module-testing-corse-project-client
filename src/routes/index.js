import CoreLayout from '../layouts/pageLayout/PageLayout'
import Home from './home'
import Reports from './reports'

export const createRoutes = (store) => ({
        childRoutes: [
            {
                path: '/',
                component: CoreLayout,
                indexRoute: Home,
                childRoutes: []
            },
            {
                path        : '/reports',
                component   : CoreLayout,
                indexRoute  : Reports,
                childRoutes : [
                ]
            },
        ]
    }
);

export default createRoutes
