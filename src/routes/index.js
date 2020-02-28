import CoreLayout from '../layouts/pageLayout/PageLayout'
import Home from './home'

import Drivers from './drivers'
import Cars from './cars'
import CreateCar from './createCar'
import Tasks from './tasks'
import CreateTask from './createTask'
import Reports from './reports'
import CreateReport from './createReport'

import {
    ADD_REPORT_PAGE_PATH,
    CREATE_CAR_PAGE_PATH, CREATE_TASK_PAGE_PATH,
    VIEW_ALL_DRIVERS_PAGE_PATH,
    VIEW_CARS_PAGE_PATH, VIEW_TASKS_PAGE_PATH
} from "../properties/properties";

export const createRoutes = (store) => ({
        childRoutes: [
            {
                path: '/',
                component: CoreLayout,
                indexRoute: Home,
                childRoutes: []
            },

            {
                path        : VIEW_ALL_DRIVERS_PAGE_PATH,
                component   : CoreLayout,
                indexRoute  : Drivers,
                childRoutes : [
                ]
            },

            {
                path        : VIEW_CARS_PAGE_PATH,
                component   : CoreLayout,
                indexRoute  : Cars,
                childRoutes : [
                ]
            },

            {
                path        : CREATE_CAR_PAGE_PATH,
                component   : CoreLayout,
                indexRoute  : CreateCar,
                childRoutes : [
                ]
            },

            {
                path        : VIEW_TASKS_PAGE_PATH,
                component   : CoreLayout,
                indexRoute  : Tasks,
                childRoutes : [
                ]
            },

            {
                path        : CREATE_TASK_PAGE_PATH,
                component   : CoreLayout,
                indexRoute  : CreateTask,
                childRoutes : [
                ]
            },

            {
                path        : '/reports',
                component   : CoreLayout,
                indexRoute  : Reports,
                childRoutes : [
                ]
            },

            {
                path        : ADD_REPORT_PAGE_PATH,
                component   : CoreLayout,
                indexRoute  : CreateReport,
                childRoutes : [
                ]
            },
        ]
    }
);

export default createRoutes
