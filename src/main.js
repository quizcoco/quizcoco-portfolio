import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

const app = createApp(App)
app.use(router)

router.isReady().then(() => {
  app.mount("#app")
})
// 라우터가 초기 경로를 완전히 인식한 후에 앱을 DOM에 마운트하도록 변경. 
// 이전에는 라우터 준비 전에 마운트돼서 첫 로드 시 비어있었음.