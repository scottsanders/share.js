share.js
========
A simple, lightweight jQuery plugin that provides a considered approach to social sharing, allowing for complete control of styling (no iframes) and supporting share counts for both Facebook and Twitter.

*Currently in pre-release, feedback and issues welcome.*

## Installation

Include script *after* the jQuery library:

```html
<script src="/path/to/share.js"></script>
```

## Usage
Any link on a site can become sharable through the use of the following data tags:
```html
<a href="#share" 
   data-share="twitter" 
   data-url="https://github.com/scottsanders/share.js" 
   data-message="Finally, a simple solution to social sharing" 
   data-via="scottsanders">share.js</a>
```
Then in your jQuery call the plugin as follows:
```javascript
jQuery('a').share();
```
The data attributes currently supported by the plugin are:

`data-share`
:	The social network you want to share on, currently supports `facebook` and `twitter`

`data-url`
:	The url to be shared, used to retrieve share count, defaults to page url

`data-message`
:	The default text of the shared message, only supported by `twitter`

`data-via`
:	The twitter username to include with the shared message, only supported by `twitter`

`data-popup`
:	The sharing screen shows in a popup window rather than redirecting, defaults to `true`

### Options
This plugin supports the following options:
```javascript
jQuery('a').share({
  threshold: 0,
  abbreviate: true,
  counts: true
});
```

`threshold`
:	Hides the sharing count until a certain number of shares has been reached

`abbreviate`
:	Abbreviates large numbers when sharing is high, so *15101* shares become *15k*.


## Authors

[Scott Sanders](https://github.com/scottsanders)
