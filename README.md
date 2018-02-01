# knowagesdk
NPM Javascript SpagoBI API

This npm model only support a typescript wrapper for the methods: authenticated, baseUrl and getDocumentHtml

Install: npm install -g knowagesdk 

Example:

import {Component, OnInit} from '@angular/core';
import {Sbi} from 'knowagesdk';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public url;

  constructor() {
  }

  ngOnInit() {
    const sbi = new Sbi('http', 'localhost', '9000', 'knowage', 'servlet/AdapterHTTP');
    sbi.authenticate('sbidev', 'sbidev', () => {
      this.url = sbi.getDocumentHtml('STATUS ORDEM SERVICO', undefined);
    });
  }

}

For more details see: 
https://github.com/KnowageLabs/Knowage-Server/tree/master/knowagesdk/src/main/webapp/js
https://www.npmjs.com/package/knowagesdk

