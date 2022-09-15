import { appState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"
import { sandboxGiftsService } from "../Services/SandboxGiftsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawGifts() {
  let template = ''
  appState.gifts.forEach(g => template += g.giftTemplate)
  setHTML('list', template)
}

export class SandboxGiftsController {
  constructor() {
    this.getGifts()
    appState.on('gifts', _drawGifts)
  }
  showGifts() {
    this.getGifts()

  }
  async getGifts() {
    try {
      await sandboxGiftsService.getGifts()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }

  async createGift() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      console.log(formData);
      await sandboxGiftsService.addGifts(formData)
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  async openGift(id) {
    try {
      await sandboxGiftsService.openGift(id)
    } catch (error) {
      console.error('Open gift', error)
      Pop.error(error)
    }
  }

}