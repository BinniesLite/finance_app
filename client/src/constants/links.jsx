import {BsCash} from "react-icons/bs"
import {FaWallet} from "react-icons/fa"
import {AiFillDollarCircle} from "react-icons/ai"
import {HiSquares2X2} from "react-icons/hi2"
import {TbReportAnalytics} from "react-icons/tb"

export const links = [
    {
        name: 'dashboard',
        path: '/',
        icon: <HiSquares2X2 style={{color: "#948B93"}} />
    },
    {
        name: 'transactions',
        path: '/transactions',
        icon: <BsCash style={{color: "#948B93"}} />
    },
    {
        name: 'wallets',
        path: '/wallets',
        icon: <FaWallet style={{color: "#948B93"}}  />
    },
    {
        name: 'virtual assistant',
        path: '/virtual-assistant',
        icon: <AiFillDollarCircle style={{color: "#948B93"}} />
    },
    {
        name: 'reports',
        path: '/reports',
        icon: <TbReportAnalytics style={{color: "#948B93"}} />
    },
]