import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function Home() {
  const auth = useSelector((state) => state.auth);

  const renderContent = () => {
    console.log('auth', auth);

    switch (auth) {
      case null:
        return <>Loading...</>;
      case '':
        return <Redirect to="/login" />;
      default:
        return (
          <>
            Hello <b>{auth.username}</b>, you're logged in!
          </>
        );
    }
  };

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 600, paddingTop: '16vh' }}
    >
      {renderContent()}
    </div>
  );
}
