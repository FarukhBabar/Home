import FathersdaySchema from '../../config/Home&decor/Fathersday.js'
import FrammirrorSchema from '../../config/Home&decor/Frammirror.js'
import GiftwarehSchema from '../../config/Home&decor/Giftwareh.js'
import IncenseSchema from '../../config/Home&decor/Incense.js'
import MemorialSchema from '../../config/Home&decor/Memorial.js'



export const FathersdayDAta = async(req,res)=>{
    let result = await FathersdaySchema.find()
  return  res.send(result)
  }
  export const FathersdayFree = async(req,res)=>{
  let result = await FathersdaySchema.find()
  return  res.send(result)
  }
  export const FathersdayDelitem = async (req,res)=>{
  let data = await FathersdaySchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Fathersdaysingl =async (req, res) => {
    let result = await FathersdaySchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const FrammirrorDAta = async(req,res)=>{
  let result = await FrammirrorSchema.find()
return  res.send(result)
}
export const FrammirrorFree = async(req,res)=>{
let result = await FrammirrorSchema.find()
return  res.send(result)
}
export const FrammirrorDelitem = async (req,res)=>{
let data = await FrammirrorSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Frammirrorsingl =async (req, res) => {
  let result = await FrammirrorSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const GiftwarehDAta = async(req,res)=>{
  let result = await GiftwarehSchema.find()
return  res.send(result)
}
export const GiftwarehFree = async(req,res)=>{
let result = await GiftwarehSchema.find()
return  res.send(result)
}
export const GiftwarehDelitem = async (req,res)=>{
let data = await GiftwarehSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Giftwarehsingl =async (req, res) => {
  let result = await GiftwarehSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const IncenseDAta = async(req,res)=>{
  let result = await IncenseSchema.find()
return  res.send(result)
}
export const IncenseFree = async(req,res)=>{
let result = await IncenseSchema.find()
return  res.send(result)
}
export const IncenseDelitem = async (req,res)=>{
let data = await IncenseSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Incensesingl =async (req, res) => {
  let result = await IncenseSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const MemorialDAta = async(req,res)=>{
  let result = await MemorialSchema.find()
return  res.send(result)
}
export const MemorialFree = async(req,res)=>{
let result = await MemorialSchema.find()
return  res.send(result)
}
export const MemorialDelitem = async (req,res)=>{
let data = await MemorialSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Memorialsingl =async (req, res) => {
  let result = await MemorialSchema.findOne({_id: req.params.id})
  return res.send(result)
}