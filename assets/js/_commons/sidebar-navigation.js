/*
 * The expand/close effect for the sidebar navigation.
 */

$(function() {
  const childPrefix = "n_";
  const parentPrefix = "f_";
  const collapse = $(".collapse");

  const buildTabCount = document.documentElement.style.getPropertyValue("--plane-build-tab-count'");

  /* close nav sub-list */
  collapse.on("hide.bs.collapse", function () { /* Bootstrap collapse events. */
    const parentId = parentPrefix + $(this).attr("id").substring(childPrefix.length);
    const currentPrefix = $(this).attr("id").substring(0, childPrefix.length);
    if (parentId && currentPrefix === childPrefix) {
      $(`#${parentId} i.nav-arrow`).removeClass("sidebar-navigation-rotate");
      const tabCount = document.documentElement.style.getPropertyValue("--tab-count'");
      document.documentElement.style.setProperty("--tab-count", tabCount - buildTabCount);
    }
  });

  /* expand nav sub-list */
  collapse.on("show.bs.collapse", function() {
    const parentId = parentPrefix + $(this).attr("id").substring(childPrefix.length);
    const currentPrefix = $(this).attr("id").substring(0, childPrefix.length);
    if (parentId && currentPrefix === childPrefix) {
      $(`#${parentId} i.nav-arrow`).addClass("sidebar-navigation-rotate");
      const tabCount = document.documentElement.style.getPropertyValue("--tab-count'");
      document.documentElement.style.setProperty("--tab-count", tabCount + buildTabCount);
    }
  });

});