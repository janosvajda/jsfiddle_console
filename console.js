var consoleLineTemplate = "<p style=\"margin: 1em 0 0;margin: 2px;\" class=\"console-log-template\"></p>";
    
console = {
        log: function (value) {
            var otype=({}).toString.call(value).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            switch(otype){
                case 'array':
                    for (var k in value){
                        if (typeof value[k] !== 'function') {
                            var line= "key: " + k + " value: " + value[k];
                            $("#console-log").append( $(consoleLineTemplate).html(line));
                        }
                    }
                    break;
                case 'object':
                    for (var k in value){
                        if (typeof value[k] !== 'function') {
                            var line= "key: " + k + " value: " + value[k];
                            $("#console-log").append( $(consoleLineTemplate).html(line));
                        }
                    }
                    break;
                default: $("#console-log").append($(consoleLineTemplate).html(value));
            }            
            
        }
    };