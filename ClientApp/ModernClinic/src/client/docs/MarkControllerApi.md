# OpenApiDefinition.MarkControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMark**](MarkControllerApi.md#addMark) | **POST** /api/marks | 
[**deleteMark**](MarkControllerApi.md#deleteMark) | **DELETE** /api/marks/{id} | 
[**getAllMarks**](MarkControllerApi.md#getAllMarks) | **GET** /api/marks | 
[**getMark**](MarkControllerApi.md#getMark) | **GET** /api/marks/{id} | 
[**getMarkByDoctor**](MarkControllerApi.md#getMarkByDoctor) | **GET** /api/marks/get-by-doctor/{id} | 
[**updateMark**](MarkControllerApi.md#updateMark) | **PUT** /api/marks/{id} | 



## addMark

> PostMarkDto addMark(postMarkDto)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.MarkControllerApi();
let postMarkDto = new OpenApiDefinition.PostMarkDto(); // PostMarkDto | 
apiInstance.addMark(postMarkDto, (error, data, response) => {
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
 **postMarkDto** | [**PostMarkDto**](PostMarkDto.md)|  | 

### Return type

[**PostMarkDto**](PostMarkDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteMark

> Mark deleteMark(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.MarkControllerApi();
let id = 789; // Number | 
apiInstance.deleteMark(id, (error, data, response) => {
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

[**Mark**](Mark.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAllMarks

> [Mark] getAllMarks()



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.MarkControllerApi();
apiInstance.getAllMarks((error, data, response) => {
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

[**[Mark]**](Mark.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getMark

> Mark getMark(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.MarkControllerApi();
let id = 789; // Number | 
apiInstance.getMark(id, (error, data, response) => {
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

[**Mark**](Mark.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getMarkByDoctor

> [Mark] getMarkByDoctor(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.MarkControllerApi();
let id = 789; // Number | 
apiInstance.getMarkByDoctor(id, (error, data, response) => {
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

[**[Mark]**](Mark.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateMark

> Mark updateMark(id, mark)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.MarkControllerApi();
let id = 789; // Number | 
let mark = new OpenApiDefinition.Mark(); // Mark | 
apiInstance.updateMark(id, mark, (error, data, response) => {
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
 **mark** | [**Mark**](Mark.md)|  | 

### Return type

[**Mark**](Mark.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

