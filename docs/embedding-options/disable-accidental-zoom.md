---
sidebar_position: 2
---

# Disable accidental zoom

Per default, your visitors can zoom into the map with scrolling. On desktop, this is usually done with a mouse or touchpad, and on a mobile device by dragging with one finger.

There are cases where this behavior is not ideal. For example, if your map takes the complete width and height of a screen, a user might get stuck because when they try to scroll away, it will just keep zooming in and out of the map. Super annoying! This is what we call accidental zoom.

To disable accidental zoom, simply append the URL parameter `no_accidental_zoom=true` to your map URL in the iframe. This will look like this (your map will have a different URL at the end):

```html
<iframe src="https://app.mapzy.io/maps/m5PHzy?no_accidental_zoom=true"
  allow="geolocation" title="Map by mapzy.io" loading="lazy"
  referrerpolicy="no-referrer" height="600px" width="100%">
</iframe> 
```

Make sure not to forget the `?`.

Once enabled, your visitors will be able to zoom the map by either pressing cmd/control and zooming on desktop, or by using two fingers on mobile devices such as smartphones and tablets.