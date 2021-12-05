---
sidebar_position: 3
---

# Advanced styling

If your a bit familar with HTML and CSS, you can customize the look of your embedded map quite easily. Remember that the iframe is just a HTML element, and can therefore also be styled as one. The basic idea is that you assign a class name to the iframe, and then reference that class name in your CSS code to apply different styles.

Here, we assign the class name `mapzy-map` to the iframe.

```html
<iframe src="https://app.mapzy.io/maps/m5PHzy" allow="geolocation"
  title="Map by mapzy.io" loading="lazy" referrerpolicy="no-referrer"
  class="mapzy-map">
</iframe> 
```

It can then be referenced in the CSS code like this:

```css
// separate CSS file or inline CSS in your HTML with <style> tags

.mapzy-map {
  // add any styling you want
}
```

What follows are some styling ideas, but you can do much more.

## Rounded corners
Rounded corners are cool. That's just a fact. To round the corners of your map, use this CSS:

```css
.mapzy-map {
  border-radius: 15px;
}
```

## Shadow
What if your map had a smooth shadow? Try this:

```css
.mapzy-map {
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));
}
```

## Border
Why not give your map a nice border? Maybe a nice green one:
```css
.mapzy-map {
  border-style: solid;
  border-width: 3px;
  border-color: rgb(52, 211, 153);
}
```