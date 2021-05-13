var text = 'Hello';
let result='';
for( let i=text.length - 1;i>=0;i--)
{
    result+= text.charAt(i);
}
console.log(result.toUpperCase());
