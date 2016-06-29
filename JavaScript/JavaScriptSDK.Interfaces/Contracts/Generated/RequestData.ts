// THIS TYPE WAS AUTOGENERATED
/// <reference path="Domain.ts" />
module AI
{
"use strict";
    export class RequestData extends Microsoft.Telemetry.Domain
    {
        public ver: number;
        public id: string;
        public name: string;
        public startTime: string;
        public duration: string;
        public responseCode: string;
        public success: boolean;
        public httpMethod: string;
        public url: string;
        public properties: any;
        public measurements: any;
        
        constructor()
        {
            super();

            this.ver = 2;
            this.properties = {};
            this.measurements = {};
            
            super();
        }
    }
}