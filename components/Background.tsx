const Background = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 grid-bg opacity-50" />
      <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-225 h-150 pointer-events-none z-0 hero-glow opacity-70" />
    </>
  );
};

export default Background;
