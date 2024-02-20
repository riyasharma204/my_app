import React, {useAuth, useLocation} from 'react'

const RequierAuth = () => {
    const {auth} = useAuth();
    const location = useLocation();
    return (
        auth.token?<Outlet/> : <Navigate to = "/auth" state = {{from:location}} replace />
    );

}
export default RequierAuth;