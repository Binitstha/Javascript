// To Print the number in left reverse pyramid in console

let n = 5
let string =""
for(let i=1;i<=n;i++)
{
    for(let j=1;j<=i;j++)
    {
        string +=n
    }
    string += "\n"
}
console.log(string)