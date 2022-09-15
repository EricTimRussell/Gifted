export class Gift {

  constructor(data) {
    this.id = data.id
    this.tag = data.tag
    this.url = data.url || 'https://thiscatdoesnotexist.com'
    this.opened = data.opened
  }



  get giftTemplate() {
    return /*html*/  `
  <div class="card">
      <img src="${this.url}" class="img-fluid display" onclick="app.sandboxGiftsController.openGift('${this.id}')">
         <div class="card-body">
            <p>${this.tag}</p>
        </div>
    </div>
  `
  }


}