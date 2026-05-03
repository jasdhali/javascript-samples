async function f() {
    let promise = new Promise( (resolve, reject) => {
        setTimeout( () => resolve("done!") ,1000 )
    });
    let result = await promise;
    //alert( result );
    console.log('returned value = ' + result);
}

f();