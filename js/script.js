// (function () {
//   var options = {
//     whatsapp: "08121848743", // WhatsApp number
//     call_to_action: "chat us", // Call to action
//     position: "right", // Position may be 'right' or 'left'
//   };
//   var proto = document.location.protocol,
//     host = "whatshelp.io",
//     url = proto + "//static." + host;
//   var s = document.createElement('script');
//   s.type = 'text/javascript';
//   s.async = true;
//   s.src = url + '/widget-send-button/js/init.js';
//   s.onload = function () {
//     WhWidgetSendButton.init(host, proto, options);
//   };
//   var x = document.getElementsByTagName('script')[0];
//   x.parentNode.insertBefore(s, x);
// })();

const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// tombol cari
$(document).ready(function () {
    $("#cari").click(function () {
        $(".cari").toggle("slide");
    });
});

$(document).ready(function () {
    $("#clear").click(function () {
        $("#search").val("");
    });
});

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 56
});

const elems = document.querySelectorAll('.parallax');
M.Parallax.init(elems);


