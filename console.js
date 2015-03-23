var consoleLineTemplate = "<p style=\"margin: 1em 0 0;margin: 2px;\" class=\"console-log-template\"></p>";
    
console = {
        log: function (value) {
            var consoleLine = document.getElementById('console-log');
            var current_html=consoleLine.innerHTML;
            var otype=({}).toString.call(value).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            switch(otype){
                case 'array':
                    for (var k in value){
                        if (typeof value[k] !== 'function') {
                            var line= "key: " + k + " value: " + value[k];
                            consoleLine.innerHTML+="<p style=\"margin: 1em 0 0;margin: 2px;\">"+value+"</p>";
                        }
                    }
                    break;
                case 'object':
                    for (var k in value){
                        if (typeof value[k] !== 'function') {
                            var line= "key: " + k + " value: " + value[k];
                            consoleLine.innerHTML+="<p style=\"margin: 1em 0 0;margin: 2px;\">"+value+"</p>";

                        }
                    }
                    break;
                default:  consoleLine.innerHTML+="<p style=\"margin: 1em 0 0;margin: 2px;\">"+value+"</p>";
            }            
        }
    };