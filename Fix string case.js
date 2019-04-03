console.log(solve('DADdy'));

function solve(s){
   let up = 0;
   let low = 0;
   for (let i = 0; i < s.length; i++){
       if (s[i] === s[i].toUpperCase()) {
           up += 1;
       } else low += 1;
   }
   if (low >= up) return s.toLowerCase();
   return s.toUpperCase();
}
