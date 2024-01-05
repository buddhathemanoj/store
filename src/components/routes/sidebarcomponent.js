import { lazy } from "react";

const Dashboard = lazy(() => import('../pages/dashboard/dashboard'));
const Leads = lazy(() => import('../pages/leads/leads'));
const Transactions = lazy(() => import ('../pages/transactions/transactions'));
const Analytics = lazy(() => import ('../pages/analytics/analytics'));
const Integration = lazy(() => import ('../pages/integration/integration'));
const Calendar = lazy(() => import ('../pages/calendar/calendar'));

const routes = [
    {
        path : '/dashboard',
        component : Dashboard
    },
    {
        path : '/leads',
        component : Leads
    },
    {
        path : '/transactions',
        component : Transactions
    },
    {
        path : '/charts',
        component : Analytics
    },
    {
        path : '/integration',
        component : Integration
    },
    {
        path : '/calendar',
        component : Calendar
    },
]

export default routes