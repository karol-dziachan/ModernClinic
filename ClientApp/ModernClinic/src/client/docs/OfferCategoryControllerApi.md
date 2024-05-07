# OpenApiDefinition.OfferCategoryControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOfferCategory**](OfferCategoryControllerApi.md#addOfferCategory) | **POST** /api/offer-categories | 
[**deleteOfferCategory**](OfferCategoryControllerApi.md#deleteOfferCategory) | **DELETE** /api/offer-categories/{id} | 
[**getAllOfferCategorys**](OfferCategoryControllerApi.md#getAllOfferCategorys) | **GET** /api/offer-categories | 
[**getOfferCategory**](OfferCategoryControllerApi.md#getOfferCategory) | **GET** /api/offer-categories/{id} | 
[**updateOfferCategory**](OfferCategoryControllerApi.md#updateOfferCategory) | **PUT** /api/offer-categories/{id} | 



## addOfferCategory

> PostOfferCategoryDto addOfferCategory(postOfferCategoryDto)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.OfferCategoryControllerApi();
let postOfferCategoryDto = new OpenApiDefinition.PostOfferCategoryDto(); // PostOfferCategoryDto | 
apiInstance.addOfferCategory(postOfferCategoryDto, (error, data, response) => {
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
 **postOfferCategoryDto** | [**PostOfferCategoryDto**](PostOfferCategoryDto.md)|  | 

### Return type

[**PostOfferCategoryDto**](PostOfferCategoryDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteOfferCategory

> OfferCategory deleteOfferCategory(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.OfferCategoryControllerApi();
let id = 789; // Number | 
apiInstance.deleteOfferCategory(id, (error, data, response) => {
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

[**OfferCategory**](OfferCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAllOfferCategorys

> [OfferCategory] getAllOfferCategorys()



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.OfferCategoryControllerApi();
apiInstance.getAllOfferCategorys((error, data, response) => {
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

[**[OfferCategory]**](OfferCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getOfferCategory

> OfferCategory getOfferCategory(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.OfferCategoryControllerApi();
let id = 789; // Number | 
apiInstance.getOfferCategory(id, (error, data, response) => {
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

[**OfferCategory**](OfferCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateOfferCategory

> OfferCategory updateOfferCategory(id, offerCategory)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.OfferCategoryControllerApi();
let id = 789; // Number | 
let offerCategory = new OpenApiDefinition.OfferCategory(); // OfferCategory | 
apiInstance.updateOfferCategory(id, offerCategory, (error, data, response) => {
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
 **offerCategory** | [**OfferCategory**](OfferCategory.md)|  | 

### Return type

[**OfferCategory**](OfferCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

