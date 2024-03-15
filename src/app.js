const path=require("path")
var hbs=require("hbs")
const express=require("express")
const app=express()
const port=process.env.PORT||3000
// --------------------------------------
app.set('view engine' , 'hbs');
const viewsDirectory = path.join (__dirname , '../temp/views')
app.set('views', viewsDirectory);
// --------------------------------

const patialspath=path.join(__dirname , "../temp/partials")
hbs.registerPartials(patialspath)

// ---------------------------------
// const x=path.join(__dirname , '../public')
// app.use(express.static(x))
// -----------static--------------------
app.get('/' , (req,res)=>{
    res.render('data' , {
        title:"this data page",
        buttun:"enter here"
    })
})
app.get('/data1' , (req,res)=>{
    res.render('data1' , {
        title:"this data1 page",
        buttun:"enter here"
    })
})
app.get('/data2' , (req,res)=>{
    res.render('data2' , {
        title:"this data2 page",
        buttun:"enter here"
    })
})
app.get('/data3' , (req,res)=>{
    res.render('data3' , {
        title:"this data3 page",
        buttun:"enter here"
    })
})
app.get('/data4' , (req,res)=>{
    res.render('data4' , {
        title:"this data4 page",
        buttun:"enter here"
    })
})

app.listen(port , ()=>{
    console.log(`this website listening by port : ${port}`)
})