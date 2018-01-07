function Book(name,author,price){
    this.name 

 = name;
    this.author = author;
    this.price = price;
}
Book.prototype.show = function(){
    console.log(this.name 

);
}
function BookManagerSystem(){
    this.bookArr = [];//存储Book类对象
}
BookManagerSystem.prototype.addBook = function (name,author,price){
    for(var i = 0;i<this.bookArr.length;i++){
        if(this.bookArr[i].name == name && this.bookArr[i].author == author){
           console.log("图书已经存在");
            return false;
            
           }
    }
    //创建一个bool类的对象
    var bk = new Book(name,author,price);
    this.bookArr.push(bk);
    return true;
    
    
}
