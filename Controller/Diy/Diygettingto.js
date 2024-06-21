import LynwoodSchema from '../../config/Diy/Lynwood.js'
import OxfordSchema from '../../config/Diy/Oxford.js'
import PestcontSchema from '../../config/Diy/Pestcont.js'
import PlasplugSchema from '../../config/Diy/Plasplug.js'
import PrimacarSchema from '../../config/Diy/Primacar.js'
import RolsonSchema from '../../config/Diy/Rolson.js'
import RonsealSchema from '../../config/Diy/Ronseal.js'
import RustinsSchema from '../../config/Diy/Rustins.js'
import SecuritSchema from '../../config/Diy/Securit.js'
import SecrupSchema from '../../config/Diy/Secrup.js'
import ShortageSchema from '../../config/Diy/Shortage.js'
import SoudalSchema from '../../config/Diy/Soudal.js'
import StarpackSchema from '../../config/Diy/Starpack.js'
import SterlingSchema from '../../config/Diy/Sterling.js'
import TableauSchema from '../../config/Diy/Tableau.js'
export const LynwoodDAta = async(req,res)=>{
    let result = await LynwoodSchema.find()
  return  res.send(result)
  }
  export const LynwoodFree = async(req,res)=>{
  let result = await LynwoodSchema.find()
  return  res.send(result)
  }
  export const LynwoodDelitem = async (req,res)=>{
  let data = await LynwoodSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Lynwoodsingl =async (req, res) => {
    let result = await LynwoodSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const OxfordDAta = async(req,res)=>{
    let result = await OxfordSchema.find()
  return  res.send(result)
  }
  export const OxfordFree = async(req,res)=>{
  let result = await OxfordSchema.find()
  return  res.send(result)
  }
  export const OxfordDelitem = async (req,res)=>{
  let data = await OxfordSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Oxfordsingl =async (req, res) => {
    let result = await OxfordSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const PestcoDAta = async(req,res)=>{
    let result = await PestcontSchema.find()
  return  res.send(result)
  }
  export const PestcoFree = async(req,res)=>{
  let result = await PestcontSchema.find()
  return  res.send(result)
  }
  export const PestcoDelitem = async (req,res)=>{
  let data = await PestcontSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Pestcontsingl =async (req, res) => {
    let result = await PestcontSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const PlasplugDAta = async(req,res)=>{
  let result = await PlasplugSchema.find()
return  res.send(result)
}
export const PlasplugFree = async(req,res)=>{
let result = await PlasplugSchema.find()
return  res.send(result)
}
export const PlasplugDelitem = async (req,res)=>{
let data = await PlasplugSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Plasplugsingl =async (req, res) => {
  let result = await PlasplugSchema.findOne({_id: req.params.id})
  return res.send(result)
}
 
export const PrimacarDAta = async(req,res)=>{
  let result = await PrimacarSchema.find()
return  res.send(result)
}
export const PrimacarFree = async(req,res)=>{
let result = await PrimacarSchema.find()
return  res.send(result)
}
export const PrimacarDelitem = async (req,res)=>{
let data = await PrimacarSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Primacarsingl =async (req, res) => {
  let result = await PrimacarSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const RolsonDAta = async(req,res)=>{
  let result = await RolsonSchema.find()
return  res.send(result)
}
export const RolsonFree = async(req,res)=>{
let result = await RolsonSchema.find()
return  res.send(result)
}
export const RolsonDelitem = async (req,res)=>{
let data = await RolsonSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Rolsonsingl =async (req, res) => {
  let result = await RolsonSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const RonsealDAta = async(req,res)=>{
  let result = await RonsealSchema.find()
return  res.send(result)
}
export const RonsealFree = async(req,res)=>{
let result = await RonsealSchema.find()
return  res.send(result)
}
export const RonsealDelitem = async (req,res)=>{
let data = await RonsealSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Ronsealsingl =async (req, res) => {
  let result = await RonsealSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const RustinsDAta = async(req,res)=>{
  let result = await RustinsSchema.find()
return  res.send(result)
}
export const RustinsFree = async(req,res)=>{
let result = await RustinsSchema.find()
return  res.send(result)
}
export const RustinsDelitem = async (req,res)=>{
let data = await RustinsSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Rustinssingl =async (req, res) => {
  let result = await RustinsSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const SecuritDAta = async(req,res)=>{
  let result = await SecuritSchema.find()
return  res.send(result)
}
export const SecuritFree = async(req,res)=>{
let result = await SecuritSchema.find()
return  res.send(result)
}
export const SecuritDelitem = async (req,res)=>{
let data = await SecuritSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Securitsingl =async (req, res) => {
  let result = await SecuritSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const SecrupDAta = async(req,res)=>{
  let result = await SecrupSchema.find()
return  res.send(result)
}
export const SecrupFree = async(req,res)=>{
let result = await SecrupSchema.find()
return  res.send(result)
}
export const SecrupDelitem = async (req,res)=>{
let data = await SecrupSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Secrupsingl =async (req, res) => {
  let result = await SecrupSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ShortageDAta = async(req,res)=>{
  let result = await ShortageSchema.find()
return  res.send(result)
}
export const ShortageFree = async(req,res)=>{
let result = await ShortageSchema.find()
return  res.send(result)
}
export const ShortageDelitem = async (req,res)=>{
let data = await ShortageSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Shortagesingl =async (req, res) => {
  let result = await ShortageSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const SoudalDAta = async(req,res)=>{
  let result = await SoudalSchema.find()
return  res.send(result)
}
export const SoudalFree = async(req,res)=>{
let result = await SoudalSchema.find()
return  res.send(result)
}
export const SoudalDelitem = async (req,res)=>{
let data = await SoudalSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Soudalsingl =async (req, res) => {
  let result = await SoudalSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const StarpackDAta = async(req,res)=>{
  let result = await StarpackSchema.find()
return  res.send(result)
}
export const StarpackFree = async(req,res)=>{
let result = await StarpackSchema.find()
return  res.send(result)
}
export const StarpackDelitem = async (req,res)=>{
let data = await StarpackSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Starpacksingl =async (req, res) => {
  let result = await StarpackSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const SterlingDAta = async(req,res)=>{
  let result = await SterlingSchema.find()
return  res.send(result)
}
export const SterlingFree = async(req,res)=>{
let result = await SterlingSchema.find()
return  res.send(result)
}
export const SterlingDelitem = async (req,res)=>{
let data = await SterlingSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Sterlingsingl =async (req, res) => {
  let result = await SterlingSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const tableauDAta = async(req,res)=>{
  let result = await TableauSchema.find()
return  res.send(result)
}
export const tableauFree = async(req,res)=>{
let result = await TableauSchema.find()
return  res.send(result)
}
export const tableauDelitem = async (req,res)=>{
let data = await TableauSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const tableausingl =async (req, res) => {
  let result = await TableauSchema.findOne({_id: req.params.id})
  return res.send(result)
}