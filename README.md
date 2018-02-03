# IPA.js
**fantastic ale beer**
**fantastic API data manager**

- faster developing
- easier maintaining
- robuster application


```
                 _____                      _____ _____                _____ _____                              
                /\    \                    /::::::\    \              /::::::\    \                
               /::\    \                  /::::::::\    \            /::::::::\    \              
              /:::/    /                 /:::/--\:::\    \          /:::/--\:::\    \              
             /:::/    /                 /:::/   _\:::\    \        /:::/   _\:::\    \                  
            /:::/____/                 /:::/   /  |:::|    |      /:::/   /  \:::\    \              
           /::::\    \                /:::/   /   |:::| __ |     /:::/   /   /::::\    \          
          /::::::\    \              /:::/   /   /:::/    /     /:::/   /   /::::::\    \            
         /:::/\:::\    \            /:::/___/   /:::/    /      |:::|   |  /:::/\:::\    \          
         \::/  \:::\    \           \:::\   \  /:::/    /       |:::|   | /:::/  \:::\____\             
          \/___/\:::\    \ ____      \:::\   \/:::/    /        \:::\   \/:::/    \::/    /        
                 \:::\    /\    \     \:::\  /:::/    /          \:::\  /:::/    / \/____/         
                  \:::\  /::\ ___\     \:::\/:::/    /            \:::\/:::/    /              
                   \:::\/:::/    /      \::::::/    /              \::::::/    /              
                    \::::::/    /        \::::/____/                \::::/____/              
                     \::::/    /          \:::\    \                 \:::\    \              
                     /:::/    /            \:::\    \                 \:::\    \              
                    /:::/    /              \:::\    \                 \:::\    \              
                   /:::/    /                \:::\____\                 \:::\____\                  
                   \::/    /                  \::/    /                  \::/    /              
                    \/____/                    \/____/                    \/____/              

```
## GET STARTED
_IPA.js in 15 minutes!_

### what IPA does?

### installation
- install with npm
``` shell
$ npm install --save-dev ipa.js
```

- import in <script> tags by 'src'
``` html
<script type="text/javascript" src="#/ipa.min.js" ></script>
```

### how to use?
IPA.js provides an _**IPA class**_ to realize its functions. Its instances are created using _**template object**_ which describes the structure of the incoming data.

``` javascript
import IPA from 'ipa.js' // import the IPA class

const weekDataTemplate = { // create a template object
    x: [Number, 'l'],
    y: [String, 'l'],
};

const weekDataIpa = new IPA(weekDataTemplate); // create an IPA instance
```

The instance can then check the validity of the incoming data:
``` javascript
weekDataIpa.check({
    x: [0.1, 0.15, 0.07],
    y: ['Mon', 'Tue', 'Wed'],
}); // true

weekDataIpa.check({
    x: [0.1, 0.15, 0.07],
    y: ['Mon'],
}); // false (length unmatched)
```

It guarantees to return a valid version of the incoming data:
``` javascript
// this configs the length strategy to be shortest (unnecessary)
weekDataIpa.setConfig({ strategy: 'shortest' });

const incomingData = {
    x: [0.1, 0.15, 0.07],
    y: ['Mon', 'Tue'],
};

weekDataIpa.guarantee(); // {"x":[0.1,0.15],"y":["Mon","Tue"]}
```

Also, it mocks data while you're doing specified developing:
``` javascript
// config the mocking dictionary (unnecessary)
weekDataIpa.setConfig({ dict: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] });

weekDataIpa.mock() // {"x":[2,5,3,5,15,17],"y":["Thu","Tue","Tue","Thu","Fri","Wed"]}

// fix the length of the arrays to 2 
weekDataIpa.mock({ l: 2 }); // {"x":[8,17],"y":["Fri","Mon"]}
```

### template object
The _**template object**_ describes the structure of the data. The template above described a data structure that:
1.  should be a plain object who has properties named _**x**_ and _**y**_.
1.  Both _**x**_ and _**y**_ are arrays.
1.  _**x**_ contains numbers while _**y**_ contains strings.
1.  _**x**_ and _**y**_ should have same lengths, which is quite common in data-visualization scenerios.

More examples of templates:
``` javascript
const required = null; // single required
const num = Number; // single Number
const str = String; // single String
const bool = Boolean; // single Boolean
const 
```
You'll find it's quite similar to the actual data.

The IPA template usually has a same structure with the incoming data, see *TEMPLATE OBJECT* to learn more advanced usage.

## METHODS
Ipa instances have the following simply and useful methods:

- check(data): check the incoming data, and return whether the data is isValid
- guarantee(data): check the incoming data, and return a guaranteed valid data according to the template
- mock(config): mock random valid data according to the template


## TEMPLATE OBJECTS

1. usual checking and defaulting
2. length checking for arrays
3. checking unknown name properties for dicts
4. mocking config


## APPLY IPA FOR E2E DEV
