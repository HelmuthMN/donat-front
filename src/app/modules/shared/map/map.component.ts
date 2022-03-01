import { Component, Input, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import * as Proj from 'ol/proj';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import {Icon, Style} from 'ol/style';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  
  public map!: Map  
  @Input() lat: number = -23.96014;
  @Input() lon: number = -46.33484;
  @Input() zoom: number = 13;
  
  
  ngOnInit(): void {
    

    this.map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],

    target: 'map',
    view: new View({ 
      center: Proj.fromLonLat([this.lon, this.lat]),
      zoom: this.zoom
    }),
  });

  const iconFeature = new Feature({
      geometry: new Point(Proj.fromLonLat([this.lon, this.lat])),
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: './assets/images/pointer.png',
      }),
    });

    iconFeature.setStyle(iconStyle);

    const vectorSource = new VectorSource({
      features: [iconFeature],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    vectorLayer.setZIndex(10);


  this.map.addLayer(vectorLayer)
 }
}