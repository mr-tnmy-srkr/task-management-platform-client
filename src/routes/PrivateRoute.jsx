import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import Loader from '../components/Loader/Loader';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()
  // console.log(loading)
  if (loading) return <Loader />
  if (user) return children
  return <Navigate to='/login' state={{ from: location }} replace='true' />
}
PrivateRoute.propTypes = {
    children: PropTypes.object.isRequired
  };
export default PrivateRoute