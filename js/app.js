var typed = new Typed("#typed", {
  strings: ["Mahasiswa FTI 2019", "Web Developer soon."],
  typeSpeed: 45,
  startDelay: 90,
  loop: true,
});

$(window).on("load", function () {
  setTimeout(function () {
    $(".loader-wrapper").fadeOut("slow");
  }, 3000);
});