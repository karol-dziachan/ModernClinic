/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LocalTime from './LocalTime';

/**
 * The TimeTable model module.
 * @module model/TimeTable
 * @version v0
 */
class TimeTable {
    /**
     * Constructs a new <code>TimeTable</code>.
     * @alias module:model/TimeTable
     */
    constructor() { 
        
        TimeTable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimeTable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeTable} obj Optional instance to populate.
     * @return {module:model/TimeTable} The populated <code>TimeTable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeTable();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = LocalTime.constructFromObject(data['startTime']);
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = LocalTime.constructFromObject(data['endTime']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeTable</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeTable</code>.
     */
    static validateJSON(data) {
        // validate the optional field `startTime`
        if (data['startTime']) { // data not null
          LocalTime.validateJSON(data['startTime']);
        }
        // validate the optional field `endTime`
        if (data['endTime']) { // data not null
          LocalTime.validateJSON(data['endTime']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
TimeTable.prototype['id'] = undefined;

/**
 * @member {Date} date
 */
TimeTable.prototype['date'] = undefined;

/**
 * @member {module:model/LocalTime} startTime
 */
TimeTable.prototype['startTime'] = undefined;

/**
 * @member {module:model/LocalTime} endTime
 */
TimeTable.prototype['endTime'] = undefined;






export default TimeTable;

