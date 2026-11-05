/* Area context comes from an explicit service-page CTA, never IP location. */
(function(){
  'use strict';
  var areas={"balcones-heights":"Balcones Heights","boerne":"Boerne","brooks-city-base":"Brooks City Base","bulverde":"Bulverde","canyon-lake":"Canyon Lake","cibolo":"Cibolo","converse":"Converse","east-side-fort-sam-houston":"East Side Fort Sam Houston","encino-park":"Encino Park","far-west-alamo-ranch":"Far West / Alamo Ranch","five-points":"Five Points","hollywood-park":"Hollywood Park","lackland-afb-area":"Lackland AFB Area","leon-valley":"Leon Valley","live-oak":"Live Oak","near-seaworld":"the SeaWorld area","new-braunfels":"New Braunfels","north-central-castle-hills-airport":"North Central / Castle Hills / Airport","northeast-side-perrin-beitel-nacogdoches":"Northeast Side","northwest-bandera-road":"Northwest / Bandera Road Corridor","san-antonio":"San Antonio","schertz":"Schertz","second-chance-apartments-alamo-heights":"Alamo Heights","second-chance-apartments-downtown-pearl":"Downtown & The Pearl","second-chance-apartments-stone-oak":"Stone Oak","second-chance-apartments-utsa-medical-center":"UTSA & Medical Center","seguin":"Seguin","selma":"Selma","shavano-park":"Shavano Park","south-side":"South Side","southtown-king-william-lavaca":"Southtown / King William / Lavaca","southwest-side-military-drive":"Southwest Side / SW Military Drive","the-rim-la-cantera":"The Rim / La Cantera","timberwood-park":"Timberwood Park","tobin-hill":"Tobin Hill","universal-city":"Universal City","westover-hills":"Westover Hills","windcrest":"Windcrest"};
  var slug=new URLSearchParams(window.location.search).get('area');
  if(!Object.prototype.hasOwnProperty.call(areas,slug))return;
  var heading=document.querySelector('[data-form-area-heading]');
  if(heading){
    var name=areas[slug];
    heading.textContent=/^the\s/i.test(name)
      ? "Get Your Apartment List for "+name
      : "Get Your "+name+" Apartment List";
  }
})();
