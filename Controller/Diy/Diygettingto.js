import LynwoodSchema from '../../config/Diy/Lynwood.js'





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