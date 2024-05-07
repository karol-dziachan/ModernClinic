# OpenApiDefinition.ServiceControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addService**](ServiceControllerApi.md#addService) | **POST** /api/services | 
[**deleteService**](ServiceControllerApi.md#deleteService) | **DELETE** /api/services/{id} | 
[**getAllServices**](ServiceControllerApi.md#getAllServices) | **GET** /api/services | 
[**getService**](ServiceControllerApi.md#getService) | **GET** /api/services/{id} | 
[**updateService**](ServiceControllerApi.md#updateService) | **PUT** /api/services/{id} | 



## addService

> PostServiceDto addService(postServiceDto)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ServiceControllerApi();
let postServiceDto = new OpenApiDefinition.PostServiceDto(); // PostServiceDto | 
apiInstance.addService(postServiceDto, (error, data, response) => {
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
 **postServiceDto** | [**PostServiceDto**](PostServiceDto.md)|  | 

### Return type

[**PostServiceDto**](PostServiceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteService

> Service deleteService(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ServiceControllerApi();
let id = 789; // Number | 
apiInstance.deleteService(id, (error, data, response) => {
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

[**Service**](Service.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAllServices

> [Service] getAllServices()



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ServiceControllerApi();
apiInstance.getAllServices((error, data, response) => {
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

[**[Service]**](Service.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getService

> Service getService(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ServiceControllerApi();
let id = 789; // Number | 
apiInstance.getService(id, (error, data, response) => {
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

[**Service**](Service.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateService

> Service updateService(id, service)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ServiceControllerApi();
let id = 789; // Number | 
let service = new OpenApiDefinition.Service(); // Service | 
apiInstance.updateService(id, service, (error, data, response) => {
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
 **service** | [**Service**](Service.md)|  | 

### Return type

[**Service**](Service.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

