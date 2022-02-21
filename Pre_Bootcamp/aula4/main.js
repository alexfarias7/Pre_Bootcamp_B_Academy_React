import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
/* 
setInterval(()=>{
console.log(1)
},3000)
console.log(2) */
/* 
function promise(){ 
  return new Promise((resolve, reject)=>{
  console.log('promisse criada;;;')
  setTimeout(()=>{
    //resolve({a:1})
    reject(new Error('ERRO na PROMISE 1'))
  },2000)
  })
}
function promise2 (){ 
  return new Promise((resolve)=>{
  console.log('promisse criada...')
  setTimeout(()=>{
    resolve({b:2})
  },1000)
  })
}
function promise3(){ 
  return new Promise((resolve)=>{
  console.log('promisse criada...')
  setTimeout(()=>{
    resolve({c:3})
  },1000)
  })
}
console.log(2) */
/* 
promise().then()
.then((result)=>{
  console.log('result', result)
})
.catch((error)=> console.log('error', error))
.then(result => console.log('result depois do cathc', result)) */
/* 
promise()
  .then(()=> promise())
  .then((resPromise2)=> promise3())
  .then((resutPromise3)=> console.log('resultado da promise3', resutPromise3))
 */

  /* promise().then(()=>{
  console.log('promise1 resolveu!')

  promise2().then((result)=>{
    console.log('promise2 :', result)

    promise3().then((result)=>{
      console.log('pormise3 resolvida', result)
    })
  })
}) */

/* promise.then(valor=>{
 return valor.a +1
})
.then( result => console.log('novo valor: ' + result)) */

/* function asyncFunction(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('ola mundo')
    },1000)
  })
}

const asyncFunction2 = async ()=>{
  const result = await asyncFunction()
  console.log('result2', result)
}

asyncFunction2()
console.log('depois da promisse') */
//asyncFunction().then( result => console.log('result: ', result))






/* fetch('http://localhost:3333/')
  .then(result=>{
    result.json()
  })
  .then(result=> console.log(result)) */
const button = document.querySelector('[data-js="button"]')
button.addEventListener('click', (e)=>{
  cadastrarCarro()
})

async function cadastrarCarro(){
  const url = "http://localhost:3333/car"
  try{

    const result = await fetch(url,{
       method:"post",
       headers:{
         'content-type':'application/json'
       },
       body:JSON.stringify({
         image:'image2.jpg',
         brandModel:' brand model2',
         year:2021,
         palte:'11111111111',
         color:'red'
   
       })
     })
     if (!result.ok){
       console.log('deu erro')
       return
     }
     const data = await fetch(url)
     if (!data.ok){
       console.log('erro do get')
       return
     }
     const datafinal =await data.json()
     console.log(datafinal)
  }catch(e){
    console.log('deu erro')
  }
/* 

  .then(()=>{
    fetch(url)
    .then(result=>result.ok && result.json())
    .then(resuçt=> console.log(resuçt))
  })
  .catch(err=> console.log(err)) */
}

//* usar try|cath se for udar asybn wait
























