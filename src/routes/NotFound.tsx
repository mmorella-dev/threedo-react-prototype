import { useLocation, useResolvedPath } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <h1>Route <code>{location.pathname}</code> not found.</h1>
      <p>⛔️ This page probably isn't ready yet. Sorry!</p>
    </>
  );
};

export default NotFound;
