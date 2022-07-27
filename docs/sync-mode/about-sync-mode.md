---
sidebar_position: 1
---

# About Sync Mode

With Sync Mode, you can synchronize your locations and their opening times from an external source with your Mapzy map. Your external source is considered the only source of truth; the synchronization process deletes locations that are not included in the request to the Sync API or that were created through the Mapzy dashboard.. To use Sync Mode, you need to turn it on in your Mapzy settings and then call our Sync API endpoint with your data.

## Activating and deactivating Sync Mode

To activate or deactivate Sync Mode, navigate to your Mapzy account settings and turn it on. To deactivate it, simply turn it off.

<center>
 <img src="/img/sync_mode.jpg" />
</center>


With Sync Mode active, your Mapzy dashboard goes into restricted mode. This means that you cannot use the dashboard anymore to add, delete or edit locations and opening times. You must use the Sync API. Conversely, when Sync Mode is inactive, you cannot use the Sync API.