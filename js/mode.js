function Book(name,author,price){
    this.name = name;
    this.author = author;
    this.price = price;
}
Book.prototype.show = function(){
   alert("书名"+this.name+"作者名："+this.author+"价格:"+this.price);
}

function BookManagerSystem(){
    this.bookArr = [];//存放book类对象
}
BookManagerSystem.prototype.addBook = function(name,author,price){
    //查找是否已存在
    for(var i = 0;i<this.bookArr.length;i++){
        if(this.bookArr[i].name == name && this.bookArr[i].author == author){
            alert("该图书已经存在");
            return false;
        }
    }
    //创建一个book类的实例
    var bk = new Book(name,author,price);
    this.bookArr.push(bk);
    return true;
}
//根据作者名查找图书
BookManagerSystem.prototype.searchBookWithAuthor = function(author){
    var flag = false;
    for(var i in this.bookArr){
        if(this.bookArr[i].author == author){
            this.bookArr[i].show();
            flag =true;
        }
    }
    if(!flag){
        alert("没有找到该作者的书");
    }
}
//根据书名查找图书
BookManagerSystem.prototype.searchBookWithName = function(name){
    var flag = false;
    for(var i in this.bookArr){
        if(this.bookArr[i].name == name){
            this.bookArr[i].show();
            flag =true;
        }
    }
    if(!flag){
        alert("没有找到该书");
    }
}
//书名删除
BookManagerSystem.prototype.deleteBookWithName = function(name){
    var flag = false;
    for(var i in this.bookArr){
        if(this.bookArr[i].name == name){
            this.bookArr[i].splice(i,1);
            alert("删除成功")
            flag =true;
            i--;
        }
    }
    if(!flag){
        alert("没找到,无法删除");
    }
}
//作者名删除
BookManagerSystem.prototype.deleteBookWithAuthor = function(author){
    var flag = false;
    for(var i in this.bookArr){
        if(this.bookArr[i].author == author){
            this.bookArr[i].splice(i,1);
            alert("删除成功")
            flag =true;
        }
    }
    if(!flag){
        alert("没找到,无法删除");
    }
}

BookManagerSystem.prototype.showAllBook = function(){
    for(var i in this.bookArr){
        this.bookArr[i].show();
    }
}
