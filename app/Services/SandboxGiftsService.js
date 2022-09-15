import { appState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"
import { SandboxServer } from "./AxiosService.js"

class SandboxGiftsService {
  async openGift(id) {
    const gift = appState.gifts.find(g => g.id == id)
    // @ts-ignore
    gift.opened = !gift.opened
    // @ts-ignore
    const res = await SandboxServer.put(`${id}`, { opened: true })
    // @ts-ignore
    gift.url = res.data.url
    appState.emit('gifts')
  }
  async addGifts(formData) {
    const res = await SandboxServer.post('', formData)
    console.log(res.data);
    let gift = new Gift(res.data)
    appState.gifts = [gift, ...appState.gifts]
  }
  async getGifts() {
    const res = await SandboxServer.get()
    appState.gifts = res.data.map(g => new Gift(g))
    console.log(appState.gifts);
  }
}

export const sandboxGiftsService = new SandboxGiftsService()