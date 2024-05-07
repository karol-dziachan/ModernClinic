# OpenApiDefinition.OfferControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOffer**](OfferControllerApi.md#addOffer) | **POST** /api/offers | 
[**deleteOffer**](OfferControllerApi.md#deleteOffer) | **DELETE** /api/offers/{id} | 
[**getAllOffers**](OfferControllerApi.md#getAllOffers) | **GET** /api/offers | 
[**getOffer**](OfferControllerApi.md#getOffer) | **GET** /api/offers/{id} | 
[**getOffersByCategoryId**](OfferControllerApi.md#getOffersByCategoryId) | **GET** /api/offers/offers-by-category-id/{id} | 
[**updateOffer**](OfferControllerApi.md#updateOffer) | **PUT** /api/offers/{id} | 



## addOffer

> PostOfferDto addOffer(postOfferDto)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.OfferControllerApi();
let postOfferDto = new OpenApiDefinition.PostOfferDto(); // PostOfferDto | 
apiInstance.addOffer(postOfferDto, (error, data, response) => {
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
 **postOfferDto** | [**PostOfferDto**](PostOfferDto.md)|  | 

### Return type

[**PostOfferDto**](PostOfferDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteOffer

> Offer deleteOffer(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.OfferControllerApi();
let id = 789; // Number | 
apiInstance.deleteOffer(id, (error, data, response) => {
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

[**Offer**](Offer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAllOffers

> [Offer] getAllOffers()



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.OfferControllerApi();
apiInstance.getAllOffers((error, data, response) => {
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

[**[Offer]**](Offer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getOffer

> Offer getOffer(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.OfferControllerApi();
let id = 789; // Number | 
apiInstance.getOffer(id, (error, data, response) => {
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

[**Offer**](Offer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getOffersByCategoryId

> [Offer] getOffersByCategoryId(id)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.OfferControllerApi();
let id = 789; // Number | 
apiInstance.getOffersByCategoryId(id, (error, data, response) => {
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

[**[Offer]**](Offer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateOffer

> Offer updateOffer(id, offer)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.OfferControllerApi();
let id = 789; // Number | 
let offer = new OpenApiDefinition.Offer(); // Offer | 
apiInstance.updateOffer(id, offer, (error, data, response) => {
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
 **offer** | [**Offer**](Offer.md)|  | 

### Return type

[**Offer**](Offer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

