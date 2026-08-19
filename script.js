document.addEventListener("DOMContentLoaded", function () {

  /* ========================================
     GOOGLE TRANSLATE
  ======================================== */

  const translateElement =
    document.querySelector(
      "#google_translate_element"
    );

  const translateMobileMenu =
    document.querySelector(
      "#mobileNavigation"
    );

  const translateDesktopNavigation =
    document.querySelector(
      ".navigation"
    );


  /*
   * Google Translateの表示位置を
   * PC / モバイルで切り替える
   */
  function moveGoogleTranslate() {

    if (
      !translateElement ||
      !translateMobileMenu ||
      !translateDesktopNavigation
    ) {
      return;
    }


    /*
     * モバイル
     */
    if (window.innerWidth <= 768) {

      if (
        !translateMobileMenu.contains(
          translateElement
        )
      ) {

        translateMobileMenu.appendChild(
          translateElement
        );

      }

    }


    /*
     * PC
     */
    else {

      if (
        !translateDesktopNavigation.contains(
          translateElement
        )
      ) {

        translateDesktopNavigation.appendChild(
          translateElement
        );

      }

    }

  }


  /*
   * Google Translateは非同期で
   * selectを生成するため、複数回確認
   */
  setTimeout(
    moveGoogleTranslate,
    300
  );

  setTimeout(
    moveGoogleTranslate,
    800
  );

  setTimeout(
    moveGoogleTranslate,
    1500
  );

  setTimeout(
    moveGoogleTranslate,
    3000
  );


  /*
   * 画面サイズ変更時
   */
  window.addEventListener(
    "resize",
    moveGoogleTranslate
  );


  /* ========================================
     MOBILE MENU
  ======================================== */

  const menuToggle =
    document.querySelector(
      ".menu-toggle"
    );

  const mobileNavigation =
    document.querySelector(
      ".mobile-navigation"
    );

  const mobileLinks =
    document.querySelectorAll(
      ".mobile-navigation a"
    );


  if (
    menuToggle &&
    mobileNavigation
  ) {

    menuToggle.addEventListener(
      "click",
      function () {

        const isOpen =
          menuToggle.classList.toggle(
            "active"
          );

        mobileNavigation.classList.toggle(
          "active"
        );


        menuToggle.setAttribute(
          "aria-expanded",
          isOpen
            ? "true"
            : "false"
        );


        menuToggle.setAttribute(
          "aria-label",
          isOpen
            ? "メニューを閉じる"
            : "メニューを開く"
        );


        /*
         * メニュー表示中は
         * 背景ページをスクロールさせない
         */
        document.body.style.overflow =
          isOpen
            ? "hidden"
            : "";

      }
    );


    /*
     * メニュー項目をクリックしたら閉じる
     */
    mobileLinks.forEach(
      function (link) {

        link.addEventListener(
          "click",
          function () {

            menuToggle.classList.remove(
              "active"
            );

            mobileNavigation.classList.remove(
              "active"
            );


            menuToggle.setAttribute(
              "aria-expanded",
              "false"
            );


            menuToggle.setAttribute(
              "aria-label",
              "メニューを開く"
            );


            document.body.style.overflow =
              "";

          }
        );

      }
    );

  }


  /* ========================================
     PRODUCT FILTER
  ======================================== */

  const filterButtons =
    document.querySelectorAll(
      ".filter-button"
    );

  const productCards =
    document.querySelectorAll(
      ".product-card"
    );


  filterButtons.forEach(
    function (button) {

      button.addEventListener(
        "click",
        function () {

          const filter =
            button.getAttribute(
              "data-filter"
            );


          /*
           * ボタンの状態
           */
          filterButtons.forEach(
            function (btn) {

              btn.classList.remove(
                "active"
              );

            }
          );


          button.classList.add(
            "active"
          );


          /*
           * 商品の表示
           */
          productCards.forEach(
            function (card) {

              const category =
                card.getAttribute(
                  "data-category"
                );


              if (
                filter === "all" ||
                category === filter
              ) {

                card.style.display = "";

              }

              else {

                card.style.display =
                  "none";

              }

            }
          );

        }
      );

    }
  );


  /* ========================================
     SMOOTH SCROLL
  ======================================== */

  const navigationLinks =
    document.querySelectorAll(
      'a[href^="#"]'
    );


  navigationLinks.forEach(
    function (link) {

      link.addEventListener(
        "click",
        function (event) {

          const targetId =
            link.getAttribute(
              "href"
            );


          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(
              targetId
            );


          if (!target) {
            return;
          }


          event.preventDefault();


          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    }
  );


  /* ========================================
     IMAGE ERROR CHECK
  ======================================== */

  const images =
    document.querySelectorAll(
      ".product-image img"
    );


  images.forEach(
    function (image) {

      image.addEventListener(
        "error",
        function () {

          console.error(
            "画像を読み込めませんでした:",
            image.src
          );


          image.classList.add(
            "image-error"
          );

        }
      );

    }
  );

});