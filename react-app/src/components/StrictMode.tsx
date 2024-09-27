function StrictMode() {
  return (
    <div style={{ background: "#cfe2ff" }}>
      <div>
        StrictMode is a tool to highlight potential problems in an application
      </div>
      <div>Like Fragment, StrictMode does not render any visible UI</div>
      <div>
        It activates additional check and warning for its descendants. Your
        components will be checked for usage of deprecated APIs
      </div>
      <div>
        All these checks are for development only and does not impact the
        production build.
      </div>
      <div>In react v18, strict mode is enabled by default.</div>
    </div>
  );
}

export default StrictMode;
