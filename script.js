// When the page loads, fade in the main content
$(document).ready(function () {
  $("main").hide().fadeIn(800);

  // Optional: highlight the current navigation link
  const path = window.location.pathname;
  $("nav a").each(function () {
    if (path.endsWith($(this).attr("href"))) {
      $(this).css("text-decoration", "underline");
    }
  });
});
