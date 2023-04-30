expression = whitespace? "(" whitespace? atoms:atom* ")" whitespace? {return {type:"expression",value:atoms}}

atom = content:(string / number / identifier / expression) whitespace? {return {type:"atom",value:content}}

string = '"' chars:[^"]* '"' {return {type:"string",value:chars.join("")}}

number = hex / decimal

decimal = digits:[0-9]+ {return {type:"number",base: 10, value:parseInt(digits.join(""),10)};}

hex = "0x" digits:[0-9A-Fa-f]+ {return {type:"number",base: 16, value:parseInt(digits.join(""),16)};}

identifier = content:[^ \t\n\r()]+ {return {type:"identifier",value:content.join("")}}

whitespace
  = [ \t\n\r]*
