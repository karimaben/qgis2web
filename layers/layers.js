var wms_layers = [];

var format_OD_RG_OCCUPSOL_0 = new ol.format.GeoJSON();
var features_OD_RG_OCCUPSOL_0 = format_OD_RG_OCCUPSOL_0.readFeatures(json_OD_RG_OCCUPSOL_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OD_RG_OCCUPSOL_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OD_RG_OCCUPSOL_0.addFeatures(features_OD_RG_OCCUPSOL_0);
var lyr_OD_RG_OCCUPSOL_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OD_RG_OCCUPSOL_0, 
                style: style_OD_RG_OCCUPSOL_0,
                interactive: true,
    title: 'OD_RG_OCCUPSOL<br />\
    <img src="styles/legend/OD_RG_OCCUPSOL_0_0.png" /> bassin<br />\
    <img src="styles/legend/OD_RG_OCCUPSOL_0_1.png" /> ilot<br />\
    <img src="styles/legend/OD_RG_OCCUPSOL_0_2.png" /> place<br />\
    <img src="styles/legend/OD_RG_OCCUPSOL_0_3.png" /> pont<br />\
    <img src="styles/legend/OD_RG_OCCUPSOL_0_4.png" /> séparateur<br />\
    <img src="styles/legend/OD_RG_OCCUPSOL_0_5.png" /> tunnel<br />\
    <img src="styles/legend/OD_RG_OCCUPSOL_0_6.png" /> voirie<br />\
    <img src="styles/legend/OD_RG_OCCUPSOL_0_7.png" /> <br />'
        });

lyr_OD_RG_OCCUPSOL_0.setVisible(true);
var layersList = [lyr_OD_RG_OCCUPSOL_0];
lyr_OD_RG_OCCUPSOL_0.set('fieldAliases', {'ID_OC_SIGU': 'ID_OC_SIGU', 'NOM': 'NOM', 'CODCOM': 'CODCOM', 'ID_VO_SIGU': 'ID_VO_SIGU', 'CLASSE': 'CLASSE', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_OD_RG_OCCUPSOL_0.set('fieldImages', {'ID_OC_SIGU': 'TextEdit', 'NOM': 'TextEdit', 'CODCOM': 'TextEdit', 'ID_VO_SIGU': 'TextEdit', 'CLASSE': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_OD_RG_OCCUPSOL_0.set('fieldLabels', {'ID_OC_SIGU': 'no label', 'NOM': 'no label', 'CODCOM': 'no label', 'ID_VO_SIGU': 'no label', 'CLASSE': 'header label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_OD_RG_OCCUPSOL_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});