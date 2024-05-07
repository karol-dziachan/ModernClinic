# OpenApiDefinition.VisitControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addVisit**](VisitControllerApi.md#addVisit) | **POST** /api/visits | 
[**bookVisit**](VisitControllerApi.md#bookVisit) | **POST** /api/visits/book-visit | 
[**deleteVisit**](VisitControllerApi.md#deleteVisit) | **DELETE** /api/visits/{id} | 
[**getAllVisits**](VisitControllerApi.md#getAllVisits) | **GET** /api/visits | 
[**getAllVisitsForPatient**](VisitControllerApi.md#getAllVisitsForPatient) | **GET** /api/visits/get-all-visits | 
[**getNearestVisitForPatient**](VisitControllerApi.md#getNearestVisitForPatient) | **GET** /api/visits/get-nearest-visit | 
[**getVisit**](VisitControllerApi.md#getVisit) | **GET** /api/visits/{id} | 
[**updateVisit**](VisitControllerApi.md#updateVisit) | **PUT** /api/visits/{id} | 



## addVisit

> Visit addVisit(visit)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.VisitControllerApi();
let visit = new OpenApiDefinition.Visit(); // Visit | 
apiInstance.addVisit(visit, (error, data, response) => {
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
 **visit** | [**Visit**](Visit.md)|  | 

### Return type

[**Visit**](Visit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## bookVisit

> Visit bookVisit(postVisitDto)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.VisitControllerApi();
let postVisitDto = new OpenApiDefinition.PostVisitDto(); // PostVisitDto | 
apiInstance.bookVisit(postVisitDto, (error, data, response) => {
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
 **postVisitDto** | [**PostVisitDto**](PostVisitDto.md)|  | 

### Return type

[**Visit**](Visit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteVisit

> Visit deleteVisit(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.VisitControllerApi();
let id = 789; // Number | 
apiInstance.deleteVisit(id, (error, data, response) => {
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

[**Visit**](Visit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAllVisits

> [Visit] getAllVisits()



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.VisitControllerApi();
apiInstance.getAllVisits((error, data, response) => {
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

[**[Visit]**](Visit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAllVisitsForPatient

> GetAllVisitsDto getAllVisitsForPatient()



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.VisitControllerApi();
apiInstance.getAllVisitsForPatient((error, data, response) => {
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

[**GetAllVisitsDto**](GetAllVisitsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getNearestVisitForPatient

> GetUpcommingVisitDto getNearestVisitForPatient()



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.VisitControllerApi();
apiInstance.getNearestVisitForPatient((error, data, response) => {
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

[**GetUpcommingVisitDto**](GetUpcommingVisitDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getVisit

> Visit getVisit(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.VisitControllerApi();
let id = 789; // Number | 
apiInstance.getVisit(id, (error, data, response) => {
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

[**Visit**](Visit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateVisit

> Visit updateVisit(id, visit)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.VisitControllerApi();
let id = 789; // Number | 
let visit = new OpenApiDefinition.Visit(); // Visit | 
apiInstance.updateVisit(id, visit, (error, data, response) => {
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
 **visit** | [**Visit**](Visit.md)|  | 

### Return type

[**Visit**](Visit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

