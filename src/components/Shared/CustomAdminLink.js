import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomAdminLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ background: match ? "#1947EE" : "" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomAdminLink;