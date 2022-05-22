
function printstr( st, c)
{
    let i=0;let j=0; let str=[];  
    console.log(st);
        while(i<st.length)  
    {
        if(st[i]==c)
        {
         
            // window.alert(str);  
         st[i]=st[j];
             j++;     
        }     
        i++;                            
    }
    return str;
    
}

console.log(printstr('pankaj','a'));



// int main()
// {
//     char *c[10];
//     char strn[]="myname";
    
//    c[10]= printstr(strn,'a');
//    cout<<c;
//     cout<<"i";
//     return(0);
// }