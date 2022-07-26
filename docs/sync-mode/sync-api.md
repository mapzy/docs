---
sidebar_position: 2
---

# Sync API


After turning on Sync Mode, you can make an API call to our Sync API to synchronize your locations from an external source with Mapzy.

**CAUTION: The synchronization process delets all existing locations and opening times in your Mapzy account. Locations and opening times that are not included in the request payload are deleted forever.**


## Authentication with API key

To authenticate, you need to send along your API key as a bearer token in the Authorization header. You can find your API key in your Mapzy settings. Make sure to send your request only over an encrypted connection (HTTPS) and never expose or share your API key publicly.

```curl
curl --request POST \
  --header 'Authorization: Bearer b77a3260decc61f10f8z25ca8990elA'
```

If you accidently exposed your API key, let us know (bonjour@mapzy.io) and we'll generate a new one for you. If you're self-hosting, you will need to re-generate it manually (see [GitHub discussions](https://github.com/mapzy/mapzy/discussions) for help with self-hosting).

## API endpoint

You'll find the Sync API at this endpoint:
```
/api/v1/maps/:map_id/sync
```

If you're using the hosted version of Mapzy, the full URL is:
```
https://app.mapzy.io/api/v1/maps/:map_id/sync
```

If you're self-hosting, replace the host of the URL with your own host, e.g.:
```
https://example.com/api/v1/maps/:map_id/sync
```

Make sure to replace `:map_id` with your actual Mapzy map ID, which you can find in the URL when you're logged in to your Mapzy account. It should look like this:
```
/dashboard/maps/m5Rgzb
```

where `m5Rgzb` is your map ID.

You need to send a POST request to this URL with the correctly formatted JSON body containing an array of locations and their opening times to sync your locations into Mapzy.

## Request payload

The request payload must be formatted as JSON and contain an array including at least one `Location` object.

### `Location` object
The `Location` object contains information about a single location and optionally an array of `OpeningTime` objects.

#### `name` (string, required)
The location's displayed name. For example, "Joe's Ravioli Factory".

#### `address` (string, required)
The location's address. For example, "Krossener Straße 21, 10245 Berlin, Germany".

If you don't provide latitude and longitude, Mapzy geocodes this address to find the coordinates.
If you do provide latitude and longitude, they are used as coordinates. However, the provided address is still displayed as the address.

#### `latitude` (float, optional*)
The latitude of this location. For example: 52.510383475182095

If you provide a latitude value, you also need to provide a longitude value. Providing latitude and longitude values override the coordinates for the provided address.

#### `longitude` (float, optional*)
The longitude of this location. For example: 13.459289627250147

If you provide a longitude value, you also need to provide a latitude value. Providing latitude and longitude values override the coordinates for the provided address.


#### `description` (string, optional)
The location's displayed description.


#### `opening_times` (`OpeningTime[]`, optional)
The location's opening times. If you decide to provide opening times, you must provide exactly seven `OpenTime` objects, one for each day of the week. Futhermore, week days can't appear more than once for a location. See below.


### `OpeningTime` object
The `OpeningTime` object contains information about the opening time for a specific day.

#### `day` (string, required)
The week of the day. Must be one of `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, or `sunday`.

#### `opens_at` (string, required*)
The time of day when this location opens. Must be formatted like this `HH:MM`. For example, `08:15`.

This value is required unless you provide a value for `closed` or `open_24h`. There is currently no timezone support, so make sure to provide local times.

#### `closes_at` (string, optiorequirednal*)
The time of day when this location closes. Must be formatted like this `HH:MM`. For example, `23:00`. There is currently no timezone support, so make sure to provide local times.

This value is required unless you provide a value for `closed` or `open_24h`.

#### `closed` (boolean, optional)
If `true`, marks this location as "closed" for this day and the `opens_at` and `closes_at` values are not displayed.

#### `open_24h` (boolean, optional)
If `true`, marks this location as "open 24h" for this day and the `opens_at` and `closes_at` values are not displayed.

## Example request
Here's an example request putting it all together.

```curl

curl --request POST \
  --url https://app.mapzy.io/api/v1/maps/m5Rgzb/sync \
  --header 'Authorization: Bearer b77a3260decc61f10f8z25ca8990elA' \
  --header 'Content-Type: application/json' \
  --data '[
	{
		"name": "Joe'\''s Ravioli Factory",
		"description": "If you like Joe'\''s pasta, you will freakin'\'' love Joe'\''s Ravioli. Straight out of this little factory.",
		"address": "Krossener Straße 21, 10245 Berlin, Germany",
		"latitude": "",
		"longitude": "",
		"opening_times": [
			{
				"day": "monday",
				"opens_at": "10:00",
				"closes_at": "20:00",
				"closed": false,
				"open_24h": false
			},
			{
				"day": "tuesday",
				"opens_at": "10:00",
				"closes_at": "18:00",
				"closed": false,
				"open_24h": false
			},
			{
				"day": "wednesday",
				"opens_at": "11:00",
				"closes_at": "18:00",
				"closed": false,
				"open_24h": false
			},
			{
				"day": "thursday",
				"opens_at": "11:00",
				"closes_at": "18:00",
				"closed": false,
				"open_24h": false
			},
			{
				"day": "friday",
				"opens_at": "11:00",
				"closes_at": "18:00",
				"closed": false,
				"open_24h": false
			},
			{
				"day": "saturday",
				"opens_at": "11:00",
				"closes_at": "18:00",
				"closed": false,
				"open_24h": false
			},
			{
				"day": "sunday",
				"opens_at": "11:00",
				"closes_at": "18:00",
				"closed": false,
				"open_24h": true
			}
		]
	}
]'
```
For the sake of scrolling madness, this request only adds one location. As you can see, we've provided no values for `latitude` and `longitude`. Therefore, Mapzy will geocode the coordinates based on the address. We could have also left out the `latitude` and `longitude` keys completely.

## Response (sucess)
If the request is succesful, Mapzy will return an empty reponse with the status code `204` (yes, we should improve this in the future).

## Response (errors)
If something went wrong, Mapzy will return an error with some information about the error. Most likely, the HTTP status code will be `401` or `422`. It could also be `500` if you manage to hit a bug in our code.

The JSON body will look similar to this:
```json
{
	"error": {
		"type": "ArgumentError",
		"message": "Opening times day can't be blank"
  }
}
```

### `401` (Unauthorized)
If you get this status code, double check that you have the right API key and formatted the Authorization header value correctly (see above).


### `422` (Unprocessable entity)
This is the most likely status code you will encounter, and it probably means that you forgot to provide a required value or malformatted something. In the response body, you should find more information about the nature of the error.


## Other errors
If you receive a `204` response but your locations are not updated as expected, reach out to us at bonjour@mapzy.io. The data is processed in a background job after it passes initial validation, and there's a small possibility that something can go wrong there.

