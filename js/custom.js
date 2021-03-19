//Function that manages the language of the site.
txt_lang = {};
function setLang(lang) {
    switch (lang) {
        case "it":
            txt_lang = it_lang;
            break;
        case "en":
            txt_lang = en_lang;
            break;
        
        default:
            console.log("Unvalid lang code!");
    }

    $( "#current-lang" ).html(txt_lang["l-"+lang]);

    $( ".multilang" ).each(function() {
        new_txt = txt_lang[this.getAttribute("multilang-id")];
        if (new_txt !== undefined) {
            this.innerHTML = new_txt;
        }
    });
}
setLang("en");

//Functions that manages the collapsables of the site.
$(".collapse").on('shown.bs.collapse', function () {
    $(this.getAttribute("data-controller")).addClass("flip_arrow");
})
$(".collapse").on('hidden.bs.collapse', function () {
    $(this.getAttribute("data-controller")).removeClass("flip_arrow");
})

//Function that manages the popover in Soft Skills section.
$(document).ready(function() {
    $('[data-toggle="popover"]').popover({
        html: true,
        trigger: "hover | click",
        placement: "bottom",
        content: function() {
          return txt_lang["SK-"+this.getAttribute("data-original-title")];
        },
    });
});

$('[data-toggle="popover"]').on('show.bs.popover', function () {
    $('[aria-describedby*="popover"]').popover('hide');
})