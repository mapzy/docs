---
sidebar_position: 1
---

# About Sync Mode

Sync Mode let's you synchronize your locations and their opening times from an external source with your Mapzy map. This is a one way synchronization, i.e. locations from your Mapzy account are not synchronized back to your external source. Your external source of locations is considered the source of truth; the synchronization process deletes locations that are not included in the request to the Sync API. To use Sync Mode, you need to turn it on in your Mapzy settings and then call our Sync API endpoint with your data.

## Why Sync Mode?

The cool thing about Sync Mode is that if you already have an external database of locations, you can easily sync it to Mapzy and then just embed your Mapzy map on your website. Withouth Sync Mode, you would need to build your own mapping front-end which takes more time than simply using Mapzy with Sync Mode. Having said that, we consider Sync Mode an advanced feature that will not be used by most users.

## Activating and deactivating Sync Mode

To activate or deactivate Sync Mode, navigate to your Mapzy account settings and turn it on. To deactivate it, simply turn it off.

<center>
 <img src="/img/sync_mode.jpg" />
</center>


With Sync Mode active, your Mapzy dashboard goes into restricted mode. This means that you cannot use the dashboard anymore to add, delete or edit locations and opening times. You must use the Sync API. Conversely, when Sync Mode is inactive, you cannot use the Sync API.