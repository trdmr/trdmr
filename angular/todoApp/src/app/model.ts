export class Model{
    user;
    items;

    constructor(){
        this.user=  "Turgay";
        this.items=[
            new TodoItem("Spor",true),
            new TodoItem("Kahvaltı",false),
            new TodoItem("Sinema",false),
            new TodoItem("Ders",false),
            new TodoItem("Temizlik",false),
            //{description:  "Spor", action:"No"},
            //{description:  "Spor", action:"No"}
          ];

    }
}

export class TodoItem{
    description;
    action;

    constructor (description, action){
        this.description=description;
        this.action=action;
    }
}
