# OpenApiDefinition.SpecialityControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSpeciality**](SpecialityControllerApi.md#createSpeciality) | **POST** /api/specialities | 
[**deleteSpeciality**](SpecialityControllerApi.md#deleteSpeciality) | **DELETE** /api/specialities/{id} | 
[**getAllSpecialities**](SpecialityControllerApi.md#getAllSpecialities) | **GET** /api/specialities | 
[**getDoctorsBySpecialityId**](SpecialityControllerApi.md#getDoctorsBySpecialityId) | **GET** /api/specialities/doctors-by-speciality-id/{id} | 
[**getSpeciality**](SpecialityControllerApi.md#getSpeciality) | **GET** /api/specialities/{id} | 
[**getSpecialityByDoctorId**](SpecialityControllerApi.md#getSpecialityByDoctorId) | **GET** /api/specialities/speciality-by-doctor-id/{id} | 
[**updateSpeciality**](SpecialityControllerApi.md#updateSpeciality) | **PUT** /api/specialities/{id} | 



## createSpeciality

> Speciality createSpeciality(speciality)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.SpecialityControllerApi();
let speciality = new OpenApiDefinition.Speciality(); // Speciality | 
apiInstance.createSpeciality(speciality, (error, data, response) => {
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
 **speciality** | [**Speciality**](Speciality.md)|  | 

### Return type

[**Speciality**](Speciality.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteSpeciality

> Speciality deleteSpeciality(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.SpecialityControllerApi();
let id = 789; // Number | 
apiInstance.deleteSpeciality(id, (error, data, response) => {
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

[**Speciality**](Speciality.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAllSpecialities

> [Speciality] getAllSpecialities()



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.SpecialityControllerApi();
apiInstance.getAllSpecialities((error, data, response) => {
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

[**[Speciality]**](Speciality.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getDoctorsBySpecialityId

> [Doctor] getDoctorsBySpecialityId(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.SpecialityControllerApi();
let id = 789; // Number | 
apiInstance.getDoctorsBySpecialityId(id, (error, data, response) => {
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

[**[Doctor]**](Doctor.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getSpeciality

> Speciality getSpeciality(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.SpecialityControllerApi();
let id = 789; // Number | 
apiInstance.getSpeciality(id, (error, data, response) => {
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

[**Speciality**](Speciality.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getSpecialityByDoctorId

> Speciality getSpecialityByDoctorId(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.SpecialityControllerApi();
let id = 789; // Number | 
apiInstance.getSpecialityByDoctorId(id, (error, data, response) => {
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

[**Speciality**](Speciality.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateSpeciality

> Speciality updateSpeciality(id, speciality)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.SpecialityControllerApi();
let id = 789; // Number | 
let speciality = new OpenApiDefinition.Speciality(); // Speciality | 
apiInstance.updateSpeciality(id, speciality, (error, data, response) => {
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
 **speciality** | [**Speciality**](Speciality.md)|  | 

### Return type

[**Speciality**](Speciality.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

