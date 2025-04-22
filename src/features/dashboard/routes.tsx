import {lazy, Suspense} from 'react'
import {RouteObject} from 'react-router-dom'
import {LoadingSpinner} from '@/components/ui/loading-spinner'
// import {RequireAuth} from '@/features/auth/components/require-auth'

const DashboardPage = lazy(() => import('@/pages/dashboard'))
// const UserDetailPage = lazy(() => import('./pages/user-detail'))
// const UserCreatePage = lazy(() => import('./pages/user-create'))
// const UserEditPage = lazy(() => import('./pages/user-edit'))

export const dashboardRoutes: RouteObject[] = [
    {
        path: '/',
        // element: <RequireAuth/>,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<LoadingSpinner/>}>
                        <DashboardPage/>
                    </Suspense>
                )
            },
            // {
            //     path: 'new',
            //     element: (
            //         <Suspense fallback={<LoadingSpinner/>}>
            //             <UserCreatePage/>
            //         </Suspense>
            //     )
            // },
            // {
            //     path: ':id',
            //     element: (
            //         <Suspense fallback={<LoadingSpinner/>}>
            //             <UserDetailPage/>
            //         </Suspense>
            //     )
            // },
            // {
            //     path: ':id/edit',
            //     element: (
            //         <Suspense fallback={<LoadingSpinner/>}>
            //             <UserEditPage/>
            //         </Suspense>
            //     )
            // }
        ]
    }
]
