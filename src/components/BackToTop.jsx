import { useEffect } from "react";
import $ from "jquery";

function BackToTop() {
  useEffect(() => {
    const boton = $("#back-to-top");

    boton.hide();

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 300) {
        boton.fadeIn();
      } else {
        boton.fadeOut();
      }
    });

    boton.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
    });

    return () => {
      $(window).off("scroll");
      boton.off("click");
    };
  }, []);

  return (
    <button
  id="back-to-top"
  className="back-to-top"
  aria-label="Volver arriba"
>
  ↑
</button>
  );
}

export default BackToTop;