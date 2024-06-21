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
export const Lynwoodproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  LynwoodSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Lynwoodupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  LynwoodSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Lynwoodsiglget=  async (req,res)=>{
    let result = await  LynwoodSchema.findOne({_id:req.params.id})
    res.send(result)
  } 
  
export const Oxfordproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  OxfordSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Oxfordupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  OxfordSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Oxfordsiglget=  async (req,res)=>{
    let result = await  OxfordSchema.findOne({_id:req.params.id})
    res.send(result)
  } 
   
export const Pestcoproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  PestcontSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Pestcoupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  PestcontSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Pestcosiglget=  async (req,res)=>{
    let result = await  PestcontSchema.findOne({_id:req.params.id})
    res.send(result)
  } 
    
export const Plasplugproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  PlasplugSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Plasplugupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  PlasplugSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Plasplugsiglget=  async (req,res)=>{
    let result = await  PlasplugSchema.findOne({_id:req.params.id})
    res.send(result)
  } 
    
export const Primacarproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  PrimacarSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Primacarupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  PrimacarSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Primacarsiglget=  async (req,res)=>{
    let result = await  PrimacarSchema.findOne({_id:req.params.id})
    res.send(result)
  } 

  export const Rolsonproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  RolsonSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Rolsonupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  RolsonSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Rolsonsiglget=  async (req,res)=>{
    let result = await  RolsonSchema.findOne({_id:req.params.id})
    res.send(result)
  }
  
  export const Ronsealproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  RonsealSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Ronsealupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  RonsealSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Ronsealsiglget=  async (req,res)=>{
    let result = await  RonsealSchema.findOne({_id:req.params.id})
    res.send(result)
  } 

  export const Rustinsproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  RustinsSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Rustinsupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  RustinsSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Rustinssiglget=  async (req,res)=>{
    let result = await  RustinsSchema.findOne({_id:req.params.id})
    res.send(result)
  }

  export const Securitproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  SecuritSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Securitupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  SecuritSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Securitsiglget=  async (req,res)=>{
    let result = await  SecuritSchema.findOne({_id:req.params.id})
    res.send(result)
  }
  
  export const Secrupproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  SecrupSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Secrupupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  SecrupSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Secrupsiglget=  async (req,res)=>{
    let result = await  SecrupSchema.findOne({_id:req.params.id})
    res.send(result)
  }
   
  export const Shortageproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  ShortageSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Shortageupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  ShortageSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Shortagesiglget=  async (req,res)=>{
    let result = await  ShortageSchema.findOne({_id:req.params.id})
    res.send(result)
  }
   
  export const Soudalproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  SoudalSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Soudalupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  SoudalSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Soudalsiglget=  async (req,res)=>{
    let result = await  SoudalSchema.findOne({_id:req.params.id})
    res.send(result)
  }
    
  export const Starpackproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  StarpackSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Starpackupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  StarpackSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Starpacksiglget=  async (req,res)=>{
    let result = await  StarpackSchema.findOne({_id:req.params.id})
    res.send(result)
  }
  
  export const Sterlingproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  SterlingSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Sterlingupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  SterlingSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Sterlingsiglget=  async (req,res)=>{
    let result = await  SterlingSchema.findOne({_id:req.params.id})
    res.send(result)
  }
  export const tableauproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  TableauSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const tableauupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  TableauSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const tableausiglget=  async (req,res)=>{
    let result = await  TableauSchema.findOne({_id:req.params.id})
    res.send(result)
  }