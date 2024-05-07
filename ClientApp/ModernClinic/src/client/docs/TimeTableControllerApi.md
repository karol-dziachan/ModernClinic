# OpenApiDefinition.TimeTableControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTimeTable**](TimeTableControllerApi.md#addTimeTable) | **POST** /api/time-table | 
[**deleteTimeTable**](TimeTableControllerApi.md#deleteTimeTable) | **DELETE** /api/time-table/{id} | 
[**getAllTimeTables**](TimeTableControllerApi.md#getAllTimeTables) | **GET** /api/time-table | 
[**getAvailableTimeTables**](TimeTableControllerApi.md#getAvailableTimeTables) | **GET** /api/time-table/available-time-table | 
[**getTimeTable**](TimeTableControllerApi.md#getTimeTable) | **GET** /api/time-table/{id} | 
[**updateTimeTable**](TimeTableControllerApi.md#updateTimeTable) | **PUT** /api/time-table/{id} | 



## addTimeTable

> PostTimeTableDto addTimeTable(postTimeTableDto)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.TimeTableControllerApi();
let postTimeTableDto = new OpenApiDefinition.PostTimeTableDto(); // PostTimeTableDto | 
apiInstance.addTimeTable(postTimeTableDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postTimeTableDto** | [**PostTimeTableDto**](PostTimeTableDto.md)|  | 

### Return type

[**PostTimeTableDto**](PostTimeTableDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteTimeTable

> TimeTable deleteTimeTable(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.TimeTableControllerApi();
let id = 789; // Number | 
apiInstance.deleteTimeTable(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**TimeTable**](TimeTable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAllTimeTables

> [TimeTable] getAllTimeTables()



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.TimeTableControllerApi();
apiInstance.getAllTimeTables((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[TimeTable]**](TimeTable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAvailableTimeTables

> [GetAvailableTimeTableDto] getAvailableTimeTables()



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.TimeTableControllerApi();
apiInstance.getAvailableTimeTables((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[GetAvailableTimeTableDto]**](GetAvailableTimeTableDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getTimeTable

> TimeTable getTimeTable(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.TimeTableControllerApi();
let id = 789; // Number | 
apiInstance.getTimeTable(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**TimeTable**](TimeTable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateTimeTable

> TimeTable updateTimeTable(id, timeTable)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.TimeTableControllerApi();
let id = 789; // Number | 
let timeTable = new OpenApiDefinition.TimeTable(); // TimeTable | 
apiInstance.updateTimeTable(id, timeTable, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **timeTable** | [**TimeTable**](TimeTable.md)|  | 

### Return type

[**TimeTable**](TimeTable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

