function Error() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>The page you or the app was trying navigate to does not exist.</p>
      <p>Please return to the <a href='/'>home page</a> and try again.</p>
    </div>
  );
}

export default Error;