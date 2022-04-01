import { Navigate } from "react-router-dom";

export function PrivateOutlet({ auth, children }) {
	return auth ? children : <Navigate to='/' />;
}

export function PublicOutlet({ auth, children}) {
	return !auth ? children : <Navigate to='/dashboard' />;
}