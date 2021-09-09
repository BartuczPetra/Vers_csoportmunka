var versTomb=[
    {
        cim:"reneszánsz",
        szerzo:"Pete Márk",
        vers:"úsznak a bálnák az égen.olaj nélkül siklanak tova,s pöfékelnek kicsiny pipájukból,melynek füstje elszáll isten tudja hova.nikotinban úszik a múlt réges-régen,alant siratják a fák magvaik,de mit sem hallasz imájukból.vajh meddig él egy mandarin?hisz egyedül mész a boltba.lassan görög hát itt az élet,és nem kívánják mulcsba magjaid,így kárhoztatva zsepis végbe a létet.jön a kacsák hada, léptük hangos, s tompadaluk ízesíti kis májukbólkészült étked. mollok rabjai.hiánycikk van itt májusból.",
        kep:"hegyizsupsz.png"
    },
    {
        cim:"Kurta-furcsa mondóka",
        szerzo:"Pete Margit",
        vers:"Kurta-furcsa vers ez,mondogatni jó lesz!Nem ültettem, nem arattam,a rímeket nem faragtam,hipp-hopp, idetermett!Egyszerre csak itt lett!Egyszerre csak itt lett,hipp-hopp, idetermett!A rímeket nem faragtam,nem ültettem, nem arattam.Mondogatni jó lesz,kurta-furcsa vers ez.",
        kep:"lapitrotty.png"
    }
]

$(function(){
    $(".kep1").on("mouseover", esemenyFel);
    $(".kep2").on("mouseover", esemenyFel);
    $(".kep1").on("mouseout", esemenyLe);
    $(".kep2").on("mouseout", esemenyLe);

    for (let i = 0; i < versTomb.length; i++) {
        const element = versTomb[i];
        $("div").eq(i*2).append("<img src='" + element.kep + "' alt='vers'>");
    }

  });

  function esemenyFel() {
    for (let i = 0; i < versTomb.length; i++) {
        const element = versTomb[i];
        $("div").eq(i*2+1).append("<h3>" + element.cim + "</h3><p>" + element.vers + "</p><p>" + element.szerzo + "</p>");
    }
  }

  function esemenyLe() {
      $(".vers1").css("display", "none");
      $(".vers2").css("display", "none");
  }