export const Navigation = [
    // {
    //     name:'General',
    //     href:'/dashboard/general',
    //     isSingle:true,
    //     icon:'GeneralIcon',
    // },
    // {
    //     name:'Dashboard',
    //     href:'/',
    //     isSingle:false,
    //     icon:'DashboardIcon',
    //     sub:[
    //         {
    //             name:'Will Add More',
    //             href:'/', 
    //         }
    //     ]
    // },
    // {
    //     name:'Products',
    //     href:'/',
    //     isSingle:false,
    //     icon:'ProductIcon',
    //     sub:[
    //         {
    //             name:'List Products',
    //             href:'/dashboard/list_products', 
    //         },
    //         {
    //             name:'Add New Product',
    //             href:'/dashboard/add_Product', 
    //         }
    //     ]
    // },
    // {
    //     name:'Orders',
    //     href:'/',
    //     isSingle:false,
    //     icon:'OrderIcon',
    //     sub:[
    //         {
    //             name:'Analysis',
    //             href:'/', 
    //         },
    //         {
    //             name:'Delivered',
    //             href:'/', 
    //         },
    //         {
    //             name:'Shopping Cart',
    //             href:'/', 
    //         },
    //         {
    //             name:'Canceled',
    //             href:'/', 
    //         },
    //         {
    //             name:'Track Order',
    //             href:'/', 
    //         },
    //     ]
    // },
    {
        name:'Users',
        href:'/',
        isSingle:false,
        icon:'UserIcon',
        sub:[
            {
                name:'List users',
                href:'/dashboard/users', 
            },
            {
                name:'Add New User',
                href:'/dashboard/users/createuser', 
            }
        ]
    },
    {
        name:'Docs',
        href:'/',
        isSingle:false,
        icon:'DocsIcon',
        sub:[
            {
                name:'About us',
                ref:'_about',
                href:'/dashboard/docs/about', 
            },
            {
                name:'Privacy policy',
                ref:'_privacypolicy',
                href:'/dashboard/docs/privacypolicy', 
            },
            {
                name:'Refund Policy',
                ref:'_refundpolicy',
                href:'/dashboard/docs/refund_policy', 
            },
            {
                name:'Turm & Conditons',
                ref:'_termsconditions',
                href:'/dashboard/docs/termsconditions', 
            },
            {
                name:'F.A.Q',
                href:'/dashboard/docs/faq', 
            }
        ]
    },
]
