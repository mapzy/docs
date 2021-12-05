---
sidebar_position: 1
---

# Height and width

## Changing height and width (simple way)

Depending on where on your website you install your map, you might want to change its displayed size so it better fits in to your website. As you might remember, the default embed code looks like this (only with a different URL pointing to your map):

```html
<iframe src="https://app.mapzy.io/maps/m5PHzy" allow="geolocation"
  title="Map by mapzy.io" loading="lazy" referrerpolicy="no-referrer"
  height="600px" width="100%">
</iframe> 
```

Unsurprisingly, you can change the height and width by changing the value for the `height` and `width` attributes of the iframe. You can choose to enter fixed pixel values (e.g., `height=600px`) or variable percentage values (e.g., `width="100%"`).

## Changing the height and width (advanced way)

If you're familiar with HTML and CSS, you probably know that you can also use more advanced CSS techniques to control how your map will be rendered. For example, you might want to display the map in different heights and widths depending on if the visitor is on a mobile or desktop device.

First, remove the height and width attributes and assign a class name to the iframe like so:

```html
<iframe src="https://app.mapzy.io/maps/m5PHzy" allow="geolocation"
  title="Map by mapzy.io" loading="lazy" referrerpolicy="no-referrer"
  class="mapzy-map">
</iframe> 
```

Second, add CSS code that handles the different screen widths. Like this, for example

```css
// separate CSS file or inline CSS in your HTML with <style> tags

.mapzy-map {
  height: 300px;
  width: 100%;
}

@media (min-width: 768px) {
  .mapzy-map {
    height: 600px;
    width: 100%;
    max-width: 800px;
  }
}
```

This means that your map has a height of `300px` and a width of `100%` when the screen width of the browser is less than `768px`. This is most likely to be the case if somebody is on a mobile device. For wider screens, the map will have a height of `600px` and a maximum width of `800px`.