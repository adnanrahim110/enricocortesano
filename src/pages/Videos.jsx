import React, { useEffect } from "react";
import Menu from "../components/Menu";

const Videos = ({ isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    const hideLinks = () => {
      document
        .querySelectorAll(
          'a[href="https://elfsight.com/youtube-channel-plugin-yottie/?utm_source=websites&utm_medium=clients&utm_content=yottie&utm_term=localhost&utm_campaign=free-widget"]'
        )
        .forEach((el) => (el.style.display = "none"));
    };

    hideLinks();

    const observer = new MutationObserver(hideLinks);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="container xl">
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
        <div
          class="elfsight-app-d402f4f4-7cf1-469c-9280-7e6aefc78636"
          data-elfsight-app-lazy
        ></div>
      </div>
    </>
  );
};

export default Videos;
