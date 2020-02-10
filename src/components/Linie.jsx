import React from 'react';

class Linie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const nameLine = this.props.nameLine;

    if(nameLine==="linie--a"){
      return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1058.33mm" height="847.72mm" viewBox="0 0 3000 2403" className="svgImage">

          <g className="train--a">
            <line data-ligne-line="a" className="linie linie--a" x1="722.85" y1="681.62" x2="918.86" y2="681.62"/>
            <polyline data-ligne-line="a" className="linie linie--a" points="673.05 888.03 926.33 888.03 1024.05 790.32 1064.5 830.77"/>
            <polyline data-ligne-line="a" className="linie linie--a" points="1963.87 1376.5 1754.74 1167.38 1754.74 1059.35 1724.38 1028.98"/>
            <polyline data-ligne-line="a" className=" linie linie--a" points="806.96 352.13 806.96 569.73 1001.5 764.26 1001.5 796.34 1025.06 819.91 1053.64 819.91 1223.85 990.12 1461.75 990.12 1583.96 1112.33 1666.31 1029.98 1932.03 1029.98 1986.68 1084.63 2319.09 1084.63 2405.57 998.14"/>
  
            <circle className="parking" data-ligne="a" data-station-id="128" data-station="cergy-le-haut" cx="806.96" cy="352.13" r="7"/>
            <circle data-ligne="a" data-station-id="131" data-station="cergy-saint-christophe" cx="806.96" cy="412.12" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="129" data-station="cergy-prefecture" cx="806.96" cy="472.1" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="591" data-station="neuville-universite" cx="806.96" cy="530.26" r="7"/>
            <circle data-ligne="a" data-station-id="202" data-station="conflans-fin-dosie" cx="830.09" cy="593.85" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="6" data-station="archeres-ville" cx="863.7" cy="626.81" r="7"/>
            <circle data-ligne="a" data-station-id="501" data-station="maisons-laffitte" cx="926.33" cy="690.03" r="7"/>
            <circle data-ligne="a" data-station-id="785" data-station="sartrouville" cx="960" cy="723.47" r="7"/>
            <circle data-ligne="a" data-station-id="357" data-station="houilles-carrieres-sur-seine" cx="993.07" cy="756.2" r="7"/>
            <circle data-ligne="a" data-station-id="393" data-station="la-defense" cx="1092.99" cy="858.48" r="7"/>
            <circle className="siteOlympique" site="velo" data-ligne="a" data-station-id="151" data-station="charles-de-gaulle-etoile" cx="1202.72" cy="969.41" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="32" data-station="auber" cx="1330.38" cy="990.27" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="163" data-station="chatelet-les-halles" cx="1461.04" cy="991.27" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="307" data-station="gare-de-lyon" cx="1554.04" cy="1082.17" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="582" data-station="nation" cx="1632.57" cy="1063.93" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="913" data-station="vincennes" cx="1707.46" cy="1029.66" r="7"/>
            <circle data-ligne="a" data-station-id="869" data-station="val-de-fontenay" cx="1840.37" cy="1029.66" r="7"/>
            <circle data-ligne="a" data-station-id="589" data-station="neuilly-plaisance" cx="1889.24" cy="1029.66" r="7"/>
            <circle data-ligne="a" data-station-id="116" data-station="bry-sur-marne" cx="1948.43" cy="1046.57" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="598" data-station="noisy-le-grand-mont-dest" cx="2025.06" cy="1084.82" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="597" data-station="noisy-champs" cx="2105.19" cy="1084.73" r="7"/>
            <circle data-ligne="a" data-station-id="596" data-station="noisiel" cx="2174.11" cy="1084.73" r="7"/>
            <circle data-ligne="a" data-station-id="473" data-station="lognes" cx="2235.64" cy="1084.73" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="856" data-station="torcy" cx="2298.63" cy="1084.82" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="119" data-station="bussy-saint-georges" cx="2347.79" cy="1056.65" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="70" data-station="val-deurope" cx="2376.08" cy="1027.6" r="7"/>
            <circle data-ligne="a" data-station-id="182" data-station="parc-disneyland" cx="2405.58" cy="998.32" r="7"/>
            <circle site="bateau" data-ligne="a" data-station-id="577" data-station="nanterre-prefecture" cx="1064.5" cy="830.77" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="820" data-station="saint-germain-en-laye" cx="673.05" cy="888.03" r="7"/>
            <circle data-ligne="a" data-station-id="439" data-station="le-vesinet-le-pecq" cx="760.12" cy="888.03" r="7"/>
            <circle data-ligne="a" data-station-id="438" data-station="le-vesinet-centre" cx="816.12" cy="888.03" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="172" data-station="chatou-croissy" cx="870.34" cy="888.03" r="7"/>
            <circle data-ligne="a" data-station-id="753" data-station="rueil-malmaison" cx="939.79" cy="874.57" r="7"/>
            <circle data-ligne="a" data-station-id="580" data-station="nanterre-ville" cx="975.53" cy="839.17" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="578" data-station="nanterre-universite" cx="1024.26" cy="790.31" r="7"/>
            <circle data-ligne="a" data-station-id="660" data-station="poissy" cx="722.85" cy="681.62" r="7"/>
            <circle data-ligne="a" data-station-id="4" data-station="acheres-grand-cormier" cx="809.2" cy="681.62" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="87" data-station="boissy-saint-leger" cx="1963.87" cy="1376.5" r="7"/>
            <circle data-ligne="a" data-station-id="841" data-station="sucy-bonneuil" cx="1931.02" cy="1343.33" r="7"/>
            <circle data-ligne="a" data-station-id="405" data-station="la-varenne-chennevieres" cx="1898.05" cy="1310.08" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="142" data-station="champigny" cx="1863.66" cy="1276.31" r="7"/>
            <circle data-ligne="a" data-station-id="431" data-station="le-parc-de-saint-maur" cx="1829.69" cy="1242.92" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="826" data-station="saint-maur-creteil" cx="1797.61" cy="1209.78" r="7"/>
            <circle data-ligne="a" data-station-id="378" data-station="joinville-le-pont" cx="1764.67" cy="1177.27" r="7"/>
            <circle className="parking" data-ligne="a" data-station-id="594" data-station="nogent-sur-marne" cx="1754.59" cy="1123.75" r="7"/>
            <circle data-ligne="a" data-station-id="289" data-station="fontenay-sous-bois" cx="1754.59" cy="1072.15" r="7"/>
          </g>
  
          
        </svg>
      );
    } else if(nameLine==="linie--b"){
      return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1058.33mm" height="847.72mm" viewBox="0 0 3000 2403" className="svgImage">

        <g className="rer--b">
          <polyline data-ligne-line="b" className="linie linie--b" points="794.64 1729.88 1077.43 1729.88 1445.7 1361.61 1445.7 790.32 1573.32 662.7 2158.47 662.7 2196.24 624.92"/>
          <polyline data-ligne-line="b" className="linie linie--b" points="2005.78 484.23 1928.76 484.23 1899.27 513.72 1899.27 640.35 1875.92 663.7"/>
          <line data-ligne-line="b" className="linie linie--b" x1="1252.59" y1="1409.17" x2="1397.34" y2="1409.17"/>

          <circle className="parking" data-ligne="b" data-station-id="551" data-station="mitry-claye" cx="2196.24" cy="624.92" r="7"/>
          <circle data-ligne="b" data-station-id="904" data-station="villeparisis-mitry-le-neuf" cx="2106.16" cy="662.42" r="7"/>
          <circle data-ligne="b" data-station-id="889" data-station="vert-galant" cx="2023.78" cy="662.42" r="7"/>
          <circle className="parking" data-ligne="b" data-station-id="796" data-station="sevran-livry" cx="1939.6" cy="662.42" r="7"/>
          <circle data-ligne="b" data-station-id="37" data-station="aulnay-sous-bois" cx="1813.01" cy="662.42" r="7"/>
          <circle data-ligne="b" data-station-id="77" data-station="le-blanc-mesnil" cx="1742.59" cy="662.42" r="7"/>
          <circle data-ligne="b" data-station-id="242" data-station="drancy" cx="1669.06" cy="662.42" r="7"/>
          <circle className="siteOlympique" site="athletik" data-ligne="b" data-station-id="427" data-station="le-bourget" cx="1591.66" cy="662.42" r="7"/>
          <circle data-ligne="b" data-station-id="34" data-station="la-courneuve-aubervillers" cx="1526.92" cy="709.3" r="7"/>
          <circle data-ligne="b" data-station-id="404" data-station="la-plaine-stade-de-france" cx="1481.8" cy="754.57" r="7"/>
          <circle data-ligne="b" data-station-id="309" data-station="gare-du-nord" cx="1445.69" cy="839" r="7"/>
          <circle className="parking" data-ligne="b" data-station-id="164" data-station="chatelet" cx="1445.69" cy="976.39" r="7"/>
          <circle className="parking" data-ligne="b" data-station-id="827" data-station="saint-michel-notre-dame" cx="1445.69" cy="1062.35" r="7"/>
          <circle className="parking" data-ligne="b" data-station-id="484" data-station="luxembourg" cx="1445.69" cy="1132.89" r="7"/>
          <circle data-ligne="b" data-station-id="680" data-station="port-royal" cx="1445.69" cy="1170.17" r="7"/>
          <circle className="parking" data-ligne="b" data-station-id="235" data-station="denfert-rochereau" cx="1445.69" cy="1209.78" r="7"/>
          <circle className="parking" data-ligne="b" data-station-id="189" data-station="cite-universitaire" cx="1445.69" cy="1245.84" r="7"/>
          <circle className="parking" data-ligne="b" data-station-id="327" data-station="gentilly" cx="1445.69" cy="1279.96" r="7"/>
          <circle data-ligne="b" data-station-id="403" data-station="laplace" cx="1445.69" cy="1314.08" r="7"/>
          <circle data-ligne="b" data-station-id="22" data-station="arcueil-cachan" cx="1445.69" cy="1344.62" r="7"/>
          <circle data-ligne="b" data-station-id="45" data-station="bagneux" cx="1429.55" cy="1376.5" r="7"/>
          <circle data-ligne="b" data-station-id="102" data-station="bourg-la-reine" cx="1407.07" cy="1399.8" r="7"/>
          <circle data-ligne="b" data-station-id="622" data-station="parc-de-sceaux" cx="1380.14" cy="1426.81" r="7"/>
          <circle data-ligne="b" data-station-id="392" data-station="la-croix-de-berny" cx="1351.77" cy="1455.04" r="7"/>
          <circle data-ligne="b" data-station-id="20" data-station="antony" cx="1322.67" cy="1485.34" r="7"/>
          <circle data-ligne="b" data-station-id="286" data-station="fontaine-michalon" cx="1291.95" cy="1515.18" r="7"/>
          <circle data-ligne="b" data-station-id="445" data-station="les-baconnets" cx="1267.56" cy="1539.22" r="7"/>
          <circle data-ligne="b" data-station-id="523" data-station="massy-verrieres" cx="1241.35" cy="1566.13" r="7"/>
          <circle className="parking" data-ligne="b" data-station-id="520" data-station="massy-palaiseau" cx="1202.24" cy="1603.68" r="7"/>
          <circle data-ligne="b" data-station-id="616" data-station="palaiseau" cx="1171.66" cy="1635.96" r="7"/>
          <circle data-ligne="b" data-station-id="617" data-station="palaiseau-villebon" cx="1144.41" cy="1662.77" r="7"/>
          <circle data-ligne="b" data-station-id="483" data-station="lozere" cx="1116.64" cy="1690.55" r="7"/>
          <circle data-ligne="b" data-station-id="429" data-station="le-guichet" cx="1089.39" cy="1718.15" r="7"/>
          <circle data-ligne="b" data-station-id="612" data-station="orsay-ville" cx="1044.96" cy="1729.88" r="7"/>
          <circle className="parking" data-ligne="b" data-station-id="118" data-station="bures-sur-yvette" cx="995.11" cy="1729.88" r="7"/>
          <circle className="parking" data-ligne="b" data-station-id="401" data-station="la-hacquiniere" cx="945.54" cy="1729.88" r="7"/>
          <circle data-ligne="b" data-station-id="330" data-station="gif-sur-yvette" cx="895.03" cy="1729.88" r="7"/>
          <circle className="parking" data-ligne="b" data-station-id="219" data-station="courcelle-sur-yvette" cx="844.73" cy="1729.88" r="7"/>
          <circle data-ligne="b" data-station-id="839" data-station="saint-remy-les-chevreus" cx="794.64" cy="1729.88" r="7"/>
          <circle data-ligne="b" data-station-id="742" data-station="robinson" cx="1252.59" cy="1409.17" r="7"/>
          <circle data-ligne="b" data-station-id="287" data-station="fontenay-aux-roses" cx="1305.88" cy="1409.17" r="7"/>
          <circle data-ligne="b" data-station-id="790" data-station="sceaux" cx="1366.99" cy="1409.17" r="7"/>
          <circle data-ligne="b" data-station-id="744" data-station="aeroport-charles-de-gaulle-2-tgv" cx="2005.78" cy="484.23" r="7"/>
          <circle data-ligne="b" data-station-id="743" data-station="aeroport-charles-de-gaulle-1" cx="1948.75" cy="484.23" r="7"/>
          <circle className="parking" data-ligne="b" data-station-id="621" data-station="parc-des-expositions" cx="1899.62" cy="521.44" r="7"/>
          <circle data-ligne="b" data-station-id="905" data-station="villepinte" cx="1899.62" cy="565.63" r="7"/>
          <circle data-ligne="b" data-station-id="795" data-station="sevran-beaudottes" cx="1899.62" cy="612.65" r="7"/>
        </g>


        
      </svg>
      )
    }else if(nameLine==="linie--c"){
      return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1058.33mm" height="847.72mm" viewBox="0 0 3000 2403" className="svgImage">

          <g className="rer--c">
            <polyline data-ligne-line="c" className="linie linie--c" points="683.96 1480.76 719.59 1445.14 1009.12 1445.14 1172.29 1281.96 1171.97 1125.05 1175.25 1120.72 1232.39 1063.59 1461.04 1063.59 1614.35 1216.91 1614.35 1591.69 1458.36 1747.69 1458.36 1962.96 1338.37 2082.94 1338.37 2113.76"/>
            <polyline data-ligne-line="c" className="linie linie--c" points="990.54 1962.96 1369.92 1962.96 1459.61 1873.27"/>
            <polyline data-ligne-line="c" className="linie linie--c" points="869.5 1466.31 1063.29 1466.31 1334.38 1737.4 1445.69 1737.4 1556.87 1626.22 1582.66 1626.22"/>
            <polyline data-ligne-line="c" className="linie linie--c" points="895.07 355.61 912.43 372.98 987.5 372.98 1322.53 708 1322.53 773.55 1122.65 973.43 1122.65 1077.72 1158.72 1112.33 1183.64 1112.33"/>

            <circle data-ligne="c" className="parking" data-station-id="835" data-station="saint-quentin-en-yvelines-montigny-le-bretonneux" cx="683.96" cy="1480.05" r="7"/>
            <circle data-ligne="c" data-station-id="814" data-station="saint-cyr" data-name="saint-cyr" cx="731.04" cy="1445.32" r="7"/>
            <circle className="siteOlympique parking" site="handball" data-ligne="c" data-station-id="885" data-station="versailles-chateau" cx="869.5" cy="1445.32" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="887" data-station="versialles-chantiers" cx="869.5" cy="1466.31" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="916" data-station="viroflay-rive-gauche" cx="1043.19" cy="1411.52" r="7"/>
            <circle data-ligne="c" data-station-id="177" data-station="chaville-velizy" cx="1079.06" cy="1376.5" r="7"/>
            <circle data-ligne="c" data-station-id="638" data-station="petit-jouy-les-loges" cx="1063.29" cy="1466.31" r="7"/>
            <circle data-ligne="c" data-station-id="540" data-station="meudon-val-fleury" cx="1117.62" cy="1335.48" r="7"/>
            <circle data-ligne="c" data-station-id="366" data-station="issy" cx="1172.25" cy="1283.54" r="7"/>
            <circle data-ligne="c" data-station-id="367" data-station="issy-val-de-seine" cx="1172.25" cy="1246.03" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="57" data-station="pont-du-garigliano" cx="1172.25" cy="1201.5" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="376" data-station="javel" cx="1172.25" cy="1154.63" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="141" data-station="champs-de-mars-tour-eiffel" cx="1183.27" cy="1112.33" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="664" data-station="pont-de-lalma" cx="1223.07" cy="1073.08" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="361" data-station="invalides" cx="1281.51" cy="1063.93" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="574" data-station="musee-soray" cx="1351.06" cy="1063.59" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="828" data-station="saint-michel-notre-dame-2" data-name="saint-michel-notre-dame" cx="1445.69" cy="1063.59" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="38" data-station="gare-dausterlitz" data-name="gare-dausterlitz" cx="1526.85" cy="1129.32" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="71" data-station="bibilotheque-francois-mitterrand" cx="1581.66" cy="1183.84" r="7"/>
            <circle data-ligne="c" data-station-id="369" data-station="ivry-sur-seine" cx="1614.35" cy="1276.31" r="7"/>
            <circle data-ligne="c" data-station-id="918" data-station="vitry-sur-seine" cx="1614.35" cy="1344.62" r="7"/>
            <circle data-ligne="c" data-station-id="444" data-station="les-ardoines" cx="1614.35" cy="1385.65" r="7"/>
            <circle data-ligne="c" data-station-id="185" data-station="choisy-le-roi" cx="1613.15" cy="1435.95" r="7"/>
            <circle data-ligne="c" data-station-id="899" data-station="villeneuve-le-roi" cx="1615.15" cy="1527.37" r="7"/>
            <circle data-ligne="c" data-station-id="40" data-station="avenue-de-pdt-kennedy" cx="1144.58" cy="1098.1" r="7"/>
            <circle data-ligne="c" data-station-id="97" data-station="boulainvilliers" cx="1122.72" cy="1063.59" r="7"/>
            <circle data-ligne="c" data-station-id="42" data-station="avenue-henri-martin" cx="1122.72" cy="1018.27" r="7"/>
            <circle data-ligne="c" data-station-id="41" data-station="avenue-foch" cx="1122.72" cy="973.98" r="7"/>
            <circle data-ligne="c" data-station-id="590" data-station="neuilly-porte-maillot" cx="1157.1" cy="939.14" r="7"/>
            <circle data-ligne="c" data-station-id="632" data-station="pereire-levallois" cx="1224.96" cy="871.41" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="688" data-station="porte-de-clichy" cx="1282.54" cy="813.31" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="832" data-station="saint-ouen" cx="1322.53" cy="763.4" r="7"/>
            <circle data-ligne="c" data-station-id="450" data-station="les-gresillons" cx="1322.53" cy="713.88" r="7"/>
            <circle data-ligne="c" data-station-id="326" data-station="gennevilliers" cx="1289.34" cy="675.03" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="258" data-station="epinay-sur-seine" cx="1255.66" cy="641.33" r="7"/>
            <circle data-ligne="c" data-station-id="821" data-station="st-gratien" cx="1219.38" cy="604.9" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="265" data-station="ermont-eaubonne-2" data-name="ermont-eaubonne" cx="1167.67" cy="551.14" r="7"/>
            <circle data-ligne="c" data-station-id="134" data-station="cernay" cx="1142.28" cy="527.68" r="7"/>
            <circle data-ligne="c" data-station-id="292" data-station="franconville-le-plessis-bouchard" cx="1108.8" cy="494.34" r="7"/>
            <circle data-ligne="c" data-station-id="559" data-station="montigny-beauchamp" cx="1074.69" cy="460.55" r="7"/>
            <circle data-ligne="c" data-station-id="960" data-station="st-ouen-laumone-liesse" cx="1008.01" cy="393.31" r="7"/>
            <circle data-ligne="c" data-station-id="805" data-station="st-ouen-laumone" cx="962.1" cy="373.1" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="676" data-station="pontoise-2" data-name="pontoise" cx="896.07" cy="356.71" r="7"/>
            <circle data-ligne="c" data-station-id="3" data-station="ablon" cx="1614.35" cy="1563.07" r="7"/>
            <circle data-ligne="c" data-station-id="31" data-station="athis-mons" cx="1595.62" cy="1609.99" r="7"/>
            <circle data-ligne="c" data-station-id="385" data-station="juvisy-2" data-name="juvisy" cx="1542.9" cy="1640.08" r="7"/>
            <circle data-ligne="c" data-station-id="788" data-station="savingny-sur-orge" cx="1500" cy="1682.77" r="7"/>
            <circle data-ligne="c" data-station-id="639" data-station="petit-vaux" cx="1424.88" cy="1737.4" r="7"/>
            <circle data-ligne="c" data-station-id="335" data-station="gravigny-balizy" cx="1347.57" cy="1737.04" r="7"/>
            <circle data-ligne="c" data-station-id="184" data-station="chilly-mazarin" cx="1295.16" cy="1698.36" r="7"/>
            <circle data-ligne="c" data-station-id="474" data-station="longjumeau" cx="1253.06" cy="1656.46" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="522" data-station="massy-palaiseau-2" data-name="massy-palaiseau" cx="1202.24" cy="1603.68" r="7"/>
            <circle data-ligne="c" data-station-id="360" data-station="igny" cx="1182.86" cy="1586.22" r="7"/>
            <circle data-ligne="c" data-station-id="73" data-station="bievres" cx="1153.73" cy="1556.98" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="874" data-station="vauboyen" cx="1125.79" cy="1529.07" r="7"/>
            <circle data-ligne="c" data-station-id="380" data-station="jouy-en-josas" cx="1094.78" cy="1498.33" r="7"/>
            <circle data-ligne="c" data-station-id="385" data-station="juvisy-3" data-name="juvisy" cx="1554.29" cy="1651.89" r="7"/>
            <circle data-ligne="c" data-station-id="788" data-station="savingny-sur-orge-2" data-name="savingny-sur-orge" cx="1511.58" cy="1696.05" r="7"/>
            <circle data-ligne="c" data-station-id="818" data-station="siante-genevieve-des-bois" cx="1456.92" cy="1772.69" r="7"/>
            <circle data-ligne="c" data-station-id="829" data-station="saint-michel-sur-orge" cx="1458.61" cy="1813.13" r="7"/>
            <circle data-ligne="c" className="parking" data-station-id="108" data-station="bretigny-sur-orge" cx="1458.61" cy="1853.56" r="7"/>
            <circle data-ligne="c" data-station-id="518" data-station="marolles-en-hurepoix" cx="1458.61" cy="1913.54" r="7"/>
            <circle data-ligne="c" data-station-id="402" data-station="la-norville-st-germain-les-arpajon" cx="1440.76" cy="1892.42" r="7"/>
            <circle data-ligne="c" data-station-id="26" data-station="arpajon" cx="1415.97" cy="1917.12" r="7"/>
            <circle data-ligne="c" data-station-id="254" data-station="egly" cx="1391.44" cy="1941.28" r="7"/>
            <circle data-ligne="c" data-station-id="109" data-station="breuillet-bruyeres-le-chatel" cx="1336.45" cy="1962.96" r="7"/>
            <circle data-ligne="c" data-station-id="110" data-station="breuillet-village" cx="1266.52" cy="1962.96" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="811" data-station="saint-cheron" cx="1201.11" cy="1962.96" r="7"/>
            <circle data-ligne="c" data-station-id="793" data-station="sermaise" cx="1132.84" cy="1962.96" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="240" data-station="dourdan" cx="1054.89" cy="1962.96" r="7"/>
            <circle data-ligne="c" data-station-id="241" data-station="dourdan-la-foret" cx="990.54" cy="1962.96" r="7"/>
            <circle data-ligne="c" data-station-id="101" data-station="bouray" cx="1452.59" cy="1969.11" r="7"/>
            <circle data-ligne="c" data-station-id="424" data-station="lardy" cx="1426.99" cy="1994.86" r="7"/>
            <circle data-ligne="c" data-station-id="137" data-station="chamarande" cx="1400.59" cy="2021.39" r="7"/>
            <circle data-ligne="c" data-station-id="274" data-station="etrechy" cx="1372.73" cy="2048.98" r="7"/>
            <circle className="parking" data-ligne="c" data-station-id="271" data-station="etampes" cx="1348.99" cy="2073.22" r="7"/>
            <circle data-ligne="c" data-station-id="825" data-station="saint-martin-detampes" cx="1338.74" cy="2113.76" r="7"/>
          </g>
        </svg>
      )}else if(nameLine==="linie--d"){
        return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1058.33mm" height="847.72mm" viewBox="0 0 3000 2403" className="svgImage">
 

  <g className="rer--d">
    <polyline data-ligne-line="d" className="linie linie--d" points="1797.17 172.91 1797.17 315.42 1461.5 651.09 1461.5 1034.23 1637.09 1209.83 1637.09 1561.56 1958.15 1882.62 1958.15 1929.52 1902.62 1929.52 1795.67 2036.47 1726.56 1967.36 1726.56 1844.65 1556.9 1674.99 1638.13 1593.76 1637.09 1561.56"/>
    <polyline data-ligne-line="d" className="linie linie--d" points="1703.87 2257.39 1703.87 1943.47 1750.65 1896.69 1750.65 1868.31 1726.78 1844.43 1688.55 1844.43 1599.3 1755.19 1599.3 1717.39"/>

    <circle className="parking" data-ligne="d" data-station-id="957" data-station="orry-la-ville-coye" cx="1797" cy="175.48" r="7"/>
    <circle data-ligne="d" data-station-id="958" data-station="la-borne-blanche" cx="1797" cy="239.07" r="7"/>
    <circle data-ligne="d" data-station-id="845" data-station="survilliers-fosses" cx="1797" cy="300.55" r="7"/>
    <circle className="parking" data-ligne="d" data-station-id="482" data-station="louvres" cx="1752.86" cy="359.69" r="7"/>
    <circle data-ligne="d" data-station-id="452" data-station="les-noues" cx="1707.25" cy="405.46" r="7"/>
    <circle data-ligne="d" data-station-id="333" data-station="goussainville" cx="1660.21" cy="452.68" r="7"/>
    <circle className="prking" data-ligne="d" data-station-id="909" data-station="villiers-le-bel-gonesse-arnouville" cx="1618.88" cy="493.38" r="7"/>
    <circle className="parking" data-ligne="d" data-station-id="322" data-station="garages-sarcelles" cx="1566.33" cy="546.56" r="7"/>
    <circle data-ligne="d" data-station-id="643" data-station="pierrefitte-stains" cx="1517.77" cy="595.75" r="7"/>
    <circle data-ligne="d" data-station-id="816" data-station="st-denis" cx="1461.5" cy="674.03" r="7"/>
    <circle className="siteOlympique" site="rugby" data-ligne="d" data-station-id="806" data-station="stade-de-france-st-denis" cx="1461.5" cy="750" r="7"/>
    <circle className="parking" data-ligne="d" data-station-id="310" data-station="gare-du-nord-2" data-name="gare-du-nord" cx="1461.5" cy="839" r="7"/>
    <circle className="parking" data-ligne="d" data-station-id="170" data-station="chatelet-2" data-name="chatelet" cx="1461.04" cy="991.27" r="7"/>
    <circle className="parking" data-ligne="d" data-station-id="38" data-station="gare-dausterlitz" cx="1531.42" cy="1104.69" r="7"/>
    <circle data-ligne="d" data-station-id="498" data-station="maisons-alfort-alfortville" cx="1637.14" cy="1309.5" r="7"/>
    <circle data-ligne="d" data-station-id="437" data-station="le-vert-de-maison" cx="1637.14" cy="1363.97" r="7"/>
    <circle data-ligne="d" data-station-id="1159" data-station="creteil-pompadour" cx="1637.14" cy="1418.44" r="7"/>
    <circle data-ligne="d" data-station-id="902" data-station="villeneuve-triage" cx="1637.14" cy="1472.9" r="7"/>
    <circle data-ligne="d" data-station-id="901" data-station="villeneuve-saint-georges" cx="1637.14" cy="1527.37" r="7"/>
    <circle data-ligne="d" data-station-id="556" data-station="montgeron-crosne" cx="1666.48" cy="1591.69" r="7"/>
    <circle data-ligne="d" data-station-id="924" data-station="yerres" cx="1701.09" cy="1625.39" r="7"/>
    <circle data-ligne="d" data-station-id="114" data-station="brunoy" cx="1736.85" cy="1662.04" r="7"/>
    <circle className="parking" data-ligne="d" data-station-id="105" data-station="boussy-saint-antoine" cx="1775.31" cy="1698.8" r="7"/>
    <circle className="parking" data-ligne="d" data-station-id="196" data-station="combs-la-ville-quincy" cx="1814.2" cy="1739.04" r="7"/>
    <circle data-ligne="d" data-station-id="468" data-station="lieusaint-moissy" cx="1853.1" cy="1777.27" r="7"/>
    <circle data-ligne="d" data-station-id="787" data-station="savigny-le-temple-nandy" cx="1887.86" cy="1812.13" r="7"/>
    <circle data-ligne="d" data-station-id="135" data-station="cesson" cx="1921.24" cy="1845.37" r="7"/>
    <circle data-ligne="d" data-station-id="430" data-station="le-mee-sur-seine" cx="1956.15" cy="1880.02" r="7"/>
    <circle className="parking" data-ligne="d" data-station-id="530" data-station="melun" cx="1958.15" cy="1928.98" r="7"/>
    <circle data-ligne="d" data-station-id="921" data-station="vosves" cx="1900.42" cy="1933.56" r="7"/>
    <circle data-ligne="d" data-station-id="85" data-station="boissise-le-roi" cx="1854.1" cy="1977.28" r="7"/>
    <circle data-ligne="d" data-station-id="672" data-station="ponthierry-pringy" cx="1814.2" cy="2020.4" r="7"/>
    <circle data-ligne="d" data-station-id="819" data-station="saint-fargeau" cx="1767.6" cy="2007.89" r="7"/>
    <circle data-ligne="d" data-station-id="214" data-station="le-coudray-montceaux" cx="1736.42" cy="1977.28" r="7"/>
    <circle data-ligne="d" data-station-id="433" data-station="le-plassis-chenet" cx="1727.27" cy="1938.13" r="7"/>
    <circle data-ligne="d" data-station-id="534" data-station="mennecy" cx="1704.66" cy="1958.38" r="7"/>
    <circle data-ligne="d" data-station-id="48" data-station="ballancourt" cx="1704.66" cy="1998.74" r="7"/>
    <circle className="parking" data-ligne="d" data-station-id="396" data-station="la-ferte-alais" cx="1704.66" cy="2045.24" r="7"/>
    <circle className="parking" data-ligne="d" data-station-id="106" data-station="boutigny" cx="1704.66" cy="2082.67" r="7"/>
    <circle data-ligne="d" data-station-id="503" data-station="maisse" cx="1704.66" cy="2125.47" r="7"/>
    <circle data-ligne="d" data-station-id="117" data-station="buno-gironville" cx="1704.66" cy="2168.27" r="7"/>
    <circle data-ligne="d" data-station-id="81" data-station="boigneville" cx="1704.66" cy="2211.07" r="7"/>
    <circle className="parking" data-ligne="d" data-station-id="955" data-station="malesherbes" cx="1704.66" cy="2257.39" r="7"/>
    <circle data-ligne="d" data-station-id="894" data-station="villabe" cx="1727.27" cy="1901.89" r="7"/>
    <circle data-ligne="d" data-station-id="270" data-station="essonnes-robinson" cx="1727.27" cy="1876.59" r="7"/>
    <circle data-ligne="d" data-station-id="207" data-station="corbeil-essonnes" cx="1727.27" cy="1845.37" r="7"/>
    <circle className="parking" data-ligne="d" data-station-id="276" data-station="evry" cx="1691.94" cy="1807.55" r="7"/>
    <circle data-ligne="d" data-station-id="334" data-station="grand-bourg" cx="1657.04" cy="1772.69" r="7"/>
    <circle className="parking" data-ligne="d" data-station-id="740" data-station="ris-orangis" cx="1623.3" cy="1739.04" r="7"/>
    <circle data-ligne="d" data-station-id="337" data-station="grigny-centre" cx="1597.86" cy="1748.19" r="7"/>
    <circle data-ligne="d" data-station-id="609" data-station="orangis-bois-de-lepine" cx="1625.87" cy="1781.84" r="7"/>
    <circle data-ligne="d" data-station-id="277" data-station="evry-courcouronnes" cx="1657.04" cy="1813.13" r="7"/>
    <circle data-ligne="d" data-station-id="428" data-station="le-bras-de-fer" cx="1696.51" cy="1843.98" r="7"/>
    <circle data-ligne="d" data-station-id="917" data-station="viry-chatillon" cx="1588.71" cy="1707.95" r="7"/>
    <circle data-ligne="d" data-station-id="387" data-station="juvisy" cx="1567.1" cy="1664.61" r="7"/>
    <circle data-ligne="d" data-station-id="893" data-station="vigneux-sur-seine" cx="1613.15" cy="1618.81" r="7"/>
      
  </g>

  
</svg>
        )}
    else if(nameLine==="linie--n"){
      return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1058.33mm" height="847.72mm" viewBox="0 0 3000 2403" className="svgImage">


  <g className="train--n">
    <polyline data-ligne-line="n" className="linie linie--n" points="184.95 1522.16 268.82 1522.16 479.54 1311.44 598.53 1430.43 1004.77 1430.43 1040.18 1395.02 1040.18 1305.15 1212.34 1305.15 1317.05 1200.45"/>
    <line data-ligne-line="n" className="linie linie--n" x1="399.86" y1="1739.18" x2="709.39" y2="1429.65"/>

    <circle data-ligne="n" data-station-id="501" data-station="gare-montparnasse" cx="1317.04" cy="1200.45" r="7"/>
    <circle data-ligne="n" data-station-id="872" data-station="vanves-malakoff" cx="1248.01" cy="1268.25" r="7"/>
    <circle data-ligne="n" data-station-id="190" data-station="clamart" cx="1170.67" cy="1304.93" r="7"/>
    <circle data-ligne="n" site="bateau" data-station-id="538" data-station="meudon" cx="1095.17" cy="1304.93" r="7"/>
    <circle data-ligne="n" data-station-id="62" data-station="bellevue" cx="1058.72" cy="1304.93" r="7"/>
    <circle data-ligne="n" data-station-id="797" data-station="sevres-rive-gauche" cx="1040.19" cy="1335.48" r="7"/>
    <circle data-ligne="n" data-station-id="176" data-station="chaville-rive-gauche" cx="1040.19" cy="1368.55" r="7"/>
    <circle data-ligne="n" data-station-id="915" data-station="viroflay-river-gauche" cx="1033.04" cy="1402.37" r="7"/>
    <circle data-ligne="n" data-station-id="886" data-station="versialle-chantiers" cx="869.5" cy="1431.38" r="7"/>
    <circle data-ligne="n" data-station-id="813" data-station="saint-cyr" cx="731.04" cy="1431.38" r="7"/>
    <circle className="parking" data-ligne="n" data-station-id="938" data-station="saint-quentin-en-yvelines-montigny-le-bretonneuax" cx="673.37" cy="1466.31" r="7"/>
    <circle data-ligne="n" data-station-id="858" data-station="trappes" cx="634.71" cy="1503.64" r="7"/>
    <circle data-ligne="n" data-station-id="406" data-station="la-verriere" cx="596.03" cy="1543.46" r="7"/>
    <circle className="parking" data-ligne="n" data-station-id="193" data-station="coignieres" cx="559.2" cy="1579.84" r="7"/>
    <circle data-ligne="n" data-station-id="458" data-station="les-essarts-le-roi" cx="518.18" cy="1619.25" r="7"/>
    <circle data-ligne="n" data-station-id="432" data-station="le-perray" cx="480.33" cy="1656.99" r="7"/>
    <circle className="parking" data-ligne="n" data-station-id="720" data-station="rambouillet" cx="441.95" cy="1697.13" r="7"/>
    <circle data-ligne="n" data-station-id="lost" data-station="gazeran" cx="399.86" cy="1739.18" r="7"/>
    <circle data-ligne="n" data-station-id="288" data-station="fontenay-le-fleury" cx="643.86" cy="1429.65" r="7"/>
    <circle data-ligne="n" data-station-id="906" data-station="villepreux-les-clayes" cx="578.81" cy="1406.95" r="7"/>
    <circle data-ligne="n" data-station-id="658" data-station="plaisir-les-clayes" cx="538.77" cy="1368.55" r="7"/>
    <circle data-ligne="n" data-station-id="657" data-station="plaisir-grignon" cx="499.66" cy="1330.9" r="7"/>
    <circle className="parking" data-ligne="n" data-station-id="911" data-station="villiers-neauphle-pontchartrain" cx="454.05" cy="1335.48" r="7"/>
    <circle data-ligne="n" data-station-id="553" data-station="montfort-lamaury-mere" cx="413.73" cy="1377.7" r="7"/>
    <circle data-ligne="n" data-station-id="303" data-station="grancieres-la-queue" cx="371.09" cy="1420.5" r="7"/>
    <circle className="parking" data-ligne="n" data-station-id="610" data-station="orgerus-behoust" cx="328.32" cy="1461.74" r="7"/>
    <circle data-ligne="n" data-station-id="846" data-station="tacoignieres-richebourg" cx="287.23" cy="1503.64" r="7"/>
    <circle data-ligne="n" data-station-id="356" data-station="houdan" cx="188.89" cy="1522.17" r="7"/>
  </g>

  
</svg>
      )}else if(nameLine==="linie--j"){
        return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1058.33mm" height="847.72mm" viewBox="0 0 3000 2403" className="svgImage">


  <g className="train--j">
    <line data-ligne-line="j" className="linie linie--j" d="M219.2,322.7"/>
    <path data-ligne-line="j" className="linie linie--j" d="M128.2,407.5"/>
    <polyline data-ligne-line="j" className="linie linie--j" points="1330.4,940.3 1330.4,937.7 1305,912.3 1305,818.2 1070.3,583.5 662.7,583.5 402.8,323.5 235.8,323.5"/>
    <polyline data-ligne-line="j" className="linie linie--j" points="1166.1,551.1 1142.9,551.1 1118.5,575.6 1118.5,630"/>
    <polyline data-ligne-line="j" className="linie linie--j" points="692.3,125.6 936.6,370 853.2,453.4 853.2,561.3 875.4,583.6 "/>
    


    <circle className="parking" data-ligne="j" data-station-id="1016" data-station="haussmann-st-lazare-2" data-name="haussmann-st-lazare" cx="1330.38" cy="936.98" r="7"/>
    <circle data-ligne="j" data-station-id="1016" data-station="gare-st-lazare" cx="1305.49" cy="912.29" r="7"/>
    <circle data-ligne="j" data-station-id="29" data-station="asnieres" cx="1222.34" cy="734.23" r="7"/>
    <circle data-ligne="j" site="cheval" data-station-id="82" data-station="bois-colombes" cx="1194.57" cy="706.73" r="7"/>
    <circle data-ligne="j" data-station-id="194" data-station="colombes" cx="1167.67" cy="679.61" r="7"/>
    <circle data-ligne="j" data-station-id="435" data-station="le-stade" cx="1138.71" cy="651.48" r="7"/>
    <circle data-ligne="j" data-station-id="24" data-station="argenteuil" cx="1118.46" cy="630.03" r="7"/>
    <circle data-ligne="j" data-station-id="867" data-station="val-dargenteuil" cx="1083.84" cy="597.01" r="7"/>
    <circle data-ligne="j" data-station-id="211" data-station="cormeilles-en-parisis" cx="1038.21" cy="583.58" r="7"/>
    <circle data-ligne="j" data-station-id="398" data-station="la-frette-montigny" cx="988.5" cy="583.58" r="7"/>
    <circle className="parking" data-ligne="j" data-station-id="346" data-station="herblay" cx="941.17" cy="582.58" r="7"/>
    <circle className="parking" data-ligne="j" data-station-id="205" data-station="conflans-sainte-honorine" cx="893.49" cy="583.58" r="7"/>
    <circle className="parking" data-ligne="j" data-station-id="527" data-station="maurecourt" cx="756.9" cy="583.58" r="7"/>
    <circle data-ligne="j" data-station-id="17" data-station="andresy" cx="690.27" cy="582.58" r="7"/>
    <circle data-ligne="j" data-station-id="147" data-station="chanteloup-les-vignes" cx="635.42" cy="555.71" r="7"/>
    <circle className="parking" data-ligne="j" data-station-id="859" data-station="triel-sur-seine" cx="602.85" cy="523.69" r="7"/>
    <circle data-ligne="j" data-station-id="878" data-station="vaux-sur-seine" cx="571.22" cy="491.86" r="7"/>
    <circle data-ligne="j" data-station-id="854" data-station="thun-le-paradis" cx="539.25" cy="458.83" r="7"/>
    <circle data-ligne="j" data-station-id="541" data-station="meulan-hardricourt" cx="507.37" cy="427.42" r="7"/>
    <circle className="parking" data-ligne="j" data-station-id="388" data-station="juziers" cx="474.88" cy="395.02" r="7"/>
    <circle data-ligne="j" data-station-id="321" data-station="gargenville" cx="441.9" cy="362.28" r="7"/>
    <circle className="parking" data-ligne="j" data-station-id="365" data-station="issou-porcheville" cx="410.19" cy="330.83" r="7"/>
    <circle data-ligne="j" data-station-id="469" data-station="limay" cx="357.99" cy="322.68" r="7"/>
    <circle data-ligne="j" data-station-id="508" data-station="mantes-station" cx="297.83" cy="322.68" r="7"/>
    <circle className="parking" data-ligne="j" data-station-id="507" data-station="mantes-la-jolie" cx="236.14" cy="322.68" r="7"/>
    <circle className="parking" data-ligne="j" data-station-id="203" data-station="conflans-fin-doise" cx="839.24" cy="583.58" r="7"/>
    <circle data-ligne="j" data-station-id="263" data-station="eragny-neuville" cx="852.56" cy="504.55" r="7"/>
    <circle className="parking" data-ligne="j" data-station-id="834" data-station="saint-ouen-laumone" cx="891.49" cy="416.27" r="7"/>
    <circle className="parking" data-ligne="j" data-station-id="677" data-station="pontoise" cx="909.24" cy="341.98" r="7"/>
    <circle data-ligne="j" data-station-id="613" data-station="osny" cx="863.7" cy="297" r="7"/>
    <circle data-ligne="j" data-station-id="86" data-station="boissy-laillerie" cx="830.09" cy="263.13" r="7"/>
    <circle className="parking" data-ligne="j" data-station-id="557" data-station="montgeroult-courcelles" cx="796.29" cy="230.31" r="7"/>
    <circle data-ligne="j" data-station-id="865" data-station="us" cx="763.43" cy="196.19" r="7"/>
    <circle className="parking" data-ligne="j" data-station-id="782" data-station="sannois" cx="1118.46" cy="576.54" r="7"/>
    <circle className="parking" data-ligne="j" data-station-id="997" data-station="ermont-eaubonne" cx="1167.67" cy="551.14" r="7"/> 
    <circle data-ligne="j" data-station-id="783" data-station="santeuil-le-perchay" cx="729.28" cy="162.63" r="7"/>
    <circle data-ligne="j" data-station-id="157" data-station="chars" cx="692.27" cy="125.63" r="7"/>
  </g>

</svg>
        )}else if(nameLine==="linie--p"){
          return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1058.33mm" height="847.72mm" viewBox="0 0 3000 2403" className="svgImage">


  <g className="train--p">
    <polyline data-ligne-line="p" className="linie linie--p" points="2752.82 784.23 2707.58 829.47 2539.26 829.47"/>
    <polyline data-ligne-line="p" className="linie linie--p" points="1495.44 879.41 1521.72 853.13 1884.66 853.13 1957.58 926.04 2442.69 926.04 2710.46 658.27"/>

    <circle className="parking" data-ligne="p" data-station-id="305" data-station="gare-de-lest" cx="1495.44" cy="879.47" r="7"/>
    <circle className="parking" data-ligne="p" data-station-id="942" data-station="chelles-gournay" cx="2129" cy="926.04" r="7"/>
    <circle data-ligne="p" data-station-id="866" data-station="vaires-torcy" cx="2240.21" cy="926.04" r="7"/>
    <circle className="parking" data-ligne="p" data-station-id="417" data-station="lagny-thorigny" cx="2343.22" cy="926.04" r="7"/>
    <circle data-ligne="p" data-station-id="267" data-station="esbly" cx="2455.89" cy="912.41" r="7"/>
    <circle className="parking" data-ligne="p" data-station-id="529" data-station="meaux" cx="2491.06" cy="878.13" r="7"/>
    <circle data-ligne="p" data-station-id="860" data-station="trilport" cx="2527.91" cy="841.57" r="7"/>
    <circle data-ligne="p" data-station-id="364" data-station="isles-armentieres-congis" cx="2564.37" cy="803.85" r="7"/>
    <circle data-ligne="p" className="parking" data-station-id="146" data-station="changis-st-jean" cx="2586.09" cy="829.47" r="7"/>
    <circle className="parking" data-ligne="p" data-station-id="397" data-station="la-ferte-sous-jouarre" cx="2671.8" cy="829.47" r="7"/>
    <circle data-ligne="p" data-station-id="581" data-station="nanteuil-saacy" cx="2752.82" cy="784.23" r="7"/>
    <circle data-ligne="p" data-station-id="472" data-station="lizy-sur-ourcq" cx="2636.72" cy="732.23" r="7"/>
    <circle data-ligne="p" data-station-id="229" data-station="crouy-sur-ourcq" cx="2710.46" cy="658.27" r="7"/>
  </g>


  
</svg>
          )}

    
  }
}

export default Linie;