import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

declare var H: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  
  private map = H.Map;

  @ViewChild('map')
  private mapElement!: ElementRef;

  private platform: any;


  @Input() lat: number = -23.96014;
  @Input() lon: number = -46.33484;
  @Input() zoom: number = 13;

  constructor() {
    this.platform = new H.service.Platform({
      "apikey": "mQ3A_-TTvCNNwH5OZ9S6PkImzlx2K1UPQQU3V_ko8kQ"
    })
  }

  ngOnInit(): void { }

   public ngAfterViewInit() {
    const defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.vector.normal.map,
      {
        zoom: this.zoom,
        center: { lat: this.lat, lng: this.lon }
      },
    );
    this.map.addEventListener('resize', () => this.map.getViewPort().resize());

    let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map))

    const ui = H.ui.UI.createDefault(this.map, defaultLayers);

    const icon = new H.map.Icon('./assets/images/pointer.png');

    const marker = new H.map.Marker({ lat: this.lat, lng: this.lon }, { icon: icon });

    this.map.addObject(marker);

  }
}