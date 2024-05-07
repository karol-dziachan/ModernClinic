# OpenApiDefinition.DoctorControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDoctor**](DoctorControllerApi.md#addDoctor) | **POST** /api/doctors | 
[**assignService**](DoctorControllerApi.md#assignService) | **POST** /api/doctors/assign-service | 
[**deleteDoctor**](DoctorControllerApi.md#deleteDoctor) | **DELETE** /api/doctors/{id} | 
[**getAllDoctors**](DoctorControllerApi.md#getAllDoctors) | **GET** /api/doctors | 
[**getAvailableSpecialists**](DoctorControllerApi.md#getAvailableSpecialists) | **GET** /api/doctors/available-specialists | 
[**getDoctor**](DoctorControllerApi.md#getDoctor) | **GET** /api/doctors/{id} | 
[**getDoctor1**](DoctorControllerApi.md#getDoctor1) | **GET** /api/doctors/get-specialists | 
[**getMarksByDoctorId**](DoctorControllerApi.md#getMarksByDoctorId) | **GET** /api/doctors/marks-by-doctor/{id} | 
[**getServicesByDoctorId**](DoctorControllerApi.md#getServicesByDoctorId) | **GET** /api/doctors/services-by-doctor/{id} | 
[**updateDoctor**](DoctorControllerApi.md#updateDoctor) | **PUT** /api/doctors/{id} | 



## addDoctor

> PostDoctorDto addDoctor(postDoctorDto)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.DoctorControllerApi();
let postDoctorDto = new OpenApiDefinition.PostDoctorDto(); // PostDoctorDto | 
apiInstance.addDoctor(postDoctorDto, (error, data, response) => {
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
 **postDoctorDto** | [**PostDoctorDto**](PostDoctorDto.md)|  | 

### Return type

[**PostDoctorDto**](PostDoctorDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## assignService

> String assignService(assignServiceDto)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.DoctorControllerApi();
let assignServiceDto = new OpenApiDefinition.AssignServiceDto(); // AssignServiceDto | 
apiInstance.assignService(assignServiceDto, (error, data, response) => {
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
 **assignServiceDto** | [**AssignServiceDto**](AssignServiceDto.md)|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteDoctor

> Doctor deleteDoctor(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.DoctorControllerApi();
let id = 789; // Number | 
apiInstance.deleteDoctor(id, (error, data, response) => {
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

[**Doctor**](Doctor.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAllDoctors

> [Doctor] getAllDoctors()



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.DoctorControllerApi();
apiInstance.getAllDoctors((error, data, response) => {
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

[**[Doctor]**](Doctor.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAvailableSpecialists

> [GetAvailableSpecialistDto] getAvailableSpecialists()



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.DoctorControllerApi();
apiInstance.getAvailableSpecialists((error, data, response) => {
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

[**[GetAvailableSpecialistDto]**](GetAvailableSpecialistDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getDoctor

> Doctor getDoctor(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.DoctorControllerApi();
let id = 789; // Number | 
apiInstance.getDoctor(id, (error, data, response) => {
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

[**Doctor**](Doctor.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getDoctor1

> GetSpecialistsDto getDoctor1()



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.DoctorControllerApi();
apiInstance.getDoctor1((error, data, response) => {
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

[**GetSpecialistsDto**](GetSpecialistsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getMarksByDoctorId

> [Mark] getMarksByDoctorId(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.DoctorControllerApi();
let id = 789; // Number | 
apiInstance.getMarksByDoctorId(id, (error, data, response) => {
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


## getServicesByDoctorId

> [Service] getServicesByDoctorId(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.DoctorControllerApi();
let id = 789; // Number | 
apiInstance.getServicesByDoctorId(id, (error, data, response) => {
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

[**[Service]**](Service.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateDoctor

> PutDoctorDto updateDoctor(id, putDoctorDto)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.DoctorControllerApi();
let id = 789; // Number | 
let putDoctorDto = new OpenApiDefinition.PutDoctorDto(); // PutDoctorDto | 
apiInstance.updateDoctor(id, putDoctorDto, (error, data, response) => {
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
 **putDoctorDto** | [**PutDoctorDto**](PutDoctorDto.md)|  | 

### Return type

[**PutDoctorDto**](PutDoctorDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

