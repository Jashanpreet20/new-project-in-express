const db=require('../util/database');

const Cart=require('./cart');

module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id=id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
     return db.execute('INSERT INTO product(title, price, description, imageUrl) VALUES(?, ?, ?, ?)',
      [this.title,this.price, this.description, this.imageUrl]);
  }

  static deleteById(id){
      return db.execute('DELETE FROM product where id= ?',[id]);
   
  }

  static fetchAll() {
    // this statement simply means when i call this function it will simply return the value whereever i can call
     return db.execute('SELECT * FROM product');
  }

  static findById(id){
    return db.execute('SELECT * FROM product where id= ?',[id]);
  }
 };
