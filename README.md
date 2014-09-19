#Mock LED Device

This is a mock LED device for use in the Zetta platform.

##Installation

`npm install zetta-mock-led`

##Usage

To use simply call the `use()` function in your code to use this device.

```javascript
var zetta = require('zetta');
var LED = require('zetta-mock-led');

zetta()
  .use(LED)
  .listen(1337);
```
