/*
 * The expand/close effect for the sidebar navigation.
 */

$(function() {
  const childPrefix = "n_";
  const parentPrefix = "f_";
  const collapse = $(".collapse");

  /* close up top-category */
  collapse.on("hide.bs.collapse", function () { /* Bootstrap collapse events. */
    const parentId = parentPrefix + $(this).attr("id").substring(childPrefix.length);
    // TODO: Prevent this from applying unless it's the right type of dropdown
    if (parentId) {
      $(`#${parentId} i.fas`).removeClass("sidebar-navigation-rotate");
    }
  });

  /* expand the top category */
  collapse.on("show.bs.collapse", function() {
    const parentId = parentPrefix + $(this).attr("id").substring(childPrefix.length);
    if (parentId) {
      $(`#${parentId} i.fas`).addClass("sidebar-navigation-rotate");
    }
  });

});