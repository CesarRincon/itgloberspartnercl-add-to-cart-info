📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Add-to-cart-info
# Add-to-cart-info

![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)
![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)


Component that will display information when adding a product to the shopping cart.
Component that will display information when adding a product to the shopping cart.

<img width="592" alt="image" src="https://user-images.githubusercontent.com/90701896/220177313-416f3a96-1674-49d3-a091-d4627f54d8a5.png">
<img width="592" alt="image" src="https://user-images.githubusercontent.com/90701896/220177313-416f3a96-1674-49d3-a091-d4627f54d8a5.png">

## Configuration 

1. Import the add-to-cart-info's app to your theme's dependencies in the manifest.json, for example:
```json
  dependencies: {
    "{vendor}.add-to-cart-info": "0.x"
  }
 ```
 
 2. Add the add-to-cart-info block to the store-theme. For example:
```json
  "modal-trigger#add-to-cart-info":{
        "children": [
            "modal-layout#add-to-cart-info"
        ],
        "props": {
            "customPixelEventName": "addToCart"
            
        }
    },
    "modal-layout#add-to-cart-info":{
        "children": [
            "add-to-cart-info"
        ]
    }
   ```

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).
In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles  |
| CSS Handles  |
| ----------- | 
|`container`|
|`container__items`|
|`container__image`|
|`container__buttonGroup`|
|`container`|
|`container__items`|
|`container__image`|
|`container__buttonGroup`|


## Contributors ✨

Thanks goes to these wonderful people:

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)