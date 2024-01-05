/** Icons are imported separatly to reduce build time */
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon'
import BoltIcon from '@heroicons/react/24/outline/BoltIcon'
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon'
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Dashboard',
  },
  {
    path: '/leads', // url
    icon: <InboxArrowDownIcon className={iconClasses}/>, // icon component
    name: 'Leads', // name that appear in Sidebar
  },
  {
    path: '/transactions', // url
    icon: <CurrencyDollarIcon className={iconClasses}/>, // icon component
    name: 'Transactions', // name that appear in Sidebar
  },
  {
    path: '/charts', // url
    icon: <ChartBarIcon className={iconClasses}/>, // icon component
    name: 'Analytics', // name that appear in Sidebar
  },
  {
    path: '/integration', // url
    icon: <BoltIcon className={iconClasses}/>, // icon component
    name: 'Integration', // name that appear in Sidebar
  },
  {
    path: '/calendar', // url
    icon: <CalendarDaysIcon className={iconClasses}/>, // icon component
    name: 'Calendar', // name that appear in Sidebar
  },
  
]

export default routes

