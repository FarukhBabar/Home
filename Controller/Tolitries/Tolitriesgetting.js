import GiftsetsSchema from '../../config/Tolitries/Gift.js'
import HairSchema from '../../config/Tolitries/Hair.js'
import HandSchema from '../../config/Tolitries/Hand.js'


export const GiftDAta = async(req,res)=>{
    let result = await GiftsetsSchema.find()
  return  res.send(result)
  }
  export const GiftFree = async(req,res)=>{
  let result = await GiftsetsSchema.find()
  return  res.send(result)
  }
  export const GiftDelitem = async (req,res)=>{
  let data = await GiftsetsSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Giftsingl =async (req, res) => {
    let result = await GiftsetsSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const HairDAta = async(req,res)=>{
    let result = await HairSchema.find()
  return  res.send(result)
  }
  export const HairFree = async(req,res)=>{
  let result = await HairSchema.find()
  return  res.send(result)
  }
  export const HairDelitem = async (req,res)=>{
  let data = await HairSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Hairsingl =async (req, res) => {
    let result = await HairSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const HandDAta = async(req,res)=>{
    let result = await HandSchema.find()
  return  res.send(result)
  }
  export const HandFree = async(req,res)=>{
  let result = await HandSchema.find()
  return  res.send(result)
  }
  export const HandDelitem = async (req,res)=>{
  let data = await HandSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Handsingl =async (req, res) => {
    let result = await HandSchema.findOne({_id: req.params.id})
    return res.send(result)
  }