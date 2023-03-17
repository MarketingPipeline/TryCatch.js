# TryCatch.js



<div align="center">
 <a href="https://github.com/MarketingPipeline/TryCatch.js"> 
<img height=350 alt="Repo Banner for TryCatch.js" src="https://capsule-render.vercel.app/api?type=waving&color=539bf5&height=300&section=header&text=TryCatch.js&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Handle%20your%20errors%20with%20ease!%20&descAlignY=60&descAlign=50"></img></a>
   <br>
  <small> <b><i>Show your support!</i> </b></small>
  <br>
   <a href="https://github.com/MarketingPipeline/TryCatch.js">
    <img title="Star on GitHub" src="https://img.shields.io/github/stars/MarketingPipeline/TryCatch.js.svg?style=social&label=Star">
  </a>
  <a href="https://github.com/MarketingPipeline/TryCatch.js/fork">
    <img title="Fork on GitHub" src="https://img.shields.io/github/forks/MarketingPipeline/TryCatch.js.svg?style=social&label=Fork">
  </a>
   </p>  
 
TryCatch.js is a JavaScript library to help you handle your errors in a more clean & structured way.    
</div>



## Example and usage

How to use **_TryCatch.js_**:

```js
import {tryCatch} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/TryCatch.js@v1.0.0/dist/trycatch.min.js';
// Example 1: try-catch-finally
tryCatch(
  function() {
    // some code that may throw an exception
  },
  function(e) {
    // handle the exception
  },
  function() {
    // code that is always executed, whether or not an exception is thrown
  }
);

// Example 2: try-catch-else-finally
tryCatch(
  function() {
    // some code that may throw an exception
  },
  function(e) {
    // handle the exception
  },
  function() {
    // code that is always executed, whether or not an exception is thrown
  },
  function() {
    // code that is executed if the try block returns undefined
  }
);

// Example 3: try-catch
tryCatch(
  function() {
    // some code that may throw an exception
  },
  function(e) {
    // handle the exception
  }
);

// Example 4: try-finally
tryCatch(
  function() {
    // some code that may throw an exception
  },
  null,
  function() {
    // code that is always executed, whether or not an exception is thrown
  }
);
```

## Contributing [![GitHub contributors](https://badgen.net/github/contributors/MarketingPipeline/TryCatch.js)](https://github.com/MarketingPipeline/TryCatch.js/graphs/contributors/)

Want to improve this? Create a pull request with detailed changes / improvements! If approved you will be added to the list of contributors of this awesome project!

See also the list of
[contributors](https://github.com/MarketingPipeline/TryCatch.js/graphs/contributors) who
participate in this project.

## License   [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/MarketingPipeline/TryCatch.js/blob/main/LICENSE)

This project is licensed under the MIT License - see the
[LICENSE](https://github.com/MarketingPipeline/TryCatch.js/blob/main/LICENSE) file for
details.
