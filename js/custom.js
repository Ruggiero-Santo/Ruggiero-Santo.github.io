function setLang(lang) {
    txt_lang = {};
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

$(".collapse").on('shown.bs.collapse', function () {
    $(this.getAttribute("data-controller")).addClass("flip_arrow");
})
$(".collapse").on('hidden.bs.collapse', function () {
    $(this.getAttribute("data-controller")).removeClass("flip_arrow");
})